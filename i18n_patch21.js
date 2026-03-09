// i18n_patch21.js — Photo Booth, Birthday Photo, Eid Greeting Card
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
// PHOTO BOOTH (content-photo-booth)
// ================================================================

// 1. header desc
repR(
    '(<p class="text-lg text-gray-600">)\\s+Buat foto booth profesional',
    '<p class="text-lg text-gray-600" data-i18n="booth.desc">\r\n                        Buat foto booth profesional',
    'booth.desc'
);

// 2. step 1 h3
rep(
    '<h3 class="text-base font-semibold text-gray-800">Unggah Foto (1-4 foto)</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="booth.step1-title">Unggah Foto (1-4 foto)</h3>',
    'booth.step1-title'
);

// 3. upload hint small p
rep(
    '<p class="mt-1 text-xs text-gray-400">Bisa upload 1-4 foto sekaligus</p>',
    '<p class="mt-1 text-xs text-gray-400" data-i18n="booth.upload-hint">Bisa upload 1-4 foto sekaligus</p>',
    'booth.upload-hint'
);

// 4. step 2 h3
rep(
    '<h3 class="text-base font-semibold text-gray-800">Pilih Tema Frame</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="booth.step2-title">Pilih Tema Frame</h3>',
    'booth.step2-title'
);

// 5. step 3 h3
rep(
    '<h3 class="text-base font-semibold text-gray-800">Rasio Gambar</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="booth.step3-title">Rasio Gambar</h3>',
    'booth.step3-title'
);

// 6. step 4 h3 (Jumlah Foto — same class as step 3, unique text)
rep(
    '<h3 class="text-base font-semibold text-gray-800">Jumlah Foto</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="graduation.step7-title">Jumlah Foto</h3>',
    'booth.step4-title'
);

// 7-9. count buttons (option-btn-booth with data-value, not data-count)
rep(
    '<button type="button" data-value="4" class="option-btn-booth">4 Foto</button>',
    '<button type="button" data-value="4" class="option-btn-booth"><span data-i18n="maternity.count-4">4 Foto</span></button>',
    'booth.count-4'
);
rep(
    '<button type="button" data-value="6" class="option-btn-booth">6 Foto</button>',
    '<button type="button" data-value="6" class="option-btn-booth"><span data-i18n="maternity.count-6">6 Foto</span></button>',
    'booth.count-6'
);
rep(
    '<button type="button" data-value="8" class="option-btn-booth selected">8 Foto</button>',
    '<button type="button" data-value="8" class="option-btn-booth selected"><span data-i18n="maternity.count-8">8 Foto</span></button>',
    'booth.count-8'
);

// 10. generate button span
repR(
    '(id="photo-booth-generate-btn"[^>]*>)\\s+(<i class="fas fa-camera-retro mr-2"></i>)\\s+(<span>)Buat Photo Booth(</span>)',
    '$1\r\n                                    $2\r\n                                    $3 data-i18n="booth.gen-btn">Buat Photo Booth$4',
    'booth.gen-btn'
);

// 11. placeholder h3
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Photo Booth Anda</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="booth.placeholder-title">Hasil Photo Booth Anda</h3>',
    'booth.placeholder-title'
);

// 12. placeholder p
rep(
    '<p class="mt-1 text-sm">Foto booth akan muncul di sini setelah diproses</p>',
    '<p class="mt-1 text-sm" data-i18n="booth.placeholder-desc">Foto booth akan muncul di sini setelah diproses</p>',
    'booth.placeholder-desc'
);

// 13. download all (photo booth) — text node after icon inside button
repR(
    '(id="photo-booth-download-all-btn"[^>]*>)\\s+(<i class="fas fa-download"></i>)\\s+Download Semua',
    '$1\r\n                                        $2\r\n                                        <span data-i18n="family.download-all">Download Semua</span>',
    'booth.download-all'
);

