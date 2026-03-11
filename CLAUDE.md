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
3. **`const apiKey = ""`** is intentional in every IIFE — Canvas injects key at runtime; Vercel uses the fetch interceptor
4. **Minify before Canvas deployment** — Canvas sharing limit is ~2 MB

---

## Project Overview

Single-file SPA (`kode.html`, ~69,600+ lines, ~3.8 MB) with **86 AI Tools** for photo/video generation.

**Two deployment targets:**
| Target | How API key is supplied | Image model used |
|--------|------------------------|-----------------|
| **Canvas** (AI Studio) | Auto-injected into `const apiKey = ""` at runtime | `gemini-2.5-flash-image-preview` |
| **Vercel** (standalone) | User inputs via settings UI → fetch interceptor injects | `gemini-2.5-flash-image` (GA, no -preview) |

- `kode.html` — Development version. **Edit this.**
- `kode-min.html` — Production/Canvas version (~2.12 MB). Generated, do not edit.
- `vercel.json` — Static deployment config (serves `kode.html` for all routes).

---

## Architecture

### Navigation System
Multi-category tab system. Each tab requires matching IDs across three places:
- `data-tab="feature-name"` sidebar button (desktop) — inside `<aside class="sidebar">`
- `data-tab="feature-name"` mobile nav button — inside `<nav class="mobile-bottom-nav">`
- `<div id="content-feature-name" class="main-content-panel hidden">` content panel

**File zones (approximate):**
| Zone | Lines |
|------|-------|
| CSS styles | 1–8,930 |
| HTML: Sidebar + all content panels | 8,930–25,100 |
| HTML: Mobile navigation | ~69,074–69,516 |
| JavaScript: DOMContentLoaded wrapper | ~25,200–69,070 |
| JavaScript: Login system | ~69,400+ (separate `<script>` block) |
| JavaScript: Language system (i18n) | ~69,530–69,855 (last `<script>` block) |

### JavaScript Module Pattern
Each feature is an IIFE inside `document.addEventListener('DOMContentLoaded', () => { ... })`:
```javascript
// ==================== FEATURE NAME ====================
(function() {
    const apiKey = "";  // Canvas injects here; Vercel uses fetch interceptor
    // ... implementation
})();
```

---

## API Key System (Dual-Mode)

### How it works
A **fetch interceptor** is installed at module load time (before DOMContentLoaded), reading `window.GEMINI_USER_API_KEY` on **every** API call:

```javascript
// Runs at script evaluation time — before any IIFE
window.GEMINI_USER_API_KEY = localStorage.getItem('gemini_user_api_key') || '';

(function() {
    const _origFetch = window.fetch.bind(window);
    window.fetch = function(url, options) {
        if (typeof url === 'string' && url.includes('generativelanguage.googleapis.com')) {
            const u = new URL(url);
            const existingKey = u.searchParams.get('key');
            // Only fires when Canvas did NOT inject a key (empty ?key= param)
            if ((!existingKey || existingKey === '') && window.GEMINI_USER_API_KEY) {
                u.searchParams.set('key', window.GEMINI_USER_API_KEY);
                // Swap Canvas-only model to GA version for external keys
                u.pathname = u.pathname.replace('gemini-2.5-flash-image-preview', 'gemini-2.5-flash-image');
                url = u.toString();
            }
        }
        return _origFetch(url, options);
    };
})();
```

**Priority:** Canvas-injected key (non-empty `?key=`) always wins. User key is fallback.

### localStorage keys
- `gemini_user_api_key` — raw API key string

### UI entry points
Both desktop and mobile use **the same shared content panel** `#content-apikey-settings`:
- **Desktop**: `data-tab="apikey-settings"` first button in sidebar nav
- **Mobile**: `data-tab="apikey-settings"` first button in mobile bottom nav (`<nav class="mobile-bottom-nav">`)

Both update `window.GEMINI_USER_API_KEY` immediately — no page reload required.

---

## API Integration

