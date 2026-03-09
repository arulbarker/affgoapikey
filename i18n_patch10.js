// i18n_patch10.js — Affiliate Photo, Virtual Try-On, Religious Theme: wire data-i18n
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

// ================================================================
// AFFILIATE PHOTO (content-affiliate)
// ================================================================

// 1. h2 step 1 "Unggah Gambar Produk"
rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">1. Unggah Gambar Produk</h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800" data-i18n="affphoto.step1-title">1. Unggah Gambar Produk</h2>',
    'affphoto.step1-title'
);

// 2. Upload span "Pilih Gambar Produk (Bisa lebih dari 1)"
rep(
    '<span>Pilih Gambar Produk (Bisa lebih dari 1)</span>',
    '<span data-i18n="affphoto.upload-span">Pilih Gambar Produk (Bisa lebih dari 1)</span>',
    'affphoto.upload-span'
);

// 3. h2 step 2 "Deskripsi Produk"
rep(
    '<h2 class="text-xl font-semibold text-gray-800">2. Deskripsi Produk</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="affphoto.step2-title">2. Deskripsi Produk</h2>',
    'affphoto.step2-title'
);

// 4. "Buat Deskripsi" button
rep(
    '> ✨ Buat Deskripsi </button>',
    '> ✨ <span data-i18n="affphoto.gen-desc-btn">Buat Deskripsi</span> </button>',
    'affphoto.gen-desc-btn'
);

// 5. Textarea placeholder (product desc)
repR(
    '(id="broll-product-desc-input"[^>]*placeholder=")Contoh: Smartwatch X200',
    '$1Contoh: Smartwatch X200',
    'affphoto.desc-placeholder (skip — dynamic content)'
);

// 6. h2 step 3 "Unggah Foto Model (Opsional)" — restructure
rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">3. Unggah Foto Model <span class="text-sm text-gray-500">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800"><span data-i18n="affphoto.step3-title">3. Unggah Foto Model</span> <span class="text-sm text-gray-500" data-i18n="affphoto.optional">(Opsional)</span></h2>',
    'affphoto.step3-title'
);

// 7. "Pilih Foto Model" span
rep(
    '<span>Pilih Foto Model</span>',
    '<span data-i18n="affphoto.pick-model">Pilih Foto Model</span>',
    'affphoto.pick-model'
);

// 8. h2 step 4 "Tema Foto (Opsional)"
rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">4. Tema Foto <span class="text-sm text-gray-500">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800"><span data-i18n="affphoto.step4-title">4. Tema Foto</span> <span class="text-sm text-gray-500" data-i18n="affphoto.optional">(Opsional)</span></h2>',
    'affphoto.step4-title'
);

// 9. "Tidak Ada" theme button
rep(
    '<i class="fas fa-ban mr-1"></i>Tidak Ada',
    '<i class="fas fa-ban mr-1"></i><span data-i18n="affphoto.no-theme">Tidak Ada</span>',
    'affphoto.no-theme'
);

// 10. h2 step 5 "Unggah Background (Opsional)"
rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">5. Unggah Background <span class="text-sm text-gray-500">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800"><span data-i18n="affphoto.step5-title">5. Unggah Background</span> <span class="text-sm text-gray-500" data-i18n="affphoto.optional">(Opsional)</span></h2>',
    'affphoto.step5-title'
);

// 11. "Pilih Background Custom" span
rep(
    '<span>Pilih Background Custom</span>',
    '<span data-i18n="affphoto.pick-bg">Pilih Background Custom</span>',
    'affphoto.pick-bg'
);

// 12. h2 step 6 "Rasio Aspek"
rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">6. Rasio Aspek</h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800" data-i18n="affphoto.step6-title">6. Rasio Aspek</h2>',
    'affphoto.step6-title'
);

// 13. h2 step 7 "Jumlah Foto"
rep(
    '<h2 class="text-xl font-semibold mb-3 text-gray-800">7. Jumlah Foto</h2>',
    '<h2 class="text-xl font-semibold mb-3 text-gray-800" data-i18n="affphoto.step7-title">7. Jumlah Foto</h2>',
    'affphoto.step7-title'
);

