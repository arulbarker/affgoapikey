// i18n_patch23.js — Miniature Me, Karikatur Generator, Photo Editor Pro
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
// MINIATURE ME
// ═══════════════════════════════════════════════════════════════

rep(
    '<p class="text-lg text-gray-600 mt-2">Ubah fotomu menjadi miniatur AI yang unik \u2728</p>',
    '<p class="text-lg text-gray-600 mt-2" data-i18n="miniature.desc">Ubah fotomu menjadi miniatur AI yang unik \u2728</p>',
    'miniature.desc'
);

rep(
    '<p class="mt-4 text-xl text-gray-600">20 Pilihan miniatur AI akan muncul di sini</p>',
    '<p class="mt-4 text-xl text-gray-600" data-i18n="miniature.placeholder">20 Pilihan miniatur AI akan muncul di sini</p>',
    'miniature.placeholder'
);

rep(
    '<p class="mt-4 text-lg text-gray-700">AI sedang menyusutkan Anda... Mohon tunggu!</p>',
    '<p class="mt-4 text-lg text-gray-700" data-i18n="miniature.loading">AI sedang menyusutkan Anda... Mohon tunggu!</p>',
    'miniature.loading'
);

rep(
    '<label class="block text-xl font-semibold mb-3 text-[#1e3a8a]">1. Unggah Fotomu (Wajib)</label>',
    '<label class="block text-xl font-semibold mb-3 text-[#1e3a8a]" data-i18n="miniature.step1-title">1. Unggah Fotomu (Wajib)</label>',
    'miniature.step1-title'
);

rep(
    '<p class="text-gray-700">Klik atau seret fotomu ke sini</p>',
    '<p class="text-gray-700" data-i18n="miniature.upload-drag">Klik atau seret fotomu ke sini</p>',
    'miniature.upload-drag'
);

rep(
    '<label class="block text-xl font-semibold mb-3 text-[#1e3a8a]">2. Pilih Rasio Aspek</label>',
    '<label class="block text-xl font-semibold mb-3 text-[#1e3a8a]" data-i18n="miniature.step2-title">2. Pilih Rasio Aspek</label>',
    'miniature.step2-title'
);

rep(
    '<label for="miniature-manual-prompt" class="block text-xl font-semibold mb-2 text-[#1e3a8a]">3. Tulis Prompt Manual (Opsional)</label>',
    '<label for="miniature-manual-prompt" class="block text-xl font-semibold mb-2 text-[#1e3a8a]" data-i18n="miniature.step3-title">3. Tulis Prompt Manual (Opsional)</label>',
    'miniature.step3-title'
);

rep(
    '<p class="text-sm text-gray-600 mb-3">Tambahkan detail spesifik untuk semua gambar.</p>',
    '<p class="text-sm text-gray-600 mb-3" data-i18n="miniature.step3-desc">Tambahkan detail spesifik untuk semua gambar.</p>',
    'miniature.step3-desc'
);

rep(
    'id="miniature-manual-prompt" class="w-full p-3 rounded-lg border-2 min-h-[100px]" placeholder="Contoh: cute chibi style, ultra realistic, 8k"',
    'id="miniature-manual-prompt" class="w-full p-3 rounded-lg border-2 min-h-[100px]" data-i18n-placeholder="miniature.prompt-placeholder" placeholder="Contoh: cute chibi style, ultra realistic, 8k"',
    'miniature.prompt-placeholder'
);

rep(
    'id="miniature-generate-btn" class="w-full bg-[#4f46e5] text-white py-4 px-6 rounded-lg text-lg font-bold hover:bg-[#4338ca] transition-transform transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100" disabled>',
    'id="miniature-generate-btn" class="w-full bg-[#4f46e5] text-white py-4 px-6 rounded-lg text-lg font-bold hover:bg-[#4338ca] transition-transform transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100" data-i18n="miniature.gen-btn" disabled>',
    'miniature.gen-btn'
);

// ═══════════════════════════════════════════════════════════════
// KARIKATUR GENERATOR
// ═══════════════════════════════════════════════════════════════

rep(
    '<p class="text-lg text-gray-600 mt-2">Ubah fotomu menjadi berbagai style karikatur profesional dengan AI \uD83C\uDFA8</p>',
    '<p class="text-lg text-gray-600 mt-2" data-i18n="karikatur.desc">Ubah fotomu menjadi berbagai style karikatur profesional dengan AI \uD83C\uDFA8</p>',
    'karikatur.desc'
);

