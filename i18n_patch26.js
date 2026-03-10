// i18n_patch26.js — Change Background (bg-remover), Photo Extender
// Face Swap is iframe-only with brand names — no translatable content.
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

function repR(pattern, replacement, label) {
    if (!pattern.test(html)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(pattern, replacement);
    console.log('OK:  ', label); ok++;
}

// ==================== CHANGE BACKGROUND (bg-remover) ====================

// bgremover.desc
rep(
    '<p class="text-lg text-gray-600">\r\n                        Ubah background foto secara otomatis dengan AI! Pilih background baru atau biarkan transparan untuk hasil profesional.\r\n                    </p>',
    '<p class="text-lg text-gray-600" data-i18n="bgremover.desc">\r\n                        Ubah background foto secara otomatis dengan AI! Pilih background baru atau biarkan transparan untuk hasil profesional.\r\n                    </p>',
    'bgremover.desc'
);

// bgremover.step1-title — anchor via bgremover-upload-box label after
rep(
    '<h3 class="text-base font-semibold text-gray-800">Unggah Foto</h3>\r\n                                    </div>\r\n                                    <label for="bgremover-input" id="bgremover-upload-box"',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="bgremover.step1-title">Unggah Foto</h3>\r\n                                    </div>\r\n                                    <label for="bgremover-input" id="bgremover-upload-box"',
    'bgremover.step1-title'
);

// bgremover.upload-drag — anchor via bgremover-placeholder
rep(
    'id="bgremover-placeholder" class="text-center text-gray-500 p-4">\r\n                                            <i class="fas fa-image transition-transform duration-300" style="font-size: 3.5rem; color: #10b981;"></i>\r\n                                            <p class="mt-3 text-sm md:text-base font-semibold">\uD83D\uDCF8 Klik atau seret foto</p>',
    'id="bgremover-placeholder" class="text-center text-gray-500 p-4">\r\n                                            <i class="fas fa-image transition-transform duration-300" style="font-size: 3.5rem; color: #10b981;"></i>\r\n                                            <p class="mt-3 text-sm md:text-base font-semibold" data-i18n="bgremover.upload-drag">\uD83D\uDCF8 Klik atau seret foto</p>',
    'bgremover.upload-drag'
);

// bgremover.step2-title — anchor via bgremover-bg-options
rep(
    '<h3 class="text-base font-semibold text-gray-800">Pilih Background Baru</h3>\r\n                                    </div>\r\n                                    <div id="bgremover-bg-options"',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="bgremover.step2-title">Pilih Background Baru</h3>\r\n                                    </div>\r\n                                    <div id="bgremover-bg-options"',
    'bgremover.step2-title'
);

// bgremover.bg-transparent
rep(
    '<i class="fas fa-layer-group mr-1"></i>Transparan',
    '<i class="fas fa-layer-group mr-1"></i><span data-i18n="bgremover.bg-transparent">Transparan</span>',
    'bgremover.bg-transparent'
);

// bgremover.bg-white
rep(
    'data-value="white" class="option-btn-bgremover">\r\n                                            <i class="fas fa-square mr-1"></i>Putih',
    'data-value="white" class="option-btn-bgremover">\r\n                                            <i class="fas fa-square mr-1"></i><span data-i18n="bgremover.bg-white">Putih</span>',
    'bgremover.bg-white'
);

// bgremover.bg-black
rep(
    '<i class="fas fa-square mr-1" style="color: #000;"></i>Hitam',
    '<i class="fas fa-square mr-1" style="color: #000;"></i><span data-i18n="bgremover.bg-black">Hitam</span>',
    'bgremover.bg-black'
);

// bgremover.bg-blue
rep(
    'data-value="gradient-blue" class="option-btn-bgremover">\r\n                                            <i class="fas fa-fill-drip mr-1"></i>Biru',
    'data-value="gradient-blue" class="option-btn-bgremover">\r\n                                            <i class="fas fa-fill-drip mr-1"></i><span data-i18n="bgremover.bg-blue">Biru</span>',
    'bgremover.bg-blue'
);

// bgremover.bg-purple
rep(
    'data-value="gradient-purple" class="option-btn-bgremover">\r\n                                            <i class="fas fa-fill-drip mr-1"></i>Ungu',
    'data-value="gradient-purple" class="option-btn-bgremover">\r\n                                            <i class="fas fa-fill-drip mr-1"></i><span data-i18n="bgremover.bg-purple">Ungu</span>',
    'bgremover.bg-purple'
);

// bgremover.bg-custom
rep(
    '<i class="fas fa-edit mr-1"></i>Kustom',
    '<i class="fas fa-edit mr-1"></i><span data-i18n="bgremover.bg-custom">Kustom</span>',
    'bgremover.bg-custom'
);

// bgremover.custom-label
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">\u2728 Deskripsikan Background:</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="bgremover.custom-label">\u2728 Deskripsikan Background:</label>',
    'bgremover.custom-label'
);

