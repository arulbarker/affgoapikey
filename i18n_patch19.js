// i18n_patch19.js — Kids Career Photo, Wedding, Wedding Design
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
// KIDS CAREER PHOTO (content-profesi-anak)
// ================================================================

// 1. header p desc — anchor on unique "profesi impian"
repR(
    '(<p class="text-lg text-gray-600 max-w-3xl mx-auto">)\\s+Ciptakan foto anak dengan berbagai profesi',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="kids.desc">\r\n                        Ciptakan foto anak dengan berbagai profesi',
    'kids.desc'
);

// 2. step 1 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto Anak</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="kids.step1-title">Upload Foto Anak</h3>',
    'kids.step1-title'
);

// 3. upload click p (emoji 👦 = \uD83D\uDC66)
rep(
    '<p class="mt-2 text-sm font-semibold">\uD83D\uDC66 Klik untuk upload foto anak</p>',
    '<p class="mt-2 text-sm font-semibold" data-i18n="kids.upload-click">\uD83D\uDC66 Klik untuk upload foto anak</p>',
    'kids.upload-click'
);

// 4. upload hint "Format: JPG, PNG, HEIC" — appears ×3 (kids + wedding ×2), call 3 times
rep(
    '<p class="mt-1 text-xs text-gray-400">Format: JPG, PNG, HEIC</p>',
    '<p class="mt-1 text-xs text-gray-400" data-i18n="kids.upload-hint">Format: JPG, PNG, HEIC</p>',
    'kids.upload-hint (1)'
);
rep(
    '<p class="mt-1 text-xs text-gray-400">Format: JPG, PNG, HEIC</p>',
    '<p class="mt-1 text-xs text-gray-400" data-i18n="kids.upload-hint">Format: JPG, PNG, HEIC</p>',
    'kids.upload-hint (2)'
);
rep(
    '<p class="mt-1 text-xs text-gray-400">Format: JPG, PNG, HEIC</p>',
    '<p class="mt-1 text-xs text-gray-400" data-i18n="kids.upload-hint">Format: JPG, PNG, HEIC</p>',
    'kids.upload-hint (3)'
);

// 5. remove-photo button — by unique ID (reuse unboxing.remove-photo key)
rep('id="profesi-remove-child-preview"', 'id="profesi-remove-child-preview" data-i18n="unboxing.remove-photo"', 'kids.remove-photo');

// 6. step 2 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Umur Anak</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="kids.step2-title">Umur Anak</h3>',
    'kids.step2-title'
);

// 7. step 3 h3 with nested (Opsional) span
rep(
    '<h3 class="text-lg font-bold text-gray-800">Tema Profesi <span class="text-sm text-gray-500">(Opsional)</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800"><span data-i18n="kids.step3-title">Tema Profesi</span> <span class="text-sm text-gray-500" data-i18n="family.optional-label">(Opsional)</span></h3>',
    'kids.step3-title'
);

// 8. theme placeholder
rep(
    'id="profesi-theme-input"',
    'id="profesi-theme-input" data-i18n-placeholder="kids.theme-placeholder"',
    'kids.theme-placeholder'
);

// 9. theme tip p — icon+text on same line after whitespace
repR(
    '(<p class="text-xs text-gray-500 mt-1">)\\s+(<i class="fas fa-info-circle mr-1"></i>)Kosongkan untuk tema profesi random otomatis',
    '<p class="text-xs text-gray-500 mt-1" data-i18n="kids.theme-tip">\r\n                                    $2Kosongkan untuk tema profesi random otomatis',
    'kids.theme-tip'
);

// 10-12. count buttons — add data-i18n before data-count (class "profesi-count-btn" is unique)
rep('data-count="4" class="profesi-count-btn bg-gray-50',
    'data-i18n="kids.count-4" data-count="4" class="profesi-count-btn bg-gray-50', 'kids.count-4');
rep('data-count="7" class="profesi-count-btn profesi-count-selected',
    'data-i18n="kids.count-7" data-count="7" class="profesi-count-btn profesi-count-selected', 'kids.count-7');
