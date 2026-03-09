// i18n_patch9.js — Foto Touring, POV Mirror Selfie, Walking Pad: wire data-i18n
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
// FOTO TOURING
// ================================================================

// 1. "Tambah Foto" span
rep(
    '<span>Tambah Foto</span>',
    '<span data-i18n="touring.add-photo">Tambah Foto</span>',
    'touring.add-photo'
);

// 2. Custom Background label — add data-i18n only to the (Opsional) span
rep(
    '<span class="text-xs text-gray-500">(Opsional)</span>\n                                    </p>',
    '<span class="text-xs text-gray-500" data-i18n="touring.optional-suffix">(Opsional)</span>\n                                    </p>',
    'touring.optional-suffix'
);

// 3. "Upload Background Sendiri" p
rep(
    '<p class="text-sm font-medium text-gray-700">Upload Background Sendiri</p>',
    '<p class="text-sm font-medium text-gray-700" data-i18n="touring.upload-bg">Upload Background Sendiri</p>',
    'touring.upload-bg'
);

// 4. "Atau gunakan pilihan di atas" p
rep(
    '<p class="text-xs text-gray-500 mt-1">Atau gunakan pilihan di atas</p>',
    '<p class="text-xs text-gray-500 mt-1" data-i18n="touring.or-use">Atau gunakan pilihan di atas</p>',
    'touring.or-use'
);

// 5. h3 "Jumlah Variasi"
repR(
    '(<h3 class="text-lg font-bold text-gray-800">)[\\r\\n\\s]*(Jumlah Variasi)[\\r\\n\\s]*(</h3>[\\r\\n\\s]*<div id="touring-count-selection")',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="touring.count-title">Jumlah Variasi</h3>\r\n                                <div id="touring-count-selection"',
    'touring.count-title'
);

// 6. Count buttons
rep(
    '<button type="button" data-count="4" class="option-btn-touring">\n                                        4 Foto\n                                    </button>',
    '<button type="button" data-count="4" class="option-btn-touring" data-i18n="touring.count-4">\n                                        4 Foto\n                                    </button>',
    'touring.count-4'
);
rep(
    '<button type="button" data-count="6" class="option-btn-touring selected">\n                                        6 Foto\n                                    </button>',
    '<button type="button" data-count="6" class="option-btn-touring selected" data-i18n="touring.count-6">\n                                        6 Foto\n                                    </button>',
    'touring.count-6'
);
rep(
    '<button type="button" data-count="8" class="option-btn-touring">\n                                        8 Foto\n                                    </button>',
    '<button type="button" data-count="8" class="option-btn-touring" data-i18n="touring.count-8">\n                                        8 Foto\n                                    </button>',
    'touring.count-8'
);

// 7. Generate button — restructure span for dynamic count
rep(
    '<span>Generate <span id="touring-count-text">6</span> Foto Touring</span>',
    '<span><span data-i18n="touring.gen-prefix">Generate</span> <span id="touring-count-text">6</span> <span data-i18n="touring.gen-suffix">Foto Touring</span></span>',
    'touring.generate-btn restructure'
);

// 8. Placeholder h3 "Foto Touring Profesional"
rep(
    '<p class="text-xl font-bold text-gray-800 mb-2">Foto Touring Profesional</p>',
    '<p class="text-xl font-bold text-gray-800 mb-2" data-i18n="touring.empty-title">Foto Touring Profesional</p>',
    'touring.empty-title'
);

// 9. Placeholder desc p
repR(
    '(<p class="text-gray-600 text-center max-w-md">)[\\r\\n\\s]+Upload foto model \\+ motor',
    '<p class="text-gray-600 text-center max-w-md" data-i18n="touring.empty-desc">\r\n                                Upload foto model + motor',
    'touring.empty-desc'
);

// 10. Loading text "Membuat foto touring..."
rep(
    '<p class="text-lg font-semibold text-gray-700">Membuat foto touring...</p>',
    '<p class="text-lg font-semibold text-gray-700" data-i18n="touring.loading-text">Membuat foto touring...</p>',
    'touring.loading-text'
);

// ================================================================
// POV MIRROR SELFIE
// ================================================================

// 11. h3 step 1 "Upload Foto Produk" (no icon, simple)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto Produk</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="mirror.upload-product-title">Upload Foto Produk</h3>',
    'mirror.upload-product-title'
);

// 12. Remove product button "Hapus Foto"
rep(
    '<button id="mirror-remove-product-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">\n                                    <i class="fas fa-times mr-1"></i> Hapus Foto\n                                </button>',
    '<button id="mirror-remove-product-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="mirror.delete-photo">\n                                    <i class="fas fa-times mr-1"></i> Hapus Foto\n                                </button>',
    'mirror.delete-photo'
);

