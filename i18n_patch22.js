// i18n_patch22.js — Home Design, Room Design, Sketch Drawing, Make Carousel
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
// HOME DESIGN (content-desain-rumah)
// ================================================================

// 1. header desc
repR(
    '(<p class="text-lg text-gray-600">)\\s+Desain ulang ruangan interior',
    '<p class="text-lg text-gray-600" data-i18n="desainrumah.desc">\r\n                        Desain ulang ruangan interior',
    'desainrumah.desc'
);

// 2. tab-interior button
repR(
    '(id="dr-tab-interior"[^>]*>)\\s+Interior\\s+(</button>)',
    '$1\r\n                        <span data-i18n="desainrumah.tab-interior">Interior</span>\r\n                    $2',
    'desainrumah.tab-interior'
);

// 3. tab-eksterior button (has nested New badge span)
repR(
    '(id="dr-tab-eksterior"[^>]*>)\\s+Eksterior\\s+(<span class="bg-red-500)',
    '$1\r\n                        <span data-i18n="desainrumah.tab-exterior">Eksterior</span>\r\n                        $2',
    'desainrumah.tab-exterior'
);

// 4. interior info tip p
rep(
    'Unggah foto ruangan, tambahkan furnitur, pilih gaya, dan biarkan AI mendesain ulang ruangan Anda secara ajaib.',
    '<span data-i18n="desainrumah.interior-tip">Unggah foto ruangan, tambahkan furnitur, pilih gaya, dan biarkan AI mendesain ulang ruangan Anda secara ajaib.</span>',
    'desainrumah.interior-tip'
);

// 5. interior step 1 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">1. Unggah Foto Ruangan</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="desainrumah.int-step1">1. Unggah Foto Ruangan</h3>',
    'desainrumah.int-step1'
);

// 6. interior step 2 h3
rep(
    '<h3 class="text-base font-semibold mb-2 text-gray-800">2. Tambah Furnitur AI</h3>',
    '<h3 class="text-base font-semibold mb-2 text-gray-800" data-i18n="desainrumah.int-step2">2. Tambah Furnitur AI</h3>',
    'desainrumah.int-step2'
);

// 7. interior furniture placeholder
rep(
    '<p id="dr-interior-ai-furniture-placeholder" class="col-span-full text-center text-gray-400 text-xs self-center">Furnitur AI akan muncul di sini.</p>',
    '<p id="dr-interior-ai-furniture-placeholder" class="col-span-full text-center text-gray-400 text-xs self-center" data-i18n="desainrumah.furniture-placeholder">Furnitur AI akan muncul di sini.</p>',
    'desainrumah.furniture-placeholder'
);

// 8. interior step 3 h3
rep(
    '<h3 class="text-base font-semibold mb-2 text-gray-800">3. Unggah Furnitur</h3>',
    '<h3 class="text-base font-semibold mb-2 text-gray-800" data-i18n="desainrumah.int-step3">3. Unggah Furnitur</h3>',
    'desainrumah.int-step3'
);

// 9. interior step 4 h3
rep(
    '<h3 class="text-base font-semibold mb-2 text-gray-800">4. Instruksi & Rasio</h3>',
    '<h3 class="text-base font-semibold mb-2 text-gray-800" data-i18n="desainrumah.int-step4">4. Instruksi & Rasio</h3>',
    'desainrumah.int-step4'
);

// 10. interior generate btn span
rep(
    '<span>Desain Ruangan</span>',
    '<span data-i18n="desainrumah.int-gen-btn">Desain Ruangan</span>',
    'desainrumah.int-gen-btn'
);

// 11. interior placeholder h3
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Desain Interior</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="desainrumah.int-placeholder-title">Hasil Desain Interior</h3>',
    'desainrumah.int-placeholder-title'
);

// 12. interior placeholder p
rep(
    '<p class="mt-1 text-sm">Hasil desain ruangan Anda akan muncul di sini.</p>',
    '<p class="mt-1 text-sm" data-i18n="desainrumah.int-placeholder-desc">Hasil desain ruangan Anda akan muncul di sini.</p>',
    'desainrumah.int-placeholder-desc'
);

