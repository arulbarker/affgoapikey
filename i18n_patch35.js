// i18n_patch35.js — Brand Kit, Content Calendar, A/B Testing, Before-After, Product Mockup, Testimonial
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ===== BRAND KIT GENERATOR =====

rep(
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto">\r\n                        Generate complete brand identity',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="bk.desc">\r\n                        Generate complete brand identity',
    'bk.desc'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Informasi Brand</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="bk.step1-title">Informasi Brand</h3>',
    'bk.step1-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Kategori Industri *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="bk.step2-title">Kategori Industri *</h3>',
    'bk.step2-title'
);
// step3 anchor: unique following div id
rep(
    '<h3 class="text-lg font-bold text-gray-800">Target Audience</h3>\r\n                                    </div>\r\n\r\n                                    <div id="brandkit-audience-options"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="bk.step3-title">Target Audience</h3>\r\n                                    </div>\r\n\r\n                                    <div id="brandkit-audience-options"',
    'bk.step3-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Brand Personality *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="bk.step4-title">Brand Personality *</h3>',
    'bk.step4-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Preferensi Warna (Opsional)</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="bk.step5-title">Preferensi Warna (Opsional)</h3>',
    'bk.step5-title'
);
rep(
    '<span>Generate Complete Brand Kit</span>',
    '<span data-i18n="bk.gen-btn">Generate Complete Brand Kit</span>',
    'bk.gen-btn'
);
rep(
    '<p class="text-xs text-center text-gray-500">\u23F1\uFE0F Proses ~45-60 detik untuk generate semua assets</p>',
    '<p class="text-xs text-center text-gray-500" data-i18n="bk.process-note">\u23F1\uFE0F Proses ~45-60 detik untuk generate semua assets</p>',
    'bk.process-note'
);
rep(
    '<p class="text-lg font-semibold">Your Complete Brand Kit</p>\r\n                                <p class="text-sm">Fill the form and click Generate to create your brand identity</p>',
    '<p class="text-lg font-semibold" data-i18n="bk.placeholder-p1">Your Complete Brand Kit</p>\r\n                                <p class="text-sm" data-i18n="bk.placeholder-p2">Fill the form and click Generate to create your brand identity</p>',
    'bk.placeholder'
);

// ===== CONTENT CALENDAR =====

rep(
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto">\r\n                        Generate complete 30-day content calendar',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="cal.desc">\r\n                        Generate complete 30-day content calendar',
    'cal.desc'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Brand/Product Info</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="cal.step1-title">Brand/Product Info</h3>',
    'cal.step1-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Target Platforms *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="cal.step2-title">Target Platforms *</h3>',
    'cal.step2-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Posting Frequency *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="cal.step3-title">Posting Frequency *</h3>',
    'cal.step3-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Content Mix</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="cal.step4-title">Content Mix</h3>',
    'cal.step4-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Brand Tone *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="cal.step5-title">Brand Tone *</h3>',
    'cal.step5-title'
);
rep(
    '<span>Generate 30-Day Calendar</span>',
    '<span data-i18n="cal.gen-btn">Generate 30-Day Calendar</span>',
    'cal.gen-btn'
);
rep(
    '<p class="text-xs text-center text-gray-500">\u23F1\uFE0F Proses ~20-30 detik</p>',
    '<p class="text-xs text-center text-gray-500" data-i18n="cal.process-note">\u23F1\uFE0F Proses ~20-30 detik</p>',
    'cal.process-note'
);
rep(
    '<p class="text-lg font-semibold">Your 30-Day Content Strategy</p>\r\n                                <p class="text-sm">Fill the form and generate your complete content calendar</p>',
    '<p class="text-lg font-semibold" data-i18n="cal.placeholder-p1">Your 30-Day Content Strategy</p>\r\n                                <p class="text-sm" data-i18n="cal.placeholder-p2">Fill the form and generate your complete content calendar</p>',
    'cal.placeholder'
);

// ===== A/B TESTING =====

