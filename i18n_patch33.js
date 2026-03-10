// i18n_patch33.js — Sketch to Catalog, Timelapse Renovasi, Fotogenic
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ===== SKETCH TO CATALOG =====

// sketch.desc (multi-line — anchor with unique content)
rep(
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto">\r\n                    Ubah sketsa',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="sketch.desc">\r\n                    Ubah sketsa',
    'sketch.desc'
);

// sketch.step1-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Sketsa</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="sketch.step1-title">Upload Sketsa</h3>',
    'sketch.step1-title'
);

// sketch.step2-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jenis Produk</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="sketch.step2-title">Jenis Produk</h3>',
    'sketch.step2-title'
);

// sketch.step3-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Style Katalog</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="sketch.step3-title">Style Katalog</h3>',
    'sketch.step3-title'
);

// sketch.remove-btn (unique id as anchor — has <i> child, applyText handles it)
rep(
    'id="sketch-remove-preview" class="mt-2 w-full bg-red-600',
    'id="sketch-remove-preview" data-i18n="sketch.remove-btn" class="mt-2 w-full bg-red-600',
    'sketch.remove-btn'
);

// sketch.empty-h3
rep(
    '<h3 class="text-xl font-bold text-gray-800 mb-2">Belum ada foto katalog yang dibuat</h3>',
    '<h3 class="text-xl font-bold text-gray-800 mb-2" data-i18n="sketch.empty-h3">Belum ada foto katalog yang dibuat</h3>',
    'sketch.empty-h3'
);

// sketch.empty-p
rep(
    '<p class="text-gray-600">Upload sketsa produk dan klik Generate untuk membuat foto katalog profesional!</p>',
    '<p class="text-gray-600" data-i18n="sketch.empty-p">Upload sketsa produk dan klik Generate untuk membuat foto katalog profesional!</p>',
    'sketch.empty-p'
);

// ===== TIMELAPSE RENOVASI =====

// timelapse.desc
rep(
    '<p class="text-gray-600">Buat seri foto timelapse renovasi bangunan dari awal hingga selesai. Gunakan hasilnya di Image to Video untuk konten yang memukau!</p>',
    '<p class="text-gray-600" data-i18n="timelapse.desc">Buat seri foto timelapse renovasi bangunan dari awal hingga selesai. Gunakan hasilnya di Image to Video untuk konten yang memukau!</p>',
    'timelapse.desc'
);

// timelapse.step1-title (h3 has nested <span> — data-i18n on h3, applyText replaces text node only)
rep(
    '<h3 class="font-bold text-gray-800">Foto Awal / Before <span class="text-red-500">*</span></h3>',
    '<h3 class="font-bold text-gray-800" data-i18n="timelapse.step1-title">Foto Awal / Before <span class="text-red-500">*</span></h3>',
    'timelapse.step1-title'
);

// timelapse.step4-title
rep(
    '<h3 class="font-bold text-gray-800">Jumlah Frame Timelapse</h3>',
    '<h3 class="font-bold text-gray-800" data-i18n="timelapse.step4-title">Jumlah Frame Timelapse</h3>',
    'timelapse.step4-title'
);

// timelapse.frame-note (has <i> child — single line, anchor with unique content)
rep(
    '<p class="text-xs text-gray-400 mt-2 text-center"><i class="fas fa-info-circle mr-1"></i>Lebih banyak frame',
    '<p class="text-xs text-gray-400 mt-2 text-center" data-i18n="timelapse.frame-note"><i class="fas fa-info-circle mr-1"></i>Lebih banyak frame',
    'timelapse.frame-note'
);

// timelapse.gen-btn (button with <i> icon + text — add data-i18n via unique id)
rep(
    'id="timelapse-generate-btn" class="w-full text-white font-bold py-4 px-8',
    'id="timelapse-generate-btn" data-i18n="timelapse.gen-btn" class="w-full text-white font-bold py-4 px-8',
    'timelapse.gen-btn'
);

