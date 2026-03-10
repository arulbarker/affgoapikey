// i18n_patch25.js — Sticker Creator, Hair Generator, Expression Changer
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
// STICKER CREATOR
// ═══════════════════════════════════════════════════════════════

rep(
    '<p class="text-gray-600 mt-2 max-w-2xl mx-auto">\r\n                        Buat stiker kustom dari fotomu dan tempelkan di atas foto aslinya!\r\n                    </p>',
    '<p class="text-gray-600 mt-2 max-w-2xl mx-auto" data-i18n="sticker.desc">\r\n                        Buat stiker kustom dari fotomu dan tempelkan di atas foto aslinya!\r\n                    </p>',
    'sticker.desc'
);

rep(
    '<h2 class="text-2xl font-semibold text-center md:text-left">1. Unggah Foto</h2>',
    '<h2 class="text-2xl font-semibold text-center md:text-left" data-i18n="sticker.step1-title">1. Unggah Foto</h2>',
    'sticker.step1-title'
);

rep(
    'id="sticker-upload-placeholder">Pilih gambar untuk memulai...</span>',
    'id="sticker-upload-placeholder" data-i18n="sticker.upload-placeholder">Pilih gambar untuk memulai...</span>',
    'sticker.upload-placeholder'
);

rep(
    'id="sticker-upload-button" class="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg">\r\n                            Pilih Gambar',
    'id="sticker-upload-button" class="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg" data-i18n="sticker.upload-btn">\r\n                            Pilih Gambar',
    'sticker.upload-btn'
);

rep(
    '<label for="sticker-prompt-addition" class="block text-sm font-medium text-gray-600 mb-1">Tambahkan gaya spesifik (opsional):</label>',
    '<label for="sticker-prompt-addition" class="block text-sm font-medium text-gray-600 mb-1" data-i18n="sticker.style-label">Tambahkan gaya spesifik (opsional):</label>',
    'sticker.style-label'
);

rep(
    'id="sticker-prompt-addition" class="w-full bg-gray-100 border border-gray-300 text-gray-800 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none" placeholder="Contoh: gaya pixel art, cat air, komik"',
    'id="sticker-prompt-addition" class="w-full bg-gray-100 border border-gray-300 text-gray-800 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none" data-i18n-placeholder="sticker.style-placeholder" placeholder="Contoh: gaya pixel art, cat air, komik"',
    'sticker.style-placeholder'
);

rep(
    'id="sticker-generate-button" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg">\r\n                            Buat Stiker!',
    'id="sticker-generate-button" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg" data-i18n="sticker.gen-btn">\r\n                            Buat Stiker!',
    'sticker.gen-btn'
);

rep(
    '<h2 class="text-2xl font-semibold text-center md:text-left">2. Hasil Stiker</h2>',
    '<h2 class="text-2xl font-semibold text-center md:text-left" data-i18n="sticker.step2-title">2. Hasil Stiker</h2>',
    'sticker.step2-title'
);

rep(
    'id="sticker-output-placeholder" class="text-gray-500 text-center p-4">Hasil stiker akan muncul di sini...</span>',
    'id="sticker-output-placeholder" class="text-gray-500 text-center p-4" data-i18n="sticker.output-placeholder">Hasil stiker akan muncul di sini...</span>',
    'sticker.output-placeholder'
);

rep(
    'id="sticker-drag-instruction" class="text-center text-gray-500 text-sm hidden">Tips: Anda bisa menggeser dan mengubah ukuran stiker!</p>',
    'id="sticker-drag-instruction" class="text-center text-gray-500 text-sm hidden" data-i18n="sticker.drag-tip">Tips: Anda bisa menggeser dan mengubah ukuran stiker!</p>',
    'sticker.drag-tip'
);

rep(
    '<label for="sticker-tolerance-slider" class="block text-sm font-medium text-center text-gray-600 mb-1">Geser untuk Atur Toleransi Latar</label>',
    '<label for="sticker-tolerance-slider" class="block text-sm font-medium text-center text-gray-600 mb-1" data-i18n="sticker.tolerance-label">Geser untuk Atur Toleransi Latar</label>',
    'sticker.tolerance-label'
);

