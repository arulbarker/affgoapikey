# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Reference

### Build Command (required before Canvas deployment)
```bash
npx html-minifier-terser kode.html --collapse-whitespace --remove-comments --remove-attribute-quotes --minify-css true --minify-js "{\"compress\":{\"dead_code\":true,\"passes\":2},\"mangle\":true}" --output kode-min.html
```

### Check file sizes
```powershell
(Get-Item kode.html).Length / 1MB
(Get-Item kode-min.html).Length / 1MB
```

### Critical Rules
1. **ALWAYS edit `kode.html`** — never `kode-min.html` directly
2. **Use Unicode escape sequences for ALL emoji** — direct emoji corrupt during minification
3. **Empty `apiKey = ""`** is intentional — Canvas injects the key at runtime
4. **Minify before deployment** — Canvas sharing limit is ~2 MB

---

## Project Overview

Single-file SPA (`kode.html`, ~69,300 lines, ~3.76 MB) running in **Google Gemini AI Studio Canvas**. Contains **86 AI Tools** for photo/video generation. Everything — HTML, CSS, JavaScript — lives in one file.

- `kode.html` — Development version. **Edit this.**
- `kode-min.html` — Production version (~2.12 MB). Generated, do not edit.

---

## Architecture

### Navigation System
Multi-category tab system. Each tab has:
- A `data-tab="feature-name"` sidebar button (desktop)
- A `data-tab="feature-name"` mobile nav button (identical `data-tab` value)
- A `<div id="content-feature-name" class="main-content-panel hidden">` content panel

**File zones (approximate):**
| Zone | Lines |
|------|-------|
| CSS styles | 1–8,700 |
| HTML: Sidebar + all content panels | 8,700–28,090 |
| HTML: Mobile navigation | 68,693–69,170 |
| JavaScript: DOMContentLoaded wrapper | 28,091–69,150 |
| JavaScript: Login system | 69,170+ (separate `<script>` block) |

### JavaScript Module Pattern
Each feature is an IIFE inside `document.addEventListener('DOMContentLoaded', () => { ... })`:
```javascript
// ==================== FEATURE NAME ====================
(function() {
    const apiKey = "";
    // ... implementation
})();
```

---

## API Integration

### Working Models
| Model | Use |
|-------|-----|
| `gemini-2.5-flash-image-preview` | Image generation/editing (Fetch API) |
| `gemini-2.5-flash-preview` | Text generation, multimodal analysis |
| `gemini-2.5-flash-preview-tts` | Text-to-speech |

### Fetch API Pattern (used throughout)
```javascript
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent?key=${apiKey}`;
const payload = {
    contents: [{ parts: [{ text: prompt }, { inlineData: { mimeType, data: base64 } }] }],
    generationConfig: {
        responseModalities: ['IMAGE'],
        imageConfig: { aspectRatio: '3:4' }  // ratio goes here, NOT in prompt text
    }
};
```

### Global UI Functions (defined once, used across all IIFEs)
```javascript
window.showPreviewModal(url)              // full-screen image preview modal
window.showUniversalModal(title, html)   // generic info/support modal
window.downloadDataURINew(url, filename) // primary download helper
window.downloadImage(url, filename)      // fallback download helper
```
> **Do NOT use `window.showImagePreviewModal`** — that function does not exist. The correct name is `window.showPreviewModal`.

---

## Critical Patterns

### 1. Parallel Generation — INDEXED ASSIGNMENT (never `.push()`)
```javascript
// ✅ CORRECT
async function generateSingle(index) {
    const imageUrl = await callAPI();
    generatedImages[index - 1] = { url: imageUrl, filename };   // indexed
    card.innerHTML = `<button data-index="${index - 1}">`;       // indexed
}
const promises = Array.from({ length: count }, (_, i) => generateSingle(i + 1));
await Promise.allSettled(promises);

// ❌ WRONG — causes preview/download to show wrong image
generatedImages.push({ url: imageUrl });
card.innerHTML = `<button data-index="${generatedImages.length - 1}">`;
```
> **Why**: `Promise.allSettled` runs in parallel. Images complete out of order. `.push()` stores them in completion order, not generation order. This caused a major bug across 35+ tabs (fixed Jan 2026).

### 2. Mobile Event Handling
```javascript
// ✅ CORRECT — click only, stopPropagation only
resultsGrid.addEventListener('click', async (e) => {
    e.stopPropagation();  // YES
    // e.preventDefault() — NO (breaks mobile downloads)
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
});
// ❌ WRONG — no touchstart/touchend handlers (cause page refresh on mobile)
```

### 3. HEIC Conversion (iPhone compatibility)
```javascript
if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
    const convertedBlob = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.9 });
    processedFile = new File([convertedBlob], file.name.replace(/\.heic$/i, '.jpg'), { type: 'image/jpeg' });
}
```

### 4. Upload Box Click (div, not label)
When the upload area is a `div` (not a `<label for>`), add an explicit click handler:
```javascript
uploadBox.addEventListener('click', () => uploadInput.click());
```
Do NOT add this if the box already has a `<label for="input-id">` wrapper — causes double-trigger.

### 5. Unicode Escape for Emoji
```javascript
// ✅ Safe for minification
const emoji1 = '\u0031\uFE0F\u20E3'; // 1️⃣
const prompt = `${emoji1} Section`;