rep(
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto">\r\n                        Upload 2-4 content variants',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="abt.desc">\r\n                        Upload 2-4 content variants',
    'abt.desc'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Content Variants *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="abt.step1-title">Upload Content Variants *</h3>',
    'abt.step1-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Target Platform *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="abt.step2-title">Target Platform *</h3>',
    'abt.step2-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Content Goal *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="abt.step3-title">Content Goal *</h3>',
    'abt.step3-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Target Audience *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="abt.step4-title">Target Audience *</h3>',
    'abt.step4-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Analysis Focus</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="abt.step5-title">Analysis Focus</h3>',
    'abt.step5-title'
);
rep(
    '<span>Analyze & Predict Winner</span>',
    '<span data-i18n="abt.analyze-btn">Analyze & Predict Winner</span>',
    'abt.analyze-btn'
);
rep(
    '<p class="text-xs text-center text-gray-500">\u23F1\uFE0F Proses ~15-25 detik</p>',
    '<p class="text-xs text-center text-gray-500" data-i18n="abt.process-note">\u23F1\uFE0F Proses ~15-25 detik</p>',
    'abt.process-note'
);
rep(
    '<p class="text-lg font-semibold">AI Prediction Results</p>\r\n                                <p class="text-sm">Upload variants dan AI akan memprediksi performa mereka</p>',
    '<p class="text-lg font-semibold" data-i18n="abt.placeholder-p1">AI Prediction Results</p>\r\n                                <p class="text-sm" data-i18n="abt.placeholder-p2">Upload variants dan AI akan memprediksi performa mereka</p>',
    'abt.placeholder'
);
rep(
    '<p class="text-sm text-gray-500 mt-2">AI sedang mengevaluasi setiap variant...</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="abt.loading-desc">AI sedang mengevaluasi setiap variant...</p>',
    'abt.loading-desc'
);

// ===== BEFORE-AFTER GENERATOR (first occurrence, line ~21015) =====

rep(
    '<p class="text-lg text-gray-600">\r\n                        Transform foto atau buat before-after scene',
    '<p class="text-lg text-gray-600" data-i18n="ba.desc">\r\n                        Transform foto atau buat before-after scene',
    'ba.desc'
);
rep(
    '<h2 class="text-2xl font-bold mb-6 flex items-center gap-2" style="color: #6d28d9;">\r\n                            <i class="fas fa-sliders-h"></i>\r\n                            Pengaturan',
    '<h2 class="text-2xl font-bold mb-6 flex items-center gap-2" style="color: #6d28d9;" data-i18n="ba.settings-h2">\r\n                            <i class="fas fa-sliders-h"></i>\r\n                            Pengaturan',
    'ba.settings-h2'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto "Before"</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="ba.step1-title">Upload Foto "Before"</h3>',
    'ba.step1-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Prompt Transformasi</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="ba.step2-title">Prompt Transformasi</h3>',
    'ba.step2-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Deskripsi Before-After</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="ba.step3-title">Deskripsi Before-After</h3>',
    'ba.step3-title'
);
rep(
    '<p class="text-xl font-semibold mb-2" style="color: #6d28d9;">Membuat transformasi...</p>',
    '<p class="text-xl font-semibold mb-2" style="color: #6d28d9;" data-i18n="ba.loading-p">Membuat transformasi...</p>',
    'ba.loading-p'
);
rep(
    '<h3 class="text-2xl font-bold mb-3" style="color: #6d28d9;">Siap Membuat Before-After</h3>',
    '<h3 class="text-2xl font-bold mb-3" style="color: #6d28d9;" data-i18n="ba.empty-h3">Siap Membuat Before-After</h3>',
    'ba.empty-h3'
);
rep(
    '<p class="text-gray-600 mb-6 max-w-md mx-auto">\r\n                                Pilih mode di atas',
    '<p class="text-gray-600 mb-6 max-w-md mx-auto" data-i18n="ba.empty-p">\r\n                                Pilih mode di atas',
    'ba.empty-p'
);

// ===== PRODUCT MOCKUP GENERATOR =====