// 13. h3 step 2 "Upload Foto Model (Opsional)" — restructure
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto Model <span class="text-sm text-gray-500">(Opsional)</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800"><span data-i18n="mirror.upload-model-title">Upload Foto Model</span> <span class="text-sm text-gray-500" data-i18n="mirror.model-optional-label">(Opsional)</span></h3>',
    'mirror.upload-model-title'
);

// 14. Remove model button "Hapus Foto Model"
rep(
    '<button id="mirror-remove-model-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">\n                                    <i class="fas fa-times mr-1"></i> Hapus Foto Model\n                                </button>',
    '<button id="mirror-remove-model-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="mirror.delete-model">\n                                    <i class="fas fa-times mr-1"></i> Hapus Foto Model\n                                </button>',
    'mirror.delete-model'
);

// 15. Hand position buttons
rep(
    '<button type="button" data-value="holding-phone" class="option-btn-mirror selected">\n                                        <i class="fas fa-hand-holding mr-1"></i>Pegang HP\n                                    </button>',
    '<button type="button" data-value="holding-phone" class="option-btn-mirror selected" data-i18n="mirror.hand-hold-phone">\n                                        <i class="fas fa-hand-holding mr-1"></i>Pegang HP\n                                    </button>',
    'mirror.hand-hold-phone'
);
rep(
    '<button type="button" data-value="one-hand-hip" class="option-btn-mirror">\n                                        <i class="fas fa-hand-rock mr-1"></i>Tangan di Pinggang\n                                    </button>',
    '<button type="button" data-value="one-hand-hip" class="option-btn-mirror" data-i18n="mirror.hand-hips">\n                                        <i class="fas fa-hand-rock mr-1"></i>Tangan di Pinggang\n                                    </button>',
    'mirror.hand-hips'
);
rep(
    '<button type="button" data-value="holding-product" class="option-btn-mirror">\n                                        <i class="fas fa-box mr-1"></i>Pegang Produk\n                                    </button>',
    '<button type="button" data-value="holding-product" class="option-btn-mirror" data-i18n="mirror.hand-hold-product">\n                                        <i class="fas fa-box mr-1"></i>Pegang Produk\n                                    </button>',
    'mirror.hand-hold-product'
);
rep(
    '<button type="button" data-value="natural" class="option-btn-mirror">\n                                        <i class="fas fa-user mr-1"></i>Natural/Santai\n                                    </button>',
    '<button type="button" data-value="natural" class="option-btn-mirror" data-i18n="mirror.hand-natural">\n                                        <i class="fas fa-user mr-1"></i>Natural/Santai\n                                    </button>',
    'mirror.hand-natural'
);
rep(
    '<button type="button" data-value="both-hands-up" class="option-btn-mirror">\n                                        <i class="fas fa-hands mr-1"></i>Kedua Tangan Naik\n                                    </button>',
    '<button type="button" data-value="both-hands-up" class="option-btn-mirror" data-i18n="mirror.hand-both-up">\n                                        <i class="fas fa-hands mr-1"></i>Kedua Tangan Naik\n                                    </button>',
    'mirror.hand-both-up'
);

// 16. h3 step 8 "Rasio Foto"
repR(
    '(<h3 class="text-lg font-bold text-gray-800">)[\\r\\n\\s]*(Rasio Foto)[\\r\\n\\s]*(</h3>[\\r\\n\\s]*<div id="mirror-ratio-options")',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="mirror.aspect-title">Rasio Foto</h3>\r\n                                <div id="mirror-ratio-options"',
    'mirror.aspect-title'
);

// 17. h3 step 9 "Jumlah Foto"
repR(
    '(<h3 class="text-lg font-bold text-gray-800">)[\\r\\n\\s]*(Jumlah Foto)[\\r\\n\\s]*(</h3>[\\r\\n\\s]*<div id="mirror-count-selection")',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="mirror.count-title">Jumlah Foto</h3>\r\n                                <div id="mirror-count-selection"',
    'mirror.count-title'
);

// 18. Mirror count buttons
repR(
    '(<button type="button" data-count="4" class="mirror-count-btn">)[\\r\\n\\s]*(4 Foto)',
    '$1\r\n                                        <span data-i18n="mirror.count-4">4 Foto</span>',
    'mirror.count-4'
);
repR(
    '(<button type="button" data-count="6" class="mirror-count-btn mirror-count-selected">)[\\r\\n\\s]*(6 Foto)',
    '$1\r\n                                        <span data-i18n="mirror.count-6">6 Foto</span>',
    'mirror.count-6'
);
repR(
    '(<button type="button" data-count="8" class="mirror-count-btn">)[\\r\\n\\s]*(8 Foto)',
    '$1\r\n                                        <span data-i18n="mirror.count-8">8 Foto</span>',
    'mirror.count-8'
);