rep('data-count="10" class="profesi-count-btn bg-gray-50',
    'data-i18n="kids.count-10" data-count="10" class="profesi-count-btn bg-gray-50', 'kids.count-10');

// 13. generate button — wrap prefix/suffix around dynamic count span
rep(
    '<span>Generate <span id="profesi-count-text">7</span> Foto Profesi</span>',
    '<span><span data-i18n="kids.gen-prefix">Generate</span> <span id="profesi-count-text">7</span> <span data-i18n="kids.gen-suffix">Foto Profesi</span></span>',
    'kids.gen-btn'
);

// 14. empty state title (×2 — kids + wedding)
rep('<h3 class="text-2xl font-bold text-gray-800 mb-2">Belum Ada Foto</h3>',
    '<h3 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="kids.empty-title">Belum Ada Foto</h3>', 'kids.empty-title (1)');
rep('<h3 class="text-2xl font-bold text-gray-800 mb-2">Belum Ada Foto</h3>',
    '<h3 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="kids.empty-title">Belum Ada Foto</h3>', 'kids.empty-title (2 - wedding)');

// 15. kids empty desc
rep(
    '<p class="text-gray-500 max-w-md">Upload foto anak, lalu klik Generate untuk membuat foto profesi profesional</p>',
    '<p class="text-gray-500 max-w-md" data-i18n="kids.empty-desc">Upload foto anak, lalu klik Generate untuk membuat foto profesi profesional</p>',
    'kids.empty-desc'
);

// 16. results suffix — wrap after count span
rep(
    '<span id="profesi-results-count">7</span> Foto Profesi Generated!',
    '<span id="profesi-results-count">7</span><span data-i18n="kids.results-suffix"> Foto Profesi Generated!</span>',
    'kids.results-suffix'
);

// 17. download-all button — by unique ID
rep('id="profesi-download-all-btn"', 'id="profesi-download-all-btn" data-i18n="kids.download-all"', 'kids.download-all');

// ================================================================
// WEDDING (content-wedding)
// ================================================================

// 18. header p desc
repR(
    '(<p class="text-lg text-gray-600 max-w-3xl mx-auto">)\\s+Ciptakan momen pernikahan impian',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="wedding.desc">\r\n                        Ciptakan momen pernikahan impian',
    'wedding.desc'
);

// 19. step 1 h3
rep('<h3 class="text-lg font-bold text-gray-800">Upload Foto Pria</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wedding.step1-title">Upload Foto Pria</h3>', 'wedding.step1-title');

// 20. male upload click (emoji 🤵 = \uD83E\uDD35)
rep(
    '<p class="mt-2 text-sm font-semibold">\uD83E\uDD35 Klik untuk upload foto pria</p>',
    '<p class="mt-2 text-sm font-semibold" data-i18n="wedding.male-click">\uD83E\uDD35 Klik untuk upload foto pria</p>',
    'wedding.male-click'
);

// 21. male remove-photo
rep('id="wedding-remove-male-preview"', 'id="wedding-remove-male-preview" data-i18n="unboxing.remove-photo"', 'wedding.remove-male');

// 22. step 2 h3
rep('<h3 class="text-lg font-bold text-gray-800">Upload Foto Wanita</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wedding.step2-title">Upload Foto Wanita</h3>', 'wedding.step2-title');

// 23. female upload click (emoji 👰 = \uD83D\uDC70)
rep(
    '<p class="mt-2 text-sm font-semibold">\uD83D\uDC70 Klik untuk upload foto wanita</p>',
    '<p class="mt-2 text-sm font-semibold" data-i18n="wedding.female-click">\uD83D\uDC70 Klik untuk upload foto wanita</p>',
    'wedding.female-click'
);

// 24. female remove-photo
rep('id="wedding-remove-female-preview"', 'id="wedding-remove-female-preview" data-i18n="unboxing.remove-photo"', 'wedding.remove-female');

// 25. step 3 h3 with nested (Opsional) span
rep(
    '<h3 class="text-lg font-bold text-gray-800">Tema Foto <span class="text-sm text-gray-500">(Opsional)</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800"><span data-i18n="wedding.step3-title">Tema Foto</span> <span class="text-sm text-gray-500" data-i18n="family.optional-label">(Opsional)</span></h3>',
    'wedding.step3-title'
);

