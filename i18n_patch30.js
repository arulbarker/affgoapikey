// i18n_patch30.js — Photo Restoration, Object Remover, Logo Generator
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ==================== PHOTO RESTORATION ====================

// h1 (NOT in <header> element — explicit data-i18n)
rep(
    '<h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-3">\r\n                        Generator Restorasi Foto Pro',
    '<h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-3" data-i18n="photo-restoration.title">\r\n                        Generator Restorasi Foto Pro',
    'photo-restoration.title'
);

// desc p
rep(
    'Perbaiki dan restore foto lama, rusak, atau blur menjadi jernih dan berkualitas tinggi dengan AI!',
    '<span data-i18n="photo-restoration.desc">Perbaiki dan restore foto lama, rusak, atau blur menjadi jernih dan berkualitas tinggi dengan AI!</span>',
    'photo-restoration.desc'
);

// step1 h3 "Upload Foto" (anchor: id="pr-upload-area")
rep(
    '<h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">\r\n                                <i class="fas fa-upload text-amber-600"></i>\r\n                                Upload Foto\r\n                            </h3>\r\n                            <div id="pr-upload-area"',
    '<h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2" data-i18n="photo-restoration.upload-title">\r\n                                <i class="fas fa-upload text-amber-600"></i>\r\n                                Upload Foto\r\n                            </h3>\r\n                            <div id="pr-upload-area"',
    'photo-restoration.upload-title'
);

// upload p (anchor: id="pr-photo-placeholder")
rep(
    '<div id="pr-photo-placeholder">\r\n                                    <i class="fas fa-image text-5xl text-gray-400 group-hover:text-amber-500 transition-all mb-3"></i>\r\n                                    <p class="text-gray-600 font-semibold">Upload foto yang ingin direstorasi</p>',
    '<div id="pr-photo-placeholder">\r\n                                    <i class="fas fa-image text-5xl text-gray-400 group-hover:text-amber-500 transition-all mb-3"></i>\r\n                                    <p class="text-gray-600 font-semibold" data-i18n="photo-restoration.upload-p">Upload foto yang ingin direstorasi</p>',
    'photo-restoration.upload-p'
);

// restoration mode note p (anchor: unique text)
rep(
    'Pilih jenis restorasi sesuai kondisi foto</p>\r\n                        </div>\r\n\r\n                        <!-- Restoration Intensity -->',
    'Pilih jenis restorasi sesuai kondisi foto</p>\r\n                        </div>\r\n\r\n                        <!-- Restoration Intensity -->',
    'photo-restoration.mode-note-skip'
);

// Actually replace the full p tag for mode note:
rep(
    '>Pilih jenis restorasi sesuai kondisi foto</p>',
    ' data-i18n="photo-restoration.mode-note">Pilih jenis restorasi sesuai kondisi foto</p>',
    'photo-restoration.mode-note'
);

// intensity note
rep(
    '>Intensitas restorasi yang akan diterapkan</p>',
    ' data-i18n="photo-restoration.intensity-note">Intensitas restorasi yang akan diterapkan</p>',
    'photo-restoration.intensity-note'
);

// aspect ratio note
rep(
    '>Tetap original atau crop ke ratio tertentu</p>',
    ' data-i18n="photo-restoration.ratio-note">Tetap original atau crop ke ratio tertentu</p>',
    'photo-restoration.ratio-note'
);

// placeholder p
rep(
    'Upload foto lama atau rusak, pilih mode restorasi, dan biarkan AI memperbaikinya menjadi seperti baru!',
    '<span data-i18n="photo-restoration.placeholder-p">Upload foto lama atau rusak, pilih mode restorasi, dan biarkan AI memperbaikinya menjadi seperti baru!</span>',
    'photo-restoration.placeholder-p'
);

