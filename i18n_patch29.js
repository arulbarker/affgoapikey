// i18n_patch29.js — Style Matcher, Thumbnail Pro, IG & TikTok Cover
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ==================== STYLE MATCHER ====================

// desc p
rep(
    '<p class="text-gray-600 text-lg max-w-3xl mx-auto">\r\n                        Transform foto Anda dengan gaya visual dari foto referensi',
    '<p class="text-gray-600 text-lg max-w-3xl mx-auto" data-i18n="style-matcher.desc">\r\n                        Transform foto Anda dengan gaya visual dari foto referensi',
    'style-matcher.desc'
);

// h3 "Foto Anda" (anchor: id="sm-your-upload-area")
rep(
    '<h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">\r\n                                <i class="fas fa-user-circle text-pink-600"></i>\r\n                                Foto Anda\r\n                            </h3>\r\n                            <div id="sm-your-upload-area"',
    '<h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2" data-i18n="style-matcher.your-photo-title">\r\n                                <i class="fas fa-user-circle text-pink-600"></i>\r\n                                Foto Anda\r\n                            </h3>\r\n                            <div id="sm-your-upload-area"',
    'style-matcher.your-photo-title'
);

// p "Upload foto Anda" (in sm-your-placeholder, anchor: sm-your-preview)
rep(
    '                                    <p class="text-gray-600 font-semibold">Upload foto Anda</p>\r\n                                    <p class="text-xs text-gray-500 mt-2">PNG, JPG, HEIC</p>\r\n                                </div>\r\n                                <img id="sm-your-preview"',
    '                                    <p class="text-gray-600 font-semibold" data-i18n="style-matcher.your-upload-p">Upload foto Anda</p>\r\n                                    <p class="text-xs text-gray-500 mt-2">PNG, JPG, HEIC</p>\r\n                                </div>\r\n                                <img id="sm-your-preview"',
    'style-matcher.your-upload-p'
);

// h3 "Foto Referensi (Gaya)" (anchor: id="sm-ref-upload-area")
rep(
    '<h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">\r\n                                <i class="fas fa-star text-purple-600"></i>\r\n                                Foto Referensi (Gaya)\r\n                            </h3>\r\n                            <div id="sm-ref-upload-area"',
    '<h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2" data-i18n="style-matcher.ref-photo-title">\r\n                                <i class="fas fa-star text-purple-600"></i>\r\n                                Foto Referensi (Gaya)\r\n                            </h3>\r\n                            <div id="sm-ref-upload-area"',
    'style-matcher.ref-photo-title'
);

// p "Upload foto gaya" (anchor: id="sm-ref-placeholder")
rep(
    '<div id="sm-ref-placeholder">\r\n                                    <i class="fas fa-image text-5xl text-gray-400 group-hover:text-purple-500 transition-all mb-3"></i>\r\n                                    <p class="text-gray-600 font-semibold">Upload foto gaya</p>',
    '<div id="sm-ref-placeholder">\r\n                                    <i class="fas fa-image text-5xl text-gray-400 group-hover:text-purple-500 transition-all mb-3"></i>\r\n                                    <p class="text-gray-600 font-semibold" data-i18n="style-matcher.ref-upload-p">Upload foto gaya</p>',
    'style-matcher.ref-upload-p'
);

// p "Artis, influencer, dll" (anchor: sm-ref-preview)
rep(
    '                                    <p class="text-xs text-gray-500 mt-2">Artis, influencer, dll</p>\r\n                                </div>\r\n                                <img id="sm-ref-preview"',
    '                                    <p class="text-xs text-gray-500 mt-2" data-i18n="style-matcher.ref-upload-note">Artis, influencer, dll</p>\r\n                                </div>\r\n                                <img id="sm-ref-preview"',
    'style-matcher.ref-upload-note'
);

// Subtle div "Gaya halus, natural"
rep(
    '<div class="text-xs text-gray-500">Gaya halus, natural</div>',
    '<div class="text-xs text-gray-500" data-i18n="style-matcher.subtle-desc">Gaya halus, natural</div>',
    'style-matcher.subtle-desc'
);

// Strong div "Gaya kuat, dramatic"
rep(
    '<div class="text-xs text-gray-500">Gaya kuat, dramatic</div>',
    '<div class="text-xs text-gray-500" data-i18n="style-matcher.strong-desc">Gaya kuat, dramatic</div>',
    'style-matcher.strong-desc'
);