// 13. eksterior info tip p
rep(
    'Unggah foto luar rumah Anda, pilih gaya renovasi, dan biarkan AI menyulap fasad rumah Anda menjadi baru.',
    '<span data-i18n="desainrumah.exterior-tip">Unggah foto luar rumah Anda, pilih gaya renovasi, dan biarkan AI menyulap fasad rumah Anda menjadi baru.</span>',
    'desainrumah.exterior-tip'
);

// 14. eksterior step 1 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">1. Unggah Foto Luar Rumah</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="desainrumah.ext-step1">1. Unggah Foto Luar Rumah</h3>',
    'desainrumah.ext-step1'
);

// 15. eksterior step 2 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">2. Pilih Gaya Renovasi</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="desainrumah.ext-step2">2. Pilih Gaya Renovasi</h3>',
    'desainrumah.ext-step2'
);

// 16. eksterior step 3 h3
rep(
    '<h3 class="text-base font-semibold mb-2 text-gray-800">3. Instruksi & Rasio</h3>',
    '<h3 class="text-base font-semibold mb-2 text-gray-800" data-i18n="desainrumah.ext-step3">3. Instruksi & Rasio</h3>',
    'desainrumah.ext-step3'
);

// 17. eksterior generate btn span
rep(
    '<span>Redesain Rumah</span>',
    '<span data-i18n="desainrumah.ext-gen-btn">Redesain Rumah</span>',
    'desainrumah.ext-gen-btn'
);

// 18. eksterior placeholder h3
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Desain Eksterior</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="desainrumah.ext-placeholder-title">Hasil Desain Eksterior</h3>',
    'desainrumah.ext-placeholder-title'
);

// 19. eksterior placeholder p
rep(
    '<p class="mt-1 text-sm">Hasil redesain rumah Anda akan muncul di sini.</p>',
    '<p class="mt-1 text-sm" data-i18n="desainrumah.ext-placeholder-desc">Hasil redesain rumah Anda akan muncul di sini.</p>',
    'desainrumah.ext-placeholder-desc'
);

// 20. "Klik atau seret foto" — appears 3x: interior, eksterior, carousel (tag all in order)
rep(
    '<p class="mt-2 text-sm">Klik atau seret foto</p>',
    '<p class="mt-2 text-sm" data-i18n="common.upload-drag">Klik atau seret foto</p>',
    'common.upload-drag (interior)'
);
rep(
    '<p class="mt-2 text-sm">Klik atau seret foto</p>',
    '<p class="mt-2 text-sm" data-i18n="common.upload-drag">Klik atau seret foto</p>',
    'common.upload-drag (eksterior)'
);

// ================================================================
// ROOM DESIGN (content-desain-kamar)
// ================================================================

// 21. header p (already English — add ID translation)
rep(
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto">\r\n                    Transform your room with AI-powered interior design themes\r\n                </p>',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="room.desc">\r\n                    Transform your room with AI-powered interior design themes\r\n                </p>',
    'room.desc'
);

// 22. step 1 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto Kamar</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="room.step1-title">Upload Foto Kamar</h3>',
    'room.step1-title'
);

// 23. remove photo btn (mobile-only)
repR(
    '(id="room-remove-preview"[^>]*>)\\s+(<i class="fas fa-times mr-1"></i>) Hapus Foto',
    '$1\r\n                                        $2 <span data-i18n="room.remove-photo">Hapus Foto</span>',
    'room.remove-photo'
);

// 24. step 2 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Tema Desain</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="room.step2-title">Tema Desain</h3>',
    'room.step2-title'
);

// 25. step 3 h3 — "Referensi Desain (Opsional)" with nested span
rep(
    '<h3 class="text-lg font-bold text-gray-800">Referensi Desain <span class="text-sm text-gray-500">(Opsional)</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800"><span data-i18n="room.step3-title">Referensi Desain</span> <span class="text-sm text-gray-500" data-i18n="family.optional-label">(Opsional)</span></h3>',
    'room.step3-title'
);

// 26. reference upload placeholder p
rep(
    '<p class="mt-2 text-xs font-semibold">Upload referensi desain (opsional)</p>',
    '<p class="mt-2 text-xs font-semibold" data-i18n="room.ref-upload-hint">Upload referensi desain (opsional)</p>',
    'room.ref-upload-hint'
);