// 26. wedding theme textarea placeholder
rep('id="wedding-theme-input"', 'id="wedding-theme-input" data-i18n-placeholder="wedding.theme-placeholder"', 'wedding.theme-placeholder');

// 27. wedding theme tip — icon+text on same line
repR(
    '(<p class="text-xs text-gray-500 mt-1">)\\s+(<i class="fas fa-info-circle mr-1"></i>)Kosongkan untuk tema random otomatis',
    '<p class="text-xs text-gray-500 mt-1" data-i18n="wedding.theme-tip">\r\n                                    $2Kosongkan untuk tema random otomatis',
    'wedding.theme-tip'
);

// 28. step 4 h3 "Jenis Foto"
rep('<h3 class="text-lg font-bold text-gray-800">Jenis Foto</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wedding.step4-title">Jenis Foto</h3>', 'wedding.step4-title');

// 29. step 5 h3 "Rasio Foto"
rep('<h3 class="text-lg font-bold text-gray-800">Rasio Foto</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wedding.step5-title">Rasio Foto</h3>', 'wedding.step5-title');

// 30. step 6 h3 "Jumlah Foto" (text-lg, first untagged occurrence → wedding panel)
rep('<h3 class="text-lg font-bold text-gray-800">Jumlah Foto</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="maternity.step5-title">Jumlah Foto</h3>', 'wedding.step6-title (reuse maternity.step5-title)');

// 31-33. wedding count buttons (Foto) — distinguish from wdesign (Desain) via text anchor
repR('(data-count="4" class="wedding-count-btn bg-gray-50[^"]*">)\\s+4 Foto\\s+(</button>)',
    '$1\r\n                                            <span data-i18n="kids.count-4">4 Foto</span>\r\n                                        $2', 'wedding.count-4');
repR('(data-count="7" class="wedding-count-btn wedding-count-selected[^"]*">)\\s+7 Foto\\s+(</button>)',
    '$1\r\n                                            <span data-i18n="kids.count-7">7 Foto</span>\r\n                                        $2', 'wedding.count-7');
repR('(data-count="10" class="wedding-count-btn bg-gray-50[^"]*">)\\s+10 Foto\\s+(</button>)',
    '$1\r\n                                            <span data-i18n="kids.count-10">10 Foto</span>\r\n                                        $2', 'wedding.count-10');

// 34. generate button — wrap around dynamic count span
rep(
    '<span>Generate <span id="wedding-count-text">7</span> Foto Wedding</span>',
    '<span><span data-i18n="kids.gen-prefix">Generate</span> <span id="wedding-count-text">7</span> <span data-i18n="wedding.gen-suffix">Foto Wedding</span></span>',
    'wedding.gen-btn'
);

// 35. wedding empty desc
rep(
    '<p class="text-gray-500 max-w-md">Upload foto pria dan wanita, lalu klik Generate untuk membuat foto wedding profesional</p>',
    '<p class="text-gray-500 max-w-md" data-i18n="wedding.empty-desc">Upload foto pria dan wanita, lalu klik Generate untuk membuat foto wedding profesional</p>',
    'wedding.empty-desc'
);

// 36. wedding results suffix
rep(
    '<span id="wedding-results-count">7</span> Foto Wedding Generated!',
    '<span id="wedding-results-count">7</span><span data-i18n="wedding.results-suffix"> Foto Wedding Generated!</span>',
    'wedding.results-suffix'
);

// 37. wedding download-all — reuse kids.download-all
rep('id="wedding-download-all-btn"', 'id="wedding-download-all-btn" data-i18n="kids.download-all"', 'wedding.download-all');

// ================================================================
// WEDDING DESIGN (content-wedding-design)
// ================================================================

// 38. header p desc — unique class max-w-3xl (vs family's max-w-2xl)
rep(
    '<p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">',
    '<p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" data-i18n="wdesign.desc">',
    'wdesign.desc'
);

// 39. badge span
rep(
    '<span class="text-sm font-medium" style="color: #92400e;">Visualisasi profesional untuk presentasi klien</span>',
    '<span class="text-sm font-medium" style="color: #92400e;" data-i18n="wdesign.badge">Visualisasi profesional untuk presentasi klien</span>',
    'wdesign.badge'
);