rep(
    '<p class="text-lg text-gray-600 mb-2">\r\n                        Tampilkan produk dalam lifestyle scenes 3D',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="pm.desc">\r\n                        Tampilkan produk dalam lifestyle scenes 3D',
    'pm.desc'
);
// step1 anchor: indigo gradient in step number
rep(
    'from-indigo-600 to-indigo-700 text-white font-bold text-sm shadow-lg">1</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800">Upload Foto Produk</h3>',
    'from-indigo-600 to-indigo-700 text-white font-bold text-sm shadow-lg">1</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800" data-i18n="pm.step1-title">Upload Foto Produk</h3>',
    'pm.step1-title'
);
rep(
    'id="mockup-remove-preview" class="mt-2 w-full bg-red-600',
    'id="mockup-remove-preview" data-i18n="pm.remove-btn" class="mt-2 w-full bg-red-600',
    'pm.remove-btn'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Mockup Scene</h3>\r\n                                    </div>\r\n                                    <div id="mockup-scene-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="pm.step2-title">Mockup Scene</h3>\r\n                                    </div>\r\n                                    <div id="mockup-scene-selection"',
    'pm.step2-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">3D Perspective</h3>\r\n                                    </div>\r\n                                    <div id="mockup-perspective-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="pm.step3-title">3D Perspective</h3>\r\n                                    </div>\r\n                                    <div id="mockup-perspective-selection"',
    'pm.step3-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Lighting/Mood</h3>\r\n                                    </div>\r\n                                    <div id="mockup-mood-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="pm.step4-title">Lighting/Mood</h3>\r\n                                    </div>\r\n                                    <div id="mockup-mood-selection"',
    'pm.step4-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Aspect Ratio</h3>\r\n                                    </div>\r\n                                    <div id="mockup-aspect-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="pm.step5-title">Aspect Ratio</h3>\r\n                                    </div>\r\n                                    <div id="mockup-aspect-selection"',
    'pm.step5-title'
);
// step6 reuse caption.step4-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="mockup-count-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="caption.step4-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="mockup-count-selection"',
    'pm.step6-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Generate</h3>\r\n                                    </div>\r\n                                    <button id="mockup-generate-btn"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="pm.step7-title">Generate</h3>\r\n                                    </div>\r\n                                    <button id="mockup-generate-btn"',
    'pm.step7-title'
);
rep(
    '<p class="text-sm text-gray-500 text-center mt-2">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate mockup 3D',
    '<p class="text-sm text-gray-500 text-center mt-2" data-i18n="pm.gen-info">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate mockup 3D',
    'pm.gen-info'
);
rep(
    '<p class="text-sm text-gray-500 mt-2">AI sedang membuat lifestyle mockup dengan 3D placement</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="pm.loading-desc">AI sedang membuat lifestyle mockup dengan 3D placement</p>',
    'pm.loading-desc'
);
rep(
    '<p class="text-lg font-semibold">AI-Generated Product Mockups</p>\r\n                            <p class="text-sm">Upload produk dan pilih settings untuk generate lifestyle mockups</p>',
    '<p class="text-lg font-semibold" data-i18n="pm.empty-p1">AI-Generated Product Mockups</p>\r\n                            <p class="text-sm" data-i18n="pm.empty-p2">Upload produk dan pilih settings untuk generate lifestyle mockups</p>',
    'pm.empty'
);

// ===== TESTIMONIAL GENERATOR =====