// 27. remove reference btn (mobile-only)
repR(
    '(id="room-remove-reference-preview"[^>]*>)\\s+(<i class="fas fa-times mr-1"></i>) Hapus Referensi',
    '$1\r\n                                        $2 <span data-i18n="room.remove-ref">Hapus Referensi</span>',
    'room.remove-ref'
);

// 28. step 4 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Rasio Foto</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="room.step4-title">Rasio Foto</h3>',
    'room.step4-title'
);

// 29. step 5 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Desain</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="room.step5-title">Jumlah Desain</h3>',
    'room.step5-title'
);

// 30-32. count buttons (room-count-btn)
repR(
    '(data-count="4" class="room-count-btn[^"]*">)\\s+4 Desain\\s+(</button>)',
    '$1\r\n                                            <span data-i18n="room.count-4">4 Desain</span>\r\n                                        $2',
    'room.count-4'
);
repR(
    '(data-count="7" class="room-count-btn[^"]*">)\\s+7 Desain\\s+(</button>)',
    '$1\r\n                                            <span data-i18n="room.count-7">7 Desain</span>\r\n                                        $2',
    'room.count-7'
);
repR(
    '(data-count="10" class="room-count-btn[^"]*">)\\s+10 Desain\\s+(</button>)',
    '$1\r\n                                            <span data-i18n="room.count-10">10 Desain</span>\r\n                                        $2',
    'room.count-10'
);

// 33. generate button — dynamic count span
rep(
    '<span>Generate <span id="room-count-text">7</span> Desain Kamar</span>',
    '<span><span data-i18n="kids.gen-prefix">Generate</span> <span id="room-count-text">7</span> <span data-i18n="room.gen-suffix">Desain Kamar</span></span>',
    'room.gen-btn'
);

// 34. empty state h3
rep(
    '<h3 class="text-2xl font-bold text-gray-800 mb-2">Belum Ada Desain</h3>',
    '<h3 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="room.empty-title">Belum Ada Desain</h3>',
    'room.empty-title'
);

// 35. empty state p
rep(
    '<p class="text-gray-500 max-w-md">Upload foto kamar, pilih tema desain, lalu klik Generate untuk membuat desain profesional</p>',
    '<p class="text-gray-500 max-w-md" data-i18n="room.empty-desc">Upload foto kamar, pilih tema desain, lalu klik Generate untuk membuat desain profesional</p>',
    'room.empty-desc'
);

// ================================================================
// SKETCH DRAWING (content-sketsa-gambar)
// ================================================================

// 36. header desc
repR(
    '(<p class="text-lg text-gray-600">)\\s+Unggah sketsa Anda, pilih tujuan',
    '<p class="text-lg text-gray-600" data-i18n="sketsa.desc">\r\n                        Unggah sketsa Anda, pilih tujuan',
    'sketsa.desc'
);

// 37. step 1 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">1. Unggah Gambar Sketsa</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="sketsa.step1-title">1. Unggah Gambar Sketsa</h3>',
    'sketsa.step1-title'
);

// 38. upload placeholder p ("seret sketsa" — distinct from "seret foto")
rep(
    '<p class="mt-2 text-sm">Klik atau seret sketsa</p>',
    '<p class="mt-2 text-sm" data-i18n="sketsa.upload-hint">Klik atau seret sketsa</p>',
    'sketsa.upload-hint'
);

// 39. step 2 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">2. Tujuan Gambar</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="sketsa.step2-title">2. Tujuan Gambar</h3>',
    'sketsa.step2-title'
);

// 40. step 3 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">3. Instruksi</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="sketsa.step3-title">3. Instruksi</h3>',
    'sketsa.step3-title'
);

// 41. step 4 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">4. Pilih Rasio</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="sketsa.step4-title">4. Pilih Rasio</h3>',
    'sketsa.step4-title'
);

// 42. generate btn
rep(
    '<span>Buat 4 Gambar</span>',
    '<span data-i18n="sketsa.gen-btn">Buat 4 Gambar</span>',
    'sketsa.gen-btn'
);

// 43. placeholder h3
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil dari Sketsa Anda</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="sketsa.placeholder-title">Hasil dari Sketsa Anda</h3>',
    'sketsa.placeholder-title'
);