// 40. step 1 h3
rep('<h3 class="text-lg font-bold text-gray-800">Upload Background / Sketsa</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step1-title">Upload Background / Sketsa</h3>', 'wdesign.step1-title');

// 41. upload click span
rep(
    '<span class="font-semibold" style="color: #92400e;">Klik untuk upload</span>',
    '<span class="font-semibold" style="color: #92400e;" data-i18n="wdesign.upload-click">Klik untuk upload</span>',
    'wdesign.upload-click'
);

// 42. upload hint span
rep(
    '<span class="text-xs text-gray-500">Sketsa ruangan atau background venue</span>',
    '<span class="text-xs text-gray-500" data-i18n="wdesign.upload-hint">Sketsa ruangan atau background venue</span>',
    'wdesign.upload-hint'
);

// 43. remove-photo — by unique ID
rep('id="wedding-design-remove-preview"', 'id="wedding-design-remove-preview" data-i18n="unboxing.remove-photo"', 'wdesign.remove-photo');

// 44-53. step h3s 2-10 (all text-lg, all unique text)
rep('<h3 class="text-lg font-bold text-gray-800">Tema Pernikahan</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step2-title">Tema Pernikahan</h3>', 'wdesign.step2-title');
rep('<h3 class="text-lg font-bold text-gray-800">Bingkai Dekorasi</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step3-title">Bingkai Dekorasi</h3>', 'wdesign.step3-title');
rep('<h3 class="text-lg font-bold text-gray-800">Lampu Hias</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step4-title">Lampu Hias</h3>', 'wdesign.step4-title');
rep('<h3 class="text-lg font-bold text-gray-800">Kursi & Sofa Pelaminan</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step5-title">Kursi & Sofa Pelaminan</h3>', 'wdesign.step5-title');
rep('<h3 class="text-lg font-bold text-gray-800">Style Pelaminan</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step6-title">Style Pelaminan</h3>', 'wdesign.step6-title');
rep('<h3 class="text-lg font-bold text-gray-800">Warna Tema</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step7-title">Warna Tema</h3>', 'wdesign.step7-title');
rep('<h3 class="text-lg font-bold text-gray-800">Pencahayaan</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step8-title">Pencahayaan</h3>', 'wdesign.step8-title');
rep('<h3 class="text-lg font-bold text-gray-800">Rasio Gambar</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step9-title">Rasio Gambar</h3>', 'wdesign.step9-title');
rep('<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi Desain</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="wdesign.step10-title">Jumlah Variasi Desain</h3>', 'wdesign.step10-title');

// 54-56. wdesign count buttons (Desain) — distinguish from wedding (Foto) via text anchor
repR('(data-count="4" class="wedding-count-btn bg-gray-50[^"]*">)\\s+4 Desain\\s+(</button>)',
    '$1\r\n                                        <span data-i18n="wdesign.count-4">4 Desain</span>\r\n                                    $2', 'wdesign.count-4');
repR('(data-count="6" class="wedding-count-btn wedding-count-selected[^"]*">)\\s+6 Desain\\s+(</button>)',
    '$1\r\n                                        <span data-i18n="wdesign.count-6">6 Desain</span>\r\n                                    $2', 'wdesign.count-6');
repR('(data-count="8" class="wedding-count-btn bg-gray-50[^"]*">)\\s+8 Desain\\s+(</button>)',
    '$1\r\n                                        <span data-i18n="wdesign.count-8">8 Desain</span>\r\n                                    $2', 'wdesign.count-8');

// 57. wdesign generate button span — reuse kids.gen-prefix
rep(
    '<span class="relative z-10">Generate <span id="wedding-design-count-text">6</span> Desain</span>',
    '<span class="relative z-10"><span data-i18n="kids.gen-prefix">Generate</span> <span id="wedding-design-count-text">6</span> <span data-i18n="wdesign.gen-suffix">Desain</span></span>',
    'wdesign.gen-btn'
);