rep(
    'id="sticker-remove-bg-button" class="w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 hidden shadow-md hover:shadow-lg">\r\n                                Hapus Latar',
    'id="sticker-remove-bg-button" class="w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 hidden shadow-md hover:shadow-lg" data-i18n="sticker.remove-bg-btn">\r\n                                Hapus Latar',
    'sticker.remove-bg-btn'
);

rep(
    'id="sticker-download-button" class="w-full text-center bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 hidden shadow-md hover:shadow-lg">\r\n                                Unduh Hasil',
    'id="sticker-download-button" class="w-full text-center bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 hidden shadow-md hover:shadow-lg" data-i18n="sticker.download-btn">\r\n                                Unduh Hasil',
    'sticker.download-btn'
);

// ═══════════════════════════════════════════════════════════════
// HAIR GENERATOR
// ═══════════════════════════════════════════════════════════════

// h1 — NOT inside <header>, so not auto-covered by headers dict
repR(
    'class="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">\\s+Generator Perubah Rambut',
    'class="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" data-i18n="hair.title">\r\n                        Generator Perubah Rambut',
    'hair.title'
);

rep(
    'id="hair-upload-text">Unggah Foto</span>',
    'id="hair-upload-text" data-i18n="hair.upload-text">Unggah Foto</span>',
    'hair.upload-text'
);

// Remove photo button — wrap in span (36-space indent)
rep(
    'id="hair-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                    <i class="fas fa-times mr-1"></i> Hapus Foto',
    'id="hair-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                    <i class="fas fa-times mr-1"></i> <span data-i18n="unboxing.remove-photo">Hapus Foto</span>',
    'hair.remove-btn'
);

rep(
    '<label class="block text-sm font-medium text-gray-300 mb-2">Pilih Gender</label>',
    '<label class="block text-sm font-medium text-gray-300 mb-2" data-i18n="hair.gender-label">Pilih Gender</label>',
    'hair.gender-label'
);

rep(
    'id="hair-gender-wanita"\r\n                                    class="gender-btn active w-1/2 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700"\r\n                                >\r\n                                    Wanita',
    'id="hair-gender-wanita"\r\n                                    class="gender-btn active w-1/2 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700"\r\n                                    data-i18n="hair.gender-female"\r\n                                >\r\n                                    Wanita',
    'hair.gender-female'
);

rep(
    'id="hair-gender-pria"\r\n                                    class="gender-btn w-1/2 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700"\r\n                                >\r\n                                    Pria',
    'id="hair-gender-pria"\r\n                                    class="gender-btn w-1/2 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700"\r\n                                    data-i18n="hair.gender-male"\r\n                                >\r\n                                    Pria',
    'hair.gender-male'
);

rep(
    '<label class="block text-sm font-medium text-gray-300 mb-1">Pilih Gaya Rambut</label>',
    '<label class="block text-sm font-medium text-gray-300 mb-1" data-i18n="hair.style-label">Pilih Gaya Rambut</label>',
    'hair.style-label'
);

rep(
    '<label class="block text-sm font-medium text-gray-300 mb-1">Pilih Warna Rambut</label>',
    '<label class="block text-sm font-medium text-gray-300 mb-1" data-i18n="hair.color-label">Pilih Warna Rambut</label>',
    'hair.color-label'
);

rep(
    '<label class="block text-sm font-medium text-gray-300 mb-2">Rasio Gambar</label>',
    '<label class="block text-sm font-medium text-gray-300 mb-2" data-i18n="hair.ratio-label">Rasio Gambar</label>',
    'hair.ratio-label'
);

// Generate button — wrap text in span (unique context via hair-generate-btn)
rep(
    '<i class="fas fa-magic mr-2"></i>\r\n                            ubah Rambutnya!',
    '<i class="fas fa-magic mr-2"></i>\r\n                            <span data-i18n="hair.gen-btn">ubah Rambutnya!</span>',
    'hair.gen-btn'
);

rep(
    '<h3 class="text-2xl font-bold text-gray-300 mb-3">Hasil Hair Generator Anda</h3>',
    '<h3 class="text-2xl font-bold text-gray-300 mb-3" data-i18n="hair.placeholder-title">Hasil Hair Generator Anda</h3>',
    'hair.placeholder-title'
);