// ❌ Corrupts during minification
const prompt = `1️⃣ Section`;
```

### 6. Tab Initialization (mobile + desktop)
```javascript
const tabDesktop = document.querySelector('.main-tab-btn[data-tab="feature"]');
const tabMobile  = document.querySelector('.mobile-tab-btn[data-tab="feature"]');
if (tabDesktop) tabDesktop.addEventListener('click', initFeature);
if (tabMobile)  tabMobile.addEventListener('click', initFeature);
```
Without the mobile listener, features won't initialize on mobile devices.

### 7. Download Helper
```javascript
if (window.downloadDataURINew) await window.downloadDataURINew(url, filename);
else if (window.downloadImage) await window.downloadImage(url, filename);
```

### 8. Mobile-Visible Result Overlays
Action buttons (Preview/Download) on image cards must be visible on mobile. Use responsive opacity — always visible on mobile, hover-only on desktop:
```html
<!-- ✅ CORRECT -->
<div class="absolute inset-0 ... opacity-100 sm:opacity-0 sm:group-hover:opacity-100 ...">

<!-- ❌ WRONG — buttons invisible on mobile (no hover state) -->
<div class="absolute inset-0 ... opacity-0 group-hover:opacity-100 ...">
```

### 9. Custom Theme Input Pattern
When adding a custom text theme alongside preset buttons:
```javascript
// Clear custom input when preset button is clicked
setupOptionButtons(themeContainer, (value) => {
    selectedTheme = value;
    if (customThemeInput) customThemeInput.value = '';
});

// Deselect all preset buttons when user types custom theme
customThemeInput.addEventListener('input', () => {
    if (customThemeInput.value.trim() !== '') {
        themeContainer.querySelectorAll('.option-btn-feature').forEach(btn => btn.classList.remove('selected'));
        selectedTheme = 'custom';
    }
});

// In prompt builder:
const themeDesc = (selectedTheme === 'custom' && customThemeInput.value.trim())
    ? customThemeInput.value.trim()
    : (themeDescriptions[selectedTheme] || 'default theme');
```

### 10. Dynamic Aspect Ratio Helper
When a feature lets the user choose output ratio, use a helper instead of hardcoding:
```javascript
let selectedRatio = '9:16';

function getAspectClass() {
    if (selectedRatio === '9:16') return 'aspect-[9/16]';
    if (selectedRatio === '3:4') return 'aspect-[3/4]';
    if (selectedRatio === '1:1') return 'aspect-square';
    return 'aspect-video'; // default 16:9
}
// Use getAspectClass() for placeholder cards AND result cards.
// Pass selectedRatio directly into imageConfig: { aspectRatio: selectedRatio }
```

### 11. Consistent Output Across Parallel Frames (camera anchor)
When generating a sequence of related images in parallel (e.g., timelapse), include a shared "anchor" string derived once per session so all frames share the same camera position in the prompt:
```javascript
// Generate ONCE before Promise.allSettled — reuse in every generateSingle call
const cameraAnchor = `slight left diagonal view, medium distance, eye-level [session:${Math.floor(Math.random()*999999)}]`;

// Pass into each prompt:
`CRITICAL: use fixed camera — ${cameraAnchor} — same angle for ALL frames`
```

---

## Adding a New Feature Tab (5 required steps)

1. **CSS** (before `</style>`, ~line 8,700): Add `.upload-box-feature`, `.option-btn-feature`, `.option-btn-feature.selected`
2. **Sidebar button** (inside appropriate category `div`, ~lines 8,700–28,000):
   ```html
   <button data-tab="feature-name" class="main-tab-btn">
       <i class="fas fa-icon"></i>
       <span class="btn-text">Label</span>
       <span class="new-badge">NEW</span>
   </button>
   ```
3. **Content panel** (before `<!-- Floating Support Button -->`, ~line 24,957):
   ```html
   <div id="content-feature-name" class="main-content-panel hidden">...</div>
   ```
4. **Mobile nav button** (inside `<nav class="mobile-bottom-nav">`, ~line 68,693):
   ```html
   <button data-tab="feature-name" class="mobile-tab-btn">...</button>
   ```
5. **JavaScript IIFE** (before `// ==================== TWIBON ====================`, ~line 53,487)

---

## CSS Class Naming Convention

- `.upload-box-{feature}` — upload area with hover effect
- `.option-btn-{feature}` — selection button with `::before` ripple pseudo-element
- `.option-btn-{feature}.selected` — gradient background active state

