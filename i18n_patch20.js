// i18n_patch20.js — Umrah/Hajj Photo, Passport Photo, Graduation Photo
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
// UMRAH/HAJJ PHOTO (content-umrah-haji)
// ================================================================

// 1. header desc
repR(
    '(<p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">)\\s+Abadikan momen spiritual',
    '<p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" data-i18n="umrah.desc">\r\n                    Abadikan momen spiritual',
    'umrah.desc'
);

// 2. badge span
rep(
    '<span class="text-sm font-medium" style="color: #D97706;">Hasil instant dalam hitungan detik</span>',
    '<span class="text-sm font-medium" style="color: #D97706;" data-i18n="umrah.badge">Hasil instant dalam hitungan detik</span>',
    'umrah.badge'
);

// 3. step 1 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Unggah Foto (1-5 Orang)</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="umrah.step1-title">Unggah Foto (1-5 Orang)</h3>',
    'umrah.step1-title'
);

// 4. add photo span (umrah) — anchor on button id
repR(
    '(id="umrah-add-photo-btn"[^>]*>)\\s+(<i class="fas fa-plus"></i>)\\s+<span>Tambah Foto</span>',
    '$1\r\n                                        $2\r\n                                        <span data-i18n="touring.add-photo">Tambah Foto</span>',
    'umrah.add-photo'
);

// 5. step 2 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Pilih Pakaian</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="umrah.step2-title">Pilih Pakaian</h3>',
    'umrah.step2-title'
);

// 6. step 3 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Pilih Lokasi</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="umrah.step3-title">Pilih Lokasi</h3>',
    'umrah.step3-title'
);

// 7. step 4 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Pilih Rasio Gambar</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="umrah.step4-title">Pilih Rasio Gambar</h3>',
    'umrah.step4-title'
);

// 8. generate button span
rep(
    '<span class="relative z-10">Buat Foto Umrah/Haji</span>',
    '<span class="relative z-10" data-i18n="umrah.gen-btn">Buat Foto Umrah/Haji</span>',
    'umrah.gen-btn'
);

// 9. placeholder h3
rep(
    '<h3 class="font-bold text-2xl mb-3" style="color: #D97706;">Hasil Foto Umrah/Haji Anda</h3>',
    '<h3 class="font-bold text-2xl mb-3" style="color: #D97706;" data-i18n="umrah.placeholder-title">Hasil Foto Umrah/Haji Anda</h3>',
    'umrah.placeholder-title'
);

// 10. placeholder p
rep(
    '<p class="text-gray-500 text-base max-w-md">Unggah foto Anda dan pilih preferensi untuk memulai. Hasil foto akan muncul di sini dengan kualitas profesional.</p>',
    '<p class="text-gray-500 text-base max-w-md" data-i18n="umrah.placeholder-desc">Unggah foto Anda dan pilih preferensi untuk memulai. Hasil foto akan muncul di sini dengan kualitas profesional.</p>',
    'umrah.placeholder-desc'
);

// 11. results success badge span
rep(
    '<span class="text-white font-semibold">Foto Berhasil Dibuat!</span>',
    '<span class="text-white font-semibold" data-i18n="umrah.success-badge">Foto Berhasil Dibuat!</span>',
    'umrah.success-badge'
);

// 12. results h3
rep(
    '<h3 class="text-xl md:text-2xl font-bold text-gray-800">Hasil Foto Umrah/Haji Anda</h3>',
    '<h3 class="text-xl md:text-2xl font-bold text-gray-800" data-i18n="umrah.results-title">Hasil Foto Umrah/Haji Anda</h3>',
    'umrah.results-title'
);

// 13. results p
rep(
    '<p class="text-gray-500 text-sm mt-1">Klik gambar untuk preview atau unduh</p>',
    '<p class="text-gray-500 text-sm mt-1" data-i18n="umrah.results-desc">Klik gambar untuk preview atau unduh</p>',
    'umrah.results-desc'
);