// sm-placeholder p
rep(
    '<p class="text-gray-500 mb-4">Upload foto Anda dan foto referensi untuk memulai</p>',
    '<p class="text-gray-500 mb-4" data-i18n="style-matcher.placeholder-desc">Upload foto Anda dan foto referensi untuk memulai</p>',
    'style-matcher.placeholder-desc'
);

// results-header p (anchor: flex gap-3 following)
rep(
    '<p class="text-sm text-gray-600 mt-1">Pilih yang paling sesuai atau download semua</p>\r\n                            </div>\r\n                            <div class="flex gap-3">',
    '<p class="text-sm text-gray-600 mt-1" data-i18n="style-matcher.results-subtext">Pilih yang paling sesuai atau download semua</p>\r\n                            </div>\r\n                            <div class="flex gap-3">',
    'style-matcher.results-subtext'
);

// ==================== THUMBNAIL PRO ====================

// desc p
rep(
    'Generate eye-catching thumbnails untuk YouTube, Instagram, atau platform apapun - Gunakan foto referensi atau buat dari teks custom!',
    '<span data-i18n="thumbnail.desc">Generate eye-catching thumbnails untuk YouTube, Instagram, atau platform apapun - Gunakan foto referensi atau buat dari teks custom!</span>',
    'thumbnail.desc'
);

// ref-custom-instructions placeholder
rep(
    'id="tg-ref-custom-instructions" rows="3" class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none" placeholder="Contoh: Tambahkan efek glow, gunakan warna biru dan merah, fokus pada produk di tengah, background blur, dsb."',
    'id="tg-ref-custom-instructions" rows="3" class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none" data-i18n-placeholder="thumbnail.ref-instructions-placeholder" placeholder="Contoh: Tambahkan efek glow, gunakan warna biru dan merah, fokus pada produk di tengah, background blur, dsb."',
    'thumbnail.ref-instructions-placeholder'
);

// ref-custom-instructions note p (\uD83D\uDCA1 = 💡)
rep(
    '<p class="text-xs text-gray-500 mt-2">\uD83D\uDCA1 Deskripsikan perubahan atau penekanan yang Anda inginkan dari reference</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="thumbnail.ref-instructions-note">\uD83D\uDCA1 Deskripsikan perubahan atau penekanan yang Anda inginkan dari reference</p>',
    'thumbnail.ref-instructions-note'
);

// tg-title-input note p
rep(
    '<p class="text-xs text-gray-500 mt-2">\uD83D\uDCA1 Gunakan ALL CAPS untuk impact maksimal</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="thumbnail.title-note">\uD83D\uDCA1 Gunakan ALL CAPS untuk impact maksimal</p>',
    'thumbnail.title-note'
);

// expression/vibe note p
rep(
    '<p class="text-xs text-gray-500 mt-2">Atur mood/vibe keseluruhan thumbnail</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="thumbnail.expression-note">Atur mood/vibe keseluruhan thumbnail</p>',
    'thumbnail.expression-note'
);

// tg-placeholder p
rep(
    '<p class="text-gray-500 mb-6">Pilih mode dan isi informasi untuk memulai</p>',
    '<p class="text-gray-500 mb-6" data-i18n="thumbnail.placeholder-desc">Pilih mode dan isi informasi untuk memulai</p>',
    'thumbnail.placeholder-desc'
);

// results-header p
rep(
    '<p class="text-sm text-gray-600 mt-1">Click-worthy thumbnails siap digunakan</p>',
    '<p class="text-sm text-gray-600 mt-1" data-i18n="thumbnail.results-subtext">Click-worthy thumbnails siap digunakan</p>',
    'thumbnail.results-subtext'
);

// tips section — Bold Text desc
rep(
    '<p class="text-sm text-gray-600">Gunakan text besar, bold, dan kontras tinggi untuk readability maksimal</p>',
    '<p class="text-sm text-gray-600" data-i18n="thumbnail.tip-bold">Gunakan text besar, bold, dan kontras tinggi untuk readability maksimal</p>',
    'thumbnail.tip-bold'
);