// bgremover.custom-placeholder
rep(
    'id="bgremover-custom-input" class="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all" placeholder="Contoh: studio putih profesional, gradient pink soft, ruangan modern..."',
    'id="bgremover-custom-input" class="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all" data-i18n-placeholder="bgremover.custom-placeholder" placeholder="Contoh: studio putih profesional, gradient pink soft, ruangan modern..."',
    'bgremover.custom-placeholder'
);

// bgremover.custom-tip
rep(
    '<p class="text-xs text-gray-500 mt-2">\uD83D\uDCA1 Deskripsikan background yang Anda inginkan</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="bgremover.custom-tip">\uD83D\uDCA1 Deskripsikan background yang Anda inginkan</p>',
    'bgremover.custom-tip'
);

// bgremover.step3-title — anchor via bgremover-ratio-options
rep(
    '<h3 class="text-base font-semibold text-gray-800">Aspek Rasio</h3>\r\n                                    </div>\r\n                                    <div id="bgremover-ratio-options"',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="bgremover.step3-title">Aspek Rasio</h3>\r\n                                    </div>\r\n                                    <div id="bgremover-ratio-options"',
    'bgremover.step3-title'
);

// bgremover.step4-title — anchor via bgremover-count-options
rep(
    '<h3 class="text-base font-semibold text-gray-800">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="bgremover-count-options"',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="bgremover.step4-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="bgremover-count-options"',
    'bgremover.step4-title'
);

// bgremover count buttons
rep(
    'data-value="3" class="option-btn-bgremover">3 Variasi</button>',
    'data-value="3" class="option-btn-bgremover"><span data-i18n="bgremover.count-3">3 Variasi</span></button>',
    'bgremover.count-3'
);
rep(
    'data-value="4" class="option-btn-bgremover selected">4 Variasi</button>',
    'data-value="4" class="option-btn-bgremover selected"><span data-i18n="bgremover.count-4">4 Variasi</span></button>',
    'bgremover.count-4'
);
rep(
    'data-value="6" class="option-btn-bgremover">6 Variasi</button>',
    'data-value="6" class="option-btn-bgremover"><span data-i18n="bgremover.count-6">6 Variasi</span></button>',
    'bgremover.count-6'
);

// bgremover.gen-btn — anchor via unique emerald gradient in generate button
rep(
    'style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);" disabled>\r\n                                    <i class="fas fa-wand-magic-sparkles mr-2"></i>\r\n                                    <span>Ubah Background</span>',
    'style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);" disabled>\r\n                                    <i class="fas fa-wand-magic-sparkles mr-2"></i>\r\n                                    <span data-i18n="bgremover.gen-btn">Ubah Background</span>',
    'bgremover.gen-btn'
);

// bgremover.gen-note
rep(
    '<div class="text-center text-xs text-gray-500 mt-2">\r\n                                    \u26A1 Proses memerlukan waktu 15-30 detik per variasi\r\n                                </div>',
    '<div class="text-center text-xs text-gray-500 mt-2" data-i18n="bgremover.gen-note">\r\n                                    \u26A1 Proses memerlukan waktu 15-30 detik per variasi\r\n                                </div>',
    'bgremover.gen-note'
);

// bgremover.placeholder-title
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Ubah Background</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="bgremover.placeholder-title">Hasil Ubah Background</h3>',
    'bgremover.placeholder-title'
);