// 14. download all (umrah) — wrap text in span
repR(
    '(id="umrah-download-all-btn"[^>]*>)\\s+(<i class="fas fa-download"></i>)\\s+Download Semua',
    '$1\r\n                                        $2\r\n                                        <span data-i18n="family.download-all">Download Semua</span>',
    'umrah.download-all'
);

// ================================================================
// PASSPORT PHOTO (content-passport-photo)
// ================================================================

// 15. header desc
repR(
    '(<p class="text-lg text-gray-600">)\\s+Buat pas foto formal',
    '<p class="text-lg text-gray-600" data-i18n="passport.desc">\r\n                        Buat pas foto formal',
    'passport.desc'
);

// 16. step 1 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">1. Unggah Foto Wajah</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="passport.step1-title">1. Unggah Foto Wajah</h3>',
    'passport.step1-title'
);

// 17. upload placeholder p
rep(
    '<p class="mt-2 text-sm md:text-base">Klik atau seret foto close-up</p>',
    '<p class="mt-2 text-sm md:text-base" data-i18n="passport.upload-hint">Klik atau seret foto close-up</p>',
    'passport.upload-hint'
);

// 18. step 2 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">2. Pilih Warna Background</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="passport.step2-title">2. Pilih Warna Background</h3>',
    'passport.step2-title'
);

// 19. step 3 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">3. Mode Pakaian Otomatis</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="passport.step3-title">3. Mode Pakaian Otomatis</h3>',
    'passport.step3-title'
);

// 20. school level h4
rep(
    '<h4 class="text-sm font-semibold mb-2 text-gray-700">Pilih Jenjang:</h4>',
    '<h4 class="text-sm font-semibold mb-2 text-gray-700" data-i18n="passport.school-label">Pilih Jenjang:</h4>',
    'passport.school-label'
);

// 21. custom attire h4
rep(
    '<h4 class="text-sm font-semibold text-gray-700">Pakaian Kustom:</h4>',
    '<h4 class="text-sm font-semibold text-gray-700" data-i18n="passport.custom-label">Pakaian Kustom:</h4>',
    'passport.custom-label'
);

// 22. custom attire ref upload p
rep(
    '<p class="mt-2 text-sm">Unggah referensi</p>',
    '<p class="mt-2 text-sm" data-i18n="passport.upload-ref">Unggah referensi</p>',
    'passport.upload-ref'
);

// 23. step 4 h3
rep(
    '<h3 class="text-base font-semibold mb-3 text-gray-800">4. Ukuran Output</h3>',
    '<h3 class="text-base font-semibold mb-3 text-gray-800" data-i18n="passport.step4-title">4. Ukuran Output</h3>',
    'passport.step4-title'
);

// 24. generate button span
repR(
    '(id="passport-generate-btn"[^>]*>[\\s\\S]*?<i class="fas fa-magic mr-2"></i>)\\s+(<span>)Buat Pas Foto(</span>)',
    '$1\r\n                                    $2 data-i18n="passport.gen-btn">Buat Pas Foto$3',
    'passport.gen-btn'
);

// 25. placeholder h3
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Pas Foto Anda</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="passport.placeholder-title">Hasil Pas Foto Anda</h3>',
    'passport.placeholder-title'
);

// 26. placeholder p
rep(
    '<p class="mt-1 text-sm">Hasil foto akan muncul di sini.</p>',
    '<p class="mt-1 text-sm" data-i18n="passport.placeholder-desc">Hasil foto akan muncul di sini.</p>',
    'passport.placeholder-desc'
);

// 27. download all (passport) — wrap text in span
repR(
    '(id="passport-download-all-btn"[^>]*>)\\s+(<i class="fas fa-download"></i>)\\s+Download Semua',
    '$1\r\n                                        $2\r\n                                        <span data-i18n="family.download-all">Download Semua</span>',
    'passport.download-all'
);

// ================================================================
// GRADUATION PHOTO (content-graduation-photo)
// ================================================================

// 28. header desc
repR(
    '(<p class="text-lg text-gray-600 max-w-3xl mx-auto">)\\s+Buat foto wisuda profesional',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="graduation.desc">\r\n                    Buat foto wisuda profesional',
    'graduation.desc'
);