// 14. Count buttons 7/14/20 Foto
rep(
    '<i class="fas fa-images mr-2"></i>7 Foto',
    '<i class="fas fa-images mr-2"></i><span data-i18n="affphoto.count-7">7 Foto</span>',
    'affphoto.count-7'
);
rep(
    '<i class="fas fa-images mr-2"></i>14 Foto',
    '<i class="fas fa-images mr-2"></i><span data-i18n="affphoto.count-14">14 Foto</span>',
    'affphoto.count-14'
);
rep(
    '<i class="fas fa-images mr-2"></i>20 Foto',
    '<i class="fas fa-images mr-2"></i><span data-i18n="affphoto.count-20">20 Foto</span>',
    'affphoto.count-20'
);

// 15. Generate button — restructure
rep(
    '<span>Buat <span id="broll-count-text">7</span> Pose Produk</span>',
    '<span><span data-i18n="affphoto.gen-prefix">Buat</span> <span id="broll-count-text">7</span> <span data-i18n="affphoto.gen-suffix">Pose Produk</span></span>',
    'affphoto.generate-btn'
);

// 16. Results header suffix
rep(
    '<span id="broll-result-count">0</span> Foto Berhasil Di-generate',
    '<span id="broll-result-count">0</span> <span data-i18n="affphoto.results-suffix">Foto Berhasil Di-generate</span>',
    'affphoto.results-suffix'
);

// 17. Download Semua button (in affiliate results)
repR(
    '(<button id="broll-download-all-btn"[^>]*>)[\\r\\n\\s]*(<i class="fas fa-download"></i>)[\\r\\n\\s]*(Download Semua)',
    '$1\r\n                                <i class="fas fa-download"></i>\r\n                                <span data-i18n="affphoto.download-all">Download Semua</span>',
    'affphoto.download-all'
);

// ================================================================
// VIRTUAL TRY-ON (content-virtual-tryon)
// ================================================================

// 18. Header desc p
rep(
    '<p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">\n                        Coba produk fashion secara virtual dengan AI. Pilih angle dan dapatkan hasil profesional!\n                    </p>',
    '<p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" data-i18n="tryon.desc">\n                        Coba produk fashion secara virtual dengan AI. Pilih angle dan dapatkan hasil profesional!\n                    </p>',
    'tryon.desc'
);

// 19. h3 step 1 "Unggah Foto Produk"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Unggah Foto Produk</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tryon.upload-product">Unggah Foto Produk</h3>',
    'tryon.upload-product'
);

// 20. Upload placeholder "Klik atau seret produk"
rep(
    '<p class="text-sm">Klik atau seret produk</p>',
    '<p class="text-sm" data-i18n="tryon.drag-product">Klik atau seret produk</p>',
    'tryon.drag-product'
);

// 21. h3 step 2 "Unggah Foto Model"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Unggah Foto Model</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tryon.upload-model">Unggah Foto Model</h3>',
    'tryon.upload-model'
);

// 22. "Klik atau seret foto model"
rep(
    '<p class="text-sm">Klik atau seret foto model</p>',
    '<p class="text-sm" data-i18n="tryon.drag-model">Klik atau seret foto model</p>',
    'tryon.drag-model'
);

// 23. h3 step 3 "Pilih Angle Foto"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Pilih Angle Foto</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="tryon.angle-title">Pilih Angle Foto</h3>',
    'tryon.angle-title'
);

// 24. Placeholder h3 "Hasil Virtual Try-On"
rep(
    '<h3 class="font-bold text-2xl mb-3 text-teal-600">Hasil Virtual Try-On</h3>',
    '<h3 class="font-bold text-2xl mb-3 text-teal-600" data-i18n="tryon.empty-title">Hasil Virtual Try-On</h3>',
    'tryon.empty-title'
);