// Step 1 label — unique via karikatur-image-input post-anchor
repR(
    '(shadow-lg">1</div>\\s+)<label class="text-xl font-semibold text-gray-800">Unggah Foto</label>(\\s+</div>\\s+<label for="karikatur-image-input")',
    '$1<label class="text-xl font-semibold text-gray-800" data-i18n="karikatur.step1-title">Unggah Foto</label>$2',
    'karikatur.step1-title'
);

// Upload drag p — unique via karikatur-upload-prompt div
rep(
    '<div id="karikatur-upload-prompt">\r\n                                    <i class="fas fa-image text-5xl text-orange-400 mb-3"></i>\r\n                                    <p class="text-gray-700 font-semibold">Klik atau seret foto di sini</p>',
    '<div id="karikatur-upload-prompt">\r\n                                    <i class="fas fa-image text-5xl text-orange-400 mb-3"></i>\r\n                                    <p class="text-gray-700 font-semibold" data-i18n="karikatur.upload-drag">Klik atau seret foto di sini</p>',
    'karikatur.upload-drag'
);

// Remove photo button — wrap text in span
rep(
    'id="karikatur-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                    <i class="fas fa-times mr-1"></i> Hapus Foto',
    'id="karikatur-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                    <i class="fas fa-times mr-1"></i> <span data-i18n="unboxing.remove-photo">Hapus Foto</span>',
    'karikatur.remove-btn'
);

// Step 2 label
repR(
    '(shadow-lg">2</div>\\s+)<label class="text-xl font-semibold text-gray-800">Style Karikatur</label>',
    '$1<label class="text-xl font-semibold text-gray-800" data-i18n="karikatur.step2-title">Style Karikatur</label>',
    'karikatur.step2-title'
);

// Custom style input placeholder
rep(
    'id="karikatur-custom-style" class="w-full px-4 py-2 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none" placeholder="Masukkan style custom, contoh: disney style, ghibli style"',
    'id="karikatur-custom-style" class="w-full px-4 py-2 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none" data-i18n-placeholder="karikatur.custom-placeholder" placeholder="Masukkan style custom, contoh: disney style, ghibli style"',
    'karikatur.custom-placeholder'
);

// Step 3 label
repR(
    '(shadow-lg">3</div>\\s+)<label class="text-xl font-semibold text-gray-800">Tingkat Exaggeration</label>',
    '$1<label class="text-xl font-semibold text-gray-800" data-i18n="karikatur.step3-title">Tingkat Exaggeration</label>',
    'karikatur.step3-title'
);

// Step 6 label
repR(
    '(shadow-lg">6</div>\\s+)<label class="text-xl font-semibold text-gray-800">Jumlah Variasi</label>',
    '$1<label class="text-xl font-semibold text-gray-800" data-i18n="karikatur.step6-title">Jumlah Variasi</label>',
    'karikatur.step6-title'
);

// Count buttons 4/6/8 — anchored to karikatur-count-options
repR(
    '(<div id="karikatur-count-options"[^>]*>[\\s\\S]*?data-count="4"[^>]*>\\s+)<span>4 Gambar</span>',
    '$1<span data-i18n="maternity.count-4">4 Gambar</span>',
    'karikatur.count-4'
);
repR(
    '(<div id="karikatur-count-options"[^>]*>[\\s\\S]*?data-count="6"[^>]*>\\s+)<span>6 Gambar</span>',
    '$1<span data-i18n="maternity.count-6">6 Gambar</span>',
    'karikatur.count-6'
);
repR(
    '(<div id="karikatur-count-options"[^>]*>[\\s\\S]*?data-count="8"[^>]*>\\s+)<span>8 Gambar</span>',
    '$1<span data-i18n="maternity.count-8">8 Gambar</span>',
    'karikatur.count-8'
);

// Generate button span
rep(
    '<span>Generate Karikatur</span>',
    '<span data-i18n="karikatur.gen-btn">Generate Karikatur</span>',
    'karikatur.gen-btn'
);

// Results h2
repR(
    '(<h2 class="text-2xl font-bold text-gray-800">\\s+<i class="fas fa-images text-orange-500 mr-2"></i>\\s+)Hasil Karikatur(\\s+</h2>)',
    '$1<span data-i18n="karikatur.results-title">Hasil Karikatur</span>$2',
    'karikatur.results-title'
);