// ================================================================
// BIRTHDAY PHOTO (content-birthday-photo)
// ================================================================

// 14. header desc
repR(
    '(<p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">)\\s+Buat foto ulang tahun profesional',
    '<p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" data-i18n="birthday.desc">\r\n                    Buat foto ulang tahun profesional',
    'birthday.desc'
);

// 15. badge span
rep(
    '<span class="text-sm font-medium" style="color: #be185d;">Perfect untuk semua momen spesial</span>',
    '<span class="text-sm font-medium" style="color: #be185d;" data-i18n="birthday.badge">Perfect untuk semua momen spesial</span>',
    'birthday.badge'
);

// 16. step 1 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto (1-5 Orang)</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="birthday.step1-title">Upload Foto (1-5 Orang)</h3>',
    'birthday.step1-title'
);

// 17. upload label "Klik untuk upload" (birthday — unique style color #be185d)
rep(
    '<span class="font-semibold" style="color: #be185d;">Klik untuk upload</span>',
    '<span class="font-semibold" style="color: #be185d;" data-i18n="birthday.upload-click">Klik untuk upload</span>',
    'birthday.upload-click'
);

// 18. upload desc span
rep(
    '<span class="text-xs text-gray-500">Upload 1-5 foto orang (keluarga/teman)</span>',
    '<span class="text-xs text-gray-500" data-i18n="birthday.upload-hint">Upload 1-5 foto orang (keluarga/teman)</span>',
    'birthday.upload-hint'
);

// 19. step 2 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Kategori Umur</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="birthday.step2-title">Kategori Umur</h3>',
    'birthday.step2-title'
);

// 20. step 3 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Tema Ulang Tahun</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="birthday.step3-title">Tema Ulang Tahun</h3>',
    'birthday.step3-title'
);

// 21. custom theme label (unique icon fa-pen-fancy + text)
repR(
    '(<label class="text-sm font-semibold mb-2 block" style="color: #be185d;">)\\s+(<i class="fas fa-pen-fancy mr-1"></i>)Atau Tulis Tema Custom:',
    '<label class="text-sm font-semibold mb-2 block" style="color: #be185d;" data-i18n="birthday.custom-label">\r\n                                        $2Atau Tulis Tema Custom:',
    'birthday.custom-label'
);

// 22. step 4 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Gaya Dekorasi</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="birthday.step4-title">Gaya Dekorasi</h3>',
    'birthday.step4-title'
);

// 23. step 5 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Style Kue Ulang Tahun</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="birthday.step5-title">Style Kue Ulang Tahun</h3>',
    'birthday.step5-title'
);

// 24. step 6 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Pencahayaan</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="birthday.step6-title">Pencahayaan</h3>',
    'birthday.step6-title'
);

// 25. step 7 h3 (Rasio Gambar — birthday uses text-lg font-bold, booth uses text-base font-semibold)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Rasio Gambar</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="birthday.step7-title">Rasio Gambar</h3>',
    'birthday.step7-title'
);

// 26. step 8 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi Foto</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="birthday.step8-title">Jumlah Variasi Foto</h3>',
    'birthday.step8-title'
);

// 27-29. count buttons (birthday-count-btn class)
repR(
    '(data-count="4" class="birthday-count-btn[^"]*">)\\s+4 Foto\\s+(<\\/button>)',
    '$1\r\n                                            <span data-i18n="maternity.count-4">4 Foto</span>\r\n                                        $2',
    'birthday.count-4'
);
repR(
    '(data-count="6" class="birthday-count-btn[^"]*">)\\s+6 Foto\\s+(<\\/button>)',
    '$1\r\n                                            <span data-i18n="maternity.count-6">6 Foto</span>\r\n                                        $2',
    'birthday.count-6'
);
repR(
    '(data-count="8" class="birthday-count-btn[^"]*">)\\s+8 Foto\\s+(<\\/button>)',
    '$1\r\n                                            <span data-i18n="maternity.count-8">8 Foto</span>\r\n                                        $2',
    'birthday.count-8'
);