repR(
    '(<h3 class="text-2xl font-bold text-gray-300 mb-3"[^>]*>[\\s\\S]*?</h3>\\s+)<p class="text-gray-500 max-w-md">',
    '$1<p class="text-gray-500 max-w-md" data-i18n="hair.placeholder-desc">',
    'hair.placeholder-desc'
);

// Results title h3 — anchored to hair-results-container
repR(
    '(<div id="hair-results-container"[\\s\\S]*?)<h3 class="text-xl font-bold text-gray-200">',
    '$1<h3 class="text-xl font-bold text-gray-200" data-i18n="hair.results-title">',
    'hair.results-title'
);

// Download all — wrap in span
rep(
    'id="hair-download-all-btn" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition transform hover:scale-105 flex items-center gap-2">\r\n                                <i class="fas fa-download"></i>\r\n                                Download Semua',
    'id="hair-download-all-btn" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition transform hover:scale-105 flex items-center gap-2">\r\n                                <i class="fas fa-download"></i>\r\n                                <span data-i18n="family.download-all">Download Semua</span>',
    'hair.download-all'
);

// ═══════════════════════════════════════════════════════════════
// EXPRESSION CHANGER
// ═══════════════════════════════════════════════════════════════

// Desc p — anchored via Expression Changer h1
repR(
    '(Expression Changer[\\s\\S]*?</h1>\\s+)<p class="text-lg text-gray-600">',
    '$1<p class="text-lg text-gray-600" data-i18n="expression.desc">',
    'expression.desc'
);

rep(
    '<h3 class="text-base font-semibold text-gray-800">Unggah Foto Wajah</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="expression.step1-title">Unggah Foto Wajah</h3>',
    'expression.step1-title'
);

// Upload p with emoji — use Unicode escapes matching the literal emoji
rep(
    '<p class="mt-3 text-sm md:text-base font-semibold">\uD83D\uDE0A Klik atau seret foto close-up wajah</p>',
    '<p class="mt-3 text-sm md:text-base font-semibold" data-i18n="expression.upload-p">\uD83D\uDE0A Klik atau seret foto close-up wajah</p>',
    'expression.upload-p'
);

rep(
    '<h3 class="text-base font-semibold text-gray-800">Pilih Ekspresi Target</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="expression.step2-title">Pilih Ekspresi Target</h3>',
    'expression.step2-title'
);

rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">\u2728 Ekspresi Kustom Anda:</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="expression.custom-label">\u2728 Ekspresi Kustom Anda:</label>',
    'expression.custom-label'
);

rep(
    'id="expression-custom-input" class="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" placeholder="Contoh: senyum malu-malu, wajah misterius, ekspresi memikat..."',
    'id="expression-custom-input" class="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" data-i18n-placeholder="expression.custom-placeholder" placeholder="Contoh: senyum malu-malu, wajah misterius, ekspresi memikat..."',
    'expression.custom-placeholder'
);

rep(
    '<p class="text-xs text-gray-500 mt-2">\uD83D\uDCA1 Deskripsikan ekspresi yang Anda inginkan dengan detail</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="expression.custom-tip">\uD83D\uDCA1 Deskripsikan ekspresi yang Anda inginkan dengan detail</p>',
    'expression.custom-tip'
);

rep(
    '<h3 class="text-base font-semibold text-gray-800">Intensitas Ekspresi</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="expression.step3-title">Intensitas Ekspresi</h3>',
    'expression.step3-title'
);

rep(
    '<h3 class="text-base font-semibold text-gray-800">Jumlah Variasi</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="expression.step4-title">Jumlah Variasi</h3>',
    'expression.step4-title'
);

rep(
    '<span>Ubah Ekspresi</span>',
    '<span data-i18n="expression.gen-btn">Ubah Ekspresi</span>',
    'expression.gen-btn'
);

// Gen note — anchored via expression-generate-btn
repR(
    '(id="expression-generate-btn"[\\s\\S]*?</button>\\s+)<div class="text-center text-xs text-gray-500 mt-2">',
    '$1<div class="text-center text-xs text-gray-500 mt-2" data-i18n="expression.gen-note">',
    'expression.gen-note'
);

rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Expression Changer</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="expression.placeholder-title">Hasil Expression Changer</h3>',
    'expression.placeholder-title'
);

rep(
    '<p class="mt-1 text-sm">Foto dengan ekspresi baru akan muncul di sini</p>',
    '<p class="mt-1 text-sm" data-i18n="expression.placeholder-desc">Foto dengan ekspresi baru akan muncul di sini</p>',
    'expression.placeholder-desc'
);

// Results header h3 — anchored via expression-results-container
repR(
    '(<div id="expression-results-container"[\\s\\S]*?)<h3 class="text-xl md:text-2xl font-bold text-gray-800">',
    '$1<h3 class="text-xl md:text-2xl font-bold text-gray-800" data-i18n="expression.results-header">',
    'expression.results-header'
);

// Download all — wrap in span
rep(
    'id="expression-download-all-btn" class="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition transform hover:scale-105 flex items-center gap-2">\r\n                                        <i class="fas fa-download"></i>\r\n                                        Download Semua',
    'id="expression-download-all-btn" class="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition transform hover:scale-105 flex items-center gap-2">\r\n                                        <i class="fas fa-download"></i>\r\n                                        <span data-i18n="family.download-all">Download Semua</span>',
    'expression.download-all'
);

// ═══════════════════════════════════════════════════════════════
// DICT — EN
// ═══════════════════════════════════════════════════════════════
rep(
    "'halu.gen-btn':'Create 6 Fantasy Photos',\r\n            },",
    "'halu.gen-btn':'Create 6 Fantasy Photos',\r\n            // sticker\r\n            'sticker.desc':'Create custom stickers from your photo and stick them on top of the original!',\r\n            'sticker.step1-title':'1. Upload Photo',\r\n            'sticker.upload-placeholder':'Select an image to start...',\r\n            'sticker.upload-btn':'Choose Image',\r\n            'sticker.style-label':'Add specific style (optional):',\r\n            'sticker.style-placeholder':'Example: pixel art style, watercolor, comic',\r\n            'sticker.gen-btn':'Create Sticker!',\r\n            'sticker.step2-title':'2. Sticker Result',\r\n            'sticker.output-placeholder':'Sticker result will appear here...',\r\n            'sticker.drag-tip':'Tips: You can drag and resize the sticker!',\r\n            'sticker.tolerance-label':'Drag to Set Background Tolerance',\r\n            'sticker.remove-bg-btn':'Remove Background',\r\n            'sticker.download-btn':'Download Result',\r\n            // hair\r\n            'hair.title':'Hair Generator',\r\n            'hair.upload-text':'Upload Photo',\r\n            'hair.gender-label':'Choose Gender',\r\n            'hair.gender-female':'Female',\r\n            'hair.gender-male':'Male',\r\n            'hair.style-label':'Choose Hairstyle',\r\n            'hair.color-label':'Choose Hair Color',\r\n            'hair.ratio-label':'Image Ratio',\r\n            'hair.gen-btn':'Change the Hair!',\r\n            'hair.placeholder-title':'Your Hair Generator Results',\r\n            'hair.placeholder-desc':'Upload photo and choose a hairstyle. Will generate 4 variation results that can be previewed and downloaded!',\r\n            'hair.results-title':'Hair Generator Results',\r\n            // expression\r\n            'expression.desc':'Change facial expressions in photos with advanced AI. From smiling to serious, all expressions can be created naturally!',\r\n            'expression.step1-title':'Upload Face Photo',\r\n            'expression.upload-p':'\uD83D\uDE0A Click or drag close-up face photo',\r\n            'expression.step2-title':'Choose Target Expression',\r\n            'expression.custom-label':'\u2728 Your Custom Expression:',\r\n            'expression.custom-placeholder':'Example: shy smile, mysterious face, captivating expression...',\r\n            'expression.custom-tip':'\uD83D\uDCA1 Describe the expression you want in detail',\r\n            'expression.step3-title':'Expression Intensity',\r\n            'expression.step4-title':'Number of Variations',\r\n            'expression.gen-btn':'Change Expression',\r\n            'expression.gen-note':'\u26A1 Generation process takes 15-30 seconds per variation',\r\n            'expression.placeholder-title':'Expression Changer Results',\r\n            'expression.placeholder-desc':'Photos with new expressions will appear here',\r\n            'expression.results-header':'\uD83D\uDE0A Expression Changer Results \uD83C\uDFAD',\r\n            },",
    'dict.en'
);