// tips section — Eye-Catching desc
rep(
    '<p class="text-sm text-gray-600">Warna kontras, ekspresif facial, dan composition yang menarik perhatian</p>',
    '<p class="text-sm text-gray-600" data-i18n="thumbnail.tip-eye">Warna kontras, ekspresif facial, dan composition yang menarik perhatian</p>',
    'thumbnail.tip-eye'
);

// tips section — Mobile-Friendly desc
rep(
    '<p class="text-sm text-gray-600">Pastikan text terbaca jelas di layar kecil, hindari terlalu banyak detail</p>',
    '<p class="text-sm text-gray-600" data-i18n="thumbnail.tip-mobile">Pastikan text terbaca jelas di layar kecil, hindari terlalu banyak detail</p>',
    'thumbnail.tip-mobile'
);

// ==================== IG & TIKTOK COVER ====================

// h1 "Foto Sampul IG & TikTok Pro" (NOT in <header>, needs explicit data-i18n)
rep(
    '<h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3">\r\n                        Foto Sampul IG & TikTok Pro\r\n                    </h1>',
    '<h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3" data-i18n="cover-photo.title">\r\n                        Foto Sampul IG & TikTok Pro\r\n                    </h1>',
    'cover-photo.title'
);

// desc p
rep(
    'Buat foto sampul profesional untuk Instagram & TikTok (9:16 vertical) - Support faceless & with face!',
    '<span data-i18n="cover-photo.desc">Buat foto sampul profesional untuk Instagram & TikTok (9:16 vertical) - Support faceless & with face!</span>',
    'cover-photo.desc'
);

// brand-name tip p (\uD83D\uDCA1 = 💡)
rep(
    '<p class="text-xs text-gray-500 mt-2">\uD83D\uDCA1 Nama atau brand Anda</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="cover-photo.brand-tip">\uD83D\uDCA1 Nama atau brand Anda</p>',
    'cover-photo.brand-tip'
);

// tagline tip p (\uD83D\uDCBC = 💼)
rep(
    '<p class="text-xs text-gray-500 mt-2">\uD83D\uDCBC Profesi atau deskripsi singkat</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="cover-photo.tagline-tip">\uD83D\uDCBC Profesi atau deskripsi singkat</p>',
    'cover-photo.tagline-tip'
);

// ==================== DICT EN ====================
rep(
    "'photo-angle.placeholder-desc':'Upload photo and choose angle preset to start',\r\n            },",
    "'photo-angle.placeholder-desc':'Upload photo and choose angle preset to start',\r\n" +
    "            'style-matcher.desc':'Transform your photo with the visual style from a reference photo (artist, influencer, or any style) - AI will match lighting, color grading, mood, and aesthetics!',\r\n" +
    "            'style-matcher.your-photo-title':'Your Photo',\r\n" +
    "            'style-matcher.your-upload-p':'Upload your photo',\r\n" +
    "            'style-matcher.ref-photo-title':'Reference Photo (Style)',\r\n" +
    "            'style-matcher.ref-upload-p':'Upload style photo',\r\n" +
    "            'style-matcher.ref-upload-note':'Artist, influencer, etc.',\r\n" +
    "            'style-matcher.subtle-desc':'Subtle style, natural',\r\n" +
    "            'style-matcher.strong-desc':'Strong style, dramatic',\r\n" +
    "            'style-matcher.placeholder-desc':'Upload your photo and reference photo to start',\r\n" +
    "            'style-matcher.results-subtext':'Choose the best one or download all',\r\n" +
    "            'thumbnail.desc':'Generate eye-catching thumbnails for YouTube, Instagram, or any platform - Use a reference photo or create from custom text!',\r\n" +
    "            'thumbnail.ref-instructions-placeholder':'Example: Add glow effect, use blue and red colors, focus on product in center, background blur, etc.',\r\n" +
    "            'thumbnail.ref-instructions-note':'\uD83D\uDCA1 Describe the changes or emphasis you want from the reference',\r\n" +
    "            'thumbnail.title-note':'\uD83D\uDCA1 Use ALL CAPS for maximum impact',\r\n" +
    "            'thumbnail.expression-note':'Set the overall mood/vibe of the thumbnail',\r\n" +
    "            'thumbnail.placeholder-desc':'Choose mode and fill in information to start',\r\n" +
    "            'thumbnail.results-subtext':'Click-worthy thumbnails ready to use',\r\n" +
    "            'thumbnail.tip-bold':'Use large, bold, high-contrast text for maximum readability',\r\n" +
    "            'thumbnail.tip-eye':'High contrast colors, expressive faces, and eye-catching composition',\r\n" +
    "            'thumbnail.tip-mobile':'Ensure text is clearly readable on small screens, avoid too many details',\r\n" +
    "            'cover-photo.title':'IG & TikTok Cover Pro',\r\n" +
    "            'cover-photo.desc':'Create professional cover photos for Instagram & TikTok (9:16 vertical) - Supports faceless & with face!',\r\n" +
    "            'cover-photo.brand-tip':'\uD83D\uDCA1 Your name or brand',\r\n" +
    "            'cover-photo.tagline-tip':'\uD83D\uDCBC Profession or short description',\r\n" +
    "            },",
    'dict.en'
);