// 30. generate button — dynamic count span
rep(
    '<span class="relative z-10">Generate <span id="birthday-count-text">6</span> Foto</span>',
    '<span class="relative z-10"><span data-i18n="kids.gen-prefix">Generate</span> <span id="birthday-count-text">6</span> <span data-i18n="birthday.gen-suffix">Foto</span></span>',
    'birthday.gen-btn'
);

// 31. download all (birthday) — first occurrence of hidden sm:inline span
rep(
    '<span class="hidden sm:inline">Download Semua</span>',
    '<span class="hidden sm:inline" data-i18n="family.download-all">Download Semua</span>',
    'birthday.download-all'
);

// 32. empty state h3
rep(
    '<h3 class="text-2xl font-bold mb-3" style="color: #be185d;">Siap Membuat Foto Ulang Tahun</h3>',
    '<h3 class="text-2xl font-bold mb-3" style="color: #be185d;" data-i18n="birthday.empty-title">Siap Membuat Foto Ulang Tahun</h3>',
    'birthday.empty-title'
);

// 33. empty state p
rep(
    'Upload foto, pilih kategori umur dan tema yang sesuai, lalu klik generate untuk membuat foto ulang tahun yang cantik!',
    '<span data-i18n="birthday.empty-desc">Upload foto, pilih kategori umur dan tema yang sesuai, lalu klik generate untuk membuat foto ulang tahun yang cantik!</span>',
    'birthday.empty-desc'
);

// ================================================================
// EID GREETING CARD (content-kartu-lebaran)
// ================================================================

// 34. header desc
repR(
    '(<p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">)\\s+Buat kartu ucapan Lebaran',
    '<p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" data-i18n="lebaran.desc">\r\n                    Buat kartu ucapan Lebaran',
    'lebaran.desc'
);

// 35. badge span
rep(
    '<span class="text-sm font-medium" style="color: #15803d;">20 Tema Eksklusif + Wajah Keluarga Asli</span>',
    '<span class="text-sm font-medium" style="color: #15803d;" data-i18n="lebaran.badge">20 Tema Eksklusif + Wajah Keluarga Asli</span>',
    'lebaran.badge'
);

// 36. step 1 h3 — "Upload Foto Keluarga (Opsional)" with nested optional span
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto Keluarga <span class="text-sm font-normal text-gray-400">(Opsional)</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800"><span data-i18n="lebaran.step1-title">Upload Foto Keluarga</span> <span class="text-sm font-normal text-gray-400" data-i18n="family.optional-label">(Opsional)</span></h3>',
    'lebaran.step1-title'
);

// 37. upload click label (lebaran — unique style color #15803d)
rep(
    '<span class="font-semibold" style="color: #15803d;">Klik untuk upload foto</span>',
    '<span class="font-semibold" style="color: #15803d;" data-i18n="lebaran.upload-click">Klik untuk upload foto</span>',
    'lebaran.upload-click'
);

// 38. upload desc span
rep(
    '<span class="text-xs text-gray-500">Wajah keluarga akan dimasukkan ke kartu (1-5 foto)</span>',
    '<span class="text-xs text-gray-500" data-i18n="lebaran.upload-hint">Wajah keluarga akan dimasukkan ke kartu (1-5 foto)</span>',
    'lebaran.upload-hint'
);

// 39. remove photo button text (reuse unboxing.remove-photo)
repR(
    '(id="lebaran-remove-photo"[^>]*>)\\s+(<i class="fas fa-times mr-1"></i>) Hapus Foto',
    '$1\r\n                                        $2 <span data-i18n="unboxing.remove-photo">Hapus Foto</span>',
    'lebaran.remove-photo'
);