// 19. Mirror empty state h3
rep(
    '<h3 class="text-xl font-bold text-gray-800 mb-2">Belum ada mirror selfie yang dibuat</h3>',
    '<h3 class="text-xl font-bold text-gray-800 mb-2" data-i18n="mirror.empty-title">Belum ada mirror selfie yang dibuat</h3>',
    'mirror.empty-title'
);

// 20. Mirror empty state p
rep(
    '<p class="text-gray-600">Upload produk dan klik Generate untuk membuat mirror selfie aesthetic!</p>',
    '<p class="text-gray-600" data-i18n="mirror.empty-desc">Upload produk dan klik Generate untuk membuat mirror selfie aesthetic!</p>',
    'mirror.empty-desc'
);

// ================================================================
// WALKING PAD
// ================================================================

// 21. "Klik untuk upload foto model" span
rep(
    '<span class="font-semibold" style="color: #6d28d9;">Klik untuk upload foto model</span>',
    '<span class="font-semibold" style="color: #6d28d9;" data-i18n="walking.click-model">Klik untuk upload foto model</span>',
    'walking.click-model'
);

// 22. "Wajah model akan digunakan sebagai referensi" span
rep(
    '<span class="text-xs text-gray-500">Wajah model akan digunakan sebagai referensi</span>',
    '<span class="text-xs text-gray-500" data-i18n="walking.model-desc">Wajah model akan digunakan sebagai referensi</span>',
    'walking.model-desc'
);

// 23. Hapus Foto Model button (walkpad)
repR(
    '(<button id="walkpad-remove-model"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-times mr-1"></i>) Hapus Foto Model',
    '$1\r\n                                            $2 <span data-i18n="walking.delete-model">Hapus Foto Model</span>',
    'walking.delete-model'
);

// 24. "Klik untuk upload foto baju/produk" span
rep(
    '<span class="font-semibold" style="color: #be185d;">Klik untuk upload foto baju/produk</span>',
    '<span class="font-semibold" style="color: #be185d;" data-i18n="walking.click-clothes">Klik untuk upload foto baju/produk</span>',
    'walking.click-clothes'
);

// 25. "Bisa upload 1–5 foto baju" span
rep(
    '<span class="text-xs text-gray-500">Bisa upload 1\u20115 foto baju untuk referensi lebih detail</span>',
    '<span class="text-xs text-gray-500" data-i18n="walking.clothes-desc">Bisa upload 1\u20115 foto baju untuk referensi lebih detail</span>',
    'walking.clothes-desc'
);

// 26. Hapus Foto Baju button
repR(
    '(<button id="walkpad-remove-product"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-times mr-1"></i>) Hapus Foto Baju',
    '$1\r\n                                        $2 <span data-i18n="walking.delete-clothes">Hapus Foto Baju</span>',
    'walking.delete-clothes'
);

// 27. "Untuk Perempuan" span
rep(
    '<span class="text-xs font-bold" style="color: #be185d;">Untuk Perempuan</span>',
    '<span class="text-xs font-bold" style="color: #be185d;" data-i18n="walking.female-label">Untuk Perempuan</span>',
    'walking.female-label'
);

// 28. "Untuk Laki-laki" span
rep(
    '<span class="text-xs font-bold" style="color: #6d28d9;">Untuk Laki-laki</span>',
    '<span class="text-xs font-bold" style="color: #6d28d9;" data-i18n="walking.male-label">Untuk Laki-laki</span>',
    'walking.male-label'
);

// 29. "Netral" span
rep(
    '<span class="text-xs font-bold text-gray-400">Netral</span>',
    '<span class="text-xs font-bold text-gray-400" data-i18n="walking.neutral-label">Netral</span>',
    'walking.neutral-label'
);

// 30. Camera angle "3/4 Depan Kanan"
rep(
    '<button type="button" data-value="diagonal-right" class="option-btn-walkpad selected"><i class="fas fa-expand-arrows-alt mr-1"></i>3/4 Depan Kanan</button>',
    '<button type="button" data-value="diagonal-right" class="option-btn-walkpad selected" data-i18n="walking.3-4-right"><i class="fas fa-expand-arrows-alt mr-1"></i>3/4 Depan Kanan</button>',
    'walking.3-4-right'
);