// 29. step 1 h3 "Upload Foto (1-5 Orang) *"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto (1-5 Orang) *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="graduation.step1-title">Upload Foto (1-5 Orang) *</h3>',
    'graduation.step1-title'
);

// 30. add photo span (graduation)
repR(
    '(id="graduation-add-photo-btn"[^>]*>)\\s+(<i class="fas fa-plus"></i>)\\s+<span>Tambah Foto</span>',
    '$1\r\n                                        $2\r\n                                        <span data-i18n="touring.add-photo">Tambah Foto</span>',
    'graduation.add-photo'
);

// 31. step 2 h3 "Gaya Toga *"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Gaya Toga *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="graduation.step2-title">Gaya Toga *</h3>',
    'graduation.step2-title'
);

// 32. step 3 h3 "Background *"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Background *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="graduation.step3-title">Background *</h3>',
    'graduation.step3-title'
);

// 33. custom background p label
repR(
    '(<p class="text-sm font-medium text-gray-700 mb-2">)\\s+(<i class="fas fa-image mr-1"></i>) Upload Background Custom \\(Opsional\\)',
    '<p class="text-sm font-medium text-gray-700 mb-2" data-i18n="graduation.bg-custom-label">\r\n                                        $2 Upload Background Custom (Opsional)',
    'graduation.bg-custom-label'
);

// 34. custom background upload span
rep(
    '<span class="text-sm text-purple-600">Pilih Background Custom</span>',
    '<span class="text-sm text-purple-600" data-i18n="graduation.bg-pick">Pilih Background Custom</span>',
    'graduation.bg-pick'
);

// 35. custom background success p
rep(
    '<i class="fas fa-check-circle mr-1"></i> Background custom akan digunakan',
    '<i class="fas fa-check-circle mr-1"></i> <span data-i18n="graduation.bg-active">Background custom akan digunakan</span>',
    'graduation.bg-active'
);

// 36. custom background tip p
repR(
    '(<p class="text-xs text-gray-500 mt-2">)\\s+\U0001F4A1 Upload background sendiri atau pilih dari pilihan di atas',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="graduation.bg-tip">\r\n                                            \U0001F4A1 Upload background sendiri atau pilih dari pilihan di atas',
    'graduation.bg-tip'
);

// 37. step 4 h3 "Pose & Expression"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Pose & Expression</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="graduation.step4-title">Pose & Expression</h3>',
    'graduation.step4-title'
);

// 38. step 5 h3 "Aksesoris (Optional)"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Aksesoris (Optional)</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="graduation.step5-title">Aksesoris (Optional)</h3>',
    'graduation.step5-title'
);

// 39. step 6 h3 "Aspect Ratio"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Aspect Ratio</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="graduation.step6-title">Aspect Ratio</h3>',
    'graduation.step6-title'
);

// 40. step 7 h3 "Jumlah Foto"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Foto</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="graduation.step7-title">Jumlah Foto</h3>',
    'graduation.step7-title'
);

// 41-43. count buttons (graduation) — reuse maternity keys
repR(
    '(data-count="4" class="count-btn-graduation">)\\s+4 Foto\\s+(</button>)',
    '$1\r\n                                            <span data-i18n="maternity.count-4">4 Foto</span>\r\n                                        $2',
    'graduation.count-4'
);
repR(
    '(data-count="6" class="count-btn-graduation count-selected">)\\s+6 Foto\\s+(</button>)',
    '$1\r\n                                            <span data-i18n="maternity.count-6">6 Foto</span>\r\n                                        $2',
    'graduation.count-6'
);
repR(
    '(data-count="8" class="count-btn-graduation">)\\s+8 Foto\\s+(</button>)',
    '$1\r\n                                            <span data-i18n="maternity.count-8">8 Foto</span>\r\n                                        $2',
    'graduation.count-8'
);

// 44. generate button — dynamic count span
rep(
    '<span>Generate <span id="graduation-count-text">6</span> Foto Wisuda</span>',
    '<span><span data-i18n="kids.gen-prefix">Generate</span> <span id="graduation-count-text">6</span> <span data-i18n="graduation.gen-suffix">Foto Wisuda</span></span>',
    'graduation.gen-btn'
);

