// i18n_patch18.js — Family Photo, Newborn Studio, Maternity Photo
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
// FAMILY PHOTO (content-family)
// ================================================================

// 1. header p desc — unique class "text-base md:text-lg"
rep(
    '<p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">',
    '<p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" data-i18n="family.desc">',
    'family.desc'
);

// 2. badge span
rep(
    '<span class="text-sm font-medium" style="color: #0d9488;">Generate 6 foto sekaligus dalam hitungan detik</span>',
    '<span class="text-sm font-medium" style="color: #0d9488;" data-i18n="family.badge">Generate 6 foto sekaligus dalam hitungan detik</span>',
    'family.badge'
);

// 3. step 1 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Unggah Foto Keluarga</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="family.step1-title">Unggah Foto Keluarga</h3>',
    'family.step1-title'
);

// 4. file-input-wrapper spans (×2 same text — call twice)
rep(
    '<span class="text-gray-500 text-center text-sm">Tambahkan Foto</span>',
    '<span class="text-gray-500 text-center text-sm" data-i18n="family.add-photo">Tambahkan Foto</span>',
    'family.add-photo (1)'
);
rep(
    '<span class="text-gray-500 text-center text-sm">Tambahkan Foto</span>',
    '<span class="text-gray-500 text-center text-sm" data-i18n="family.add-photo">Tambahkan Foto</span>',
    'family.add-photo (2)'
);

// 5. step 2 h3 with nested (Opsional) span — wrap both parts
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Background <span class="text-sm text-gray-500">(Opsional)</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800"><span data-i18n="family.step2-title">Upload Background</span> <span class="text-sm text-gray-500" data-i18n="family.optional-label">(Opsional)</span></h3>',
    'family.step2-title + optional-label'
);

// 6. step 2 tip p — anchor by unique text
repR(
    '(<p class="text-xs text-gray-600 mb-3">)([\r\n\s]+<i class="fas fa-info-circle mr-1"></i>[\r\n\s]+Upload background sendiri atau kosongkan untuk background AI)',
    '<p class="text-xs text-gray-600 mb-3" data-i18n="family.step2-tip">$2',
    'family.step2-tip'
);

// 7. background label span
rep(
    '<span class="text-sm text-teal-600 font-medium">Pilih Background</span>',
    '<span class="text-sm text-teal-600 font-medium" data-i18n="family.bg-label">Pilih Background</span>',
    'family.bg-label'
);

// 8. background confirmed p — wrap text after icon
repR(
    '(<i class="fas fa-check-circle mr-1"></i>) Background akan digunakan',
    '$1<span data-i18n="family.bg-confirmed"> Background akan digunakan</span>',
    'family.bg-confirmed'
);

// 9. step 3 h3 (text-lg class — family only)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Pilih Rasio Gambar</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="family.step3-title">Pilih Rasio Gambar</h3>',
    'family.step3-title'
);

// 10. step 4 h3 (text-lg class — family only)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Pilih Tema</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="family.step4-title">Pilih Tema</h3>',
    'family.step4-title'
);

// 11. random theme button — by unique ID
rep(
    'id="family-random-theme-btn"',
    'id="family-random-theme-btn" data-i18n="family.random-theme"',
    'family.random-theme'
);

// 12. custom theme label
rep(
    '<label class="text-sm font-semibold text-gray-600 mb-2 block">Atau Tulis Tema Custom (Opsional)</label>',
    '<label class="text-sm font-semibold text-gray-600 mb-2 block" data-i18n="family.custom-label">Atau Tulis Tema Custom (Opsional)</label>',
    'family.custom-label'
);

// 13. custom theme placeholder
rep(
    'placeholder="Contoh: keluarga di taman bunga dengan suasana musim semi..."',
    'placeholder="Contoh: keluarga di taman bunga dengan suasana musim semi..." data-i18n-placeholder="family.custom-placeholder"',
    'family.custom-placeholder'
);

// 14. custom theme tip p (emoji 💡 as surrogate pair in search)
rep(
    '<p class="text-xs text-gray-400 mt-1">\uD83D\uDCA1 Kosongkan jika ingin menggunakan tema yang dipilih di atas</p>',
    '<p class="text-xs text-gray-400 mt-1" data-i18n="family.custom-tip">\uD83D\uDCA1 Kosongkan jika ingin menggunakan tema yang dipilih di atas</p>',
    'family.custom-tip'
);