// 40. step 2 h3 — "Tema Kartu (20 tema)" with nested count span
rep(
    '<h3 class="text-lg font-bold text-gray-800">Tema Kartu <span class="text-xs font-normal text-gray-400">(20 tema)</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800"><span data-i18n="lebaran.step2-title">Tema Kartu</span> <span class="text-xs font-normal text-gray-400" data-i18n="lebaran.step2-count">(20 tema)</span></h3>',
    'lebaran.step2-title'
);

// 41. step 3 h3 — "Nama Keluarga (Opsional)" with nested optional span
rep(
    '<h3 class="text-lg font-bold text-gray-800">Nama Keluarga <span class="text-sm font-normal text-gray-400">(Opsional)</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800"><span data-i18n="lebaran.step3-title">Nama Keluarga</span> <span class="text-sm font-normal text-gray-400" data-i18n="family.optional-label">(Opsional)</span></h3>',
    'lebaran.step3-title'
);

// 42. step 4 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Ucapan Lebaran</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="lebaran.step4-title">Ucapan Lebaran</h3>',
    'lebaran.step4-title'
);

// 43. step 5 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Format Kartu</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="lebaran.step5-title">Format Kartu</h3>',
    'lebaran.step5-title'
);

// 44. step 6 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Kartu</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="lebaran.step6-title">Jumlah Kartu</h3>',
    'lebaran.step6-title'
);

// 45-47. count buttons (lebaran-count-btn class, unique text "N Kartu")
repR(
    '(data-count="1" class="lebaran-count-btn[^"]*">)1 Kartu(<\\/button>)',
    '$1<span data-i18n="lebaran.count-1">1 Kartu</span>$2',
    'lebaran.count-1'
);
repR(
    '(data-count="2" class="lebaran-count-btn[^"]*">)2 Kartu(<\\/button>)',
    '$1<span data-i18n="lebaran.count-2">2 Kartu</span>$2',
    'lebaran.count-2'
);
repR(
    '(data-count="4" class="lebaran-count-btn[^"]*">)4 Kartu(<\\/button>)',
    '$1<span data-i18n="lebaran.count-4">4 Kartu</span>$2',
    'lebaran.count-4'
);

// 48. generate button
rep(
    '<span class="relative z-10">Generate 4 Kartu Lebaran</span>',
    '<span class="relative z-10" data-i18n="lebaran.gen-btn">Generate 4 Kartu Lebaran</span>',
    'lebaran.gen-btn'
);

// 49. download all (lebaran) — second occurrence of hidden sm:inline Download Semua
rep(
    '<span class="hidden sm:inline">Download Semua</span>',
    '<span class="hidden sm:inline" data-i18n="family.download-all">Download Semua</span>',
    'lebaran.download-all'
);

// 50. empty state h3
rep(
    '<h3 class="text-2xl font-bold mb-3" style="color: #15803d;">Siap Membuat Kartu Ucapan Lebaran</h3>',
    '<h3 class="text-2xl font-bold mb-3" style="color: #15803d;" data-i18n="lebaran.empty-title">Siap Membuat Kartu Ucapan Lebaran</h3>',
    'lebaran.empty-title'
);

// 51. empty state p
rep(
    'Pilih tema kartu, tulis nama keluarga, pilih ucapan, lalu klik generate untuk membuat kartu lebaran yang cantik!',
    '<span data-i18n="lebaran.empty-desc">Pilih tema kartu, tulis nama keluarga, pilih ucapan, lalu klik generate untuk membuat kartu lebaran yang cantik!</span>',
    'lebaran.empty-desc'
);