// Placeholder p
rep(
    '<p class="text-xl text-gray-600">Karikatur akan muncul di sini</p>',
    '<p class="text-xl text-gray-600" data-i18n="karikatur.placeholder">Karikatur akan muncul di sini</p>',
    'karikatur.placeholder'
);

rep(
    '<p class="text-sm text-gray-500 mt-2">Unggah foto dan pilih style untuk memulai</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="karikatur.placeholder-sub">Unggah foto dan pilih style untuk memulai</p>',
    'karikatur.placeholder-sub'
);

// ═══════════════════════════════════════════════════════════════
// PHOTO EDITOR PRO
// ═══════════════════════════════════════════════════════════════

rep(
    '<p class="text-lg text-gray-600 mt-2">Edit foto dengan preset profesional ala Lightroom \u2728\uD83D\uDCF8</p>',
    '<p class="text-lg text-gray-600 mt-2" data-i18n="photoeditor.desc">Edit foto dengan preset profesional ala Lightroom \u2728\uD83D\uDCF8</p>',
    'photoeditor.desc'
);

// Step 1 label — unique via photoeditor-image-input post-anchor
repR(
    '(shadow-lg">1</div>\\s+)<label class="text-xl font-semibold text-gray-800">Unggah Foto</label>(\\s+</div>\\s+<label for="photoeditor-image-input")',
    '$1<label class="text-xl font-semibold text-gray-800" data-i18n="photoeditor.step1-title">Unggah Foto</label>$2',
    'photoeditor.step1-title'
);

// Upload drag p — unique via photoeditor-upload-prompt div
rep(
    '<div id="photoeditor-upload-prompt">\r\n                                    <i class="fas fa-images text-5xl text-purple-400 mb-3"></i>\r\n                                    <p class="text-gray-700 font-semibold">Klik atau seret foto di sini</p>',
    '<div id="photoeditor-upload-prompt">\r\n                                    <i class="fas fa-images text-5xl text-purple-400 mb-3"></i>\r\n                                    <p class="text-gray-700 font-semibold" data-i18n="photoeditor.upload-drag">Klik atau seret foto di sini</p>',
    'photoeditor.upload-drag'
);

// Remove photo button
rep(
    'id="photoeditor-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                    <i class="fas fa-times mr-1"></i> Hapus Foto',
    'id="photoeditor-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                    <i class="fas fa-times mr-1"></i> <span data-i18n="unboxing.remove-photo">Hapus Foto</span>',
    'photoeditor.remove-btn'
);

// Preview placeholder
rep(
    '<p class="text-xl text-gray-600">Preview akan muncul di sini</p>',
    '<p class="text-xl text-gray-600" data-i18n="photoeditor.placeholder">Preview akan muncul di sini</p>',
    'photoeditor.placeholder'
);

rep(
    '<p class="text-sm text-gray-500 mt-2">Unggah foto untuk mulai editing</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="photoeditor.placeholder-sub">Unggah foto untuk mulai editing</p>',
    'photoeditor.placeholder-sub'
);

// Canvas tip
rep(
    'Preview di-scale untuk tampilan, download akan menggunakan ukuran original',
    '<span data-i18n="photoeditor.canvas-tip">Preview di-scale untuk tampilan, download akan menggunakan ukuran original</span>',
    'photoeditor.canvas-tip'
);