// 15. generate button span
rep(
    '<span class="relative z-10">Buat 6 Foto Keluarga</span>',
    '<span class="relative z-10" data-i18n="family.gen-btn">Buat 6 Foto Keluarga</span>',
    'family.gen-btn'
);

// 16. loading span
rep(
    '<span class="mt-4 text-lg text-gray-600">Membuat foto keluarga Anda...</span>',
    '<span class="mt-4 text-lg text-gray-600" data-i18n="family.loading">Membuat foto keluarga Anda...</span>',
    'family.loading'
);

// 17. results suffix — wrap text node after count span
rep(
    '<span id="family-result-count">6</span> Foto Berhasil Dibuat',
    '<span id="family-result-count">6</span><span data-i18n="family.results-suffix"> Foto Berhasil Dibuat</span>',
    'family.results-suffix'
);

// 18. download-all button — by unique ID
rep(
    'id="family-download-all-btn"',
    'id="family-download-all-btn" data-i18n="family.download-all"',
    'family.download-all'
);

// 19. placeholder title
rep(
    '<h3 class="font-bold text-2xl mb-3" style="color: #0d9488;">Hasil Foto Keluarga Anda</h3>',
    '<h3 class="font-bold text-2xl mb-3" style="color: #0d9488;" data-i18n="family.placeholder-title">Hasil Foto Keluarga Anda</h3>',
    'family.placeholder-title'
);

// 20. placeholder desc
rep(
    '<p class="text-gray-500 text-base max-w-md">Unggah foto keluarga dan pilih tema favorit. Hasil 6 foto akan muncul di sini dengan kualitas profesional.</p>',
    '<p class="text-gray-500 text-base max-w-md" data-i18n="family.placeholder-desc">Unggah foto keluarga dan pilih tema favorit. Hasil 6 foto akan muncul di sini dengan kualitas profesional.</p>',
    'family.placeholder-desc'
);

// ================================================================
// NEWBORN STUDIO (content-new-born)
// ================================================================

// 21. header p (single-line, unique class+text)
rep(
    '<p class="text-lg text-gray-600 mt-2">Unggah foto bayi Anda dan biarkan keajaiban terjadi!</p>',
    '<p class="text-lg text-gray-600 mt-2" data-i18n="newborn.desc">Unggah foto bayi Anda dan biarkan keajaiban terjadi!</p>',
    'newborn.desc'
);

// 22. preview text span
rep(
    '<span id="new-born-preview-text" class="text-gray-500">Pratinjau Gambar</span>',
    '<span id="new-born-preview-text" class="text-gray-500" data-i18n="newborn.preview-text">Pratinjau Gambar</span>',
    'newborn.preview-text'
);

// 23. upload button — by unique ID
rep(
    'id="new-born-upload-button"',
    'id="new-born-upload-button" data-i18n="newborn.upload-btn"',
    'newborn.upload-btn'
);

// 24-29. step h3s (number-prefixed, unique)
rep('<h3 class="text-xl font-semibold mb-3">1. Pilih Gender</h3>',
    '<h3 class="text-xl font-semibold mb-3" data-i18n="newborn.step1-title">1. Pilih Gender</h3>', 'newborn.step1-title');
rep('<h3 class="text-xl font-semibold mb-3">2. Nama Bayi (Opsional)</h3>',
    '<h3 class="text-xl font-semibold mb-3" data-i18n="newborn.step2-title">2. Nama Bayi (Opsional)</h3>', 'newborn.step2-title');
rep('<h3 class="text-xl font-semibold mb-3">3. Tanggal Lahir (Opsional)</h3>',
    '<h3 class="text-xl font-semibold mb-3" data-i18n="newborn.step3-title">3. Tanggal Lahir (Opsional)</h3>', 'newborn.step3-title');
rep('<h3 class="text-xl font-semibold mb-3">4. Pilih Rasio Gambar</h3>',
    '<h3 class="text-xl font-semibold mb-3" data-i18n="newborn.step4-title">4. Pilih Rasio Gambar</h3>', 'newborn.step4-title');
rep('<h3 class="text-xl font-semibold mb-3">5. Tema Custom (Opsional)</h3>',
    '<h3 class="text-xl font-semibold mb-3" data-i18n="newborn.step5-title">5. Tema Custom (Opsional)</h3>', 'newborn.step5-title');