// ═══════════════════════════════════════════════════════════════
// DICT — ID
// ═══════════════════════════════════════════════════════════════
rep(
    "'halu.gen-btn':'Buat 6 Foto Halu',\r\n            }",
    "'halu.gen-btn':'Buat 6 Foto Halu',\r\n            // sticker\r\n            'sticker.desc':'Buat stiker kustom dari fotomu dan tempelkan di atas foto aslinya!',\r\n            'sticker.step1-title':'1. Unggah Foto',\r\n            'sticker.upload-placeholder':'Pilih gambar untuk memulai...',\r\n            'sticker.upload-btn':'Pilih Gambar',\r\n            'sticker.style-label':'Tambahkan gaya spesifik (opsional):',\r\n            'sticker.style-placeholder':'Contoh: gaya pixel art, cat air, komik',\r\n            'sticker.gen-btn':'Buat Stiker!',\r\n            'sticker.step2-title':'2. Hasil Stiker',\r\n            'sticker.output-placeholder':'Hasil stiker akan muncul di sini...',\r\n            'sticker.drag-tip':'Tips: Anda bisa menggeser dan mengubah ukuran stiker!',\r\n            'sticker.tolerance-label':'Geser untuk Atur Toleransi Latar',\r\n            'sticker.remove-bg-btn':'Hapus Latar',\r\n            'sticker.download-btn':'Unduh Hasil',\r\n            // hair\r\n            'hair.title':'Generator Perubah Rambut',\r\n            'hair.upload-text':'Unggah Foto',\r\n            'hair.gender-label':'Pilih Gender',\r\n            'hair.gender-female':'Wanita',\r\n            'hair.gender-male':'Pria',\r\n            'hair.style-label':'Pilih Gaya Rambut',\r\n            'hair.color-label':'Pilih Warna Rambut',\r\n            'hair.ratio-label':'Rasio Gambar',\r\n            'hair.gen-btn':'ubah Rambutnya!',\r\n            'hair.placeholder-title':'Hasil Hair Generator Anda',\r\n            'hair.placeholder-desc':'Upload foto dan pilih gaya rambut. Akan generate 4 variasi hasil yang bisa di-preview dan download!',\r\n            'hair.results-title':'Hasil Hair Generator',\r\n            // expression\r\n            'expression.desc':'Ubah ekspresi wajah dalam foto dengan AI canggih. Dari senyum hingga serius, semua ekspresi bisa diciptakan dengan natural!',\r\n            'expression.step1-title':'Unggah Foto Wajah',\r\n            'expression.upload-p':'\uD83D\uDE0A Klik atau seret foto close-up wajah',\r\n            'expression.step2-title':'Pilih Ekspresi Target',\r\n            'expression.custom-label':'\u2728 Ekspresi Kustom Anda:',\r\n            'expression.custom-placeholder':'Contoh: senyum malu-malu, wajah misterius, ekspresi memikat...',\r\n            'expression.custom-tip':'\uD83D\uDCA1 Deskripsikan ekspresi yang Anda inginkan dengan detail',\r\n            'expression.step3-title':'Intensitas Ekspresi',\r\n            'expression.step4-title':'Jumlah Variasi',\r\n            'expression.gen-btn':'Ubah Ekspresi',\r\n            'expression.gen-note':'\u26A1 Proses generasi memerlukan waktu 15-30 detik per variasi',\r\n            'expression.placeholder-title':'Hasil Expression Changer',\r\n            'expression.placeholder-desc':'Foto dengan ekspresi baru akan muncul di sini',\r\n            'expression.results-header':'\uD83D\uDE0A Hasil Expression Changer \uD83C\uDFAD',\r\n            }",
    'dict.id'
);

// ═══════════════════════════════════════════════════════════════
console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