// bgremover.placeholder-desc
rep(
    '<p class="mt-1 text-sm">Foto dengan background baru akan muncul di sini</p>',
    '<p class="mt-1 text-sm" data-i18n="bgremover.placeholder-desc">Foto dengan background baru akan muncul di sini</p>',
    'bgremover.placeholder-desc'
);

// bgremover.results-title — anchor via bgremover-results-container
repR(
    /(id="bgremover-results-container"[\s\S]*?)(<h3 class="font-semibold text-lg text-slate-600">)/,
    '$1<h3 class="font-semibold text-lg text-slate-600" data-i18n="bgremover.results-title">',
    'bgremover.results-title'
);

// bgremover.download-all — add data-i18n to existing span inside bgremover-download-all-btn
repR(
    /(id="bgremover-download-all-btn"[\s\S]*?)<span>(Download Semua)<\/span>/,
    '$1<span data-i18n="bgremover.download-all">$2</span>',
    'bgremover.download-all'
);

// ==================== PHOTO EXTENDER ====================

// extender.desc
rep(
    '<p class="text-lg text-gray-600">\r\n                        Perluas foto keluar dari frame aslinya! Extend background, ubah aspect ratio, atau lengkapi foto yang terpotong dengan AI.\r\n                    </p>',
    '<p class="text-lg text-gray-600" data-i18n="extender.desc">\r\n                        Perluas foto keluar dari frame aslinya! Extend background, ubah aspect ratio, atau lengkapi foto yang terpotong dengan AI.\r\n                    </p>',
    'extender.desc'
);

// extender.step1-title — anchor via extender-upload-box
rep(
    '<h3 class="text-base font-semibold text-gray-800">Unggah Foto</h3>\r\n                                    </div>\r\n                                    <label for="extender-input" id="extender-upload-box"',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="extender.step1-title">Unggah Foto</h3>\r\n                                    </div>\r\n                                    <label for="extender-input" id="extender-upload-box"',
    'extender.step1-title'
);

// extender.upload-drag — anchor via extender-placeholder
rep(
    'id="extender-placeholder" class="text-center text-gray-500 p-4">\r\n                                            <i class="fas fa-image transition-transform duration-300" style="font-size: 3.5rem; color: #0ea5e9;"></i>\r\n                                            <p class="mt-3 text-sm md:text-base font-semibold">\uD83D\uDCF8 Klik atau seret foto</p>',
    'id="extender-placeholder" class="text-center text-gray-500 p-4">\r\n                                            <i class="fas fa-image transition-transform duration-300" style="font-size: 3.5rem; color: #0ea5e9;"></i>\r\n                                            <p class="mt-3 text-sm md:text-base font-semibold" data-i18n="extender.upload-drag">\uD83D\uDCF8 Klik atau seret foto</p>',
    'extender.upload-drag'
);

// extender.remove-preview-btn — reuse unboxing.remove-photo key
rep(
    'id="extender-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                            <i class="fas fa-times mr-1"></i> Hapus Foto',
    'id="extender-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                            <i class="fas fa-times mr-1"></i> <span data-i18n="unboxing.remove-photo">Hapus Foto</span>',
    'extender.remove-preview-btn'
);

// extender.step2-title — anchor via extender-direction-options
rep(
    '<h3 class="text-base font-semibold text-gray-800">Arah Perluasan</h3>\r\n                                    </div>\r\n                                    <div id="extender-direction-options"',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="extender.step2-title">Arah Perluasan</h3>\r\n                                    </div>\r\n                                    <div id="extender-direction-options"',
    'extender.step2-title'
);