rep('<h3 class="text-xl font-semibold mb-3">6. Mulai Keajaiban!</h3>',
    '<h3 class="text-xl font-semibold mb-3" data-i18n="newborn.step6-title">6. Mulai Keajaiban!</h3>', 'newborn.step6-title');

// 30. gender radio spans
rep('<span class="ml-3 text-gray-700">Laki-laki</span>',
    '<span class="ml-3 text-gray-700" data-i18n="newborn.gender-male">Laki-laki</span>', 'newborn.gender-male');
rep('<span class="ml-3 text-gray-700">Perempuan</span>',
    '<span class="ml-3 text-gray-700" data-i18n="newborn.gender-female">Perempuan</span>', 'newborn.gender-female');

// 31. custom theme tip p (emoji)
rep(
    '<p class="text-sm text-gray-500 mt-1">\uD83D\uDCA1 Kosongkan untuk menggunakan tema acak otomatis</p>',
    '<p class="text-sm text-gray-500 mt-1" data-i18n="newborn.custom-tip">\uD83D\uDCA1 Kosongkan untuk menggunakan tema acak otomatis</p>',
    'newborn.custom-tip'
);

// 32. step 6 desc p
rep(
    '<p class="text-gray-600 mb-4">Aplikasi akan membuat 7 foto unik dengan tema berkualitas tinggi.</p>',
    '<p class="text-gray-600 mb-4" data-i18n="newborn.step6-desc">Aplikasi akan membuat 7 foto unik dengan tema berkualitas tinggi.</p>',
    'newborn.step6-desc'
);

// 33. generate button — by unique ID
rep(
    'id="new-born-generate-button"',
    'id="new-born-generate-button" data-i18n="newborn.gen-btn"',
    'newborn.gen-btn'
);

// 34. loading p
rep(
    '<p class="text-lg text-gray-600 mt-4">Sedang menciptakan keajaiban... Mohon tunggu sebentar.</p>',
    '<p class="text-lg text-gray-600 mt-4" data-i18n="newborn.loading">Sedang menciptakan keajaiban... Mohon tunggu sebentar.</p>',
    'newborn.loading'
);

// 35. results suffix — wrap text node after count span
rep(
    '<span id="new-born-result-count">7</span> Foto Berhasil Dibuat',
    '<span id="new-born-result-count">7</span><span data-i18n="family.results-suffix"> Foto Berhasil Dibuat</span>',
    'newborn.results-suffix (reuse family.results-suffix)'
);

// 36. download-all button — by unique ID
rep(
    'id="new-born-download-all-btn"',
    'id="new-born-download-all-btn" data-i18n="family.download-all"',
    'newborn.download-all (reuse family.download-all)'
);

// ================================================================
// MATERNITY PHOTO (content-maternity)
// ================================================================

// 37. header p desc
rep(
    '<p class="text-lg text-gray-600 mt-3">Ciptakan momen indah kehamilan dengan foto maternity profesional & penuh makna</p>',
    '<p class="text-lg text-gray-600 mt-3" data-i18n="maternity.desc">Ciptakan momen indah kehamilan dengan foto maternity profesional & penuh makna</p>',
    'maternity.desc'
);

// 38. step 1 h3 (unique text with "1-2 orang")
rep(
    '<h3 class="text-xl font-bold text-gray-800">Upload Foto (1-2 orang)</h3>',
    '<h3 class="text-xl font-bold text-gray-800" data-i18n="maternity.step1-title">Upload Foto (1-2 orang)</h3>',
    'maternity.step1-title'
);

// 39. step 1 tip p — anchor by unique "solo maternity"
repR(
    '(<p class="text-sm text-gray-600 mb-3">)([\r\n\s]+<i class="fas fa-info-circle mr-1"></i>[\r\n\s]+Upload 1 foto untuk solo maternity)',
    '<p class="text-sm text-gray-600 mb-3" data-i18n="maternity.step1-tip">$2',
    'maternity.step1-tip'
);

// 40. step 2 "Pilih Tema" (text-xl class — next occurrence after family's text-lg is already marked)
rep(
    '<h3 class="text-xl font-bold text-gray-800">Pilih Tema</h3>',
    '<h3 class="text-xl font-bold text-gray-800" data-i18n="family.step4-title">Pilih Tema</h3>',
    'maternity.step2-title (reuse family.step4-title)'
);