// 58. loading title p
rep(
    '<p class="text-xl font-semibold mb-2" style="color: #92400e;">Sedang membuat desain pernikahan...</p>',
    '<p class="text-xl font-semibold mb-2" style="color: #92400e;" data-i18n="wdesign.loading-title">Sedang membuat desain pernikahan...</p>',
    'wdesign.loading-title'
);

// 59. results suffix
rep(
    '<span id="wedding-design-results-count">6</span> Desain Pernikahan',
    '<span id="wedding-design-results-count">6</span><span data-i18n="wdesign.results-suffix"> Desain Pernikahan</span>',
    'wdesign.results-suffix'
);

// 60. error title
rep(
    '<h4 class="font-bold text-red-700 mb-1">Terjadi Kesalahan</h4>',
    '<h4 class="font-bold text-red-700 mb-1" data-i18n="wdesign.error-title">Terjadi Kesalahan</h4>',
    'wdesign.error-title'
);

// 61. empty title
rep(
    '<h3 class="text-2xl font-bold mb-3" style="color: #92400e;">Siap Membuat Desain Pernikahan</h3>',
    '<h3 class="text-2xl font-bold mb-3" style="color: #92400e;" data-i18n="wdesign.empty-title">Siap Membuat Desain Pernikahan</h3>',
    'wdesign.empty-title'
);

// 62. empty desc p
rep(
    '<p class="text-gray-600 mb-6 max-w-md mx-auto">',
    '<p class="text-gray-600 mb-6 max-w-md mx-auto" data-i18n="wdesign.empty-desc">',
    'wdesign.empty-desc'
);

// 63-65. feature badge spans
rep('<span>10 Elemen Kustomisasi</span>', '<span data-i18n="wdesign.feature-1">10 Elemen Kustomisasi</span>', 'wdesign.feature-1');
rep('<span>Tema Indonesia</span>', '<span data-i18n="wdesign.feature-2">Tema Indonesia</span>', 'wdesign.feature-2');
rep('<span>Hasil 3D Realistis</span>', '<span data-i18n="wdesign.feature-3">Hasil 3D Realistis</span>', 'wdesign.feature-3');