// 45. placeholder p title
rep(
    '<p class="text-xl font-bold text-gray-800 mb-2">Foto Wisuda Profesional</p>',
    '<p class="text-xl font-bold text-gray-800 mb-2" data-i18n="graduation.placeholder-title">Foto Wisuda Profesional</p>',
    'graduation.placeholder-title'
);

// 46. download all (graduation) span
rep(
    '<span>Download All</span>',
    '<span data-i18n="graduation.download-all">Download All</span>',
    'graduation.download-all'
);

// ================================================================
// i18n DICTIONARY
// ================================================================
rep(
    `'wdesign.feature-3':'Realistic 3D Results',\r\n            },`,
    `'wdesign.feature-3':'Realistic 3D Results',\r\n` +
    `            'umrah.desc':'Capture your spiritual moments with AI technology. Upload your photo and get a professional photo with holy location backgrounds.',\r\n` +
    `            'umrah.badge':'Instant results in seconds',\r\n` +
    `            'umrah.step1-title':'Upload Photo (1-5 People)',\r\n` +
    `            'umrah.step2-title':'Choose Outfit',\r\n` +
    `            'umrah.step3-title':'Choose Location',\r\n` +
    `            'umrah.step4-title':'Choose Image Ratio',\r\n` +
    `            'umrah.gen-btn':'Create Umrah/Hajj Photo',\r\n` +
    `            'umrah.placeholder-title':'Your Umrah/Hajj Photo Results',\r\n` +
    `            'umrah.placeholder-desc':'Upload your photo and choose preferences to start. Results will appear here in professional quality.',\r\n` +
    `            'umrah.success-badge':'Photos Created Successfully!',\r\n` +
    `            'umrah.results-title':'Your Umrah/Hajj Photo Results',\r\n` +
    `            'umrah.results-desc':'Click image to preview or download',\r\n` +
    `            'passport.desc':'Create formal ID photos with various background colors and instant outfit options. Quick and practical for all needs.',\r\n` +
    `            'passport.step1-title':'1. Upload Face Photo',\r\n` +
    `            'passport.upload-hint':'Click or drag a close-up photo',\r\n` +
    `            'passport.step2-title':'2. Choose Background Color',\r\n` +
    `            'passport.step3-title':'3. Auto Outfit Mode',\r\n` +
    `            'passport.school-label':'Choose Level:',\r\n` +
    `            'passport.custom-label':'Custom Outfit:',\r\n` +
    `            'passport.upload-ref':'Upload reference',\r\n` +
    `            'passport.step4-title':'4. Output Size',\r\n` +
    `            'passport.gen-btn':'Create ID Photo',\r\n` +
    `            'passport.placeholder-title':'Your ID Photo Result',\r\n` +
    `            'passport.placeholder-desc':'Photo result will appear here.',\r\n` +
    `            'graduation.desc':'Create a professional graduation photo with toga and stunning campus backgrounds! Perfect for memorable special moments.',\r\n` +
    `            'graduation.step1-title':'Upload Photo (1-5 People) *',\r\n` +
    `            'graduation.step2-title':'Toga Style *',\r\n` +
    `            'graduation.step3-title':'Background *',\r\n` +
    `            'graduation.bg-custom-label':'Upload Custom Background (Optional)',\r\n` +
    `            'graduation.bg-pick':'Select Custom Background',\r\n` +
    `            'graduation.bg-active':'Custom background will be used',\r\n` +
    `            'graduation.bg-tip':'Upload your own background or choose from the options above',\r\n` +
    `            'graduation.step4-title':'Pose & Expression',\r\n` +
    `            'graduation.step5-title':'Accessories (Optional)',\r\n` +
    `            'graduation.step6-title':'Aspect Ratio',\r\n` +
    `            'graduation.step7-title':'Number of Photos',\r\n` +
    `            'graduation.gen-suffix':'Graduation Photos',\r\n` +
    `            'graduation.placeholder-title':'Professional Graduation Photo',\r\n` +
    `            'graduation.download-all':'Download All',\r\n` +
    `            },`,
    'EN dict insert'
);