// extender direction buttons
rep(
    'data-value="all" class="option-btn-extender selected">\r\n                                            <i class="fas fa-expand mr-1"></i>Semua',
    'data-value="all" class="option-btn-extender selected">\r\n                                            <i class="fas fa-expand mr-1"></i><span data-i18n="extender.dir-all">Semua</span>',
    'extender.dir-all'
);
rep(
    '<i class="fas fa-arrows-up-down mr-1"></i>Vertikal',
    '<i class="fas fa-arrows-up-down mr-1"></i><span data-i18n="extender.dir-vertical">Vertikal</span>',
    'extender.dir-vertical'
);
rep(
    '<i class="fas fa-arrow-left mr-1"></i>Kiri',
    '<i class="fas fa-arrow-left mr-1"></i><span data-i18n="extender.dir-left">Kiri</span>',
    'extender.dir-left'
);
rep(
    '<i class="fas fa-arrow-right mr-1"></i>Kanan',
    '<i class="fas fa-arrow-right mr-1"></i><span data-i18n="extender.dir-right">Kanan</span>',
    'extender.dir-right'
);
rep(
    '<i class="fas fa-arrow-up mr-1"></i>Atas',
    '<i class="fas fa-arrow-up mr-1"></i><span data-i18n="extender.dir-top">Atas</span>',
    'extender.dir-top'
);
rep(
    '<i class="fas fa-arrow-down mr-1"></i>Bawah',
    '<i class="fas fa-arrow-down mr-1"></i><span data-i18n="extender.dir-bottom">Bawah</span>',
    'extender.dir-bottom'
);

// extender.step3-title — anchor via extender-ratio-options
rep(
    '<h3 class="text-base font-semibold text-gray-800">Aspek Rasio Target</h3>\r\n                                    </div>\r\n                                    <div id="extender-ratio-options"',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="extender.step3-title">Aspek Rasio Target</h3>\r\n                                    </div>\r\n                                    <div id="extender-ratio-options"',
    'extender.step3-title'
);

// extender.step4-title — anchor via extender-count-options
rep(
    '<h3 class="text-base font-semibold text-gray-800">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="extender-count-options"',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="extender.step4-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="extender-count-options"',
    'extender.step4-title'
);

// extender count buttons
rep(
    'data-value="3" class="option-btn-extender">3 Variasi</button>',
    'data-value="3" class="option-btn-extender"><span data-i18n="extender.count-3">3 Variasi</span></button>',
    'extender.count-3'
);
rep(
    'data-value="4" class="option-btn-extender selected">4 Variasi</button>',
    'data-value="4" class="option-btn-extender selected"><span data-i18n="extender.count-4">4 Variasi</span></button>',
    'extender.count-4'
);
rep(
    'data-value="6" class="option-btn-extender">6 Variasi</button>',
    'data-value="6" class="option-btn-extender"><span data-i18n="extender.count-6">6 Variasi</span></button>',
    'extender.count-6'
);

// extender.gen-btn — anchor via sky gradient in generate button
rep(
    'style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);" disabled>\r\n                                    <i class="fas fa-wand-magic-sparkles mr-2"></i>\r\n                                    <span>Perluas Foto</span>',
    'style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);" disabled>\r\n                                    <i class="fas fa-wand-magic-sparkles mr-2"></i>\r\n                                    <span data-i18n="extender.gen-btn">Perluas Foto</span>',
    'extender.gen-btn'
);

// extender.gen-note
rep(
    '<div class="text-center text-xs text-gray-500 mt-2">\r\n                                    \u26A1 Proses memerlukan waktu 20-40 detik per variasi\r\n                                </div>',
    '<div class="text-center text-xs text-gray-500 mt-2" data-i18n="extender.gen-note">\r\n                                    \u26A1 Proses memerlukan waktu 20-40 detik per variasi\r\n                                </div>',
    'extender.gen-note'
);

// extender.placeholder-title
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Hasil Perluas Foto</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="extender.placeholder-title">Hasil Perluas Foto</h3>',
    'extender.placeholder-title'
);

// extender.placeholder-desc
rep(
    '<p class="mt-1 text-sm">Foto yang sudah diperluas akan muncul di sini</p>',
    '<p class="mt-1 text-sm" data-i18n="extender.placeholder-desc">Foto yang sudah diperluas akan muncul di sini</p>',
    'extender.placeholder-desc'
);

// extender.results-title — anchor via extender-results-container
repR(
    /(id="extender-results-container"[\s\S]*?)(<h3 class="font-semibold text-lg text-slate-600">)/,
    '$1<h3 class="font-semibold text-lg text-slate-600" data-i18n="extender.results-title">',
    'extender.results-title'
);

