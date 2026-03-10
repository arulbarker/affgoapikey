// i18n_patch24.js — AI Beauty Editor, Tattoo Editor, Idol Fantasy (Halu)
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

function repR(pattern, replacement, label) {
    const rx = new RegExp(pattern, 's');
    if (!rx.test(html)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(rx, replacement);
    console.log('OK:  ', label); ok++;
}

// ═══════════════════════════════════════════════════════════════
// AI BEAUTY EDITOR
// ═══════════════════════════════════════════════════════════════

rep(
    '<p class="text-lg text-gray-600 mt-2">Percantik wajah & tubuh dengan AI profesional \uD83D\uDC84\u2728</p>',
    '<p class="text-lg text-gray-600 mt-2" data-i18n="beauty.desc">Percantik wajah & tubuh dengan AI profesional \uD83D\uDC84\u2728</p>',
    'beauty.desc'
);

// Step 1 label — unique via beauty-image-input post-anchor
repR(
    '(shadow-lg">1</div>\\s+)<label class="text-xl font-semibold text-gray-800">Unggah Foto</label>(\\s+</div>\\s+<label for="beauty-image-input")',
    '$1<label class="text-xl font-semibold text-gray-800" data-i18n="beauty.step1-title">Unggah Foto</label>$2',
    'beauty.step1-title'
);

// Upload drag p — unique via beauty-upload-prompt div
rep(
    '<div id="beauty-upload-prompt">\r\n                                    <i class="fas fa-user-circle text-5xl text-pink-400 mb-3"></i>\r\n                                    <p class="text-gray-700 font-semibold">Klik atau seret foto di sini</p>',
    '<div id="beauty-upload-prompt">\r\n                                    <i class="fas fa-user-circle text-5xl text-pink-400 mb-3"></i>\r\n                                    <p class="text-gray-700 font-semibold" data-i18n="beauty.upload-drag">Klik atau seret foto di sini</p>',
    'beauty.upload-drag'
);

// Remove photo button — wrap text in span
rep(
    'id="beauty-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                <i class="fas fa-times mr-1"></i> Hapus Foto',
    'id="beauty-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                <i class="fas fa-times mr-1"></i> <span data-i18n="unboxing.remove-photo">Hapus Foto</span>',
    'beauty.remove-btn'
);

// Step 2 label — unique text
repR(
    '(from-pink-500 to-rose-500 text-white font-bold text-sm shadow-lg">2</div>\\s+)<label class="text-xl font-semibold text-gray-800">Pilih Fitur Beauty</label>',
    '$1<label class="text-xl font-semibold text-gray-800" data-i18n="beauty.step2-title">Pilih Fitur Beauty</label>',
    'beauty.step2-title'
);

// Custom request textarea placeholder
rep(
    'id="beauty-custom-request" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none resize-none" rows="3" placeholder="Ketik keinginan custom Anda di sini',
    'id="beauty-custom-request" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none resize-none" rows="3" data-i18n-placeholder="beauty.custom-placeholder" placeholder="Ketik keinginan custom Anda di sini',
    'beauty.custom-placeholder'
);

// Custom note p — unique via beauty-custom-request textarea anchor
repR(
    '(id="beauty-custom-request"[^>]*></textarea>\\s+)<p class="text-xs text-gray-500 mt-1">',
    '$1<p class="text-xs text-gray-500 mt-1" data-i18n="beauty.custom-note">',
    'beauty.custom-note'
);

// Step 6 label
repR(
    '(from-pink-500 to-rose-500 text-white font-bold text-sm shadow-lg">6</div>\\s+)<label class="text-xl font-semibold text-gray-800">Jumlah Variasi</label>',
    '$1<label class="text-xl font-semibold text-gray-800" data-i18n="beauty.step6-title">Jumlah Variasi</label>',
    'beauty.step6-title'
);

// Count buttons 4/6/8 — anchored to beauty-count-options
repR(
    '(<div id="beauty-count-options"[^>]*>[\\s\\S]*?data-count="4"[^>]*>\\s+)<span>4 Gambar</span>',
    '$1<span data-i18n="maternity.count-4">4 Gambar</span>',
    'beauty.count-4'
);
repR(
    '(<div id="beauty-count-options"[^>]*>[\\s\\S]*?data-count="6"[^>]*>\\s+)<span>6 Gambar</span>',
    '$1<span data-i18n="maternity.count-6">6 Gambar</span>',
    'beauty.count-6'
);
repR(
    '(<div id="beauty-count-options"[^>]*>[\\s\\S]*?data-count="8"[^>]*>\\s+)<span>8 Gambar</span>',
    '$1<span data-i18n="maternity.count-8">8 Gambar</span>',
    'beauty.count-8'
);

// Generate button span
rep(
    '<span>Apply Beauty Effect</span>',
    '<span data-i18n="beauty.gen-btn">Apply Beauty Effect</span>',
    'beauty.gen-btn'
);

// Results h2 — unique via text-pink-500 icon
repR(
    '(<h2 class="text-2xl font-bold text-gray-800">\\s+<i class="fas fa-images text-pink-500 mr-2"></i>\\s+)Hasil Beauty(\\s+</h2>)',
    '$1<span data-i18n="beauty.results-title">Hasil Beauty</span>$2',
    'beauty.results-title'
);

// Download all span — unique via beauty-download-all-btn
rep(
    'id="beauty-download-all-btn" class="hidden bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">\r\n                                <i class="fas fa-download mr-2"></i>\r\n                                <span>Download Semua</span>',
    'id="beauty-download-all-btn" class="hidden bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">\r\n                                <i class="fas fa-download mr-2"></i>\r\n                                <span data-i18n="family.download-all">Download Semua</span>',
    'beauty.download-all'
);

// Placeholder texts
rep(
    '<p class="text-xl text-gray-600">Hasil beauty akan muncul di sini</p>',
    '<p class="text-xl text-gray-600" data-i18n="beauty.placeholder">Hasil beauty akan muncul di sini</p>',
    'beauty.placeholder'
);
rep(
    '<p class="text-sm text-gray-500 mt-2">Unggah foto dan pilih fitur beauty untuk memulai</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="beauty.placeholder-sub">Unggah foto dan pilih fitur beauty untuk memulai</p>',
    'beauty.placeholder-sub'
);

// ═══════════════════════════════════════════════════════════════
// TATTOO EDITOR
// ═══════════════════════════════════════════════════════════════

// Desc p — unique via AI Tattoo Editor h1 context
repR(
    '(AI Tattoo Editor[\\s\\S]*?</h1>\\s+)<p class="text-lg text-gray-600">',
    '$1<p class="text-lg text-gray-600" data-i18n="tattoo.desc">',
    'tattoo.desc'
);

rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Body Photo</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tattoo.step1-title">Upload Body Photo</h3>',
    'tattoo.step1-title'
);