### Models by deployment
| Model | Deployment | Use |
|-------|-----------|-----|
| `gemini-2.5-flash-image-preview` | Canvas only | Image generation/editing |
| `gemini-2.5-flash-image` | Vercel/external keys | Image generation/editing (auto-swapped by interceptor) |
| `gemini-2.5-flash-preview` | Both | Text generation, multimodal analysis |
| `gemini-2.5-flash-preview-tts` | Both | Text-to-speech |

> **DO NOT** globally change `gemini-2.5-flash-image-preview` to `gemini-2.5-flash-image` in the source — the interceptor handles the swap automatically only when needed.

### Fetch API Pattern (used throughout)
```javascript
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent?key=${apiKey}`;
const payload = {
    contents: [{ parts: [{ text: prompt }, { inlineData: { mimeType, data: base64 } }] }],
    generationConfig: {
        responseModalities: ['TEXT', 'IMAGE']  // MUST include TEXT — IMAGE-only causes failures
        // Do NOT use imageConfig — specify aspect ratio in prompt text instead
        // e.g. "Output image in vertical 9:16 portrait aspect ratio"
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
> **Do NOT use `window.showImagePreviewModal`** — does not exist. Use `window.showPreviewModal`.

---

## i18n Language System

The app supports bilingual **EN / ID** switching. The entire system lives in the last `<script>` block at the bottom of `kode.html` (after the login script).

### How translation works
```javascript
var T = {
    en: { nav: {...}, nav_mobile: {...}, categories: {...}, headers: {...}, 'key': 'value', ... },
    id: { nav: {...}, nav_mobile: {...}, categories: {...}, headers: {...}, 'key': 'value', ... }
};
```

`applyLanguage(lang)` runs in this order:
1. Nav labels — via `.main-tab-btn[data-tab="x"] .btn-text`
2. Mobile nav labels — via `.mobile-tab-btn[data-tab="x"] span:not(.new-badge)`
3. Category headers — via `[data-i18n-cat]` attribute
4. Panel h1 headers — via `#content-{id} header h1` (no HTML change needed — covered by `headers` dict)
5. All `[data-i18n]` elements — via `applyText()`
6. All `[data-i18n-placeholder]` elements — `.placeholder =`

### `applyText(el, text)` behaviour
Preserves child elements (icons, spans). Updates **text nodes only**:
- If element has child elements → replaces non-empty text nodes, leaves `<i>` / `<span>` children intact
- If element is text-only → sets `el.textContent`

**Warning for h3/h2 with nested subtitle spans** (e.g. `<h3>Title <span>(note)</span></h3>`):
- Do NOT put `data-i18n` directly on the h3 with a translation value that includes the parenthetical — the span content will be duplicated
- Instead: wrap main text in `<span data-i18n="key">`, add separate `data-i18n` on the nested span with its own key

### Marking elements for translation
```html
<!-- Text content -->
<p data-i18n="feature.key">Indonesian text here</p>

<!-- Placeholder -->
<input data-i18n-placeholder="feature.key" placeholder="Teks placeholder">

<!-- Category header -->
<span data-i18n-cat="photo-studio">Photo Studio</span>

<!-- h3 with nested span subtitle -->
<h3><span data-i18n="feature.title">Judul</span> <span class="text-sm text-gray-400" data-i18n="feature.subtitle-label">(catatan)</span></h3>
```

### Adding translations for a new feature
1. Add `data-i18n="feature.key"` attributes to HTML elements in the panel
2. Add matching keys to **both** `T.en` and `T.id` in the language script block
3. Nav label: already covered by `T.en.nav['tab-id']` — no HTML change needed
4. Panel h1: already covered by `T.en.headers['tab-id']` — no HTML change needed

### Toggle UI
- **Desktop**: `.lang-toggle-btn[data-lang="en|id"]` in sidebar header — full-width row below the V21 badge (separated from badge, width:100%, larger font/padding)
- **Mobile**: `.mobile-lang-btn[data-lang="en|id"]` in mobile header
- Active state: `.lang-active` CSS class
- `window.setAppLanguage(lang)` — exposed globally
- Persisted in `localStorage['app_language']`, default `'en'`

### Translation progress (as of March 2026)
**All 91 content panels have full `data-i18n` coverage.** (3 are iframe-only and skipped: `content-face-swap`, `content-remove-bg`, `content-veo`.)

To verify coverage at any time:
```bash
node check_i18n.js
# Expected: DONE: 91 / TODO: 0 / TOTAL: 91
```

### i18n patch script pattern
Bulk `data-i18n` attribute insertions are done via numbered Node.js patch scripts (`i18n_patch30b.js` → `i18n_patch35.js`). Each script:
1. Reads `kode.html` with `fs.readFileSync`
2. Uses `rep(search, replacement, label)` for exact string replacement
3. Writes back with `fs.writeFileSync`
4. Reports `OK` / `MISS` per operation — any MISS must be fixed manually with the Edit tool

Key anchoring rules for patch scripts:
- **CRLF endings on Windows**: multi-line searches use `\r\n` not `\n`
- **Emoji in search strings**: use Unicode surrogate pairs (e.g. `\uD83D\uDCCA` for 📊, `\u23F1\uFE0F` for ⏱️)
- **Ambiguous h3 text**: anchor by following `<div id="unique-id"` on next line
- **Unique element ids**: insert `data-i18n` by matching `id="element-id" class=` in opening tag
- **Dict insertion anchor**: each patch inserts after the last key added by the previous patch

---

## Critical Patterns

### 1. Canvas Rate Limit — Per-Card Parallel Retry
`gemini-2.5-flash-image-preview` in Canvas: ~1 image per ~35 seconds. Launch all cards in parallel; each retries independently.

```javascript
async function countdown(seconds, labelFn) {
    for (let s = seconds; s > 0; s--) { labelFn(s); await new Promise(r => setTimeout(r, 1000)); }
}

async function generateSingleXxx(index, ..., retryCount) {
    const MAX_RETRIES = 6;
    const card = document.getElementById(`card-${index}`);
    try {
        // ... API call ...
    } catch (error) {
        if (retryCount < MAX_RETRIES) {
            await countdown(35, (s) => {
                card.innerHTML = `..retry ${retryCount+1}/${MAX_RETRIES} \u2014 ${s}d..`;
            });
            card.innerHTML = '<div class="loader"></div>';
            return generateSingleXxx(index, ..., retryCount + 1);
        }
        card.innerHTML = `<div class="text-red-500 p-4 text-center">Gagal</div>`;
    }
}
await Promise.allSettled(Array.from({ length: count }, (_, i) => generateSingleXxx(i + 1, ..., 0)));
```
> Applied to: Membuat Model, Foto Touring, Walking Pad, POV Mirror Selfie.
> Mockup Studio & POV Tangan: use `generateImageWithRetry(payload, retries=6, delay=35000)` (batch-based).

### 2. Parallel Generation — INDEXED ASSIGNMENT (never `.push()`)
```javascript
// CORRECT — indexed, not pushed
generatedImages[index - 1] = { url: imageUrl, filename };
card.innerHTML = `<button data-index="${index - 1}">`;
```
`Promise.allSettled` completes out of order. `.push()` stores in completion order → wrong image on preview/download.

### 3. Mobile Event Handling
```javascript
resultsGrid.addEventListener('click', async (e) => {
    e.stopPropagation();  // YES
    // e.preventDefault() — NO, breaks mobile downloads
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
});
// NO touchstart/touchend handlers — cause page refresh on mobile
```

### 4. HEIC Conversion (iPhone)
```javascript
if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
    const convertedBlob = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.9 });
    processedFile = new File([convertedBlob], file.name.replace(/\.heic$/i, '.jpg'), { type: 'image/jpeg' });
}
```

### 5. Unicode Escape for Emoji
```javascript
// CORRECT — safe for minification
const emoji1 = '\u0031\uFE0F\u20E3'; // 1️⃣

// WRONG — corrupts during minification
const prompt = `1️⃣ Section`;
```

### 6. Tab Initialization (both desktop + mobile)
```javascript
const tabDesktop = document.querySelector('.main-tab-btn[data-tab="feature"]');
const tabMobile  = document.querySelector('.mobile-tab-btn[data-tab="feature"]');
if (tabDesktop) tabDesktop.addEventListener('click', initFeature);
if (tabMobile)  tabMobile.addEventListener('click', initFeature);
```

### 7. Download Helper
```javascript
if (window.downloadDataURINew) await window.downloadDataURINew(url, filename);
else if (window.downloadImage) await window.downloadImage(url, filename);
```

### 8. Mobile-Visible Result Overlays
```html
<!-- CORRECT — always visible mobile, hover-only desktop -->
<div class="absolute inset-0 ... opacity-100 sm:opacity-0 sm:group-hover:opacity-100 ...">

<!-- WRONG — invisible on mobile (no hover) -->
<div class="absolute inset-0 ... opacity-0 group-hover:opacity-100 ...">
```

### 9. Consistent Camera Across Parallel Frames
```javascript
// Generate ONCE, reuse in every generateSingle call
const cameraAnchor = `slight left diagonal view, medium distance, eye-level [session:${Math.floor(Math.random()*999999)}]`;
// Pass into prompt: `CRITICAL: use fixed camera — ${cameraAnchor} — same angle for ALL frames`
```

---

## Adding a New Feature Tab (6 required steps)

1. **CSS** (before `</style>`, ~line 8,920): Add `.upload-box-feature`, `.option-btn-feature`, `.option-btn-feature.selected`
2. **Sidebar button** (~lines 9,000–25,000):
   ```html
   <button data-tab="feature-name" class="main-tab-btn">
       <i class="fas fa-icon"></i>
       <span class="btn-text">Label</span>
       <span class="new-badge">NEW</span>
   </button>
   ```
3. **Content panel** (before `<!-- Floating Update Info Button -->`, ~line 25,037):
   ```html
   <div id="content-feature-name" class="main-content-panel hidden">...</div>
   ```
4. **Mobile nav button** (inside `<nav class="mobile-bottom-nav">`, ~line 69,074):
   ```html
   <button data-tab="feature-name" class="mobile-tab-btn">...</button>
   ```
5. **JavaScript IIFE** (inside DOMContentLoaded, ~line 28,400+)
6. **i18n keys** (in the language `<script>` block at end of file): Add `'feature-name'` to `T.en.nav`, `T.en.nav_mobile`, `T.en.headers`, `T.id.nav`, `T.id.nav_mobile`, `T.id.headers`. Then add `data-i18n` to individual panel elements as needed.

---

## Global UI Theme — Green

The app uses a **green theme** (applied March 2026). Use these exact values for any new global UI elements. Do NOT use sky/blue colors.

| Role | Hex | Tailwind |
|------|-----|----------|
| Primary | `#16a34a` | `green-600` |
| Primary dark | `#15803d` | `green-700` |
| Light background | `#dcfce7` | `green-100` |
| Light border | `#bbf7d0` | `green-200` |
| Accent / gradient end | `#059669` | `emerald-600` |
| rgba primary | `rgba(22, 163, 74, α)` | — |
| Brand gradient | `from-green-500 to-emerald-600` | Tailwind |

- Active tab: border `#16a34a`, background `#dcfce7`
- Sidebar scrollbar thumb: `#16a34a`
- Lang toggle active: `linear-gradient(135deg, #16a34a, #059669)`
- Toggle sidebar btn hover: `#16a34a`

**Per-feature panel colors are independent** (each feature has its own unique palette) and must NOT use the global green. See examples below.

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

**Results not appearing**: Non-existent element ID — `getElementById('wrong-id')` returns `null`.

**Wrong image on preview/download**: `.push()` with parallel generation — switch to indexed assignment.

**Upload requires double-click**: Both `<label for>` and JS `.click()` handler exist — remove one.

**API 403 / model not found (Canvas)**: Use `gemini-2.5-flash-image-preview` — do not change.

**API model not found (Vercel/external key)**: `gemini-2.5-flash-image-preview` is Canvas-only. The fetch interceptor should auto-swap to `gemini-2.5-flash-image`. Verify `window.GEMINI_USER_API_KEY` is set and interceptor is active.

**User key not working after Save**: Key is saved immediately to `window.GEMINI_USER_API_KEY` — no reload needed. If still failing, check interceptor catches empty `?key=` param correctly.

**Mobile download refreshes page**: `e.preventDefault()` on results grid — remove it, keep only `e.stopPropagation()`.

**Feature broken on mobile only**: Missing `.mobile-tab-btn` click listener for tab initialization.

**Download/Preview not tappable on mobile**: Overlay uses `opacity-0 group-hover:opacity-100` — fix to `opacity-100 sm:opacity-0 sm:group-hover:opacity-100`.

**Preview modal doesn't open**: Called `window.showImagePreviewModal` — use `window.showPreviewModal(url)`.

**Edit tool "File has not been read yet"**: Must read the specific section of `kode.html` being edited first.

**i18n text not updating**: Element missing `data-i18n` attribute, OR translation key missing from both `T.en` and `T.id` in the language script block.

**i18n duplicates parenthetical text**: h3 has nested span and `applyText` replaced the leading text node with full translation (which already includes the parenthetical) — split into two separate `data-i18n` spans.

**Bulk HTML edits**: For adding many `data-i18n` attributes across a panel, use a Node.js script with `fs.readFileSync`/`writeFileSync` and string `.replace()`. Watch for CRLF line endings on Windows — use regex `/\r?\n/` when matching across lines.

---

## Key Features by Category

**Product Photography (6)**: Mockup Studio, POV Tangan, Foto Produk, Photo Angle Pro, Foto Touring, Walking Pad Lifestyle

**UGC Content (8)**: Foto Produk Affiliate, Affiliate Tema Agama (50 themes / 5 religions), Virtual Try-On, Pose Fashion, Food Selfie, Product Review, Iklan Produk, Professional Headshot

**Family & Lifestyle (12)**: Family Photo, Wedding (50 themes + custom), New Born, Profesi Anak, Foto Tema Ibadah, Pas Foto, Photo Booth, Desain Rumah, Sketsa, Carousel, Birthday Photo, Kartu Ucapan Lebaran

**Creative Tools PRO (20)**: Miniature Me, Halu Idol, Sticker, Hair Generator, Expression Changer, Story Update, Photo Angle, Style Matcher, Thumbnail Pro, Cover Photo, Photo Restoration, Logo Generator, Mascot Generator, Face Swap, Background Remover, Photo Extender, Story Board, Twibon, Fotogenic (56 effects), Timelapse Renovasi

**Video & Audio (4)**: VEO Generator, Opal Image to Video, Voice Over Pro, Video Analyzer Pro

**Security & Business (22)**: Login System, Anti-Piracy, + 20 marketing/business text tools

---

## Login & Anti-Piracy System

- Email-based auth via Google Apps Script + Google Sheets
- Token stored in `localStorage`: `affiliatego_email`, `affiliatego_token`, `affiliatego_name`
- Session validated every 10 seconds — login on another device kicks out the first session
- `SCRIPT_URL` constant near line ~69,400 — replace with your Apps Script deployment URL

---

## Floating Update Button

`#update-info-btn` shows changelog modal. When adding a feature:
1. Update `UPDATE_VERSION` constant (currently `'21'`)
2. Update version badge and "N AI Tools" count
3. Add item in "Fitur Baru" section
4. Red pulse dot auto-hides after click (`localStorage` key: `affiliatego_update_seen`)

---

## Deployment

### Canvas (AI Studio)
- Upload `kode-min.html` — must be under 2 MB
- Canvas auto-injects API key into `const apiKey = ""`
- No user key setup needed

### Vercel (Standalone)
- Push `kode.html` + `vercel.json` to GitHub → auto-deploys
- `vercel.json` serves `kode.html` as static for all routes
- Users enter their own Google AI Studio API key via the settings UI
- Image model auto-swapped from `gemini-2.5-flash-image-preview` → `gemini-2.5-flash-image`

### Notes
- No `iframe` embeds — use external link buttons instead
- Prompts in **Bahasa Indonesia** produce better results for Indonesian content
- Single-file constraint — everything stays in `kode.html`

---

## File Statistics (v21 — March 2026)
- `kode.html`: ~72,500+ lines, ~4.1 MB (grown from i18n + brand/theme patches)
- `kode-min.html`: ~2.12 MB (regenerate after edits before Canvas deploy)
