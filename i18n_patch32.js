// i18n_patch32.js — Mascot Generator, Poster Generator, Banner Generator
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ===== MASCOT GENERATOR =====

// mascot.desc (multi-line — anchor with unique content)
rep(
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto">\r\n                        Buat karakter mascot',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="mascot.desc">\r\n                        Buat karakter mascot',
    'mascot.desc'
);

// mascot.step1-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Referensi Mascot *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="mascot.step1-title">Upload Referensi Mascot *</h3>',
    'mascot.step1-title'
);

// mascot.ref-required (p with <i> icon child)
rep(
    '<p class="text-xs text-amber-600 mt-2 font-semibold">\r\n                                        <i class="fas fa-star mr-1"></i> Wajib!',
    '<p class="text-xs text-amber-600 mt-2 font-semibold" data-i18n="mascot.ref-required">\r\n                                        <i class="fas fa-star mr-1"></i> Wajib!',
    'mascot.ref-required'
);

// mascot.step2-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Info Mascot</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="mascot.step2-title">Info Mascot</h3>',
    'mascot.step2-title'
);

// mascot.step3-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Tipe Karakter</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="mascot.step3-title">Tipe Karakter</h3>',
    'mascot.step3-title'
);

// mascot.gen-btn (span inside button)
rep(
    '<span>Generate 4 Mascot Variations</span>',
    '<span data-i18n="mascot.gen-btn">Generate 4 Mascot Variations</span>',
    'mascot.gen-btn'
);

// mascot.placeholder-title
rep(
    '<h3 class="text-2xl font-bold text-gray-800 mb-2">Mascot Karakter Anda</h3>',
    '<h3 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="mascot.placeholder-title">Mascot Karakter Anda</h3>',
    'mascot.placeholder-title'
);

// mascot.placeholder-desc (multi-line)
rep(
    '<p class="text-gray-600 max-w-md mb-4">\r\n                                    Upload referensi mascot',
    '<p class="text-gray-600 max-w-md mb-4" data-i18n="mascot.placeholder-desc">\r\n                                    Upload referensi mascot',
    'mascot.placeholder-desc'
);

// ===== POSTER GENERATOR =====

// poster.desc (multi-line — anchor with unique content)
rep(
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto">\r\n                        Buat poster profesional',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="poster.desc">\r\n                        Buat poster profesional',
    'poster.desc'
);

// poster.step1-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto (Opsional)</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="poster.step1-title">Upload Foto (Opsional)</h3>',
    'poster.step1-title'
);

// poster.step3-title (h3 has nested <span> for * — data-i18n on h3, applyText replaces text node only)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Judul Poster <span class="text-red-500">*</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="poster.step3-title">Judul Poster <span class="text-red-500">*</span></h3>',
    'poster.step3-title'
);

// poster.step9-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Ukuran Poster</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="poster.step9-title">Ukuran Poster</h3>',
    'poster.step9-title'
);

// poster.step10-title (Jumlah Variasi — reuse caption.step4-title, anchor with poster-count-btn)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-3 gap-3">\r\n                                        <button class="poster-count-btn',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="caption.step4-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-3 gap-3">\r\n                                        <button class="poster-count-btn',
    'poster.step10-title'
);

// poster.placeholder-p1
rep(
    '<p class="text-xl font-semibold mb-2">Poster Anda akan muncul di sini</p>',
    '<p class="text-xl font-semibold mb-2" data-i18n="poster.placeholder-p1">Poster Anda akan muncul di sini</p>',
    'poster.placeholder-p1'
);

// poster.placeholder-p2 (anchor with preceding sibling for uniqueness)
rep(
    '<p class="text-xl font-semibold mb-2" data-i18n="poster.placeholder-p1">Poster Anda akan muncul di sini</p>\r\n                                <p class="text-sm">Lengkapi form dan klik Generate Poster</p>',
    '<p class="text-xl font-semibold mb-2" data-i18n="poster.placeholder-p1">Poster Anda akan muncul di sini</p>\r\n                                <p class="text-sm" data-i18n="poster.placeholder-p2">Lengkapi form dan klik Generate Poster</p>',
    'poster.placeholder-p2'
);

// ===== BANNER GENERATOR =====

// banner.step1-title
rep(
    '<h3 class="text-base font-semibold text-gray-800">Tipe Banner</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="banner.step1-title">Tipe Banner</h3>',
    'banner.step1-title'
);

// banner.step3-title
rep(
    '<h3 class="text-base font-semibold text-gray-800">Teks Headline</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="banner.step3-title">Teks Headline</h3>',
    'banner.step3-title'
);

// banner.step6-title
rep(
    '<h3 class="text-base font-semibold text-gray-800">Style Banner</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="banner.step6-title">Style Banner</h3>',
    'banner.step6-title'
);

// banner.gen-btn (span inside button)
rep(
    '<span>Generate Banner Profesional</span>',
    '<span data-i18n="banner.gen-btn">Generate Banner Profesional</span>',
    'banner.gen-btn'
);