// 44. placeholder p
rep(
    '<p class="mt-1 text-sm">Empat variasi gambar akan muncul di sini.</p>',
    '<p class="mt-1 text-sm" data-i18n="sketsa.placeholder-desc">Empat variasi gambar akan muncul di sini.</p>',
    'sketsa.placeholder-desc'
);

// ================================================================
// MAKE CAROUSEL (content-bikin-carousel)
// ================================================================

// 45. h2 title (not h1 — not covered by headers dict)
rep(
    'style="background: linear-gradient(to right, #EC4899, #DB2777); -webkit-background-clip: text; background-clip: text;">Bikin Carousel Produk</h2>',
    'style="background: linear-gradient(to right, #EC4899, #DB2777); -webkit-background-clip: text; background-clip: text;" data-i18n="carousel.title">Bikin Carousel Produk</h2>',
    'carousel.title'
);

// 46. info tip p
rep(
    'Unggah satu foto produk, dan biarkan AI membuatkan satu set carousel yang menarik untuk media sosial atau marketplace Anda.',
    '<span data-i18n="carousel.tip">Unggah satu foto produk, dan biarkan AI membuatkan satu set carousel yang menarik untuk media sosial atau marketplace Anda.</span>',
    'carousel.tip'
);

// 47. step 1 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">1. Unggah Gambar Produk</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="carousel.step1-title">1. Unggah Gambar Produk</h3>',
    'carousel.step1-title'
);

// 48. "Klik atau seret foto" — 3rd occurrence (carousel)
rep(
    '<p class="mt-2 text-sm">Klik atau seret foto</p>',
    '<p class="mt-2 text-sm" data-i18n="common.upload-drag">Klik atau seret foto</p>',
    'common.upload-drag (carousel)'
);

// 49. step 2 h3
rep(
    '<h3 class="text-base font-semibold text-gray-800">2. Nama & Deskripsi</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="carousel.step2-title">2. Nama & Deskripsi</h3>',
    'carousel.step2-title'
);

// 50. auto btn span "Otomatis"
rep(
    '<i class="fas fa-wand-magic-sparkles w-4 h-4"></i><span>Otomatis</span>',
    '<i class="fas fa-wand-magic-sparkles w-4 h-4"></i><span data-i18n="carousel.auto-btn">Otomatis</span>',
    'carousel.auto-btn'
);

// 51. step 3 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">3. Pengaturan</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="carousel.step3-title">3. Pengaturan</h3>',
    'carousel.step3-title'
);

// 52. h4 "Jumlah Slide"
rep(
    '<h4 class="font-medium text-xs mb-2 text-gray-600">Jumlah Slide</h4>',
    '<h4 class="font-medium text-xs mb-2 text-gray-600" data-i18n="carousel.h4-slides">Jumlah Slide</h4>',
    'carousel.h4-slides'
);

// 53. h4 "Aspek Rasio"
rep(
    '<h4 class="font-medium text-xs mb-2 text-gray-600">Aspek Rasio</h4>',
    '<h4 class="font-medium text-xs mb-2 text-gray-600" data-i18n="carousel.h4-ratio">Aspek Rasio</h4>',
    'carousel.h4-ratio'
);

// 54. h4 "Tampilan"
rep(
    '<h4 class="font-medium text-xs mb-2 text-gray-600">Tampilan</h4>',
    '<h4 class="font-medium text-xs mb-2 text-gray-600" data-i18n="carousel.h4-style">Tampilan</h4>',
    'carousel.h4-style'
);

// 55. step 4 toggle label
rep(
    '<h3 class="text-base font-semibold text-gray-800">4. Tambahkan Teks</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="carousel.step4-title">4. Tambahkan Teks</h3>',
    'carousel.step4-title'
);

// 56. script section h4
rep(
    '<h4 class="text-sm font-semibold text-gray-700">Script Konten</h4>',
    '<h4 class="text-sm font-semibold text-gray-700" data-i18n="carousel.script-title">Script Konten</h4>',
    'carousel.script-title'
);