// ================================================================
// i18n DICTIONARY
// ================================================================
rep(
    `'maternity.results-suffix':' Maternity Photos Created!',\r\n            },`,
    `'maternity.results-suffix':' Maternity Photos Created!',\r\n` +
    `            'kids.desc':'Create professional career photos of your child in various dream professions',\r\n` +
    `            'kids.step1-title':'Upload Child\\'s Photo',\r\n` +
    `            'kids.upload-click':'\uD83D\uDC66 Click to upload child\\'s photo',\r\n` +
    `            'kids.upload-hint':'Format: JPG, PNG, HEIC',\r\n` +
    `            'kids.step2-title':'Child\\'s Age',\r\n` +
    `            'kids.step3-title':'Career Theme',\r\n` +
    `            'kids.theme-placeholder':'Example: doctor, pilot, chef, astronaut...',\r\n` +
    `            'kids.theme-tip':'Leave blank for automatic random career theme',\r\n` +
    `            'kids.count-4':'4 Photos',\r\n` +
    `            'kids.count-7':'7 Photos',\r\n` +
    `            'kids.count-10':'10 Photos',\r\n` +
    `            'kids.gen-prefix':'Generate',\r\n` +
    `            'kids.gen-suffix':'Career Photos',\r\n` +
    `            'kids.empty-title':'No Photos Yet',\r\n` +
    `            'kids.empty-desc':'Upload a photo of your child, then click Generate to create professional career photos',\r\n` +
    `            'kids.results-suffix':' Career Photos Generated!',\r\n` +
    `            'kids.download-all':'Download All',\r\n` +
    `            'wedding.desc':'Create your dream wedding moments with professional AI Photography',\r\n` +
    `            'wedding.step1-title':'Upload Male Photo',\r\n` +
    `            'wedding.male-click':'\uD83E\uDD35 Click to upload male photo',\r\n` +
    `            'wedding.step2-title':'Upload Female Photo',\r\n` +
    `            'wedding.female-click':'\uD83D\uDC70 Click to upload female photo',\r\n` +
    `            'wedding.step3-title':'Photo Theme',\r\n` +
    `            'wedding.theme-placeholder':'Example: at the beach during sunset, fairytale castle ballroom, vintage 1920s style...',\r\n` +
    `            'wedding.theme-tip':'Leave blank for automatic random theme',\r\n` +
    `            'wedding.step4-title':'Photo Type',\r\n` +
    `            'wedding.step5-title':'Photo Ratio',\r\n` +
    `            'wedding.gen-suffix':'Wedding Photos',\r\n` +
    `            'wedding.empty-desc':'Upload male and female photos, then click Generate to create professional wedding photos',\r\n` +
    `            'wedding.results-suffix':' Wedding Photos Generated!',\r\n` +
    `            'wdesign.desc':'Professional wedding design generator for event organizers. Upload a sketch or background, choose decorative elements, and get instant realistic 3D visualization!',\r\n` +
    `            'wdesign.badge':'Professional visualization for client presentations',\r\n` +
    `            'wdesign.step1-title':'Upload Background / Sketch',\r\n` +
    `            'wdesign.upload-click':'Click to upload',\r\n` +
    `            'wdesign.upload-hint':'Room sketch or venue background',\r\n` +
    `            'wdesign.step2-title':'Wedding Theme',\r\n` +
    `            'wdesign.step3-title':'Decoration Frame',\r\n` +
    `            'wdesign.step4-title':'Decorative Lights',\r\n` +
    `            'wdesign.step5-title':'Wedding Chairs & Sofa',\r\n` +
    `            'wdesign.step6-title':'Wedding Stage Style',\r\n` +
    `            'wdesign.step7-title':'Theme Colors',\r\n` +
    `            'wdesign.step8-title':'Lighting',\r\n` +
    `            'wdesign.step9-title':'Aspect Ratio',\r\n` +
    `            'wdesign.step10-title':'Number of Design Variations',\r\n` +
    `            'wdesign.count-4':'4 Designs',\r\n` +
    `            'wdesign.count-6':'6 Designs',\r\n` +
    `            'wdesign.count-8':'8 Designs',\r\n` +
    `            'wdesign.gen-suffix':'Designs',\r\n` +
    `            'wdesign.loading-title':'Creating wedding design...',\r\n` +
    `            'wdesign.results-suffix':' Wedding Designs',\r\n` +
    `            'wdesign.error-title':'An Error Occurred',\r\n` +
    `            'wdesign.empty-title':'Ready to Create Wedding Designs',\r\n` +
    `            'wdesign.empty-desc':'Upload a sketch or venue background, choose a theme and decorative elements, then click generate to create professional 3D visualization!',\r\n` +
    `            'wdesign.feature-1':'10 Customization Elements',\r\n` +
    `            'wdesign.feature-2':'Indonesian Themes',\r\n` +
    `            'wdesign.feature-3':'Realistic 3D Results',\r\n` +
    `            },`,
    'EN dict insert'
);