Each feature uses a unique gradient. Examples:
- Fotogenic: Cyan `#06b6d4` → Indigo `#4f46e5`
- Wedding: Rose `#f43f5e` → Pink `#ec4899`
- Touring: Orange `#f97316` → Red `#dc2626`
- Headshot: Indigo `#4f46e5` → Blue `#1e40af`
- Timelapse Renovasi: Amber `#f59e0b` → Teal `#0d9488`

---

## Debugging

**Results not appearing after generation**: Look for references to non-existent element IDs (`getElementById('wrong-id')` returning `null`).

**Wrong image on preview/download**: Using `.push()` with parallel generation — switch to indexed assignment `array[index-1] = value`.

**Upload requires double-click**: Both a `<label for>` and a JS `.click()` handler exist — remove one.

**API 403 errors**: Model unavailable. Use verified models from the table above.

**Mobile download refreshes page**: `e.preventDefault()` on results grid — remove it, keep only `e.stopPropagation()`.

**Feature broken on mobile only**: Missing `.mobile-tab-btn` click listener for tab initialization.

**Undefined variable in generation**: Function parameter name doesn't match array index variable (e.g., function takes `id` but code uses `index`).

**Nothing happens on upload click**: Upload box is a `div` with no click handler — add `uploadBox.addEventListener('click', () => uploadInput.click())`.

**Download/Preview buttons not tappable on mobile**: Overlay uses `opacity-0 group-hover:opacity-100` — no hover on mobile so buttons never appear. Fix: use `opacity-100 sm:opacity-0 sm:group-hover:opacity-100` (always visible mobile, hover-only desktop).

**Preview modal doesn't open**: Called `window.showImagePreviewModal` — that function does not exist. Use `window.showPreviewModal(url)`.

**Edit tool "File has not been read yet" error**: Must read the specific section of `kode.html` you are about to edit first — a prior read of a different section is not sufficient.

---

## Key Features by Category

**Product Photography (6)**: Mockup Studio, POV Tangan, Foto Produk, Photo Angle Pro, Foto Touring, Walking Pad Lifestyle

**UGC Content (8)**: Foto Produk Affiliate, Affiliate Tema Agama (50 themes / 5 religions), Virtual Try-On, Pose Fashion, Food Selfie, Product Review, Iklan Produk, Professional Headshot

**Family & Lifestyle (12)**: Family Photo, Wedding (50 themes + custom, multi-religion), New Born, Profesi Anak, Foto Tema Ibadah (40 locations / 5 religions), Pas Foto, Photo Booth, Desain Rumah, Sketsa, Carousel, Birthday Photo (20 themes + custom, all ages baby–senior, group up to 5 people), **Kartu Ucapan Lebaran** (20 themes, optional family photo, custom name & greeting)

**Creative Tools PRO (20)**: Miniature Me, Halu Idol, Sticker, Hair Generator, Expression Changer, Story Update, Photo Angle, Style Matcher, Thumbnail Pro, Cover Photo, Photo Restoration, Logo Generator, Mascot Generator, Face Swap, Background Remover, Photo Extender, Story Board (16:9/9:16/1:1), Twibon, Fotogenic (56 effects / 7 categories), **Timelapse Renovasi** (20 renovation themes, 2–6 frames, locked camera angle, all ratios, no upload required)

**Video & Audio (4)**: VEO Generator, Opal Image to Video, Voice Over Pro, Video Analyzer Pro

**Security & Business (22)**: Login System, Anti-Piracy, + 20 marketing/business text tools

---

## Login & Anti-Piracy System

- Email-based auth via Google Apps Script + Google Sheets
- Token stored in `localStorage`: `affiliatego_email`, `affiliatego_token`, `affiliatego_name`
- Session validated every 10 seconds — login on another device kicks out the first session
- `SCRIPT_URL` constant near line 69,220 — replace with your Apps Script deployment URL

---

## Floating Update Button

A floating button (`#update-info-btn`) shows a changelog modal when clicked. To update it when adding a new feature:
1. Update `UPDATE_VERSION` constant in the IIFE (currently `'21'`)
2. Update the version badge and "N AI Tools" count in the `html` string
3. Add a new item in the "Fitur Baru" section of the modal HTML
4. The red pulse dot auto-hides after the user clicks (`localStorage` key: `affiliatego_update_seen`)

---

## Canvas Environment Notes

- No `iframe` embeds for external services (YouTube, etc.) — use link buttons instead
- API key auto-injected at runtime — never hardcode
- Single-file constraint — everything must stay in `kode.html`
- Prompts in **Bahasa Indonesia** produce better results for Indonesian content

---

## File Statistics (v21 — March 2026)
- `kode.html`: ~69,304 lines, ~3.76 MB
- `kode-min.html`: ~2.12 MB (43.6% compression)