// tips
rep(
    '>Upload foto dengan resolusi setinggi mungkin untuk hasil restorasi yang lebih baik</p>',
    ' data-i18n="photo-restoration.tip-quality">Upload foto dengan resolusi setinggi mungkin untuk hasil restorasi yang lebih baik</p>',
    'photo-restoration.tip-quality'
);
rep(
    '>Pilih restoration mode yang sesuai dengan kondisi foto untuk hasil optimal</p>',
    ' data-i18n="photo-restoration.tip-mode">Pilih restoration mode yang sesuai dengan kondisi foto untuk hasil optimal</p>',
    'photo-restoration.tip-mode'
);
rep(
    '>Bandingkan kedua hasil untuk memilih yang paling sesuai dengan kebutuhan Anda</p>',
    ' data-i18n="photo-restoration.tip-compare">Bandingkan kedua hasil untuk memilih yang paling sesuai dengan kebutuhan Anda</p>',
    'photo-restoration.tip-compare'
);

// ==================== OBJECT REMOVER ====================

// h1 "Hapus Object" (add data-i18n to h1)
rep(
    '<h1 class="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">',
    '<h1 class="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2" data-i18n="object-remover.title">',
    'object-remover.title'
);

// desc p
rep(
    '<p class="text-gray-600">Hilangkan objek yang tidak diinginkan dari foto Anda secara otomatis atau manual dengan brush tool profesional</p>',
    '<p class="text-gray-600" data-i18n="object-remover.desc">Hilangkan objek yang tidak diinginkan dari foto Anda secara otomatis atau manual dengan brush tool profesional</p>',
    'object-remover.desc'
);

// step1 h3 "Upload Foto" (anchor: remover-upload-box)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto</h3>\r\n                                </div>\r\n                                <div class="upload-box-remover" id="remover-upload-box"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="object-remover.step1-title">Upload Foto</h3>\r\n                                </div>\r\n                                <div class="upload-box-remover" id="remover-upload-box"',
    'object-remover.step1-title'
);

// upload drag-drop p
rep(
    '<p class="text-lg font-semibold text-gray-700 mb-1">Klik atau Drag & Drop Foto</p>',
    '<p class="text-lg font-semibold text-gray-700 mb-1" data-i18n="object-remover.upload-drag">Klik atau Drag & Drop Foto</p>',
    'object-remover.upload-drag'
);

// step2 h3 (anchor: remover-mode-section)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Pilih Mode Penghapusan</h3>\r\n                                </div>\r\n                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="object-remover.step2-title">Pilih Mode Penghapusan</h3>\r\n                                </div>\r\n                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">',
    'object-remover.step2-title'
);

// mode auto btn
rep(
    '<p class="font-bold text-lg">Otomatis (AI)</p>\r\n                                            <p class="text-sm mt-1 opacity-80">AI deteksi & hapus objek mengganggu</p>',
    '<p class="font-bold text-lg" data-i18n="object-remover.mode-auto-title">Otomatis (AI)</p>\r\n                                            <p class="text-sm mt-1 opacity-80" data-i18n="object-remover.mode-auto-desc">AI deteksi & hapus objek mengganggu</p>',
    'object-remover.mode-auto'
);

// mode manual btn
rep(
    '<p class="font-bold text-lg">Manual (Brush)</p>\r\n                                            <p class="text-sm mt-1 opacity-80">Pilih area dengan kuas</p>',
    '<p class="font-bold text-lg">Manual (Brush)</p>\r\n                                            <p class="text-sm mt-1 opacity-80" data-i18n="object-remover.mode-manual-desc">Pilih area dengan kuas</p>',
    'object-remover.mode-manual-desc'
);

// mode watermark btn
rep(
    '<p class="font-bold text-lg">Hapus Watermark</p>\r\n                                            <p class="text-sm mt-1 opacity-80">Hapus teks, logo & watermark</p>',
    '<p class="font-bold text-lg" data-i18n="object-remover.mode-watermark-title">Hapus Watermark</p>\r\n                                            <p class="text-sm mt-1 opacity-80" data-i18n="object-remover.mode-watermark-desc">Hapus teks, logo & watermark</p>',
    'object-remover.mode-watermark'
);