// extender.download-all — add data-i18n to existing span inside extender-download-all-btn
repR(
    /(id="extender-download-all-btn"[\s\S]*?)<span>(Download Semua)<\/span>/,
    '$1<span data-i18n="extender.download-all">$2</span>',
    'extender.download-all'
);

// ==================== DICT ====================

// EN dict — insert after expression.download-all
rep(
    "'expression.download-all':'Download All',\r\n            },",
    "'expression.download-all':'Download All',\r\n" +
    "            'bgremover.desc':'Automatically change photo backgrounds with AI! Choose a new background or leave transparent for professional results.',\r\n" +
    "            'bgremover.step1-title':'Upload Photo',\r\n" +
    "            'bgremover.upload-drag':'\uD83D\uDCF8 Click or drag photo',\r\n" +
    "            'bgremover.step2-title':'Choose New Background',\r\n" +
    "            'bgremover.bg-transparent':'Transparent',\r\n" +
    "            'bgremover.bg-white':'White',\r\n" +
    "            'bgremover.bg-black':'Black',\r\n" +
    "            'bgremover.bg-blue':'Blue',\r\n" +
    "            'bgremover.bg-purple':'Purple',\r\n" +
    "            'bgremover.bg-custom':'Custom',\r\n" +
    "            'bgremover.custom-label':'\u2728 Describe Background:',\r\n" +
    "            'bgremover.custom-placeholder':'Example: white professional studio, soft pink gradient, modern room...',\r\n" +
    "            'bgremover.custom-tip':'\uD83D\uDCA1 Describe the background you want',\r\n" +
    "            'bgremover.step3-title':'Aspect Ratio',\r\n" +
    "            'bgremover.step4-title':'Number of Variations',\r\n" +
    "            'bgremover.count-3':'3 Variations',\r\n" +
    "            'bgremover.count-4':'4 Variations',\r\n" +
    "            'bgremover.count-6':'6 Variations',\r\n" +
    "            'bgremover.gen-btn':'Change Background',\r\n" +
    "            'bgremover.gen-note':'\u26A1 Process takes 15-30 seconds per variation',\r\n" +
    "            'bgremover.placeholder-title':'Change Background Results',\r\n" +
    "            'bgremover.placeholder-desc':'Photos with new background will appear here',\r\n" +
    "            'bgremover.results-title':'\u2728 Background Removal Results \u2728',\r\n" +
    "            'bgremover.download-all':'Download All',\r\n" +
    "            'extender.desc':'Extend photos beyond their original frame! Extend background, change aspect ratio, or complete cropped photos with AI.',\r\n" +
    "            'extender.step1-title':'Upload Photo',\r\n" +
    "            'extender.upload-drag':'\uD83D\uDCF8 Click or drag photo',\r\n" +
    "            'extender.step2-title':'Extension Direction',\r\n" +
    "            'extender.dir-all':'All',\r\n" +
    "            'extender.dir-vertical':'Vertical',\r\n" +
    "            'extender.dir-left':'Left',\r\n" +
    "            'extender.dir-right':'Right',\r\n" +
    "            'extender.dir-top':'Top',\r\n" +
    "            'extender.dir-bottom':'Bottom',\r\n" +
    "            'extender.step3-title':'Target Aspect Ratio',\r\n" +
    "            'extender.step4-title':'Number of Variations',\r\n" +
    "            'extender.count-3':'3 Variations',\r\n" +
    "            'extender.count-4':'4 Variations',\r\n" +
    "            'extender.count-6':'6 Variations',\r\n" +
    "            'extender.gen-btn':'Extend Photo',\r\n" +
    "            'extender.gen-note':'\u26A1 Process takes 20-40 seconds per variation',\r\n" +
    "            'extender.placeholder-title':'Photo Extension Results',\r\n" +
    "            'extender.placeholder-desc':'Extended photos will appear here',\r\n" +
    "            'extender.results-title':'\u2728 Photo Extension Results \u2728',\r\n" +
    "            'extender.download-all':'Download All',\r\n" +
    "            },",
    'dict.en'
);