// banner.process-note (\u26A1 = ⚡)
rep(
    '<div class="text-center text-xs text-gray-500 mt-2">\r\n                                    \u26A1 Proses memerlukan',
    '<div class="text-center text-xs text-gray-500 mt-2" data-i18n="banner.process-note">\r\n                                    \u26A1 Proses memerlukan',
    'banner.process-note'
);

// banner.placeholder-title
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Banner Profesional</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="banner.placeholder-title">Hasil Banner Profesional</h3>',
    'banner.placeholder-title'
);

// banner.placeholder-p
rep(
    '<p class="mt-1 text-sm">Banner akan muncul di sini setelah generate</p>',
    '<p class="mt-1 text-sm" data-i18n="banner.placeholder-p">Banner akan muncul di sini setelah generate</p>',
    'banner.placeholder-p'
);

// ===== DICT ENTRIES =====

// EN dict — insert after comparison.placeholder-desc
rep(
    "'comparison.placeholder-desc':'Upload 2-3 products and choose settings to generate comparisons',\r\n            },",
    "'comparison.placeholder-desc':'Upload 2-3 products and choose settings to generate comparisons',\r\n            // Mascot Generator\r\n            'mascot.desc':'Create a unique mascot character for your brand! Upload a reference and AI will generate a mascot similar to the style you want.',\r\n            'mascot.step1-title':'Upload Mascot Reference *',\r\n            'mascot.ref-required':'Required! AI will mimic the style, shape, and character from the reference',\r\n            'mascot.step2-title':'Mascot Info',\r\n            'mascot.step3-title':'Character Type',\r\n            'mascot.gen-btn':'Generate 4 Mascot Variations',\r\n            'mascot.placeholder-title':'Your Mascot Character',\r\n            'mascot.placeholder-desc':'Upload the mascot reference you want, and AI will create 4 mascot variations similar to the reference style!',\r\n            // Poster Generator\r\n            'poster.desc':'Create professional posters for various needs in seconds! Events, promotions, social media, and more with AI.',\r\n            'poster.step1-title':'Upload Photo (Optional)',\r\n            'poster.step3-title':'Poster Title',\r\n            'poster.step9-title':'Poster Size',\r\n            'poster.placeholder-p1':'Your poster will appear here',\r\n            'poster.placeholder-p2':'Fill in the form and click Generate Poster',\r\n            // Banner Generator\r\n            'banner.step1-title':'Banner Type',\r\n            'banner.step3-title':'Headline Text',\r\n            'banner.step6-title':'Banner Style',\r\n            'banner.gen-btn':'Generate Professional Banner',\r\n            'banner.process-note':'\u26A1 Process takes 20-40 seconds per banner',\r\n            'banner.placeholder-title':'Professional Banner Results',\r\n            'banner.placeholder-p':'Banner will appear here after generating',\r\n            },",
    'dict.en'
);

// ID dict — insert after comparison.placeholder-desc
rep(
    "'comparison.placeholder-desc':'Upload 2-3 produk dan pilih settings untuk generate comparisons',\r\n            }",
    "'comparison.placeholder-desc':'Upload 2-3 produk dan pilih settings untuk generate comparisons',\r\n            // Mascot Generator\r\n            'mascot.desc':'Buat karakter mascot unik untuk brand Anda! Upload referensi dan AI akan generate mascot yang mirip dengan style yang Anda inginkan.',\r\n            'mascot.step1-title':'Upload Referensi Mascot *',\r\n            'mascot.ref-required':'Wajib! AI akan meniru style, bentuk, dan karakter dari referensi',\r\n            'mascot.step2-title':'Info Mascot',\r\n            'mascot.step3-title':'Tipe Karakter',\r\n            'mascot.gen-btn':'Generate 4 Variasi Mascot',\r\n            'mascot.placeholder-title':'Mascot Karakter Anda',\r\n            'mascot.placeholder-desc':'Upload referensi mascot yang Anda inginkan, dan AI akan membuat 4 variasi mascot yang mirip dengan style referensi!',\r\n            // Poster Generator\r\n            'poster.desc':'Buat poster profesional untuk berbagai kebutuhan dalam hitungan detik! Event, promosi, social media, dan banyak lagi dengan AI.',\r\n            'poster.step1-title':'Upload Foto (Opsional)',\r\n            'poster.step3-title':'Judul Poster',\r\n            'poster.step9-title':'Ukuran Poster',\r\n            'poster.placeholder-p1':'Poster Anda akan muncul di sini',\r\n            'poster.placeholder-p2':'Lengkapi form dan klik Generate Poster',\r\n            // Banner Generator\r\n            'banner.step1-title':'Tipe Banner',\r\n            'banner.step3-title':'Teks Headline',\r\n            'banner.step6-title':'Style Banner',\r\n            'banner.gen-btn':'Generate Banner Profesional',\r\n            'banner.process-note':'\u26A1 Proses memerlukan waktu 20-40 detik per banner',\r\n            'banner.placeholder-title':'Hasil Banner Profesional',\r\n            'banner.placeholder-p':'Banner akan muncul di sini setelah generate',\r\n            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