// ═══════════════════════════════════════════════════════════════
// DICT — EN
// ═══════════════════════════════════════════════════════════════
rep(
    "'carousel.placeholder-desc':'Your finished carousel will appear here.',\r\n            },",
    "'carousel.placeholder-desc':'Your finished carousel will appear here.',\r\n            // miniature\r\n            'miniature.desc':'Turn your photo into a unique AI miniature \u2728',\r\n            'miniature.placeholder':'20 AI miniature options will appear here',\r\n            'miniature.loading':'AI is shrinking you... Please wait!',\r\n            'miniature.step1-title':'1. Upload Your Photo (Required)',\r\n            'miniature.upload-drag':'Click or drag your photo here',\r\n            'miniature.step2-title':'2. Choose Aspect Ratio',\r\n            'miniature.step3-title':'3. Write Manual Prompt (Optional)',\r\n            'miniature.step3-desc':'Add specific details for all images.',\r\n            'miniature.prompt-placeholder':'Example: cute chibi style, ultra realistic, 8k',\r\n            'miniature.gen-btn':'Generate 6 Miniatures',\r\n            // karikatur\r\n            'karikatur.desc':'Transform your photo into professional caricature styles with AI \uD83C\uDFA8',\r\n            'karikatur.step1-title':'Upload Photo',\r\n            'karikatur.upload-drag':'Click or drag photo here',\r\n            'karikatur.step2-title':'Caricature Style',\r\n            'karikatur.custom-placeholder':'Enter custom style, e.g.: disney style, ghibli style',\r\n            'karikatur.step3-title':'Exaggeration Level',\r\n            'karikatur.step6-title':'Number of Variations',\r\n            'karikatur.gen-btn':'Generate Caricature',\r\n            'karikatur.results-title':'Caricature Results',\r\n            'karikatur.placeholder':'Caricature will appear here',\r\n            'karikatur.placeholder-sub':'Upload a photo and choose a style to start',\r\n            // photoeditor\r\n            'photoeditor.desc':'Edit photos with professional Lightroom-style presets \u2728\uD83D\uDCF8',\r\n            'photoeditor.step1-title':'Upload Photo',\r\n            'photoeditor.upload-drag':'Click or drag photo here',\r\n            'photoeditor.placeholder':'Preview will appear here',\r\n            'photoeditor.placeholder-sub':'Upload a photo to start editing',\r\n            'photoeditor.canvas-tip':'Preview is scaled for display; download will use the original size',\r\n            },",
    'dict.en'
);

// ═══════════════════════════════════════════════════════════════
// DICT — ID
// ═══════════════════════════════════════════════════════════════
rep(
    "'carousel.placeholder-desc':'Carousel yang sudah jadi akan muncul di sini.',\r\n            }",
    "'carousel.placeholder-desc':'Carousel yang sudah jadi akan muncul di sini.',\r\n            // miniature\r\n            'miniature.desc':'Ubah fotomu menjadi miniatur AI yang unik \u2728',\r\n            'miniature.placeholder':'20 Pilihan miniatur AI akan muncul di sini',\r\n            'miniature.loading':'AI sedang menyusutkan Anda... Mohon tunggu!',\r\n            'miniature.step1-title':'1. Unggah Fotomu (Wajib)',\r\n            'miniature.upload-drag':'Klik atau seret fotomu ke sini',\r\n            'miniature.step2-title':'2. Pilih Rasio Aspek',\r\n            'miniature.step3-title':'3. Tulis Prompt Manual (Opsional)',\r\n            'miniature.step3-desc':'Tambahkan detail spesifik untuk semua gambar.',\r\n            'miniature.prompt-placeholder':'Contoh: cute chibi style, ultra realistic, 8k',\r\n            'miniature.gen-btn':'Generate 6 Miniatur',\r\n            // karikatur\r\n            'karikatur.desc':'Ubah fotomu menjadi berbagai style karikatur profesional dengan AI \uD83C\uDFA8',\r\n            'karikatur.step1-title':'Unggah Foto',\r\n            'karikatur.upload-drag':'Klik atau seret foto di sini',\r\n            'karikatur.step2-title':'Style Karikatur',\r\n            'karikatur.custom-placeholder':'Masukkan style custom, contoh: disney style, ghibli style',\r\n            'karikatur.step3-title':'Tingkat Exaggeration',\r\n            'karikatur.step6-title':'Jumlah Variasi',\r\n            'karikatur.gen-btn':'Generate Karikatur',\r\n            'karikatur.results-title':'Hasil Karikatur',\r\n            'karikatur.placeholder':'Karikatur akan muncul di sini',\r\n            'karikatur.placeholder-sub':'Unggah foto dan pilih style untuk memulai',\r\n            // photoeditor\r\n            'photoeditor.desc':'Edit foto dengan preset profesional ala Lightroom \u2728\uD83D\uDCF8',\r\n            'photoeditor.step1-title':'Unggah Foto',\r\n            'photoeditor.upload-drag':'Klik atau seret foto di sini',\r\n            'photoeditor.placeholder':'Preview akan muncul di sini',\r\n            'photoeditor.placeholder-sub':'Unggah foto untuk mulai editing',\r\n            'photoeditor.canvas-tip':'Preview di-scale untuk tampilan, download akan menggunakan ukuran original',\r\n            }",
    'dict.id'
);

// ═══════════════════════════════════════════════════════════════
console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