// timelapse.gen-note (has <i> child — anchor with unique content)
rep(
    '<p class="text-xs text-gray-400 text-center"><i class="fas fa-info-circle mr-1"></i>Upload foto awal untuk mengaktifkan generate</p>',
    '<p class="text-xs text-gray-400 text-center" data-i18n="timelapse.gen-note"><i class="fas fa-info-circle mr-1"></i>Upload foto awal untuk mengaktifkan generate</p>',
    'timelapse.gen-note'
);

// timelapse.empty-h3
rep(
    '<h3 class="text-xl font-bold text-gray-700 mb-2">Siap Membuat Timelapse Renovasi</h3>',
    '<h3 class="text-xl font-bold text-gray-700 mb-2" data-i18n="timelapse.empty-h3">Siap Membuat Timelapse Renovasi</h3>',
    'timelapse.empty-h3'
);

// timelapse.empty-p1 (&amp; in HTML = & literal in file)
rep(
    '<p class="text-gray-500 text-sm">Upload foto awal, pilih tema &amp; jumlah frame, lalu generate!</p>',
    '<p class="text-gray-500 text-sm" data-i18n="timelapse.empty-p1">Upload foto awal, pilih tema &amp; jumlah frame, lalu generate!</p>',
    'timelapse.empty-p1'
);

// ===== FOTOGENIC =====

// fotogenic.desc (&amp; in HTML = & literal in file)
rep(
    '<p class="text-lg text-gray-600">Transformasi foto dengan 56+ efek profesional ala CapCut &amp; Lightroom</p>',
    '<p class="text-lg text-gray-600" data-i18n="fotogenic.desc">Transformasi foto dengan 56+ efek profesional ala CapCut &amp; Lightroom</p>',
    'fotogenic.desc'
);

// fotogenic.step2-title
rep(
    '<h3 class="text-base font-semibold text-gray-800">Kategori Efek</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="fotogenic.step2-title">Kategori Efek</h3>',
    'fotogenic.step2-title'
);

// fotogenic.step4-title
rep(
    '<h3 class="text-base font-semibold text-gray-800">Intensitas Efek</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="fotogenic.step4-title">Intensitas Efek</h3>',
    'fotogenic.step4-title'
);

// fotogenic.step5-title
rep(
    '<h3 class="text-base font-semibold text-gray-800">Rasio Gambar</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="fotogenic.step5-title">Rasio Gambar</h3>',
    'fotogenic.step5-title'
);

// fotogenic.gen-label (span has unique id)
rep(
    '<span id="fotogenic-generate-label">Terapkan Efek</span>',
    '<span id="fotogenic-generate-label" data-i18n="fotogenic.gen-label">Terapkan Efek</span>',
    'fotogenic.gen-label'
);

// fotogenic.placeholder-h3
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Efek Fotogenic</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="fotogenic.placeholder-h3">Hasil Efek Fotogenic</h3>',
    'fotogenic.placeholder-h3'
);

// fotogenic.placeholder-p
rep(
    '<p class="text-sm mt-1">Upload foto dan pilih efek untuk mulai</p>',
    '<p class="text-sm mt-1" data-i18n="fotogenic.placeholder-p">Upload foto dan pilih efek untuk mulai</p>',
    'fotogenic.placeholder-p'
);

// ===== DICT ENTRIES =====