rep(
    '<p class="text-lg text-gray-600 mb-2">\r\n                        Buat testimonial cards yang engaging',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="tg.desc">\r\n                        Buat testimonial cards yang engaging',
    'tg.desc'
);
// step1 anchor: cyan gradient in step number
rep(
    'from-cyan-600 to-cyan-700 text-white font-bold text-sm shadow-lg">1</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800">Upload Foto Produk</h3>',
    'from-cyan-600 to-cyan-700 text-white font-bold text-sm shadow-lg">1</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800" data-i18n="tg.step1-title">Upload Foto Produk</h3>',
    'tg.step1-title'
);
rep(
    'id="testimonial-remove-preview" class="mt-2 w-full bg-red-600',
    'id="testimonial-remove-preview" data-i18n="tg.remove-btn" class="mt-2 w-full bg-red-600',
    'tg.remove-btn'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Rating</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-rating-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tg.step2-title">Rating</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-rating-selection"',
    'tg.step2-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Card Style</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-style-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tg.step3-title">Card Style</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-style-selection"',
    'tg.step3-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Content Mode</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-mode-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tg.step4-title">Content Mode</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-mode-selection"',
    'tg.step4-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Aspect Ratio</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-aspect-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tg.step5-title">Aspect Ratio</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-aspect-selection"',
    'tg.step5-title'
);
// step6 reuse caption.step4-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-count-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="caption.step4-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="testimonial-count-selection"',
    'tg.step6-title'
);
rep(
    '<h3 class="text-lg font-bold text-gray-800">Generate</h3>\r\n                                    </div>\r\n                                    <button id="testimonial-generate-btn"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tg.step7-title">Generate</h3>\r\n                                    </div>\r\n                                    <button id="testimonial-generate-btn"',
    'tg.step7-title'
);
rep(
    '<p class="text-sm text-gray-500 text-center mt-2">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate testimonial cards',
    '<p class="text-sm text-gray-500 text-center mt-2" data-i18n="tg.gen-info">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate testimonial cards',
    'tg.gen-info'
);
rep(
    '<p class="text-sm text-gray-500 mt-2">AI sedang membuat testimonial cards dengan quotes & ratings</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="tg.loading-desc">AI sedang membuat testimonial cards dengan quotes & ratings</p>',
    'tg.loading-desc'
);
rep(
    '<p class="text-lg font-semibold">AI-Generated Testimonial Cards</p>\r\n                            <p class="text-sm">Upload produk dan pilih settings untuk generate testimonial cards</p>',
    '<p class="text-lg font-semibold" data-i18n="tg.empty-p1">AI-Generated Testimonial Cards</p>\r\n                            <p class="text-sm" data-i18n="tg.empty-p2">Upload produk dan pilih settings untuk generate testimonial cards</p>',
    'tg.empty'
);

// ===== DICT ENTRIES =====