// 57. Buat Script btn span
rep(
    '<i class="fas fa-wand-magic-sparkles w-4 h-4"></i><span>Buat Script</span>',
    '<i class="fas fa-wand-magic-sparkles w-4 h-4"></i><span data-i18n="carousel.script-btn">Buat Script</span>',
    'carousel.script-btn'
);

// 58. step 5 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">5. Posisi Tulisan & Font</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="carousel.step5-title">5. Posisi Tulisan & Font</h3>',
    'carousel.step5-title'
);

// 59. generate btn
rep(
    '<span>Buat Carousel</span>',
    '<span data-i18n="carousel.gen-btn">Buat Carousel</span>',
    'carousel.gen-btn'
);

// 60. placeholder h3
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Carousel Anda</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="carousel.placeholder-title">Hasil Carousel Anda</h3>',
    'carousel.placeholder-title'
);

// 61. placeholder p
rep(
    '<p class="mt-1 text-sm">Carousel yang sudah jadi akan muncul di sini.</p>',
    '<p class="mt-1 text-sm" data-i18n="carousel.placeholder-desc">Carousel yang sudah jadi akan muncul di sini.</p>',
    'carousel.placeholder-desc'
);

// ================================================================
// i18n DICTIONARY
// ================================================================
rep(
    `'lebaran.empty-desc':'Choose a card theme, write your family name, choose a greeting, then click generate to create beautiful Eid cards!',\r\n            },`,
    `'lebaran.empty-desc':'Choose a card theme, write your family name, choose a greeting, then click generate to create beautiful Eid cards!',\r\n` +
    `            'common.upload-drag':'Click or drag photo',\r\n` +
    `            'desainrumah.desc':'Redesign your interior rooms or renovate the exterior of your home with AI',\r\n` +
    `            'desainrumah.tab-interior':'Interior',\r\n` +
    `            'desainrumah.tab-exterior':'Exterior',\r\n` +
    `            'desainrumah.interior-tip':'Upload a room photo, add furniture, choose a style, and let AI magically redesign your room.',\r\n` +
    `            'desainrumah.int-step1':'1. Upload Room Photo',\r\n` +
    `            'desainrumah.int-step2':'2. Add AI Furniture',\r\n` +
    `            'desainrumah.furniture-placeholder':'AI furniture will appear here.',\r\n` +
    `            'desainrumah.int-step3':'3. Upload Furniture',\r\n` +
    `            'desainrumah.int-step4':'4. Instructions & Ratio',\r\n` +
    `            'desainrumah.int-gen-btn':'Design Room',\r\n` +
    `            'desainrumah.int-placeholder-title':'Interior Design Results',\r\n` +
    `            'desainrumah.int-placeholder-desc':'Your room design results will appear here.',\r\n` +
    `            'desainrumah.exterior-tip':'Upload a photo of the outside of your house, choose a renovation style, and let AI transform your home\\'s facade.',\r\n` +
    `            'desainrumah.ext-step1':'1. Upload Exterior Photo',\r\n` +
    `            'desainrumah.ext-step2':'2. Choose Renovation Style',\r\n` +
    `            'desainrumah.ext-step3':'3. Instructions & Ratio',\r\n` +
    `            'desainrumah.ext-gen-btn':'Redesign Home',\r\n` +
    `            'desainrumah.ext-placeholder-title':'Exterior Design Results',\r\n` +
    `            'desainrumah.ext-placeholder-desc':'Your home redesign results will appear here.',\r\n` +
    `            'room.desc':'Transform your room with AI-powered interior design themes',\r\n` +
    `            'room.step1-title':'Upload Room Photo',\r\n` +
    `            'room.remove-photo':'Remove Photo',\r\n` +
    `            'room.step2-title':'Design Theme',\r\n` +
    `            'room.step3-title':'Design Reference',\r\n` +
    `            'room.ref-upload-hint':'Upload design reference (optional)',\r\n` +
    `            'room.remove-ref':'Remove Reference',\r\n` +
    `            'room.step4-title':'Photo Ratio',\r\n` +
    `            'room.step5-title':'Number of Designs',\r\n` +
    `            'room.count-4':'4 Designs',\r\n` +
    `            'room.count-7':'7 Designs',\r\n` +
    `            'room.count-10':'10 Designs',\r\n` +
    `            'room.gen-suffix':'Room Designs',\r\n` +
    `            'room.empty-title':'No Designs Yet',\r\n` +
    `            'room.empty-desc':'Upload a room photo, choose a design theme, then click Generate to create professional designs',\r\n` +
    `            'sketsa.desc':'Upload your sketch, choose a purpose, and let AI transform it into amazing digital artwork.',\r\n` +
    `            'sketsa.step1-title':'1. Upload Sketch Image',\r\n` +
    `            'sketsa.upload-hint':'Click or drag sketch',\r\n` +
    `            'sketsa.step2-title':'2. Image Purpose',\r\n` +
    `            'sketsa.step3-title':'3. Instructions',\r\n` +
    `            'sketsa.step4-title':'4. Choose Ratio',\r\n` +
    `            'sketsa.gen-btn':'Create 4 Images',\r\n` +
    `            'sketsa.placeholder-title':'Results from Your Sketch',\r\n` +
    `            'sketsa.placeholder-desc':'Four image variations will appear here.',\r\n` +
    `            'carousel.title':'Create Product Carousel',\r\n` +
    `            'carousel.tip':'Upload one product photo, and let AI create an attractive carousel set for your social media or marketplace.',\r\n` +
    `            'carousel.step1-title':'1. Upload Product Image',\r\n` +
    `            'carousel.step2-title':'2. Name & Description',\r\n` +
    `            'carousel.auto-btn':'Auto',\r\n` +
    `            'carousel.step3-title':'3. Settings',\r\n` +
    `            'carousel.h4-slides':'Number of Slides',\r\n` +
    `            'carousel.h4-ratio':'Aspect Ratio',\r\n` +
    `            'carousel.h4-style':'Appearance',\r\n` +
    `            'carousel.step4-title':'4. Add Text',\r\n` +
    `            'carousel.script-title':'Content Script',\r\n` +
    `            'carousel.script-btn':'Create Script',\r\n` +
    `            'carousel.step5-title':'5. Text Position & Font',\r\n` +
    `            'carousel.gen-btn':'Create Carousel',\r\n` +
    `            'carousel.placeholder-title':'Your Carousel Results',\r\n` +
    `            'carousel.placeholder-desc':'Your finished carousel will appear here.',\r\n` +
    `            },`,
    'EN dict insert'
);