rep(
    '<p class="text-gray-700 font-semibold mb-1">Click to upload body photo</p>',
    '<p class="text-gray-700 font-semibold mb-1" data-i18n="tattoo.upload-p">Click to upload body photo</p>',
    'tattoo.upload-p'
);

rep(
    '<h3 class="text-lg font-bold text-gray-800">Describe Your Tattoo</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tattoo.step2-title">Describe Your Tattoo</h3>',
    'tattoo.step2-title'
);

// Textarea placeholder — anchor on unique ID
rep(
    'id="tattoo-description" rows="4" class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm resize-none" placeholder="Describe the tattoo you want',
    'id="tattoo-description" rows="4" class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none text-sm resize-none" data-i18n-placeholder="tattoo.desc-placeholder" placeholder="Describe the tattoo you want',
    'tattoo.desc-placeholder'
);

// Generate button — split into prefix / dynamic count / suffix
rep(
    '</i>\r\n                                    Generate <span id="tattoo-count-text">6</span> Tattoo Designs',
    '</i>\r\n                                    <span data-i18n="kids.gen-prefix">Generate</span> <span id="tattoo-count-text">6</span> <span data-i18n="tattoo.gen-suffix">Tattoo Designs</span>',
    'tattoo.gen-btn'
);

// Placeholder title and desc
rep(
    '<h3 class="text-2xl font-bold text-gray-800 mb-3">Ready to Visualize Your Tattoo</h3>',
    '<h3 class="text-2xl font-bold text-gray-800 mb-3" data-i18n="tattoo.placeholder-title">Ready to Visualize Your Tattoo</h3>',
    'tattoo.placeholder-title'
);

repR(
    '(<div id="tattoo-placeholder"[\\s\\S]*?</h3>\\s+)<p class="text-gray-600 mb-6 max-w-md mx-auto">',
    '$1<p class="text-gray-600 mb-6 max-w-md mx-auto" data-i18n="tattoo.placeholder-desc">',
    'tattoo.placeholder-desc'
);

// ═══════════════════════════════════════════════════════════════
// IDOL FANTASY (HALU IDOL)
// ═══════════════════════════════════════════════════════════════

rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">1. Unggah Fotomu</h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800" data-i18n="halu.step1-title">1. Unggah Fotomu</h2>',
    'halu.step1-title'
);

rep(
    '<span class="font-semibold text-gray-700">Pilih Fotomu</span>',
    '<span class="font-semibold text-gray-700" data-i18n="halu.photo-select">Pilih Fotomu</span>',
    'halu.photo-select'
);