rep(
    "'va.frames-title':'Extracted Frames',\r\n            },",
    "'va.frames-title':'Extracted Frames',\r\n            // Brand Kit Generator\r\n            'bk.desc':'Generate complete brand identity: Logo variations, color palette, typography, brand voice guidelines, and visual style guide. All in one click!',\r\n            'bk.step1-title':'Brand Information',\r\n            'bk.step2-title':'Industry Category *',\r\n            'bk.step3-title':'Target Audience',\r\n            'bk.step4-title':'Brand Personality *',\r\n            'bk.step5-title':'Color Preference (Optional)',\r\n            'bk.gen-btn':'Generate Complete Brand Kit',\r\n            'bk.process-note':'\u23F1\uFE0F Process ~45-60 seconds to generate all assets',\r\n            'bk.placeholder-p1':'Your Complete Brand Kit',\r\n            'bk.placeholder-p2':'Fill the form and click Generate to create your brand identity',\r\n            // Content Calendar\r\n            'cal.desc':'Generate a complete 30-day content calendar with daily post ideas, optimal posting times, hashtags, and balanced content strategy. Perfect for affiliate marketers!',\r\n            'cal.step1-title':'Brand/Product Info',\r\n            'cal.step2-title':'Target Platforms *',\r\n            'cal.step3-title':'Posting Frequency *',\r\n            'cal.step4-title':'Content Mix',\r\n            'cal.step5-title':'Brand Tone *',\r\n            'cal.gen-btn':'Generate 30-Day Calendar',\r\n            'cal.process-note':'\u23F1\uFE0F Process ~20-30 seconds',\r\n            'cal.placeholder-p1':'Your 30-Day Content Strategy',\r\n            'cal.placeholder-p2':'Fill the form and generate your complete content calendar',\r\n            // A/B Testing\r\n            'abt.desc':'Upload 2-4 content variants and AI will predict which has the most viral potential! Get scores, insights, and recommendations before posting.',\r\n            'abt.step1-title':'Upload Content Variants *',\r\n            'abt.step2-title':'Target Platform *',\r\n            'abt.step3-title':'Content Goal *',\r\n            'abt.step4-title':'Target Audience *',\r\n            'abt.step5-title':'Analysis Focus',\r\n            'abt.analyze-btn':'Analyze & Predict Winner',\r\n            'abt.process-note':'\u23F1\uFE0F Process ~15-25 seconds',\r\n            'abt.placeholder-p1':'AI Prediction Results',\r\n            'abt.placeholder-p2':'Upload variants and AI will predict their performance',\r\n            'abt.loading-desc':'AI is evaluating each variant...',\r\n            // Before-After Generator\r\n            'ba.desc':'Transform photos or create before-after scenes for video content & presentation!',\r\n            'ba.settings-h2':'Settings',\r\n            'ba.step1-title':'Upload Before Photo',\r\n            'ba.step2-title':'Transformation Prompt',\r\n            'ba.step3-title':'Before-After Description',\r\n            'ba.loading-p':'Creating transformation...',\r\n            'ba.empty-h3':'Ready to Create Before-After',\r\n            'ba.empty-p':'Choose mode above, then upload a photo or type a prompt to generate before-after images!',\r\n            // Product Mockup\r\n            'pm.desc':'Showcase products in realistic 3D lifestyle scenes',\r\n            'pm.step1-title':'Upload Product Photo',\r\n            'pm.remove-btn':'Remove Photo',\r\n            'pm.step2-title':'Mockup Scene',\r\n            'pm.step3-title':'3D Perspective',\r\n            'pm.step4-title':'Lighting/Mood',\r\n            'pm.step5-title':'Aspect Ratio',\r\n            'pm.step7-title':'Generate',\r\n            'pm.gen-info':'AI will generate 3D mockup with lifestyle scenes',\r\n            'pm.loading-desc':'AI is creating lifestyle mockup with 3D placement',\r\n            'pm.empty-p1':'AI-Generated Product Mockups',\r\n            'pm.empty-p2':'Upload product and choose settings to generate lifestyle mockups',\r\n            // Testimonial Generator\r\n            'tg.desc':'Create engaging testimonial cards with AI-generated content',\r\n            'tg.step1-title':'Upload Product Photo',\r\n            'tg.remove-btn':'Remove Photo',\r\n            'tg.step2-title':'Rating',\r\n            'tg.step3-title':'Card Style',\r\n            'tg.step4-title':'Content Mode',\r\n            'tg.step5-title':'Aspect Ratio',\r\n            'tg.step7-title':'Generate',\r\n            'tg.gen-info':'AI will generate testimonial cards with ratings & quotes',\r\n            'tg.loading-desc':'AI is creating testimonial cards with quotes & ratings',\r\n            'tg.empty-p1':'AI-Generated Testimonial Cards',\r\n            'tg.empty-p2':'Upload product and choose settings to generate testimonial cards',\r\n            },",
    'dict.en'
);