// step3 manual h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Tandai Area yang Akan Dihapus</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="object-remover.step3-manual-title">Tandai Area yang Akan Dihapus</h3>',
    'object-remover.step3-manual-title'
);

// brush tip (wrap text after <strong>Tips:</strong>)
rep(
    '<strong>Tips:</strong> Sapukan kuas pada area yang ingin dihapus. Area yang ditandai akan berwarna merah transparan.',
    '<strong>Tips:</strong> <span data-i18n="object-remover.brush-tip">Sapukan kuas pada area yang ingin dihapus. Area yang ditandai akan berwarna merah transparan.</span>',
    'object-remover.brush-tip'
);

// step3 auto h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Opsi Penghapusan Otomatis</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="object-remover.step3-auto-title">Opsi Penghapusan Otomatis</h3>',
    'object-remover.step3-auto-title'
);

// step3 watermark h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Opsi Penghapusan Watermark</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="object-remover.step3-watermark-title">Opsi Penghapusan Watermark</h3>',
    'object-remover.step3-watermark-title'
);

// step4 h3 (anchor: remover-variation-section)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi Hasil</h3>\r\n                                </div>\r\n                                <div class="grid grid-cols-3 gap-4">',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="object-remover.step4-title">Jumlah Variasi Hasil</h3>\r\n                                </div>\r\n                                <div class="grid grid-cols-3 gap-4">',
    'object-remover.step4-title'
);

// variation buttons (all 3 in one rep — add data-i18n to each button)
rep(
    '<button class="remover-variation-btn active" data-count="2">\r\n                                        <i class="fas fa-images mr-2"></i>2 Variasi\r\n                                    </button>\r\n                                    <button class="remover-variation-btn" data-count="3">\r\n                                        <i class="fas fa-images mr-2"></i>3 Variasi\r\n                                    </button>\r\n                                    <button class="remover-variation-btn" data-count="4">\r\n                                        <i class="fas fa-images mr-2"></i>4 Variasi\r\n                                    </button>',
    '<button class="remover-variation-btn active" data-count="2" data-i18n="object-remover.variation-2">\r\n                                        <i class="fas fa-images mr-2"></i>2 Variasi\r\n                                    </button>\r\n                                    <button class="remover-variation-btn" data-count="3" data-i18n="object-remover.variation-3">\r\n                                        <i class="fas fa-images mr-2"></i>3 Variasi\r\n                                    </button>\r\n                                    <button class="remover-variation-btn" data-count="4" data-i18n="object-remover.variation-4">\r\n                                        <i class="fas fa-images mr-2"></i>4 Variasi\r\n                                    </button>',
    'object-remover.variations'
);

// gen btn span
rep(
    '<span>Hapus Object Sekarang</span>',
    '<span data-i18n="object-remover.gen-btn">Hapus Object Sekarang</span>',
    'object-remover.gen-btn'
);

// results h2
rep(
    '<h2 class="text-2xl font-bold text-gray-800">\r\n                                <i class="fas fa-images mr-2 text-red-600"></i>Hasil Penghapusan\r\n                            </h2>',
    '<h2 class="text-2xl font-bold text-gray-800" data-i18n="object-remover.results-title">\r\n                                <i class="fas fa-images mr-2 text-red-600"></i>Hasil Penghapusan\r\n                            </h2>',
    'object-remover.results-title'
);

// download all btn (wrap text in span)
rep(
    'id="remover-download-all-btn" class="hidden px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">\r\n                                <i class="fas fa-download mr-2"></i>Download Semua',
    'id="remover-download-all-btn" class="hidden px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">\r\n                                <i class="fas fa-download mr-2"></i><span data-i18n="object-remover.download-all">Download Semua</span>',
    'object-remover.download-all'
);

// ==================== LOGO GENERATOR ====================