// 25. Placeholder desc
rep(
    '<p class="text-gray-500 text-base max-w-md">Upload produk dan foto model, pilih angle, dan hasil akan muncul di sini!</p>',
    '<p class="text-gray-500 text-base max-w-md" data-i18n="tryon.empty-desc">Upload produk dan foto model, pilih angle, dan hasil akan muncul di sini!</p>',
    'tryon.empty-desc'
);

// ================================================================
// RELIGIOUS THEME (content-affiliate-islami)
// ================================================================

// 26. Header desc p
repR(
    '(<p class="text-lg text-gray-600">)[\\r\\n\\s]+(Foto produk affiliate untuk 5 agama)',
    '<p class="text-lg text-gray-600" data-i18n="religious.desc">\r\n                        $2',
    'religious.desc'
);

// 27. h3 step 1 "Upload Foto Produk" (islami context)
repR(
    '(<div class="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-bold text-sm shadow-lg">1</div>[\\r\\n\\s]+<h3 class="text-base font-semibold text-gray-800">)Upload Foto Produk(</h3>)',
    '$1<span data-i18n="religious.upload-product">Upload Foto Produk</span>$2',
    'religious.upload-product'
);

// 28. Upload placeholder p
rep(
    '<p class="mt-3 text-sm md:text-base font-semibold">📦 Upload foto produk</p>',
    '<p class="mt-3 text-sm md:text-base font-semibold" data-i18n="religious.upload-placeholder">📦 Upload foto produk</p>',
    'religious.upload-placeholder'
);

// 29. h3 step 2 "Pilih Model"
rep(
    '<h3 class="text-base font-semibold text-gray-800">Pilih Model</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="religious.model-title">Pilih Model</h3>',
    'religious.model-title'
);

// 30. Model type buttons
rep(
    '<i class="fas fa-user-slash mr-1"></i>Manekin',
    '<i class="fas fa-user-slash mr-1"></i><span data-i18n="religious.mannequin">Manekin</span>',
    'religious.mannequin'
);
rep(
    '<i class="fas fa-user-lock mr-1"></i>Model Islami (Blur)',
    '<i class="fas fa-user-lock mr-1"></i><span data-i18n="religious.model-blur">Model Islami (Blur)</span>',
    'religious.model-blur'
);
rep(
    '<i class="fas fa-user mr-1"></i>Model Islami (Non Blur)',
    '<i class="fas fa-user mr-1"></i><span data-i18n="religious.model-nonblur">Model Islami (Non Blur)</span>',
    'religious.model-nonblur'
);

// 31. h3 step 3 "Kategori Usia"
rep(
    '<h3 class="text-base font-semibold text-gray-800">Kategori Usia</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="religious.age-title">Kategori Usia</h3>',
    'religious.age-title'
);

// 32. Age buttons
rep(
    '<i class="fas fa-user mr-1"></i>Dewasa',
    '<i class="fas fa-user mr-1"></i><span data-i18n="religious.adult">Dewasa</span>',
    'religious.adult'
);
rep(
    '<i class="fas fa-child mr-1"></i>Anak-anak',
    '<i class="fas fa-child mr-1"></i><span data-i18n="religious.child">Anak-anak</span>',
    'religious.child'
);
rep(
    '<i class="fas fa-baby-carriage mr-1"></i>Balita',
    '<i class="fas fa-baby-carriage mr-1"></i><span data-i18n="religious.toddler">Balita</span>',
    'religious.toddler'
);
rep(
    '<i class="fas fa-baby mr-1"></i>Bayi',
    '<i class="fas fa-baby mr-1"></i><span data-i18n="religious.baby">Bayi</span>',
    'religious.baby'
);

// 33. Theme count span "(50 tema)"
rep(
    '<span id="islami-theme-count" class="text-xs text-gray-500">(50 tema)</span>',
    '<span id="islami-theme-count" class="text-xs text-gray-500" data-i18n="religious.theme-count">(50 tema)</span>',
    'religious.theme-count'
);