rep(
    "'va.frames-title':'Frame yang Diekstrak',\r\n            }",
    "'va.frames-title':'Frame yang Diekstrak',\r\n            // Brand Kit Generator\r\n            'bk.desc':'Generate brand identity lengkap: Variasi logo, color palette, tipografi, brand voice guidelines, dan visual style guide. All in one click!',\r\n            'bk.step1-title':'Informasi Brand',\r\n            'bk.step2-title':'Kategori Industri *',\r\n            'bk.step3-title':'Target Audience',\r\n            'bk.step4-title':'Brand Personality *',\r\n            'bk.step5-title':'Preferensi Warna (Opsional)',\r\n            'bk.gen-btn':'Generate Complete Brand Kit',\r\n            'bk.process-note':'\u23F1\uFE0F Proses ~45-60 detik untuk generate semua assets',\r\n            'bk.placeholder-p1':'Brand Kit Lengkap Anda',\r\n            'bk.placeholder-p2':'Lengkapi form dan klik Generate untuk membuat brand identity Anda',\r\n            // Content Calendar\r\n            'cal.desc':'Generate kalender konten 30 hari lengkap dengan ide post harian, waktu posting optimal, hashtags, dan strategi konten yang balanced. Perfect untuk affiliate marketer!',\r\n            'cal.step1-title':'Info Brand/Produk',\r\n            'cal.step2-title':'Platform Target *',\r\n            'cal.step3-title':'Frekuensi Posting *',\r\n            'cal.step4-title':'Tipe Konten',\r\n            'cal.step5-title':'Tone Brand *',\r\n            'cal.gen-btn':'Generate Kalender 30 Hari',\r\n            'cal.process-note':'\u23F1\uFE0F Proses ~20-30 detik',\r\n            'cal.placeholder-p1':'Strategi Konten 30 Hari Anda',\r\n            'cal.placeholder-p2':'Lengkapi form dan generate kalender konten lengkap Anda',\r\n            // A/B Testing\r\n            'abt.desc':'Upload 2-4 content variants dan AI akan memprediksi mana yang paling berpotensi viral! Dapatkan score, insight, dan rekomendasi sebelum posting.',\r\n            'abt.step1-title':'Upload Content Variants *',\r\n            'abt.step2-title':'Platform Target *',\r\n            'abt.step3-title':'Tujuan Konten *',\r\n            'abt.step4-title':'Target Audience *',\r\n            'abt.step5-title':'Fokus Analisis',\r\n            'abt.analyze-btn':'Analisis & Prediksi Pemenang',\r\n            'abt.process-note':'\u23F1\uFE0F Proses ~15-25 detik',\r\n            'abt.placeholder-p1':'Hasil Prediksi AI',\r\n            'abt.placeholder-p2':'Upload variants dan AI akan memprediksi performa mereka',\r\n            'abt.loading-desc':'AI sedang mengevaluasi setiap variant...',\r\n            // Before-After Generator\r\n            'ba.desc':'Transform foto atau buat before-after scene untuk video content & presentation!',\r\n            'ba.settings-h2':'Pengaturan',\r\n            'ba.step1-title':'Upload Foto \"Before\"',\r\n            'ba.step2-title':'Prompt Transformasi',\r\n            'ba.step3-title':'Deskripsi Before-After',\r\n            'ba.loading-p':'Membuat transformasi...',\r\n            'ba.empty-h3':'Siap Membuat Before-After',\r\n            'ba.empty-p':'Pilih mode di atas, lalu upload foto atau ketik prompt untuk generate before-after images!',\r\n            // Product Mockup\r\n            'pm.desc':'Tampilkan produk dalam lifestyle scenes 3D yang realistis',\r\n            'pm.step1-title':'Upload Foto Produk',\r\n            'pm.remove-btn':'Hapus Foto',\r\n            'pm.step2-title':'Mockup Scene',\r\n            'pm.step3-title':'Perspektif 3D',\r\n            'pm.step4-title':'Pencahayaan/Suasana',\r\n            'pm.step5-title':'Rasio Gambar',\r\n            'pm.step7-title':'Generate',\r\n            'pm.gen-info':'AI akan generate mockup 3D dengan lifestyle scenes',\r\n            'pm.loading-desc':'AI sedang membuat lifestyle mockup dengan 3D placement',\r\n            'pm.empty-p1':'Mockup Produk AI-Generated',\r\n            'pm.empty-p2':'Upload produk dan pilih settings untuk generate lifestyle mockups',\r\n            // Testimonial Generator\r\n            'tg.desc':'Buat testimonial cards yang engaging dengan AI-generated content',\r\n            'tg.step1-title':'Upload Foto Produk',\r\n            'tg.remove-btn':'Hapus Foto',\r\n            'tg.step2-title':'Rating',\r\n            'tg.step3-title':'Style Kartu',\r\n            'tg.step4-title':'Mode Konten',\r\n            'tg.step5-title':'Rasio Gambar',\r\n            'tg.step7-title':'Generate',\r\n            'tg.gen-info':'AI akan generate testimonial cards dengan rating & quotes',\r\n            'tg.loading-desc':'AI sedang membuat testimonial cards dengan quotes & ratings',\r\n            'tg.empty-p1':'Testimonial Cards AI-Generated',\r\n            'tg.empty-p2':'Upload produk dan pilih settings untuk generate testimonial cards',\r\n            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