// 31. Camera angle "3/4 Depan Kiri"
rep(
    '<button type="button" data-value="diagonal-left" class="option-btn-walkpad"><i class="fas fa-expand-arrows-alt mr-1"></i>3/4 Depan Kiri</button>',
    '<button type="button" data-value="diagonal-left" class="option-btn-walkpad" data-i18n="walking.3-4-left"><i class="fas fa-expand-arrows-alt mr-1"></i>3/4 Depan Kiri</button>',
    'walking.3-4-left'
);

// 32. Pose spans
rep(
    '<span class="text-xs mt-1">Berjalan</span>',
    '<span class="text-xs mt-1" data-i18n="walking.walking">Berjalan</span>',
    'walking.walking'
);
rep(
    '<span class="text-xs mt-1">Berdiri Santai</span>',
    '<span class="text-xs mt-1" data-i18n="walking.standing-casual">Berdiri Santai</span>',
    'walking.standing-casual'
);
rep(
    '<span class="text-xs mt-1">Berdiri Percaya Diri</span>',
    '<span class="text-xs mt-1" data-i18n="walking.standing-confident">Berdiri Percaya Diri</span>',
    'walking.standing-confident'
);

// 33. h3 "Jumlah Foto" (walkpad)
repR(
    '(<h3 class="text-lg font-bold text-gray-800">)[\\r\\n\\s]*(Jumlah Foto)[\\r\\n\\s]*(</h3>[\\r\\n\\s]*<div id="walkpad-count-selection")',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="walking.count-title">Jumlah Foto</h3>\r\n                                    <div id="walkpad-count-selection"',
    'walking.count-title'
);

// 34. Walking count buttons
rep(
    '<button type="button" data-count="2" class="walkpad-count-btn">2 Foto</button>',
    '<button type="button" data-count="2" class="walkpad-count-btn" data-i18n="walking.count-2">2 Foto</button>',
    'walking.count-2'
);
rep(
    '<button type="button" data-count="4" class="walkpad-count-btn walkpad-count-selected">4 Foto</button>',
    '<button type="button" data-count="4" class="walkpad-count-btn walkpad-count-selected" data-i18n="walking.count-4">4 Foto</button>',
    'walking.count-4'
);
rep(
    '<button type="button" data-count="6" class="walkpad-count-btn">6 Foto</button>',
    '<button type="button" data-count="6" class="walkpad-count-btn" data-i18n="walking.count-6">6 Foto</button>',
    'walking.count-6'
);

// 35. Generate button — restructure span for dynamic count
rep(
    '<span class="relative z-10">Generate 4 Foto Walking Pad</span>',
    '<span class="relative z-10"><span data-i18n="walking.gen-prefix">Generate</span> <span id="walkpad-count-text">4</span> <span data-i18n="walking.gen-suffix">Foto Walking Pad</span></span>',
    'walking.generate-btn restructure'
);

// 36. Loading p1 "Membuat foto walking pad..."
rep(
    '<p class="text-xl font-semibold mb-2" style="color: #6d28d9;">Membuat foto walking pad...</p>',
    '<p class="text-xl font-semibold mb-2" style="color: #6d28d9;" data-i18n="walking.loading-1">Membuat foto walking pad...</p>',
    'walking.loading-1'
);

// 37. Results header — add suffix span for dynamic count
rep(
    '<span id="walkpad-results-count">4</span> Foto Walking Pad',
    '<span id="walkpad-results-count">4</span> <span data-i18n="walking.results-suffix">Foto Walking Pad</span>',
    'walking.results-suffix'
);

// 38. Download Semua span (walkpad)
rep(
    '<span class="hidden sm:inline">Download Semua</span>',
    '<span class="hidden sm:inline" data-i18n="walking.download-all">Download Semua</span>',
    'walking.download-all'
);

// 39. Empty state h3
rep(
    '<h3 class="text-2xl font-bold mb-3" style="color: #6d28d9;">Siap Membuat Foto Walking Pad</h3>',
    '<h3 class="text-2xl font-bold mb-3" style="color: #6d28d9;" data-i18n="walking.empty-title">Siap Membuat Foto Walking Pad</h3>',
    'walking.empty-title'
);

// 40. Empty state p
repR(
    '(<p class="text-gray-600 mb-6 max-w-md mx-auto">)[\\r\\n\\s]+Upload foto model',
    '<p class="text-gray-600 mb-6 max-w-md mx-auto" data-i18n="walking.empty-desc">\r\n                                Upload foto model',
    'walking.empty-desc'
);

// 41. "18 Tema Ruangan" span
rep(
    '<span>18 Tema Ruangan</span>',
    '<span data-i18n="walking.18-themes">18 Tema Ruangan</span>',
    'walking.18-themes'
);