// First "Klik atau seret gambar" — inside halu-image-upload-area
repR(
    '(<div id="halu-image-upload-area">[\\s\\S]*?)<span class="text-xs text-gray-400 mt-1">Klik atau seret gambar</span>',
    '$1<span class="text-xs text-gray-400 mt-1" data-i18n="halu.upload-drag">Klik atau seret gambar</span>',
    'halu.upload-drag-1'
);

rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">2. Unggah Foto Idolamu</h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800" data-i18n="halu.step2-title">2. Unggah Foto Idolamu</h2>',
    'halu.step2-title'
);

rep(
    '<span class="font-semibold text-gray-700">Pilih Foto Idolamu</span>',
    '<span class="font-semibold text-gray-700" data-i18n="halu.idol-select">Pilih Foto Idolamu</span>',
    'halu.idol-select'
);

// Second "Klik atau seret gambar" — inside halu-idol-image-upload-area
repR(
    '(<div id="halu-idol-image-upload-area">[\\s\\S]*?)<span class="text-xs text-gray-400 mt-1">Klik atau seret gambar</span>',
    '$1<span class="text-xs text-gray-400 mt-1" data-i18n="halu.upload-drag">Klik atau seret gambar</span>',
    'halu.upload-drag-2'
);

rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">3. Pilih Rasio Aspek</h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800" data-i18n="halu.step3-title">3. Pilih Rasio Aspek</h2>',
    'halu.step3-title'
);

// Step 4 — nested "(Opsional)" span
rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">4. Deskripsi Momen <span class="text-sm text-gray-400">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800"><span data-i18n="halu.step4-title">4. Deskripsi Momen</span> <span class="text-sm text-gray-400" data-i18n="family.optional-label">(Opsional)</span></h2>',
    'halu.step4-title'
);

rep(
    'id="halu-moment-desc-input" rows="3" class="w-full p-3 bg-pink-50 border-pink-200 text-gray-800 rounded-lg" placeholder="Contoh: Kencan pertama..."',
    'id="halu-moment-desc-input" rows="3" class="w-full p-3 bg-pink-50 border-pink-200 text-gray-800 rounded-lg" data-i18n-placeholder="halu.step4-placeholder" placeholder="Contoh: Kencan pertama..."',
    'halu.step4-placeholder'
);

// Step 5 — nested "(Opsional)" span
rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">5. Gaya Foto <span class="text-sm text-gray-400">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800"><span data-i18n="halu.step5-title">5. Gaya Foto</span> <span class="text-sm text-gray-400" data-i18n="family.optional-label">(Opsional)</span></h2>',
    'halu.step5-title'
);

rep(
    'id="halu-photo-style-input" rows="3" class="w-full p-3 bg-pink-50 border-pink-200 text-gray-800 rounded-lg" placeholder="Contoh: Gaya foto polaroid..."',
    'id="halu-photo-style-input" rows="3" class="w-full p-3 bg-pink-50 border-pink-200 text-gray-800 rounded-lg" data-i18n-placeholder="halu.step5-placeholder" placeholder="Contoh: Gaya foto polaroid..."',
    'halu.step5-placeholder'
);

// Generate button span
rep(
    '<span>Buat 6 Foto Halu</span>',
    '<span data-i18n="halu.gen-btn">Buat 6 Foto Halu</span>',
    'halu.gen-btn'
);

// ═══════════════════════════════════════════════════════════════
// DICT — EN
// ═══════════════════════════════════════════════════════════════
rep(
    "'photoeditor.canvas-tip':'Preview is scaled for display; download will use the original size',\r\n            },",
    "'photoeditor.canvas-tip':'Preview is scaled for display; download will use the original size',\r\n            // beauty\r\n            'beauty.desc':'Beautify your face & body with professional AI \uD83D\uDC84\u2728',\r\n            'beauty.step1-title':'Upload Photo',\r\n            'beauty.upload-drag':'Click or drag photo here',\r\n            'beauty.step2-title':'Choose Beauty Features',\r\n            'beauty.custom-placeholder':\"Type your custom beauty request, e.g. 'sharper eyes and redder lips', 'glowing skin and chubbier cheeks'\",\r\n            'beauty.custom-note':'Optional - You can add custom requests in addition to selected features above',\r\n            'beauty.step6-title':'Number of Variations',\r\n            'beauty.gen-btn':'Apply Beauty Effect',\r\n            'beauty.results-title':'Beauty Results',\r\n            'beauty.placeholder':'Beauty results will appear here',\r\n            'beauty.placeholder-sub':'Upload a photo and choose beauty features to start',\r\n            // tattoo\r\n            'tattoo.desc':'Visualize tattoos on your body with AI! Upload your photo and see realistic tattoo designs on various body placements.',\r\n            'tattoo.step1-title':'Upload Body Photo',\r\n            'tattoo.upload-p':'Click to upload body photo',\r\n            'tattoo.step2-title':'Describe Your Tattoo',\r\n            'tattoo.desc-placeholder':'Describe the tattoo you want... (e.g., Dragon with wings, rose flower, tribal pattern, geometric mandala, Japanese koi fish, etc.)',\r\n            'tattoo.gen-suffix':'Tattoo Designs',\r\n            'tattoo.placeholder-title':'Ready to Visualize Your Tattoo',\r\n            'tattoo.placeholder-desc':'Upload your photo, describe the tattoo you want, choose style and placement, then generate realistic visualizations!',\r\n            // halu\r\n            'halu.step1-title':'1. Upload Your Photo',\r\n            'halu.photo-select':'Choose Your Photo',\r\n            'halu.upload-drag':'Click or drag image',\r\n            'halu.step2-title':'2. Upload Your Idol\\'s Photo',\r\n            'halu.idol-select':'Choose Your Idol\\'s Photo',\r\n            'halu.step3-title':'3. Choose Aspect Ratio',\r\n            'halu.step4-title':'4. Moment Description',\r\n            'halu.step4-placeholder':'Example: First date...',\r\n            'halu.step5-title':'5. Photo Style',\r\n            'halu.step5-placeholder':'Example: Polaroid photo style...',\r\n            'halu.gen-btn':'Create 6 Fantasy Photos',\r\n            },",
    'dict.en'
);