// EN dict — insert after banner.placeholder-p
rep(
    "'banner.placeholder-p':'Banner will appear here after generating',\r\n            },",
    "'banner.placeholder-p':'Banner will appear here after generating',\r\n            // Sketch to Catalog\r\n            'sketch.desc':'Transform any fashion/product sketch into a professional catalog photo! Upload sketches of dresses, jerseys, shoes, or other products and get high-quality catalog results.',\r\n            'sketch.step1-title':'Upload Sketch',\r\n            'sketch.step2-title':'Product Type',\r\n            'sketch.step3-title':'Catalog Style',\r\n            'sketch.remove-btn':'Remove Sketch',\r\n            'sketch.empty-h3':'No catalog photos created yet',\r\n            'sketch.empty-p':'Upload a product sketch and click Generate to create professional catalog photos!',\r\n            // Timelapse Renovasi\r\n            'timelapse.desc':'Create a series of renovation timelapse photos from start to finish. Use the results in Image to Video for stunning content!',\r\n            'timelapse.step1-title':'Before Photo *',\r\n            'timelapse.step4-title':'Number of Timelapse Frames',\r\n            'timelapse.frame-note':'More frames = smoother timelapse transitions',\r\n            'timelapse.gen-btn':'Generate Renovation Timelapse',\r\n            'timelapse.gen-note':'Upload before photo to activate generate',\r\n            'timelapse.empty-h3':'Ready to Create Renovation Timelapse',\r\n            'timelapse.empty-p1':'Upload before photo, choose theme & number of frames, then generate!',\r\n            // Fotogenic\r\n            'fotogenic.desc':'Transform photos with 56+ professional effects like CapCut & Lightroom',\r\n            'fotogenic.step2-title':'Effect Category',\r\n            'fotogenic.step4-title':'Effect Intensity',\r\n            'fotogenic.step5-title':'Image Ratio',\r\n            'fotogenic.gen-label':'Apply Effect',\r\n            'fotogenic.placeholder-h3':'Fotogenic Effect Results',\r\n            'fotogenic.placeholder-p':'Upload a photo and choose an effect to start',\r\n            },",
    'dict.en'
);

// ID dict — insert after banner.placeholder-p
rep(
    "'banner.placeholder-p':'Banner akan muncul di sini setelah generate',\r\n            }",
    "'banner.placeholder-p':'Banner akan muncul di sini setelah generate',\r\n            // Sketch to Catalog\r\n            'sketch.desc':'Ubah sketsa fashion/produk apapun menjadi foto katalog profesional! Upload sketsa gaun, jersey, sepatu, atau produk lainnya dan dapatkan hasil foto katalog berkualitas tinggi.',\r\n            'sketch.step1-title':'Upload Sketsa',\r\n            'sketch.step2-title':'Jenis Produk',\r\n            'sketch.step3-title':'Style Katalog',\r\n            'sketch.remove-btn':'Hapus Sketsa',\r\n            'sketch.empty-h3':'Belum ada foto katalog yang dibuat',\r\n            'sketch.empty-p':'Upload sketsa produk dan klik Generate untuk membuat foto katalog profesional!',\r\n            // Timelapse Renovasi\r\n            'timelapse.desc':'Buat seri foto timelapse renovasi bangunan dari awal hingga selesai. Gunakan hasilnya di Image to Video untuk konten yang memukau!',\r\n            'timelapse.step1-title':'Foto Awal / Before *',\r\n            'timelapse.step4-title':'Jumlah Frame Timelapse',\r\n            'timelapse.frame-note':'Lebih banyak frame = transisi timelapse lebih halus',\r\n            'timelapse.gen-btn':'Generate Timelapse Renovasi',\r\n            'timelapse.gen-note':'Upload foto awal untuk mengaktifkan generate',\r\n            'timelapse.empty-h3':'Siap Membuat Timelapse Renovasi',\r\n            'timelapse.empty-p1':'Upload foto awal, pilih tema & jumlah frame, lalu generate!',\r\n            // Fotogenic\r\n            'fotogenic.desc':'Transformasi foto dengan 56+ efek profesional ala CapCut & Lightroom',\r\n            'fotogenic.step2-title':'Kategori Efek',\r\n            'fotogenic.step4-title':'Intensitas Efek',\r\n            'fotogenic.step5-title':'Rasio Gambar',\r\n            'fotogenic.gen-label':'Terapkan Efek',\r\n            'fotogenic.placeholder-h3':'Hasil Efek Fotogenic',\r\n            'fotogenic.placeholder-p':'Upload foto dan pilih efek untuk mulai',\r\n            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