// ID dict — insert after expression.download-all
rep(
    "'expression.download-all':'Download Semua',\r\n            }",
    "'expression.download-all':'Download Semua',\r\n" +
    "            'bgremover.desc':'Ubah background foto secara otomatis dengan AI! Pilih background baru atau biarkan transparan untuk hasil profesional.',\r\n" +
    "            'bgremover.step1-title':'Unggah Foto',\r\n" +
    "            'bgremover.upload-drag':'\uD83D\uDCF8 Klik atau seret foto',\r\n" +
    "            'bgremover.step2-title':'Pilih Background Baru',\r\n" +
    "            'bgremover.bg-transparent':'Transparan',\r\n" +
    "            'bgremover.bg-white':'Putih',\r\n" +
    "            'bgremover.bg-black':'Hitam',\r\n" +
    "            'bgremover.bg-blue':'Biru',\r\n" +
    "            'bgremover.bg-purple':'Ungu',\r\n" +
    "            'bgremover.bg-custom':'Kustom',\r\n" +
    "            'bgremover.custom-label':'\u2728 Deskripsikan Background:',\r\n" +
    "            'bgremover.custom-placeholder':'Contoh: studio putih profesional, gradient pink soft, ruangan modern...',\r\n" +
    "            'bgremover.custom-tip':'\uD83D\uDCA1 Deskripsikan background yang Anda inginkan',\r\n" +
    "            'bgremover.step3-title':'Aspek Rasio',\r\n" +
    "            'bgremover.step4-title':'Jumlah Variasi',\r\n" +
    "            'bgremover.count-3':'3 Variasi',\r\n" +
    "            'bgremover.count-4':'4 Variasi',\r\n" +
    "            'bgremover.count-6':'6 Variasi',\r\n" +
    "            'bgremover.gen-btn':'Ubah Background',\r\n" +
    "            'bgremover.gen-note':'\u26A1 Proses memerlukan waktu 15-30 detik per variasi',\r\n" +
    "            'bgremover.placeholder-title':'Hasil Ubah Background',\r\n" +
    "            'bgremover.placeholder-desc':'Foto dengan background baru akan muncul di sini',\r\n" +
    "            'bgremover.results-title':'\u2728 Hasil Background Removal \u2728',\r\n" +
    "            'bgremover.download-all':'Download Semua',\r\n" +
    "            'extender.desc':'Perluas foto keluar dari frame aslinya! Extend background, ubah aspect ratio, atau lengkapi foto yang terpotong dengan AI.',\r\n" +
    "            'extender.step1-title':'Unggah Foto',\r\n" +
    "            'extender.upload-drag':'\uD83D\uDCF8 Klik atau seret foto',\r\n" +
    "            'extender.step2-title':'Arah Perluasan',\r\n" +
    "            'extender.dir-all':'Semua',\r\n" +
    "            'extender.dir-vertical':'Vertikal',\r\n" +
    "            'extender.dir-left':'Kiri',\r\n" +
    "            'extender.dir-right':'Kanan',\r\n" +
    "            'extender.dir-top':'Atas',\r\n" +
    "            'extender.dir-bottom':'Bawah',\r\n" +
    "            'extender.step3-title':'Aspek Rasio Target',\r\n" +
    "            'extender.step4-title':'Jumlah Variasi',\r\n" +
    "            'extender.count-3':'3 Variasi',\r\n" +
    "            'extender.count-4':'4 Variasi',\r\n" +
    "            'extender.count-6':'6 Variasi',\r\n" +
    "            'extender.gen-btn':'Perluas Foto',\r\n" +
    "            'extender.gen-note':'\u26A1 Proses memerlukan waktu 20-40 detik per variasi',\r\n" +
    "            'extender.placeholder-title':'Hasil Perluas Foto',\r\n" +
    "            'extender.placeholder-desc':'Foto yang sudah diperluas akan muncul di sini',\r\n" +
    "            'extender.results-title':'\u2728 Hasil Perluasan Foto \u2728',\r\n" +
    "            'extender.download-all':'Download Semua',\r\n" +
    "            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