// 34. "Semua" category filter
rep(
    '<i class="fas fa-globe mr-1"></i>Semua',
    '<i class="fas fa-globe mr-1"></i><span data-i18n="religious.all">Semua</span>',
    'religious.all'
);

// 35. h3 step 5 "Aspek Rasio"
rep(
    '<h3 class="text-base font-semibold text-gray-800">Aspek Rasio</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="religious.aspect-title">Aspek Rasio</h3>',
    'religious.aspect-title'
);

// 36. h3 step 6 "Jumlah Foto" (islami context — emerald color step 6)
repR(
    '(from-emerald-500 to-emerald-600 text-white font-bold text-sm shadow-lg">6</div>[\\r\\n\\s]+<h3 class="text-base font-semibold text-gray-800">)Jumlah Foto(</h3>)',
    '$1<span data-i18n="religious.count-title">Jumlah Foto</span>$2',
    'religious.count-title'
);

// 37. Count buttons
rep(
    '<button type="button" data-value="4" class="option-btn-islami">4 Foto</button>',
    '<button type="button" data-value="4" class="option-btn-islami" data-i18n="religious.count-4">4 Foto</button>',
    'religious.count-4'
);
rep(
    '<button type="button" data-value="6" class="option-btn-islami selected">6 Foto</button>',
    '<button type="button" data-value="6" class="option-btn-islami selected" data-i18n="religious.count-6">6 Foto</button>',
    'religious.count-6'
);
rep(
    '<button type="button" data-value="8" class="option-btn-islami">8 Foto</button>',
    '<button type="button" data-value="8" class="option-btn-islami" data-i18n="religious.count-8">8 Foto</button>',
    'religious.count-8'
);

// 38. Generate button span
rep(
    '<span>Generate Foto Islami</span>',
    '<span data-i18n="religious.generate-btn">Generate Foto Islami</span>',
    'religious.generate-btn'
);

// 39. Time note
rep(
    '⚡ Proses memerlukan waktu 20-40 detik per foto',
    '<span data-i18n="religious.time-note">⚡ Proses memerlukan waktu 20-40 detik per foto</span>',
    'religious.time-note'
);

// 40. Results placeholder header
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Foto Affiliate Agama</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="religious.empty-title">Hasil Foto Affiliate Agama</h3>',
    'religious.empty-title'
);

// 41. Results placeholder desc
rep(
    '<p class="mt-1 text-sm">Foto produk dengan tema agama dan budaya pilihan Anda akan muncul di sini</p>',
    '<p class="mt-1 text-sm" data-i18n="religious.empty-desc">Foto produk dengan tema agama dan budaya pilihan Anda akan muncul di sini</p>',
    'religious.empty-desc'
);

// 42. Tips text (has <strong> inside)
repR(
    '(<p class="text-xs text-purple-700">)[\\r\\n\\s]+(<i class="fas fa-lightbulb mr-1"></i>)[\\r\\n\\s]+(<strong>Tips:</strong>)',
    '<p class="text-xs text-purple-700" data-i18n="religious.tips">\r\n                                        $2\r\n                                        $3',
    'religious.tips'
);

// 43. Results container header
repR(
    '(<h3 class="font-semibold text-lg text-slate-600">)[\\r\\n\\s]+(<i class="fas fa-sparkles mr-2"[^>]*></i>)[\\r\\n\\s]+(Hasil Foto Affiliate Agama)',
    '$1\r\n                                    $2\r\n                                    <span data-i18n="religious.results-title">Hasil Foto Affiliate Agama</span>',
    'religious.results-title'
);

// 44. Download Semua (islami)
repR(
    '(<button id="islami-download-all-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-download"></i>)[\\r\\n\\s]+(<span>Download Semua</span>)',
    '$1\r\n                                        $2\r\n                                        <span data-i18n="religious.download-all">Download Semua</span>',
    'religious.download-all'
);

// ================================================================
// ADD DICTIONARY KEYS — insert after walking.results-suffix
// ================================================================