// desc p (in <header> but not h1 — needs explicit data-i18n)
rep(
    'Buat logo profesional untuk brand Anda dengan AI. Dapatkan 6 variasi desain unik dalam berbagai style dan mockup preview.',
    '<span data-i18n="logo.desc">Buat logo profesional untuk brand Anda dengan AI. Dapatkan 6 variasi desain unik dalam berbagai style dan mockup preview.</span>',
    'logo.desc'
);

// step1 h3 "Informasi Brand"
rep(
    ', #EC4899);">1</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800">Informasi Brand</h3>',
    ', #EC4899);">1</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800" data-i18n="logo.step1-title">Informasi Brand</h3>',
    'logo.step1-title'
);

// brand-name label
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">Nama Brand/Perusahaan *</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="logo.brand-label">Nama Brand/Perusahaan *</label>',
    'logo.brand-label'
);

// brand-name note p (anchor: id="logo-brand-name")
rep(
    'id="logo-brand-name" class="w-full p-3 text-base rounded-xl border-2 border-gray-300 focus:border-purple-500 transition" placeholder="Contoh: TechNova, Cafe Delight">\r\n                                            <p class="text-xs text-gray-500 mt-1">',
    'id="logo-brand-name" class="w-full p-3 text-base rounded-xl border-2 border-gray-300 focus:border-purple-500 transition" placeholder="Contoh: TechNova, Cafe Delight">\r\n                                            <p class="text-xs text-gray-500 mt-1" data-i18n="logo.brand-note">',
    'logo.brand-note'
);

// tagline label
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">Tagline (Opsional)</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="logo.tagline-label">Tagline (Opsional)</label>',
    'logo.tagline-label'
);

// tagline note p (anchor: id="logo-tagline")
rep(
    'id="logo-tagline" class="w-full p-3 text-base rounded-xl border-2 border-gray-300 focus:border-purple-500 transition" placeholder="Contoh: Innovation for Tomorrow">\r\n                                            <p class="text-xs text-gray-500 mt-1">',
    'id="logo-tagline" class="w-full p-3 text-base rounded-xl border-2 border-gray-300 focus:border-purple-500 transition" placeholder="Contoh: Innovation for Tomorrow">\r\n                                            <p class="text-xs text-gray-500 mt-1" data-i18n="logo.tagline-note">',
    'logo.tagline-note'
);

// deskripsi bisnis label
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">Deskripsi Bisnis *</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="logo.desc-bisnis-label">Deskripsi Bisnis *</label>',
    'logo.desc-bisnis-label'
);

// deskripsi bisnis placeholder + note (anchor: id="logo-business-desc")
rep(
    'id="logo-business-desc" rows="3" class="w-full p-3 text-sm rounded-xl border-2 border-gray-300 focus:border-purple-500 transition resize-none" placeholder="Jelaskan apa yang dilakukan bisnis Anda, nilai-nilai, dan target audience..."',
    'id="logo-business-desc" rows="3" class="w-full p-3 text-sm rounded-xl border-2 border-gray-300 focus:border-purple-500 transition resize-none" data-i18n-placeholder="logo.desc-bisnis-placeholder" placeholder="Jelaskan apa yang dilakukan bisnis Anda, nilai-nilai, dan target audience..."',
    'logo.desc-bisnis-placeholder'
);

// deskripsi bisnis note p
rep(
    '>Bantu AI memahami brand Anda</p>',
    ' data-i18n="logo.desc-bisnis-note">Bantu AI memahami brand Anda</p>',
    'logo.desc-bisnis-note'
);

// step2 h3 "Industri" (anchor: id="logo-industry-options")
rep(
    ', #EC4899);">2</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800">Industri</h3>\r\n                                    </div>\r\n\r\n                                    <div id="logo-industry-options"',
    ', #EC4899);">2</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800" data-i18n="logo.step2-title">Industri</h3>\r\n                                    </div>\r\n\r\n                                    <div id="logo-industry-options"',
    'logo.step2-title'
);