// ================================================================
// i18n DICTIONARY
// ================================================================
rep(
    `'graduation.download-all':'Download All',\r\n            },`,
    `'graduation.download-all':'Download All',\r\n` +
    `            'booth.desc':'Create professional photo booths with various themes and attractive frames. Perfect for your special memories!',\r\n` +
    `            'booth.step1-title':'Upload Photos (1-4 photos)',\r\n` +
    `            'booth.upload-hint':'Can upload 1-4 photos at once',\r\n` +
    `            'booth.step2-title':'Choose Frame Theme',\r\n` +
    `            'booth.step3-title':'Image Ratio',\r\n` +
    `            'booth.gen-btn':'Create Photo Booth',\r\n` +
    `            'booth.placeholder-title':'Your Photo Booth Results',\r\n` +
    `            'booth.placeholder-desc':'Photo booth will appear here after processing',\r\n` +
    `            'birthday.desc':'Create professional birthday photos for all ages! From babies to seniors, with various attractive themes and beautiful decorations.',\r\n` +
    `            'birthday.badge':'Perfect for all special moments',\r\n` +
    `            'birthday.step1-title':'Upload Photo (1-5 People)',\r\n` +
    `            'birthday.upload-click':'Click to upload',\r\n` +
    `            'birthday.upload-hint':'Upload 1-5 photos of people (family/friends)',\r\n` +
    `            'birthday.step2-title':'Age Category',\r\n` +
    `            'birthday.step3-title':'Birthday Theme',\r\n` +
    `            'birthday.custom-label':'Or Write Custom Theme:',\r\n` +
    `            'birthday.step4-title':'Decoration Style',\r\n` +
    `            'birthday.step5-title':'Birthday Cake Style',\r\n` +
    `            'birthday.step6-title':'Lighting',\r\n` +
    `            'birthday.step7-title':'Image Ratio',\r\n` +
    `            'birthday.step8-title':'Number of Photo Variations',\r\n` +
    `            'birthday.gen-suffix':'Photos',\r\n` +
    `            'birthday.empty-title':'Ready to Create Birthday Photos',\r\n` +
    `            'birthday.empty-desc':'Upload a photo, choose the age category and matching theme, then click generate to create beautiful birthday photos!',\r\n` +
    `            'lebaran.desc':'Create a beautiful Eid greeting card! Upload a family photo (optional) to include faces in the card, choose from 20 exclusive themes, and generate a card ready to send via WhatsApp.',\r\n` +
    `            'lebaran.badge':'20 Exclusive Themes + Real Family Faces',\r\n` +
    `            'lebaran.step1-title':'Upload Family Photo',\r\n` +
    `            'lebaran.upload-click':'Click to upload photo',\r\n` +
    `            'lebaran.upload-hint':'Family faces will be added to the card (1-5 photos)',\r\n` +
    `            'lebaran.step2-title':'Card Theme',\r\n` +
    `            'lebaran.step2-count':'(20 themes)',\r\n` +
    `            'lebaran.step3-title':'Family Name',\r\n` +
    `            'lebaran.step4-title':'Eid Greeting',\r\n` +
    `            'lebaran.step5-title':'Card Format',\r\n` +
    `            'lebaran.step6-title':'Number of Cards',\r\n` +
    `            'lebaran.count-1':'1 Card',\r\n` +
    `            'lebaran.count-2':'2 Cards',\r\n` +
    `            'lebaran.count-4':'4 Cards',\r\n` +
    `            'lebaran.gen-btn':'Generate 4 Eid Cards',\r\n` +
    `            'lebaran.empty-title':'Ready to Create Eid Greeting Cards',\r\n` +
    `            'lebaran.empty-desc':'Choose a card theme, write your family name, choose a greeting, then click generate to create beautiful Eid cards!',\r\n` +
    `            },`,
    'EN dict insert'
);