// EN keys
rep(
    "'walking.results-suffix':'Walking Pad Photos',",
    `'walking.results-suffix':'Walking Pad Photos',
                // Affiliate Photo tab
                'affphoto.step1-title':'1. Upload Product Photo',
                'affphoto.upload-span':'Select Product Photo (Multiple allowed)',
                'affphoto.step2-title':'2. Product Description',
                'affphoto.gen-desc-btn':'Generate Description',
                'affphoto.step3-title':'3. Upload Model Photo',
                'affphoto.optional':'(Optional)',
                'affphoto.pick-model':'Select Model Photo',
                'affphoto.step4-title':'4. Photo Theme',
                'affphoto.no-theme':'None',
                'affphoto.step5-title':'5. Upload Background',
                'affphoto.pick-bg':'Select Custom Background',
                'affphoto.step6-title':'6. Aspect Ratio',
                'affphoto.step7-title':'7. Number of Photos',
                'affphoto.count-7':'7 Photos',
                'affphoto.count-14':'14 Photos',
                'affphoto.count-20':'20 Photos',
                'affphoto.gen-prefix':'Create',
                'affphoto.gen-suffix':'Product Poses',
                'affphoto.results-suffix':'Photos Generated',
                'affphoto.download-all':'Download All',
                // Virtual Try-On tab
                'tryon.desc':'Try on fashion products virtually with AI. Choose angle and get professional results!',
                'tryon.upload-product':'Upload Product Photo',
                'tryon.drag-product':'Click or drag product',
                'tryon.upload-model':'Upload Model Photo',
                'tryon.drag-model':'Click or drag model photo',
                'tryon.angle-title':'Select Photo Angle',
                'tryon.empty-title':'Virtual Try-On Results',
                'tryon.empty-desc':'Upload product and model photo, choose angle, and results will appear here!',
                // Religious Theme tab
                'religious.desc':'Affiliate product photos for 5 official religions in Indonesia. Suitable for Islamic, Christian, Catholic, Hindu, and Buddhist content.',
                'religious.upload-product':'Upload Product Photo',
                'religious.upload-placeholder':'📦 Upload product photo',
                'religious.model-title':'Select Model',
                'religious.mannequin':'Mannequin',
                'religious.model-blur':'Islamic Model (Blur)',
                'religious.model-nonblur':'Islamic Model (Non Blur)',
                'religious.age-title':'Age Category',
                'religious.adult':'Adult',
                'religious.child':'Children',
                'religious.toddler':'Toddler',
                'religious.baby':'Baby',
                'religious.theme-count':'(50 themes)',
                'religious.all':'All',
                'religious.aspect-title':'Aspect Ratio',
                'religious.count-title':'Number of Photos',
                'religious.count-4':'4 Photos',
                'religious.count-6':'6 Photos',
                'religious.count-8':'8 Photos',
                'religious.generate-btn':'Generate Religious Photo',
                'religious.time-note':'⚡ Process takes 20-40 seconds per photo',
                'religious.empty-title':'Religious Affiliate Photo Results',
                'religious.empty-desc':'Product photos with your chosen religious and cultural theme will appear here',
                'religious.tips':'<strong>Tips:</strong> Choose themes that match your target market. 50 themes available for 5 official religions in Indonesia.',
                'religious.results-title':'Religious Affiliate Photo Results',
                'religious.download-all':'Download All',`,
    'i18n EN: affphoto + tryon + religious keys'
);