rep(
    `'wdesign.feature-3':'Hasil 3D Realistis',\r\n            }`,
    `'wdesign.feature-3':'Hasil 3D Realistis',\r\n` +
    `            'umrah.desc':'Abadikan momen spiritual Anda dengan teknologi AI. Unggah foto diri dan dapatkan foto profesional dengan latar lokasi suci.',\r\n` +
    `            'umrah.badge':'Hasil instant dalam hitungan detik',\r\n` +
    `            'umrah.step1-title':'Unggah Foto (1-5 Orang)',\r\n` +
    `            'umrah.step2-title':'Pilih Pakaian',\r\n` +
    `            'umrah.step3-title':'Pilih Lokasi',\r\n` +
    `            'umrah.step4-title':'Pilih Rasio Gambar',\r\n` +
    `            'umrah.gen-btn':'Buat Foto Umrah/Haji',\r\n` +
    `            'umrah.placeholder-title':'Hasil Foto Umrah/Haji Anda',\r\n` +
    `            'umrah.placeholder-desc':'Unggah foto Anda dan pilih preferensi untuk memulai. Hasil foto akan muncul di sini dengan kualitas profesional.',\r\n` +
    `            'umrah.success-badge':'Foto Berhasil Dibuat!',\r\n` +
    `            'umrah.results-title':'Hasil Foto Umrah/Haji Anda',\r\n` +
    `            'umrah.results-desc':'Klik gambar untuk preview atau unduh',\r\n` +
    `            'passport.desc':'Buat pas foto formal dengan berbagai warna latar dan pilihan pakaian instan. Cepat dan praktis untuk semua kebutuhan.',\r\n` +
    `            'passport.step1-title':'1. Unggah Foto Wajah',\r\n` +
    `            'passport.upload-hint':'Klik atau seret foto close-up',\r\n` +
    `            'passport.step2-title':'2. Pilih Warna Background',\r\n` +
    `            'passport.step3-title':'3. Mode Pakaian Otomatis',\r\n` +
    `            'passport.school-label':'Pilih Jenjang:',\r\n` +
    `            'passport.custom-label':'Pakaian Kustom:',\r\n` +
    `            'passport.upload-ref':'Unggah referensi',\r\n` +
    `            'passport.step4-title':'4. Ukuran Output',\r\n` +
    `            'passport.gen-btn':'Buat Pas Foto',\r\n` +
    `            'passport.placeholder-title':'Hasil Pas Foto Anda',\r\n` +
    `            'passport.placeholder-desc':'Hasil foto akan muncul di sini.',\r\n` +
    `            'graduation.desc':'Buat foto wisuda profesional dengan toga dan background kampus yang stunning! Perfect untuk kenangan moment spesialmu.',\r\n` +
    `            'graduation.step1-title':'Upload Foto (1-5 Orang) *',\r\n` +
    `            'graduation.step2-title':'Gaya Toga *',\r\n` +
    `            'graduation.step3-title':'Background *',\r\n` +
    `            'graduation.bg-custom-label':'Upload Background Custom (Opsional)',\r\n` +
    `            'graduation.bg-pick':'Pilih Background Custom',\r\n` +
    `            'graduation.bg-active':'Background custom akan digunakan',\r\n` +
    `            'graduation.bg-tip':'Upload background sendiri atau pilih dari pilihan di atas',\r\n` +
    `            'graduation.step4-title':'Pose & Expression',\r\n` +
    `            'graduation.step5-title':'Aksesoris (Optional)',\r\n` +
    `            'graduation.step6-title':'Aspect Ratio',\r\n` +
    `            'graduation.step7-title':'Jumlah Foto',\r\n` +
    `            'graduation.gen-suffix':'Foto Wisuda',\r\n` +
    `            'graduation.placeholder-title':'Foto Wisuda Profesional',\r\n` +
    `            'graduation.download-all':'Unduh Semua',\r\n` +
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