// 41. step 3 "Pilih Style" (unique)
rep(
    '<h3 class="text-xl font-bold text-gray-800">Pilih Style</h3>',
    '<h3 class="text-xl font-bold text-gray-800" data-i18n="maternity.step3-title">Pilih Style</h3>',
    'maternity.step3-title'
);

// 42. step 4 "Pilih Rasio Gambar" (text-xl class — next occurrence after family's text-lg is marked)
rep(
    '<h3 class="text-xl font-bold text-gray-800">Pilih Rasio Gambar</h3>',
    '<h3 class="text-xl font-bold text-gray-800" data-i18n="family.step3-title">Pilih Rasio Gambar</h3>',
    'maternity.step4-title (reuse family.step3-title)'
);

// 43. step 5 "Jumlah Foto"
rep(
    '<h3 class="text-xl font-bold text-gray-800">Jumlah Foto</h3>',
    '<h3 class="text-xl font-bold text-gray-800" data-i18n="maternity.step5-title">Jumlah Foto</h3>',
    'maternity.step5-title'
);

// 44. count buttons (multiline — use repR by data-count)
repR(
    '(data-count="4" class="count-btn-maternity">)[\r\n\s]+4 Foto[\r\n\s]+(</button>)',
    '$1\r\n                                    <span data-i18n="maternity.count-4">4 Foto</span>\r\n                                $2',
    'maternity.count-4'
);
repR(
    '(data-count="6" class="count-btn-maternity count-selected">)[\r\n\s]+6 Foto[\r\n\s]+(</button>)',
    '$1\r\n                                    <span data-i18n="maternity.count-6">6 Foto</span>\r\n                                $2',
    'maternity.count-6'
);
repR(
    '(data-count="8" class="count-btn-maternity">)[\r\n\s]+8 Foto[\r\n\s]+(</button>)',
    '$1\r\n                                    <span data-i18n="maternity.count-8">8 Foto</span>\r\n                                $2',
    'maternity.count-8'
);

// 45. step 6 h3 "Generate Foto"
rep(
    '<h3 class="text-xl font-bold text-gray-800">Generate Foto</h3>',
    '<h3 class="text-xl font-bold text-gray-800" data-i18n="maternity.step6-title">Generate Foto</h3>',
    'maternity.step6-title'
);

// 46. generate button text — wrap "Generate" and "Foto Maternity" around dynamic count span
repR(
    '(<i class="fas fa-wand-magic-sparkles mr-2"></i>)[\r\n\s]+Generate (<span id="maternity-count-text">6</span>) Foto Maternity',
    '$1\r\n                                <span data-i18n="maternity.gen-prefix">Generate</span> $2 <span data-i18n="maternity.gen-suffix">Foto Maternity</span>',
    'maternity.gen-btn'
);

// 47. gen tip p — anchor by unique "30-60 detik"
repR(
    '(<p class="text-sm text-gray-500 text-center mt-2">)([\r\n\s]+<i class="fas fa-info-circle mr-1"></i>[\r\n\s]+Proses membutuhkan waktu 30-60 detik)',
    '<p class="text-sm text-gray-500 text-center mt-2" data-i18n="maternity.gen-tip">$2',
    'maternity.gen-tip'
);

// 48. results suffix — wrap text node after count span
rep(
    '<span id="maternity-results-count">6</span> Foto Maternity Berhasil Dibuat!',
    '<span id="maternity-results-count">6</span><span data-i18n="maternity.results-suffix"> Foto Maternity Berhasil Dibuat!</span>',
    'maternity.results-suffix'
);

// 49. download-all span (inside button by unique button ID context)
repR(
    '(id="maternity-download-all-btn"[\s\S]*?)<span>Download Semua</span>',
    '$1<span data-i18n="family.download-all">Download Semua</span>',
    'maternity.download-all (reuse family.download-all)'
);