rep(
    `'graduation.download-all':'Unduh Semua',\r\n            }`,
    `'graduation.download-all':'Unduh Semua',\r\n` +
    `            'booth.desc':'Buat foto booth profesional dengan berbagai tema dan frame menarik. Perfect untuk kenangan spesial Anda!',\r\n` +
    `            'booth.step1-title':'Unggah Foto (1-4 foto)',\r\n` +
    `            'booth.upload-hint':'Bisa upload 1-4 foto sekaligus',\r\n` +
    `            'booth.step2-title':'Pilih Tema Frame',\r\n` +
    `            'booth.step3-title':'Rasio Gambar',\r\n` +
    `            'booth.gen-btn':'Buat Photo Booth',\r\n` +
    `            'booth.placeholder-title':'Hasil Photo Booth Anda',\r\n` +
    `            'booth.placeholder-desc':'Foto booth akan muncul di sini setelah diproses',\r\n` +
    `            'birthday.desc':'Buat foto ulang tahun profesional untuk semua usia! Dari bayi hingga lansia, dengan berbagai tema menarik dan dekorasi cantik.',\r\n` +
    `            'birthday.badge':'Perfect untuk semua momen spesial',\r\n` +
    `            'birthday.step1-title':'Upload Foto (1-5 Orang)',\r\n` +
    `            'birthday.upload-click':'Klik untuk upload',\r\n` +
    `            'birthday.upload-hint':'Upload 1-5 foto orang (keluarga/teman)',\r\n` +
    `            'birthday.step2-title':'Kategori Umur',\r\n` +
    `            'birthday.step3-title':'Tema Ulang Tahun',\r\n` +
    `            'birthday.custom-label':'Atau Tulis Tema Custom:',\r\n` +
    `            'birthday.step4-title':'Gaya Dekorasi',\r\n` +
    `            'birthday.step5-title':'Style Kue Ulang Tahun',\r\n` +
    `            'birthday.step6-title':'Pencahayaan',\r\n` +
    `            'birthday.step7-title':'Rasio Gambar',\r\n` +
    `            'birthday.step8-title':'Jumlah Variasi Foto',\r\n` +
    `            'birthday.gen-suffix':'Foto',\r\n` +
    `            'birthday.empty-title':'Siap Membuat Foto Ulang Tahun',\r\n` +
    `            'birthday.empty-desc':'Upload foto, pilih kategori umur dan tema yang sesuai, lalu klik generate untuk membuat foto ulang tahun yang cantik!',\r\n` +
    `            'lebaran.desc':'Buat kartu ucapan Lebaran yang indah! Upload foto keluarga (opsional) agar wajah dimasukkan ke kartu, pilih dari 20 tema eksklusif, dan generate kartu siap kirim via WhatsApp.',\r\n` +
    `            'lebaran.badge':'20 Tema Eksklusif + Wajah Keluarga Asli',\r\n` +
    `            'lebaran.step1-title':'Upload Foto Keluarga',\r\n` +
    `            'lebaran.upload-click':'Klik untuk upload foto',\r\n` +
    `            'lebaran.upload-hint':'Wajah keluarga akan dimasukkan ke kartu (1-5 foto)',\r\n` +
    `            'lebaran.step2-title':'Tema Kartu',\r\n` +
    `            'lebaran.step2-count':'(20 tema)',\r\n` +
    `            'lebaran.step3-title':'Nama Keluarga',\r\n` +
    `            'lebaran.step4-title':'Ucapan Lebaran',\r\n` +
    `            'lebaran.step5-title':'Format Kartu',\r\n` +
    `            'lebaran.step6-title':'Jumlah Kartu',\r\n` +
    `            'lebaran.count-1':'1 Kartu',\r\n` +
    `            'lebaran.count-2':'2 Kartu',\r\n` +
    `            'lebaran.count-4':'4 Kartu',\r\n` +
    `            'lebaran.gen-btn':'Generate 4 Kartu Lebaran',\r\n` +
    `            'lebaran.empty-title':'Siap Membuat Kartu Ucapan Lebaran',\r\n` +
    `            'lebaran.empty-desc':'Pilih tema kartu, tulis nama keluarga, pilih ucapan, lalu klik generate untuk membuat kartu lebaran yang cantik!',\r\n` +
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