rep(
    `'lebaran.empty-desc':'Pilih tema kartu, tulis nama keluarga, pilih ucapan, lalu klik generate untuk membuat kartu lebaran yang cantik!',\r\n            }`,
    `'lebaran.empty-desc':'Pilih tema kartu, tulis nama keluarga, pilih ucapan, lalu klik generate untuk membuat kartu lebaran yang cantik!',\r\n` +
    `            'common.upload-drag':'Klik atau seret foto',\r\n` +
    `            'desainrumah.desc':'Desain ulang ruangan interior atau renovasi eksterior rumah Anda dengan AI',\r\n` +
    `            'desainrumah.tab-interior':'Interior',\r\n` +
    `            'desainrumah.tab-exterior':'Eksterior',\r\n` +
    `            'desainrumah.interior-tip':'Unggah foto ruangan, tambahkan furnitur, pilih gaya, dan biarkan AI mendesain ulang ruangan Anda secara ajaib.',\r\n` +
    `            'desainrumah.int-step1':'1. Unggah Foto Ruangan',\r\n` +
    `            'desainrumah.int-step2':'2. Tambah Furnitur AI',\r\n` +
    `            'desainrumah.furniture-placeholder':'Furnitur AI akan muncul di sini.',\r\n` +
    `            'desainrumah.int-step3':'3. Unggah Furnitur',\r\n` +
    `            'desainrumah.int-step4':'4. Instruksi & Rasio',\r\n` +
    `            'desainrumah.int-gen-btn':'Desain Ruangan',\r\n` +
    `            'desainrumah.int-placeholder-title':'Hasil Desain Interior',\r\n` +
    `            'desainrumah.int-placeholder-desc':'Hasil desain ruangan Anda akan muncul di sini.',\r\n` +
    `            'desainrumah.exterior-tip':'Unggah foto luar rumah Anda, pilih gaya renovasi, dan biarkan AI menyulap fasad rumah Anda menjadi baru.',\r\n` +
    `            'desainrumah.ext-step1':'1. Unggah Foto Luar Rumah',\r\n` +
    `            'desainrumah.ext-step2':'2. Pilih Gaya Renovasi',\r\n` +
    `            'desainrumah.ext-step3':'3. Instruksi & Rasio',\r\n` +
    `            'desainrumah.ext-gen-btn':'Redesain Rumah',\r\n` +
    `            'desainrumah.ext-placeholder-title':'Hasil Desain Eksterior',\r\n` +
    `            'desainrumah.ext-placeholder-desc':'Hasil redesain rumah Anda akan muncul di sini.',\r\n` +
    `            'room.desc':'Ubah kamar Anda dengan tema desain interior bertenaga AI',\r\n` +
    `            'room.step1-title':'Upload Foto Kamar',\r\n` +
    `            'room.remove-photo':'Hapus Foto',\r\n` +
    `            'room.step2-title':'Tema Desain',\r\n` +
    `            'room.step3-title':'Referensi Desain',\r\n` +
    `            'room.ref-upload-hint':'Upload referensi desain (opsional)',\r\n` +
    `            'room.remove-ref':'Hapus Referensi',\r\n` +
    `            'room.step4-title':'Rasio Foto',\r\n` +
    `            'room.step5-title':'Jumlah Desain',\r\n` +
    `            'room.count-4':'4 Desain',\r\n` +
    `            'room.count-7':'7 Desain',\r\n` +
    `            'room.count-10':'10 Desain',\r\n` +
    `            'room.gen-suffix':'Desain Kamar',\r\n` +
    `            'room.empty-title':'Belum Ada Desain',\r\n` +
    `            'room.empty-desc':'Upload foto kamar, pilih tema desain, lalu klik Generate untuk membuat desain profesional',\r\n` +
    `            'sketsa.desc':'Unggah sketsa Anda, pilih tujuan, dan biarkan AI mengubahnya menjadi karya seni digital yang menakjubkan.',\r\n` +
    `            'sketsa.step1-title':'1. Unggah Gambar Sketsa',\r\n` +
    `            'sketsa.upload-hint':'Klik atau seret sketsa',\r\n` +
    `            'sketsa.step2-title':'2. Tujuan Gambar',\r\n` +
    `            'sketsa.step3-title':'3. Instruksi',\r\n` +
    `            'sketsa.step4-title':'4. Pilih Rasio',\r\n` +
    `            'sketsa.gen-btn':'Buat 4 Gambar',\r\n` +
    `            'sketsa.placeholder-title':'Hasil dari Sketsa Anda',\r\n` +
    `            'sketsa.placeholder-desc':'Empat variasi gambar akan muncul di sini.',\r\n` +
    `            'carousel.title':'Bikin Carousel Produk',\r\n` +
    `            'carousel.tip':'Unggah satu foto produk, dan biarkan AI membuatkan satu set carousel yang menarik untuk media sosial atau marketplace Anda.',\r\n` +
    `            'carousel.step1-title':'1. Unggah Gambar Produk',\r\n` +
    `            'carousel.step2-title':'2. Nama & Deskripsi',\r\n` +
    `            'carousel.auto-btn':'Otomatis',\r\n` +
    `            'carousel.step3-title':'3. Pengaturan',\r\n` +
    `            'carousel.h4-slides':'Jumlah Slide',\r\n` +
    `            'carousel.h4-ratio':'Aspek Rasio',\r\n` +
    `            'carousel.h4-style':'Tampilan',\r\n` +
    `            'carousel.step4-title':'4. Tambahkan Teks',\r\n` +
    `            'carousel.script-title':'Script Konten',\r\n` +
    `            'carousel.script-btn':'Buat Script',\r\n` +
    `            'carousel.step5-title':'5. Posisi Tulisan & Font',\r\n` +
    `            'carousel.gen-btn':'Buat Carousel',\r\n` +
    `            'carousel.placeholder-title':'Hasil Carousel Anda',\r\n` +
    `            'carousel.placeholder-desc':'Carousel yang sudah jadi akan muncul di sini.',\r\n` +
    `            }`,
    'ID dict insert'
);

// ================================================================
console.log(`\nDone: ${ok} OK, ${miss} MISS`);

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