// ================================================================
// i18n DICTIONARY
// ================================================================
rep(
    `'budget.placeholder-desc':'Fill in data for budget simulation',\r\n            },`,
    `'budget.placeholder-desc':'Fill in data for budget simulation',\r\n` +
    `            'family.desc':'Create the perfect family photo with AI. Choose your favorite theme and create beautiful memories with your family.',\r\n` +
    `            'family.badge':'Generate 6 photos at once in seconds',\r\n` +
    `            'family.step1-title':'Upload Family Photos',\r\n` +
    `            'family.add-photo':'Add Photo',\r\n` +
    `            'family.step2-title':'Upload Background',\r\n` +
    `            'family.optional-label':'(Optional)',\r\n` +
    `            'family.step2-tip':'Upload your own background or leave empty for AI background',\r\n` +
    `            'family.bg-label':'Choose Background',\r\n` +
    `            'family.bg-confirmed':'Background will be used',\r\n` +
    `            'family.step3-title':'Choose Aspect Ratio',\r\n` +
    `            'family.step4-title':'Choose Theme',\r\n` +
    `            'family.random-theme':'Random Theme',\r\n` +
    `            'family.custom-label':'Or Write Custom Theme (Optional)',\r\n` +
    `            'family.custom-placeholder':'Example: family in a flower garden with spring atmosphere...',\r\n` +
    `            'family.custom-tip':'\uD83D\uDCA1 Leave blank to use the selected theme above',\r\n` +
    `            'family.gen-btn':'Create 6 Family Photos',\r\n` +
    `            'family.loading':'Creating your family photos...',\r\n` +
    `            'family.results-suffix':' Photos Created Successfully',\r\n` +
    `            'family.download-all':'Download All',\r\n` +
    `            'family.placeholder-title':'Your Family Photo Results',\r\n` +
    `            'family.placeholder-desc':'Upload family photos and choose your favorite theme. 6 photos will appear here with professional quality.',\r\n` +
    `            'newborn.desc':'Upload your baby\\'s photo and let the magic happen!',\r\n` +
    `            'newborn.preview-text':'Image Preview',\r\n` +
    `            'newborn.upload-btn':'Choose Baby Photo',\r\n` +
    `            'newborn.step1-title':'1. Choose Gender',\r\n` +
    `            'newborn.gender-male':'Boy',\r\n` +
    `            'newborn.gender-female':'Girl',\r\n` +
    `            'newborn.step2-title':'2. Baby Name (Optional)',\r\n` +
    `            'newborn.step3-title':'3. Date of Birth (Optional)',\r\n` +
    `            'newborn.step4-title':'4. Choose Aspect Ratio',\r\n` +
    `            'newborn.step5-title':'5. Custom Theme (Optional)',\r\n` +
    `            'newborn.custom-tip':'\uD83D\uDCA1 Leave blank to use automatic random theme',\r\n` +
    `            'newborn.step6-title':'6. Start the Magic!',\r\n` +
    `            'newborn.step6-desc':'The app will create 7 unique photos with high-quality themes.',\r\n` +
    `            'newborn.gen-btn':'Generate 7 Magic Photos',\r\n` +
    `            'newborn.loading':'Creating magic... Please wait a moment.',\r\n` +
    `            'maternity.desc':'Capture beautiful pregnancy moments with professional & meaningful maternity photos',\r\n` +
    `            'maternity.step1-title':'Upload Photo (1-2 people)',\r\n` +
    `            'maternity.step1-tip':'Upload 1 photo for solo maternity or 2 photos for couple maternity',\r\n` +
    `            'maternity.step3-title':'Choose Style',\r\n` +
    `            'maternity.step5-title':'Number of Photos',\r\n` +
    `            'maternity.count-4':'4 Photos',\r\n` +
    `            'maternity.count-6':'6 Photos',\r\n` +
    `            'maternity.count-8':'8 Photos',\r\n` +
    `            'maternity.step6-title':'Generate Photos',\r\n` +
    `            'maternity.gen-prefix':'Generate',\r\n` +
    `            'maternity.gen-suffix':'Maternity Photos',\r\n` +
    `            'maternity.gen-tip':'Process takes 30-60 seconds',\r\n` +
    `            'maternity.results-suffix':' Maternity Photos Created!',\r\n` +
    `            },`,
    'EN dict insert'
);