rep(
    `'maternity.results-suffix':' Foto Maternity Berhasil Dibuat!',\r\n            }`,
    `'maternity.results-suffix':' Foto Maternity Berhasil Dibuat!',\r\n` +
    `            'kids.desc':'Ciptakan foto anak dengan berbagai profesi impian secara profesional dan natural',\r\n` +
    `            'kids.step1-title':'Upload Foto Anak',\r\n` +
    `            'kids.upload-click':'\uD83D\uDC66 Klik untuk upload foto anak',\r\n` +
    `            'kids.upload-hint':'Format: JPG, PNG, HEIC',\r\n` +
    `            'kids.step2-title':'Umur Anak',\r\n` +
    `            'kids.step3-title':'Tema Profesi',\r\n` +
    `            'kids.theme-placeholder':'Contoh: dokter, pilot, chef, astronot...',\r\n` +
    `            'kids.theme-tip':'Kosongkan untuk tema profesi random otomatis',\r\n` +
    `            'kids.count-4':'4 Foto',\r\n` +
    `            'kids.count-7':'7 Foto',\r\n` +
    `            'kids.count-10':'10 Foto',\r\n` +
    `            'kids.gen-prefix':'Generate',\r\n` +
    `            'kids.gen-suffix':'Foto Profesi',\r\n` +
    `            'kids.empty-title':'Belum Ada Foto',\r\n` +
    `            'kids.empty-desc':'Upload foto anak, lalu klik Generate untuk membuat foto profesi profesional',\r\n` +
    `            'kids.results-suffix':' Foto Profesi Generated!',\r\n` +
    `            'kids.download-all':'Download All',\r\n` +
    `            'wedding.desc':'Ciptakan momen pernikahan impian dengan AI Photography berkualitas profesional',\r\n` +
    `            'wedding.step1-title':'Upload Foto Pria',\r\n` +
    `            'wedding.male-click':'\uD83E\uDD35 Klik untuk upload foto pria',\r\n` +
    `            'wedding.step2-title':'Upload Foto Wanita',\r\n` +
    `            'wedding.female-click':'\uD83D\uDC70 Klik untuk upload foto wanita',\r\n` +
    `            'wedding.step3-title':'Tema Foto',\r\n` +
    `            'wedding.theme-placeholder':'Contoh: di pantai saat matahari terbenam, fairytale castle ballroom, vintage 1920s style...',\r\n` +
    `            'wedding.theme-tip':'Kosongkan untuk tema random otomatis',\r\n` +
    `            'wedding.step4-title':'Jenis Foto',\r\n` +
    `            'wedding.step5-title':'Rasio Foto',\r\n` +
    `            'wedding.gen-suffix':'Foto Wedding',\r\n` +
    `            'wedding.empty-desc':'Upload foto pria dan wanita, lalu klik Generate untuk membuat foto wedding profesional',\r\n` +
    `            'wedding.results-suffix':' Foto Wedding Generated!',\r\n` +
    `            'wdesign.desc':'Generator desain pernikahan profesional untuk event organizer. Upload sketsa atau background, pilih elemen dekorasi, dan dapatkan visualisasi 3D realistis instant!',\r\n` +
    `            'wdesign.badge':'Visualisasi profesional untuk presentasi klien',\r\n` +
    `            'wdesign.step1-title':'Upload Background / Sketsa',\r\n` +
    `            'wdesign.upload-click':'Klik untuk upload',\r\n` +
    `            'wdesign.upload-hint':'Sketsa ruangan atau background venue',\r\n` +
    `            'wdesign.step2-title':'Tema Pernikahan',\r\n` +
    `            'wdesign.step3-title':'Bingkai Dekorasi',\r\n` +
    `            'wdesign.step4-title':'Lampu Hias',\r\n` +
    `            'wdesign.step5-title':'Kursi & Sofa Pelaminan',\r\n` +
    `            'wdesign.step6-title':'Style Pelaminan',\r\n` +
    `            'wdesign.step7-title':'Warna Tema',\r\n` +
    `            'wdesign.step8-title':'Pencahayaan',\r\n` +
    `            'wdesign.step9-title':'Rasio Gambar',\r\n` +
    `            'wdesign.step10-title':'Jumlah Variasi Desain',\r\n` +
    `            'wdesign.count-4':'4 Desain',\r\n` +
    `            'wdesign.count-6':'6 Desain',\r\n` +
    `            'wdesign.count-8':'8 Desain',\r\n` +
    `            'wdesign.gen-suffix':'Desain',\r\n` +
    `            'wdesign.loading-title':'Sedang membuat desain pernikahan...',\r\n` +
    `            'wdesign.results-suffix':' Desain Pernikahan',\r\n` +
    `            'wdesign.error-title':'Terjadi Kesalahan',\r\n` +
    `            'wdesign.empty-title':'Siap Membuat Desain Pernikahan',\r\n` +
    `            'wdesign.empty-desc':'Upload sketsa atau background venue, pilih tema dan elemen dekorasi, lalu klik generate untuk membuat visualisasi 3D profesional!',\r\n` +
    `            'wdesign.feature-1':'10 Elemen Kustomisasi',\r\n` +
    `            'wdesign.feature-2':'Tema Indonesia',\r\n` +
    `            'wdesign.feature-3':'Hasil 3D Realistis',\r\n` +
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