// ID keys — insert after walking.results-suffix in ID dict
rep(
    "'walking.results-suffix':'Foto Walking Pad',",
    `'walking.results-suffix':'Foto Walking Pad',
                // Affiliate Photo tab (ID)
                'affphoto.step1-title':'1. Unggah Gambar Produk',
                'affphoto.upload-span':'Pilih Gambar Produk (Bisa lebih dari 1)',
                'affphoto.step2-title':'2. Deskripsi Produk',
                'affphoto.gen-desc-btn':'Buat Deskripsi',
                'affphoto.step3-title':'3. Unggah Foto Model',
                'affphoto.optional':'(Opsional)',
                'affphoto.pick-model':'Pilih Foto Model',
                'affphoto.step4-title':'4. Tema Foto',
                'affphoto.no-theme':'Tidak Ada',
                'affphoto.step5-title':'5. Unggah Background',
                'affphoto.pick-bg':'Pilih Background Custom',
                'affphoto.step6-title':'6. Rasio Aspek',
                'affphoto.step7-title':'7. Jumlah Foto',
                'affphoto.count-7':'7 Foto',
                'affphoto.count-14':'14 Foto',
                'affphoto.count-20':'20 Foto',
                'affphoto.gen-prefix':'Buat',
                'affphoto.gen-suffix':'Pose Produk',
                'affphoto.results-suffix':'Foto Berhasil Di-generate',
                'affphoto.download-all':'Download Semua',
                // Virtual Try-On tab (ID)
                'tryon.desc':'Coba produk fashion secara virtual dengan AI. Pilih angle dan dapatkan hasil profesional!',
                'tryon.upload-product':'Unggah Foto Produk',
                'tryon.drag-product':'Klik atau seret produk',
                'tryon.upload-model':'Unggah Foto Model',
                'tryon.drag-model':'Klik atau seret foto model',
                'tryon.angle-title':'Pilih Angle Foto',
                'tryon.empty-title':'Hasil Virtual Try-On',
                'tryon.empty-desc':'Upload produk dan foto model, pilih angle, dan hasil akan muncul di sini!',
                // Religious Theme tab (ID)
                'religious.desc':'Foto produk affiliate untuk 5 agama resmi di Indonesia. Cocok untuk konten Islam, Kristen, Katolik, Hindu, dan Buddha.',
                'religious.upload-product':'Upload Foto Produk',
                'religious.upload-placeholder':'📦 Upload foto produk',
                'religious.model-title':'Pilih Model',
                'religious.mannequin':'Manekin',
                'religious.model-blur':'Model Islami (Blur)',
                'religious.model-nonblur':'Model Islami (Non Blur)',
                'religious.age-title':'Kategori Usia',
                'religious.adult':'Dewasa',
                'religious.child':'Anak-anak',
                'religious.toddler':'Balita',
                'religious.baby':'Bayi',
                'religious.theme-count':'(50 tema)',
                'religious.all':'Semua',
                'religious.aspect-title':'Aspek Rasio',
                'religious.count-title':'Jumlah Foto',
                'religious.count-4':'4 Foto',
                'religious.count-6':'6 Foto',
                'religious.count-8':'8 Foto',
                'religious.generate-btn':'Generate Foto Islami',
                'religious.time-note':'⚡ Proses memerlukan waktu 20-40 detik per foto',
                'religious.empty-title':'Hasil Foto Affiliate Agama',
                'religious.empty-desc':'Foto produk dengan tema agama dan budaya pilihan Anda akan muncul di sini',
                'religious.tips':'<strong>Tips:</strong> Pilih tema sesuai target market Anda. Tersedia 50 tema untuk 5 agama resmi di Indonesia.',
                'religious.results-title':'Hasil Foto Affiliate Agama',
                'religious.download-all':'Download Semua',`,
    'i18n ID: affphoto + tryon + religious keys'
);

// ================================================================
console.log(`\nDone: ${ok} OK, ${miss} MISS`);

// Verify syntax
const start = html.indexOf('<!-- ==================== LANGUAGE SYSTEM');
const end = html.indexOf('<!-- ==================== END LANGUAGE SYSTEM');
const scriptBlock = html.substring(start, end + 60)
    .replace(/<script>/g,'').replace(/<\/script>/g,'').replace(/<!--.*?-->/gs,'');
const jsStart = scriptBlock.indexOf('(function()');
try {
    new Function(scriptBlock.substring(jsStart));
    console.log('SYNTAX OK');
} catch(e) {
    console.log('SYNTAX ERROR:', e.message);
}

fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