// step3 h3 "Tipe Logo" (anchor: id="logo-type-options")
rep(
    ', #EC4899);">3</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800">Tipe Logo</h3>\r\n                                    </div>\r\n\r\n                                    <div id="logo-type-options"',
    ', #EC4899);">3</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800" data-i18n="logo.step3-title">Tipe Logo</h3>\r\n                                    </div>\r\n\r\n                                    <div id="logo-type-options"',
    'logo.step3-title'
);

// Kombinasi button
rep(
    '<i class="fas fa-layer-group"></i> Kombinasi\r\n                                        </button>',
    '<i class="fas fa-layer-group"></i> <span data-i18n="logo.type-combination">Kombinasi</span>\r\n                                        </button>',
    'logo.type-combination'
);

// style tip p (\u2728 = ✨)
rep(
    '>\u2728 Pilih 1-3 style yang menggambarkan brand Anda</p>',
    ' data-i18n="logo.style-tip">\u2728 Pilih 1-3 style yang menggambarkan brand Anda</p>',
    'logo.style-tip'
);

// step5 h3 "Skema Warna" (anchor: id="logo-color-scheme-options")
rep(
    ', #EC4899);">5</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800">Skema Warna</h3>\r\n                                    </div>\r\n\r\n                                    <div id="logo-color-scheme-options"',
    ', #EC4899);">5</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800" data-i18n="logo.step5-title">Skema Warna</h3>\r\n                                    </div>\r\n\r\n                                    <div id="logo-color-scheme-options"',
    'logo.step5-title'
);

// color palette label
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-3">Pilih Palet Warna (Opsional)</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-3" data-i18n="logo.color-palette-label">Pilih Palet Warna (Opsional)</label>',
    'logo.color-palette-label'
);

// color auto-pick note (\uD83C\uDFA8 = 🎨)
rep(
    'Kosongkan untuk AI pilih otomatis berdasarkan brand</p>',
    'Kosongkan untuk AI pilih otomatis berdasarkan brand</p>',
    'logo.color-note-skip'
);
rep(
    '>Kosongkan untuk AI pilih otomatis berdasarkan brand</p>',
    ' data-i18n="logo.color-note">Kosongkan untuk AI pilih otomatis berdasarkan brand</p>',
    'logo.color-note'
);

// step6 h3 "Referensi (Opsional)" (anchor: logo-ref-upload-box)
rep(
    ', #EC4899);">6</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800">Referensi (Opsional)</h3>\r\n                                    </div>\r\n\r\n                                    <label for="logo-ref-input" id="logo-ref-upload-box"',
    ', #EC4899);">6</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800" data-i18n="logo.step6-title">Referensi (Opsional)</h3>\r\n                                    </div>\r\n\r\n                                    <label for="logo-ref-input" id="logo-ref-upload-box"',
    'logo.step6-title'
);

// ref upload p + subtext (both in one rep)
rep(
    '<p class="text-sm text-gray-600 font-semibold">Upload referensi logo/inspirasi</p>\r\n                                            <p class="text-xs text-gray-500 mt-1">Logo yang Anda suka untuk referensi style</p>',
    '<p class="text-sm text-gray-600 font-semibold" data-i18n="logo.ref-upload-p">Upload referensi logo/inspirasi</p>\r\n                                            <p class="text-xs text-gray-500 mt-1" data-i18n="logo.ref-upload-note">Logo yang Anda suka untuk referensi style</p>',
    'logo.ref-upload-p+note'
);

// results-placeholder h3
rep(
    '<h3 class="text-2xl font-bold text-gray-800 mb-2">Logo Profesional Anda</h3>',
    '<h3 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="logo.placeholder-title">Logo Profesional Anda</h3>',
    'logo.placeholder-title'
);