// ==================== DICT ID ====================
rep(
    "'photo-angle.placeholder-desc':'Upload foto dan pilih preset angle untuk memulai',\r\n            }",
    "'photo-angle.placeholder-desc':'Upload foto dan pilih preset angle untuk memulai',\r\n" +
    "            'style-matcher.desc':'Transform foto Anda dengan gaya visual dari foto referensi (artis, influencer, atau gaya apapun) - AI akan mencocokkan lighting, color grading, mood, dan aesthetics!',\r\n" +
    "            'style-matcher.your-photo-title':'Foto Anda',\r\n" +
    "            'style-matcher.your-upload-p':'Upload foto Anda',\r\n" +
    "            'style-matcher.ref-photo-title':'Foto Referensi (Gaya)',\r\n" +
    "            'style-matcher.ref-upload-p':'Upload foto gaya',\r\n" +
    "            'style-matcher.ref-upload-note':'Artis, influencer, dll',\r\n" +
    "            'style-matcher.subtle-desc':'Gaya halus, natural',\r\n" +
    "            'style-matcher.strong-desc':'Gaya kuat, dramatic',\r\n" +
    "            'style-matcher.placeholder-desc':'Upload foto Anda dan foto referensi untuk memulai',\r\n" +
    "            'style-matcher.results-subtext':'Pilih yang paling sesuai atau download semua',\r\n" +
    "            'thumbnail.desc':'Generate eye-catching thumbnails untuk YouTube, Instagram, atau platform apapun - Gunakan foto referensi atau buat dari teks custom!',\r\n" +
    "            'thumbnail.ref-instructions-placeholder':'Contoh: Tambahkan efek glow, gunakan warna biru dan merah, fokus pada produk di tengah, background blur, dsb.',\r\n" +
    "            'thumbnail.ref-instructions-note':'\uD83D\uDCA1 Deskripsikan perubahan atau penekanan yang Anda inginkan dari reference',\r\n" +
    "            'thumbnail.title-note':'\uD83D\uDCA1 Gunakan ALL CAPS untuk impact maksimal',\r\n" +
    "            'thumbnail.expression-note':'Atur mood/vibe keseluruhan thumbnail',\r\n" +
    "            'thumbnail.placeholder-desc':'Pilih mode dan isi informasi untuk memulai',\r\n" +
    "            'thumbnail.results-subtext':'Click-worthy thumbnails siap digunakan',\r\n" +
    "            'thumbnail.tip-bold':'Gunakan text besar, bold, dan kontras tinggi untuk readability maksimal',\r\n" +
    "            'thumbnail.tip-eye':'Warna kontras, ekspresif facial, dan composition yang menarik perhatian',\r\n" +
    "            'thumbnail.tip-mobile':'Pastikan text terbaca jelas di layar kecil, hindari terlalu banyak detail',\r\n" +
    "            'cover-photo.title':'Foto Sampul IG & TikTok Pro',\r\n" +
    "            'cover-photo.desc':'Buat foto sampul profesional untuk Instagram & TikTok (9:16 vertical) - Support faceless & with face!',\r\n" +
    "            'cover-photo.brand-tip':'\uD83D\uDCA1 Nama atau brand Anda',\r\n" +
    "            'cover-photo.tagline-tip':'\uD83D\uDCBC Profesi atau deskripsi singkat',\r\n" +
    "            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