rep(
    `'budget.placeholder-desc':'Isi data untuk simulasi anggaran',\r\n            }`,
    `'budget.placeholder-desc':'Isi data untuk simulasi anggaran',\r\n` +
    `            'family.desc':'Ciptakan foto keluarga yang sempurna dengan AI. Pilih tema favorit dan buat kenangan indah bersama keluarga.',\r\n` +
    `            'family.badge':'Generate 6 foto sekaligus dalam hitungan detik',\r\n` +
    `            'family.step1-title':'Unggah Foto Keluarga',\r\n` +
    `            'family.add-photo':'Tambahkan Foto',\r\n` +
    `            'family.step2-title':'Upload Background',\r\n` +
    `            'family.optional-label':'(Opsional)',\r\n` +
    `            'family.step2-tip':'Upload background sendiri atau kosongkan untuk background AI',\r\n` +
    `            'family.bg-label':'Pilih Background',\r\n` +
    `            'family.bg-confirmed':'Background akan digunakan',\r\n` +
    `            'family.step3-title':'Pilih Rasio Gambar',\r\n` +
    `            'family.step4-title':'Pilih Tema',\r\n` +
    `            'family.random-theme':'Tema Acak',\r\n` +
    `            'family.custom-label':'Atau Tulis Tema Custom (Opsional)',\r\n` +
    `            'family.custom-placeholder':'Contoh: keluarga di taman bunga dengan suasana musim semi...',\r\n` +
    `            'family.custom-tip':'\uD83D\uDCA1 Kosongkan jika ingin menggunakan tema yang dipilih di atas',\r\n` +
    `            'family.gen-btn':'Buat 6 Foto Keluarga',\r\n` +
    `            'family.loading':'Membuat foto keluarga Anda...',\r\n` +
    `            'family.results-suffix':' Foto Berhasil Dibuat',\r\n` +
    `            'family.download-all':'Download Semua',\r\n` +
    `            'family.placeholder-title':'Hasil Foto Keluarga Anda',\r\n` +
    `            'family.placeholder-desc':'Unggah foto keluarga dan pilih tema favorit. Hasil 6 foto akan muncul di sini dengan kualitas profesional.',\r\n` +
    `            'newborn.desc':'Unggah foto bayi Anda dan biarkan keajaiban terjadi!',\r\n` +
    `            'newborn.preview-text':'Pratinjau Gambar',\r\n` +
    `            'newborn.upload-btn':'Pilih Foto Bayi',\r\n` +
    `            'newborn.step1-title':'1. Pilih Gender',\r\n` +
    `            'newborn.gender-male':'Laki-laki',\r\n` +
    `            'newborn.gender-female':'Perempuan',\r\n` +
    `            'newborn.step2-title':'2. Nama Bayi (Opsional)',\r\n` +
    `            'newborn.step3-title':'3. Tanggal Lahir (Opsional)',\r\n` +
    `            'newborn.step4-title':'4. Pilih Rasio Gambar',\r\n` +
    `            'newborn.step5-title':'5. Tema Custom (Opsional)',\r\n` +
    `            'newborn.custom-tip':'\uD83D\uDCA1 Kosongkan untuk menggunakan tema acak otomatis',\r\n` +
    `            'newborn.step6-title':'6. Mulai Keajaiban!',\r\n` +
    `            'newborn.step6-desc':'Aplikasi akan membuat 7 foto unik dengan tema berkualitas tinggi.',\r\n` +
    `            'newborn.gen-btn':'Generate 7 Foto Ajaib',\r\n` +
    `            'newborn.loading':'Sedang menciptakan keajaiban... Mohon tunggu sebentar.',\r\n` +
    `            'maternity.desc':'Ciptakan momen indah kehamilan dengan foto maternity profesional & penuh makna',\r\n` +
    `            'maternity.step1-title':'Upload Foto (1-2 orang)',\r\n` +
    `            'maternity.step1-tip':'Upload 1 foto untuk solo maternity atau 2 foto untuk couple maternity',\r\n` +
    `            'maternity.step3-title':'Pilih Style',\r\n` +
    `            'maternity.step5-title':'Jumlah Foto',\r\n` +
    `            'maternity.count-4':'4 Foto',\r\n` +
    `            'maternity.count-6':'6 Foto',\r\n` +
    `            'maternity.count-8':'8 Foto',\r\n` +
    `            'maternity.step6-title':'Generate Foto',\r\n` +
    `            'maternity.gen-prefix':'Generate',\r\n` +
    `            'maternity.gen-suffix':'Foto Maternity',\r\n` +
    `            'maternity.gen-tip':'Proses membutuhkan waktu 30-60 detik',\r\n` +
    `            'maternity.results-suffix':' Foto Maternity Berhasil Dibuat!',\r\n` +
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