// results-placeholder p
rep(
    'AI akan generate 6 variasi logo unik berdasarkan preferensi Anda. Setiap logo dapat di-preview dalam berbagai mockup!',
    '<span data-i18n="logo.placeholder-desc">AI akan generate 6 variasi logo unik berdasarkan preferensi Anda. Setiap logo dapat di-preview dalam berbagai mockup!</span>',
    'logo.placeholder-desc'
);

// download-all span (anchor: id="logo-download-all-btn")
rep(
    'id="logo-download-all-btn" class="hidden logo-action-btn text-sm">\r\n                                        <i class="fas fa-download mr-2"></i>\r\n                                        <span>Download Semua</span>',
    'id="logo-download-all-btn" class="hidden logo-action-btn text-sm">\r\n                                        <i class="fas fa-download mr-2"></i>\r\n                                        <span data-i18n="logo.download-all">Download Semua</span>',
    'logo.download-all'
);

// ==================== DICT EN ====================
rep(
    "'cover-photo.tagline-tip':'\uD83D\uDCBC Profession or short description',\r\n            },",
    "'cover-photo.tagline-tip':'\uD83D\uDCBC Profession or short description',\r\n" +
    "            'photo-restoration.title':'Pro Photo Restoration Generator',\r\n" +
    "            'photo-restoration.desc':'Repair and restore old, damaged, or blurry photos to clear and high-quality with AI!',\r\n" +
    "            'photo-restoration.upload-title':'Upload Photo',\r\n" +
    "            'photo-restoration.upload-p':'Upload photo to restore',\r\n" +
    "            'photo-restoration.mode-note':'Choose restoration type based on photo condition',\r\n" +
    "            'photo-restoration.intensity-note':'Restoration intensity to apply',\r\n" +
    "            'photo-restoration.ratio-note':'Keep original or crop to specific ratio',\r\n" +
    "            'photo-restoration.placeholder-p':'Upload old or damaged photos, choose restoration mode, and let AI restore it to like-new condition!',\r\n" +
    "            'photo-restoration.tip-quality':'Upload photos with the highest resolution possible for better restoration results',\r\n" +
    "            'photo-restoration.tip-mode':'Choose the restoration mode that matches the photo condition for optimal results',\r\n" +
    "            'photo-restoration.tip-compare':'Compare both results to choose the one that best suits your needs',\r\n" +
    "            'object-remover.title':'Object Remover',\r\n" +
    "            'object-remover.desc':'Automatically or manually remove unwanted objects from your photos with a professional brush tool',\r\n" +
    "            'object-remover.step1-title':'Upload Photo',\r\n" +
    "            'object-remover.upload-drag':'Click or Drag & Drop Photo',\r\n" +
    "            'object-remover.step2-title':'Choose Removal Mode',\r\n" +
    "            'object-remover.mode-auto-title':'Automatic (AI)',\r\n" +
    "            'object-remover.mode-auto-desc':'AI detects & removes disturbing objects',\r\n" +
    "            'object-remover.mode-manual-desc':'Select area with brush',\r\n" +
    "            'object-remover.mode-watermark-title':'Remove Watermark',\r\n" +
    "            'object-remover.mode-watermark-desc':'Remove text, logo & watermark',\r\n" +
    "            'object-remover.step3-manual-title':'Mark Area to Remove',\r\n" +
    "            'object-remover.brush-tip':'Brush over the area to remove. Marked areas will appear red transparent.',\r\n" +
    "            'object-remover.step3-auto-title':'Auto Removal Options',\r\n" +
    "            'object-remover.step3-watermark-title':'Watermark Removal Options',\r\n" +
    "            'object-remover.step4-title':'Number of Result Variations',\r\n" +
    "            'object-remover.variation-2':'2 Variations',\r\n" +
    "            'object-remover.variation-3':'3 Variations',\r\n" +
    "            'object-remover.variation-4':'4 Variations',\r\n" +
    "            'object-remover.gen-btn':'Remove Object Now',\r\n" +
    "            'object-remover.results-title':'Removal Results',\r\n" +
    "            'object-remover.download-all':'Download All',\r\n" +
    "            'logo.desc':'Create professional logos for your brand with AI. Get 6 unique design variations in various styles with mockup preview.',\r\n" +
    "            'logo.step1-title':'Brand Information',\r\n" +
    "            'logo.brand-label':'Brand/Company Name *',\r\n" +
    "            'logo.brand-note':'Name that will appear in the logo',\r\n" +
    "            'logo.tagline-label':'Tagline (Optional)',\r\n" +
    "            'logo.tagline-note':'Short slogan for your brand',\r\n" +
    "            'logo.desc-bisnis-label':'Business Description *',\r\n" +
    "            'logo.desc-bisnis-placeholder':'Describe what your business does, values, and target audience...',\r\n" +
    "            'logo.desc-bisnis-note':'Help AI understand your brand',\r\n" +
    "            'logo.step2-title':'Industry',\r\n" +
    "            'logo.step3-title':'Logo Type',\r\n" +
    "            'logo.type-combination':'Combination',\r\n" +
    "            'logo.style-tip':'\u2728 Choose 1-3 styles that represent your brand',\r\n" +
    "            'logo.step5-title':'Color Scheme',\r\n" +
    "            'logo.color-palette-label':'Choose Color Palette (Optional)',\r\n" +
    "            'logo.color-note':'Leave empty for AI to auto-select based on your brand',\r\n" +
    "            'logo.step6-title':'Reference (Optional)',\r\n" +
    "            'logo.ref-upload-p':'Upload logo reference/inspiration',\r\n" +
    "            'logo.ref-upload-note':'A logo you like for style reference',\r\n" +
    "            'logo.placeholder-title':'Your Professional Logo',\r\n" +
    "            'logo.placeholder-desc':'AI will generate 6 unique logo variations based on your preferences. Each logo can be previewed in various mockups!',\r\n" +
    "            'logo.download-all':'Download All',\r\n" +
    "            },",
    'dict.en'
);