// 42. "6 Camera Angle" span
rep(
    '<span>6 Camera Angle</span>',
    '<span data-i18n="walking.6-angles">6 Camera Angle</span>',
    'walking.6-angles'
);

// 43. "Siap Image to Video" span
rep(
    '<span>Siap Image to Video</span>',
    '<span data-i18n="walking.video-ready">Siap Image to Video</span>',
    'walking.video-ready'
);

// ================================================================
// ADD NEW DICTIONARY KEYS
// ================================================================

// EN: after touring.download-all
rep(
    "'touring.download-all':'Download All',",
    `'touring.download-all':'Download All',
                'touring.optional-suffix':'(Optional)',
                'touring.upload-bg':'Upload Your Own Background',
                'touring.or-use':'Or use the options above',
                'touring.add-photo':'Add Photo',
                'touring.count-4':'4 Photos',
                'touring.count-6':'6 Photos',
                'touring.count-8':'8 Photos',
                'touring.gen-prefix':'Generate',
                'touring.gen-suffix':'Touring Photos',
                'touring.loading-text':'Creating touring photos...',
                'touring.empty-title':'Professional Touring Photo',
                'touring.empty-desc':'Upload model + motorcycle + helmet + accessories photos, choose road background and mood theme for epic touring photos! 🏍️✨',`,
    'i18n EN: touring new keys'
);

// EN: after mirror.lighting-title (which is already in dict)
rep(
    "'mirror.aspect-title':'Photo Ratio',",
    `'mirror.aspect-title':'Photo Ratio',
                'mirror.count-title':'Number of Photos',
                'mirror.count-4':'4 Photos',
                'mirror.count-6':'6 Photos',
                'mirror.count-8':'8 Photos',
                'mirror.empty-title':'No mirror selfies created yet',
                'mirror.empty-desc':'Upload product and click Generate to create aesthetic mirror selfies!',`,
    'i18n EN: mirror new keys'
);

// EN: after walking.video-ready
rep(
    "'walking.video-ready':'Ready for Image to Video',",
    `'walking.video-ready':'Ready for Image to Video',
                'walking.gen-prefix':'Generate',
                'walking.gen-suffix':'Walking Pad Photos',
                'walking.count-2':'2 Photos',
                'walking.count-4':'4 Photos',
                'walking.count-6':'6 Photos',
                'walking.results-suffix':'Walking Pad Photos',`,
    'i18n EN: walking new keys'
);

// ID: after touring.download-all (ID)
rep(
    "'touring.download-all':'Download All',\n                'mirror.desc1':'Ubah produk apapun",
    `'touring.download-all':'Download All',
                'touring.optional-suffix':'(Opsional)',
                'touring.upload-bg':'Upload Background Sendiri',
                'touring.or-use':'Atau gunakan pilihan di atas',
                'touring.add-photo':'Tambah Foto',
                'touring.count-4':'4 Foto',
                'touring.count-6':'6 Foto',
                'touring.count-8':'8 Foto',
                'touring.gen-prefix':'Generate',
                'touring.gen-suffix':'Foto Touring',
                'touring.loading-text':'Membuat foto touring...',
                'touring.empty-title':'Foto Touring Profesional',
                'touring.empty-desc':'Upload foto model + motor + helm + aksesoris, pilih background jalanan dan tema suasana untuk mendapatkan foto touring yang epic! \uD83C\uDFCD\uFE0F\u2728',
                'mirror.desc1':'Ubah produk apapun`,
    'i18n ID: touring new keys'
);

// ID: after mirror.aspect-title
rep(
    "'mirror.aspect-title':'Rasio Foto',",
    `'mirror.aspect-title':'Rasio Foto',
                'mirror.count-title':'Jumlah Foto',
                'mirror.count-4':'4 Foto',
                'mirror.count-6':'6 Foto',
                'mirror.count-8':'8 Foto',
                'mirror.empty-title':'Belum ada mirror selfie yang dibuat',
                'mirror.empty-desc':'Upload produk dan klik Generate untuk membuat mirror selfie aesthetic!',`,
    'i18n ID: mirror new keys'
);

// ID: after walking.video-ready
rep(
    "'walking.video-ready':'Siap Image to Video',",
    `'walking.video-ready':'Siap Image to Video',
                'walking.gen-prefix':'Generate',
                'walking.gen-suffix':'Foto Walking Pad',
                'walking.count-2':'2 Foto',
                'walking.count-4':'4 Foto',
                'walking.count-6':'6 Foto',
                'walking.results-suffix':'Foto Walking Pad',`,
    'i18n ID: walking new keys'
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