// ═══════════════════════════════════════════════════════════════
// DICT — ID
// ═══════════════════════════════════════════════════════════════
rep(
    "'photoeditor.canvas-tip':'Preview di-scale untuk tampilan, download akan menggunakan ukuran original',\r\n            }",
    "'photoeditor.canvas-tip':'Preview di-scale untuk tampilan, download akan menggunakan ukuran original',\r\n            // beauty\r\n            'beauty.desc':'Percantik wajah & tubuh dengan AI profesional \uD83D\uDC84\u2728',\r\n            'beauty.step1-title':'Unggah Foto',\r\n            'beauty.upload-drag':'Klik atau seret foto di sini',\r\n            'beauty.step2-title':'Pilih Fitur Beauty',\r\n            'beauty.custom-placeholder':\"Ketik keinginan custom Anda di sini, contoh: 'buat mata lebih tajam dan bibir lebih merah', 'kulit lebih glowing dan pipi lebih chubby', dll.\",\r\n            'beauty.custom-note':'Opsional - Anda bisa menambahkan request custom selain fitur yang dipilih di atas',\r\n            'beauty.step6-title':'Jumlah Variasi',\r\n            'beauty.gen-btn':'Terapkan Efek Beauty',\r\n            'beauty.results-title':'Hasil Beauty',\r\n            'beauty.placeholder':'Hasil beauty akan muncul di sini',\r\n            'beauty.placeholder-sub':'Unggah foto dan pilih fitur beauty untuk memulai',\r\n            // tattoo\r\n            'tattoo.desc':'Visualisasikan tato di tubuhmu dengan AI! Unggah foto dan lihat desain tato realistis di berbagai bagian tubuh.',\r\n            'tattoo.step1-title':'Unggah Foto Tubuh',\r\n            'tattoo.upload-p':'Klik untuk unggah foto tubuh',\r\n            'tattoo.step2-title':'Deskripsikan Tato Anda',\r\n            'tattoo.desc-placeholder':'Deskripsikan tato yang Anda inginkan... (contoh: Naga dengan sayap, bunga mawar, pola tribal, mandala geometris, ikan koi Jepang, dll.)',\r\n            'tattoo.gen-suffix':'Desain Tato',\r\n            'tattoo.placeholder-title':'Siap Visualisasikan Tato Anda',\r\n            'tattoo.placeholder-desc':'Unggah foto, deskripsikan tato yang Anda inginkan, pilih style dan penempatan, lalu generate visualisasi realistis!',\r\n            // halu\r\n            'halu.step1-title':'1. Unggah Fotomu',\r\n            'halu.photo-select':'Pilih Fotomu',\r\n            'halu.upload-drag':'Klik atau seret gambar',\r\n            'halu.step2-title':'2. Unggah Foto Idolamu',\r\n            'halu.idol-select':'Pilih Foto Idolamu',\r\n            'halu.step3-title':'3. Pilih Rasio Aspek',\r\n            'halu.step4-title':'4. Deskripsi Momen',\r\n            'halu.step4-placeholder':'Contoh: Kencan pertama...',\r\n            'halu.step5-title':'5. Gaya Foto',\r\n            'halu.step5-placeholder':'Contoh: Gaya foto polaroid...',\r\n            'halu.gen-btn':'Buat 6 Foto Halu',\r\n            }",
    'dict.id'
);

// ═══════════════════════════════════════════════════════════════
console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