// ==================== DICT ID ====================
rep(
    "'cover-photo.tagline-tip':'\uD83D\uDCBC Profesi atau deskripsi singkat',\r\n            }",
    "'cover-photo.tagline-tip':'\uD83D\uDCBC Profesi atau deskripsi singkat',\r\n" +
    "            'photo-restoration.title':'Generator Restorasi Foto Pro',\r\n" +
    "            'photo-restoration.desc':'Perbaiki dan restore foto lama, rusak, atau blur menjadi jernih dan berkualitas tinggi dengan AI!',\r\n" +
    "            'photo-restoration.upload-title':'Upload Foto',\r\n" +
    "            'photo-restoration.upload-p':'Upload foto yang ingin direstorasi',\r\n" +
    "            'photo-restoration.mode-note':'Pilih jenis restorasi sesuai kondisi foto',\r\n" +
    "            'photo-restoration.intensity-note':'Intensitas restorasi yang akan diterapkan',\r\n" +
    "            'photo-restoration.ratio-note':'Tetap original atau crop ke ratio tertentu',\r\n" +
    "            'photo-restoration.placeholder-p':'Upload foto lama atau rusak, pilih mode restorasi, dan biarkan AI memperbaikinya menjadi seperti baru!',\r\n" +
    "            'photo-restoration.tip-quality':'Upload foto dengan resolusi setinggi mungkin untuk hasil restorasi yang lebih baik',\r\n" +
    "            'photo-restoration.tip-mode':'Pilih restoration mode yang sesuai dengan kondisi foto untuk hasil optimal',\r\n" +
    "            'photo-restoration.tip-compare':'Bandingkan kedua hasil untuk memilih yang paling sesuai dengan kebutuhan Anda',\r\n" +
    "            'object-remover.title':'Hapus Object',\r\n" +
    "            'object-remover.desc':'Hilangkan objek yang tidak diinginkan dari foto Anda secara otomatis atau manual dengan brush tool profesional',\r\n" +
    "            'object-remover.step1-title':'Upload Foto',\r\n" +
    "            'object-remover.upload-drag':'Klik atau Drag & Drop Foto',\r\n" +
    "            'object-remover.step2-title':'Pilih Mode Penghapusan',\r\n" +
    "            'object-remover.mode-auto-title':'Otomatis (AI)',\r\n" +
    "            'object-remover.mode-auto-desc':'AI deteksi & hapus objek mengganggu',\r\n" +
    "            'object-remover.mode-manual-desc':'Pilih area dengan kuas',\r\n" +
    "            'object-remover.mode-watermark-title':'Hapus Watermark',\r\n" +
    "            'object-remover.mode-watermark-desc':'Hapus teks, logo & watermark',\r\n" +
    "            'object-remover.step3-manual-title':'Tandai Area yang Akan Dihapus',\r\n" +
    "            'object-remover.brush-tip':'Sapukan kuas pada area yang ingin dihapus. Area yang ditandai akan berwarna merah transparan.',\r\n" +
    "            'object-remover.step3-auto-title':'Opsi Penghapusan Otomatis',\r\n" +
    "            'object-remover.step3-watermark-title':'Opsi Penghapusan Watermark',\r\n" +
    "            'object-remover.step4-title':'Jumlah Variasi Hasil',\r\n" +
    "            'object-remover.variation-2':'2 Variasi',\r\n" +
    "            'object-remover.variation-3':'3 Variasi',\r\n" +
    "            'object-remover.variation-4':'4 Variasi',\r\n" +
    "            'object-remover.gen-btn':'Hapus Object Sekarang',\r\n" +
    "            'object-remover.results-title':'Hasil Penghapusan',\r\n" +
    "            'object-remover.download-all':'Download Semua',\r\n" +
    "            'logo.desc':'Buat logo profesional untuk brand Anda dengan AI. Dapatkan 6 variasi desain unik dalam berbagai style dan mockup preview.',\r\n" +
    "            'logo.step1-title':'Informasi Brand',\r\n" +
    "            'logo.brand-label':'Nama Brand/Perusahaan *',\r\n" +
    "            'logo.brand-note':'Nama yang akan muncul di logo',\r\n" +
    "            'logo.tagline-label':'Tagline (Opsional)',\r\n" +
    "            'logo.tagline-note':'Slogan pendek untuk brand Anda',\r\n" +
    "            'logo.desc-bisnis-label':'Deskripsi Bisnis *',\r\n" +
    "            'logo.desc-bisnis-placeholder':'Jelaskan apa yang dilakukan bisnis Anda, nilai-nilai, dan target audience...',\r\n" +
    "            'logo.desc-bisnis-note':'Bantu AI memahami brand Anda',\r\n" +
    "            'logo.step2-title':'Industri',\r\n" +
    "            'logo.step3-title':'Tipe Logo',\r\n" +
    "            'logo.type-combination':'Kombinasi',\r\n" +
    "            'logo.style-tip':'\u2728 Pilih 1-3 style yang menggambarkan brand Anda',\r\n" +
    "            'logo.step5-title':'Skema Warna',\r\n" +
    "            'logo.color-palette-label':'Pilih Palet Warna (Opsional)',\r\n" +
    "            'logo.color-note':'Kosongkan untuk AI pilih otomatis berdasarkan brand',\r\n" +
    "            'logo.step6-title':'Referensi (Opsional)',\r\n" +
    "            'logo.ref-upload-p':'Upload referensi logo/inspirasi',\r\n" +
    "            'logo.ref-upload-note':'Logo yang Anda suka untuk referensi style',\r\n" +
    "            'logo.placeholder-title':'Logo Profesional Anda',\r\n" +
    "            'logo.placeholder-desc':'AI akan generate 6 variasi logo unik berdasarkan preferensi Anda. Setiap logo dapat di-preview dalam berbagai mockup!',\r\n" +
    "            'logo.download-all':'Download Semua',\r\n" +
    "            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
