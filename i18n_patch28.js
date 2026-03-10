// i18n_patch28.js — Image to Prompt, Packaging Design, Photo Angle
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ==================== IMAGE ANALYZER ====================

// h2 "Pengaturan Analisis"
rep(
    '<h2 class="text-2xl font-bold mb-6 flex items-center gap-2" style="color: #0e7490;">\r\n                            <i class="fas fa-cog"></i>\r\n                            Pengaturan Analisis',
    '<h2 class="text-2xl font-bold mb-6 flex items-center gap-2" style="color: #0e7490;" data-i18n="image-analyzer.h2">\r\n                            <i class="fas fa-cog"></i>\r\n                            Pengaturan Analisis',
    'image-analyzer.h2'
);

// step1 h3 "Upload Gambar" (anchor: followed by label for="analyzer-image-upload")
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Gambar</h3>\r\n                            </div>\r\n                            <label for="analyzer-image-upload"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="image-analyzer.step1-title">Upload Gambar</h3>\r\n                            </div>\r\n                            <label for="analyzer-image-upload"',
    'image-analyzer.step1-title'
);

// upload span
rep(
    '                                    <span class="font-semibold" style="color: #0e7490;">Klik untuk upload gambar</span>',
    '                                    <span class="font-semibold" style="color: #0e7490;" data-i18n="image-analyzer.upload-span">Klik untuk upload gambar</span>',
    'image-analyzer.upload-span'
);

// remove-btn "Hapus Gambar"
rep(
    'id="analyzer-remove-image" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-all">\r\n                                    <i class="fas fa-times mr-1"></i> Hapus Gambar',
    'id="analyzer-remove-image" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-all">\r\n                                    <i class="fas fa-times mr-1"></i> <span data-i18n="image-analyzer.remove-btn">Hapus Gambar</span>',
    'image-analyzer.remove-btn'
);

// step2 h3 "Level Detail Analisis"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Level Detail Analisis</h3>\r\n                            </div>\r\n                            <div id="analyzer-detail-level"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="image-analyzer.step2-title">Level Detail Analisis</h3>\r\n                            </div>\r\n                            <div id="analyzer-detail-level"',
    'image-analyzer.step2-title'
);

// step3 h3 "Format Prompt"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Format Prompt</h3>\r\n                            </div>\r\n                            <div id="analyzer-prompt-format"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="image-analyzer.step3-title">Format Prompt</h3>\r\n                            </div>\r\n                            <div id="analyzer-prompt-format"',
    'image-analyzer.step3-title'
);

// step4 h3 "Bahasa Output"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Bahasa Output</h3>\r\n                            </div>\r\n                            <div id="analyzer-language"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="image-analyzer.step4-title">Bahasa Output</h3>\r\n                            </div>\r\n                            <div id="analyzer-language"',
    'image-analyzer.step4-title'
);

// lang-id "Bahasa Indonesia" span
rep(
    '<button type="button" data-value="id" class="option-btn-analyzer selected">\r\n                                    <i class="fas fa-flag"></i>\r\n                                    <span class="text-sm">Bahasa Indonesia</span>',
    '<button type="button" data-value="id" class="option-btn-analyzer selected">\r\n                                    <i class="fas fa-flag"></i>\r\n                                    <span class="text-sm" data-i18n="image-analyzer.lang-id">Bahasa Indonesia</span>',
    'image-analyzer.lang-id'
);

// step5 h3 "Format Output"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Format Output</h3>\r\n                            </div>\r\n                            <div id="analyzer-output-format"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="image-analyzer.step5-title">Format Output</h3>\r\n                            </div>\r\n                            <div id="analyzer-output-format"',
    'image-analyzer.step5-title'
);

// json-tip paragraph
rep(
    '                                JSON format cocok untuk developer/API integration\r\n                            </p>',
    '                                <span data-i18n="image-analyzer.json-tip">JSON format cocok untuk developer/API integration</span>\r\n                            </p>',
    'image-analyzer.json-tip'
);

// analyze-btn "Analisis Gambar"
rep(
    '                            <i class="fas fa-brain mr-2"></i>\r\n                            Analisis Gambar\r\n                        </button>',
    '                            <i class="fas fa-brain mr-2"></i>\r\n                            <span data-i18n="image-analyzer.analyze-btn">Analisis Gambar</span>\r\n                        </button>',
    'image-analyzer.analyze-btn'
);

// result-footer span
rep(
    '                                    <span>Gunakan prompt ini untuk membuat gambar serupa dengan AI image generator</span>',
    '                                    <span data-i18n="image-analyzer.result-footer">Gunakan prompt ini untuk membuat gambar serupa dengan AI image generator</span>',
    'image-analyzer.result-footer'
);

// empty-title h3
rep(
    '<h3 class="text-2xl font-bold mb-3" style="color: #0e7490;">Siap Menganalisis Gambar</h3>',
    '<h3 class="text-2xl font-bold mb-3" style="color: #0e7490;" data-i18n="image-analyzer.empty-title">Siap Menganalisis Gambar</h3>',
    'image-analyzer.empty-title'
);

// empty-desc paragraph
rep(
    '                                Upload gambar, pilih level detail dan format prompt, lalu klik Analisis untuk mendapatkan prompt AI profesional!\r\n                            </p>',
    '                                <span data-i18n="image-analyzer.empty-desc">Upload gambar, pilih level detail dan format prompt, lalu klik Analisis untuk mendapatkan prompt AI profesional!</span>\r\n                            </p>',
    'image-analyzer.empty-desc'
);

// empty feat spans (combine feat-detail + feat-format in one rep)
rep(
    '                                    <span>Detail Analisis</span>\r\n                                </div>\r\n                                <div class="flex items-center gap-2">\r\n                                    <i class="fas fa-check-circle" style="color: #06b6d4;"></i>\r\n                                    <span>6 Format Prompt</span>',
    '                                    <span data-i18n="image-analyzer.feat-detail">Detail Analisis</span>\r\n                                </div>\r\n                                <div class="flex items-center gap-2">\r\n                                    <i class="fas fa-check-circle" style="color: #06b6d4;"></i>\r\n                                    <span data-i18n="image-analyzer.feat-format">6 Format Prompt</span>',
    'image-analyzer.feat-detail+feat-format'
);

// empty feat "2 Bahasa"
rep(
    '                                    <span>2 Bahasa</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </main>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- TAB: PACKAGING DESIGN',
    '                                    <span data-i18n="image-analyzer.feat-lang">2 Bahasa</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </main>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- TAB: PACKAGING DESIGN',
    'image-analyzer.feat-lang'
);

// ==================== PACKAGING DESIGN ====================

// h2 "Pengaturan Desain"
rep(
    '<h2 class="text-2xl font-bold mb-6 flex items-center gap-2" style="color: #78350f;">\r\n                            <i class="fas fa-sliders-h"></i>\r\n                            Pengaturan Desain',
    '<h2 class="text-2xl font-bold mb-6 flex items-center gap-2" style="color: #78350f;" data-i18n="packaging.h2">\r\n                            <i class="fas fa-sliders-h"></i>\r\n                            Pengaturan Desain',
    'packaging.h2'
);

// upload span "Klik untuk upload"
rep(
    '                                    <span class="font-semibold" style="color: #78350f;">Klik untuk upload</span>',
    '                                    <span class="font-semibold" style="color: #78350f;" data-i18n="packaging.upload-span">Klik untuk upload</span>',
    'packaging.upload-span'
);

// remove-btn wrap with reused unboxing.remove-photo
rep(
    'id="packaging-remove-product" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-all">\r\n                                    <i class="fas fa-times mr-1"></i> Hapus Foto',
    'id="packaging-remove-product" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-all">\r\n                                    <i class="fas fa-times mr-1"></i> <span data-i18n="unboxing.remove-photo">Hapus Foto</span>',
    'packaging.remove-btn'
);

// step2 h3 "Jenis Kemasan"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jenis Kemasan</h3>\r\n                            </div>\r\n                            <div id="packaging-type-options"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="packaging.step2-title">Jenis Kemasan</h3>\r\n                            </div>\r\n                            <div id="packaging-type-options"',
    'packaging.step2-title'
);

// type-box span
rep(
    '<button type="button" data-value="box" class="option-btn-packaging selected">\r\n                                    <i class="fas fa-box"></i>\r\n                                    <span class="text-sm">Box/Kardus</span>',
    '<button type="button" data-value="box" class="option-btn-packaging selected">\r\n                                    <i class="fas fa-box"></i>\r\n                                    <span class="text-sm" data-i18n="packaging.type-box">Box/Kardus</span>',
    'packaging.type-box'
);

// type-pouch span
rep(
    '                                    <span class="text-sm">Pouch/Plastik</span>',
    '                                    <span class="text-sm" data-i18n="packaging.type-pouch">Pouch/Plastik</span>',
    'packaging.type-pouch'
);

// type-can span
rep(
    '                                    <span class="text-sm">Can/Kaleng</span>',
    '                                    <span class="text-sm" data-i18n="packaging.type-can">Can/Kaleng</span>',
    'packaging.type-can'
);

// step3 h3 "Style Desain"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Style Desain</h3>\r\n                            </div>\r\n                            <div id="packaging-style-options"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="packaging.step3-title">Style Desain</h3>\r\n                            </div>\r\n                            <div id="packaging-style-options"',
    'packaging.step3-title'
);

// brand-name placeholder
rep(
    'id="packaging-brand-name" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none transition-all" placeholder="Masukkan nama brand Anda"',
    'id="packaging-brand-name" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none transition-all" data-i18n-placeholder="packaging.brand-placeholder" placeholder="Masukkan nama brand Anda"',
    'packaging.brand-placeholder'
);

// color-label span
rep(
    'id="packaging-brand-color" class="w-20 h-12 rounded-lg border-2 border-gray-300 cursor-pointer" value="#92400e">\r\n                                <span class="text-sm text-gray-600">Pilih warna utama brand</span>',
    'id="packaging-brand-color" class="w-20 h-12 rounded-lg border-2 border-gray-300 cursor-pointer" value="#92400e">\r\n                                <span class="text-sm text-gray-600" data-i18n="packaging.color-label">Pilih warna utama brand</span>',
    'packaging.color-label'
);

// step6 h3 "Jumlah Variasi"
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi</h3>\r\n                            </div>\r\n                            <div id="packaging-count-options"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="packaging.step6-title">Jumlah Variasi</h3>\r\n                            </div>\r\n                            <div id="packaging-count-options"',
    'packaging.step6-title'
);

// count buttons (all three in one rep)
rep(
    '<button type="button" data-count="4" class="option-btn-packaging">\r\n                                    <span>4 Desain</span>\r\n                                </button>\r\n                                <button type="button" data-count="6" class="option-btn-packaging selected">\r\n                                    <span>6 Desain</span>\r\n                                </button>\r\n                                <button type="button" data-count="8" class="option-btn-packaging">\r\n                                    <span>8 Desain</span>\r\n                                </button>',
    '<button type="button" data-count="4" class="option-btn-packaging">\r\n                                    <span data-i18n="packaging.count-4">4 Desain</span>\r\n                                </button>\r\n                                <button type="button" data-count="6" class="option-btn-packaging selected">\r\n                                    <span data-i18n="packaging.count-6">6 Desain</span>\r\n                                </button>\r\n                                <button type="button" data-count="8" class="option-btn-packaging">\r\n                                    <span data-i18n="packaging.count-8">8 Desain</span>\r\n                                </button>',
    'packaging.count-4/6/8'
);

// gen-btn design-suffix
rep(
    '<i class="fas fa-magic mr-2"></i>\r\n                            Generate <span id="packaging-count-text">6</span> Desain Packaging\r\n                        </button>',
    '<i class="fas fa-magic mr-2"></i>\r\n                            Generate <span id="packaging-count-text">6</span> <span data-i18n="packaging.design-suffix">Desain Packaging</span>\r\n                        </button>',
    'packaging.gen-btn-suffix'
);

// results-count suffix
rep(
    '<span id="packaging-results-count">6</span> Desain Packaging\r\n                            </h3>',
    '<span id="packaging-results-count">6</span> <span data-i18n="packaging.design-suffix">Desain Packaging</span>\r\n                            </h3>',
    'packaging.results-suffix'
);

// download-all span
rep(
    '                                <span class="hidden sm:inline">Download Semua</span>\r\n                            </button>\r\n                        </div>\r\n\r\n                        <!-- Results Grid -->\r\n                        <div id="packaging-results-grid"',
    '                                <span class="hidden sm:inline" data-i18n="packaging.download-all">Download Semua</span>\r\n                            </button>\r\n                        </div>\r\n\r\n                        <!-- Results Grid -->\r\n                        <div id="packaging-results-grid"',
    'packaging.download-all'
);

// empty-title h3
rep(
    '<h3 class="text-2xl font-bold mb-3" style="color: #78350f;">Siap Membuat Desain Packaging</h3>',
    '<h3 class="text-2xl font-bold mb-3" style="color: #78350f;" data-i18n="packaging.empty-title">Siap Membuat Desain Packaging</h3>',
    'packaging.empty-title'
);

// empty-desc paragraph
rep(
    '                                Upload foto produk, pilih jenis kemasan dan style desain, lalu klik generate untuk membuat packaging design profesional!\r\n                            </p>',
    '                                <span data-i18n="packaging.empty-desc">Upload foto produk, pilih jenis kemasan dan style desain, lalu klik generate untuk membuat packaging design profesional!</span>\r\n                            </p>',
    'packaging.empty-desc'
);

// empty feat-types + feat-styles
rep(
    '                                    <span>6 Jenis Kemasan</span>\r\n                                </div>\r\n                                <div class="flex items-center gap-2">\r\n                                    <i class="fas fa-check-circle" style="color: #92400e;"></i>\r\n                                    <span>6 Style Desain</span>',
    '                                    <span data-i18n="packaging.feat-types">6 Jenis Kemasan</span>\r\n                                </div>\r\n                                <div class="flex items-center gap-2">\r\n                                    <i class="fas fa-check-circle" style="color: #92400e;"></i>\r\n                                    <span data-i18n="packaging.feat-styles">6 Style Desain</span>',
    'packaging.feat-types+feat-styles'
);

// ==================== PHOTO ANGLE ====================

// desc paragraph
rep(
    '<p class="text-gray-600 text-lg max-w-3xl mx-auto">\r\n                        Transform foto Anda ke berbagai angle profesional dalam sekali klik - Front, Side, Top, 45\u00B0, dan lebih!\r\n                    </p>',
    '<p class="text-gray-600 text-lg max-w-3xl mx-auto" data-i18n="photo-angle.desc">\r\n                        Transform foto Anda ke berbagai angle profesional dalam sekali klik - Front, Side, Top, 45\u00B0, dan lebih!\r\n                    </p>',
    'photo-angle.desc'
);

// upload-title h3 (anchor via id="pa-upload-area" following)
rep(
    '<h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">\r\n                                <i class="fas fa-upload text-cyan-600"></i>\r\n                                Upload Foto\r\n                            </h3>\r\n\r\n                            <div id="pa-upload-area"',
    '<h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2" data-i18n="photo-angle.upload-title">\r\n                                <i class="fas fa-upload text-cyan-600"></i>\r\n                                Upload Foto\r\n                            </h3>\r\n\r\n                            <div id="pa-upload-area"',
    'photo-angle.upload-title'
);

// pa-placeholder desc p
rep(
    '                            <p class="text-gray-500">Upload foto dan pilih preset angle untuk memulai</p>',
    '                            <p class="text-gray-500" data-i18n="photo-angle.placeholder-desc">Upload foto dan pilih preset angle untuk memulai</p>',
    'photo-angle.placeholder-desc'
);

// ==================== DICT EN ====================
rep(
    "'story-update.download-all':'Download All',\r\n            },",
    "'story-update.download-all':'Download All',\r\n" +
    "            'image-analyzer.h2':'Analysis Settings',\r\n" +
    "            'image-analyzer.step1-title':'Upload Image',\r\n" +
    "            'image-analyzer.upload-span':'Click to upload image',\r\n" +
    "            'image-analyzer.remove-btn':'Remove Image',\r\n" +
    "            'image-analyzer.step2-title':'Analysis Detail Level',\r\n" +
    "            'image-analyzer.step3-title':'Prompt Format',\r\n" +
    "            'image-analyzer.step4-title':'Output Language',\r\n" +
    "            'image-analyzer.lang-id':'Indonesian',\r\n" +
    "            'image-analyzer.step5-title':'Output Format',\r\n" +
    "            'image-analyzer.json-tip':'JSON format is suitable for developer/API integration',\r\n" +
    "            'image-analyzer.analyze-btn':'Analyze Image',\r\n" +
    "            'image-analyzer.result-footer':'Use this prompt to create similar images with AI image generator',\r\n" +
    "            'image-analyzer.empty-title':'Ready to Analyze Image',\r\n" +
    "            'image-analyzer.empty-desc':'Upload image, choose detail level and prompt format, then click Analyze to get a professional AI prompt!',\r\n" +
    "            'image-analyzer.feat-detail':'Detail Analysis',\r\n" +
    "            'image-analyzer.feat-format':'6 Prompt Formats',\r\n" +
    "            'image-analyzer.feat-lang':'2 Languages',\r\n" +
    "            'packaging.h2':'Design Settings',\r\n" +
    "            'packaging.upload-span':'Click to upload',\r\n" +
    "            'packaging.step2-title':'Packaging Type',\r\n" +
    "            'packaging.type-box':'Box/Cardboard',\r\n" +
    "            'packaging.type-pouch':'Pouch/Plastic',\r\n" +
    "            'packaging.type-can':'Can/Tin',\r\n" +
    "            'packaging.step3-title':'Design Style',\r\n" +
    "            'packaging.brand-placeholder':'Enter your brand name',\r\n" +
    "            'packaging.color-label':'Choose brand primary color',\r\n" +
    "            'packaging.step6-title':'Number of Variations',\r\n" +
    "            'packaging.count-4':'4 Designs',\r\n" +
    "            'packaging.count-6':'6 Designs',\r\n" +
    "            'packaging.count-8':'8 Designs',\r\n" +
    "            'packaging.design-suffix':'Packaging Designs',\r\n" +
    "            'packaging.download-all':'Download All',\r\n" +
    "            'packaging.empty-title':'Ready to Create Packaging Design',\r\n" +
    "            'packaging.empty-desc':'Upload product photo, choose packaging type and design style, then click generate to create professional packaging design!',\r\n" +
    "            'packaging.feat-types':'6 Packaging Types',\r\n" +
    "            'packaging.feat-styles':'6 Design Styles',\r\n" +
    "            'photo-angle.desc':'Transform your photos to various professional angles in one click - Front, Side, Top, 45\u00B0, and more!',\r\n" +
    "            'photo-angle.upload-title':'Upload Photo',\r\n" +
    "            'photo-angle.placeholder-desc':'Upload photo and choose angle preset to start',\r\n" +
    "            },",
    'dict.en'
);

// ==================== DICT ID ====================
rep(
    "'story-update.download-all':'Download Semua',\r\n            }",
    "'story-update.download-all':'Download Semua',\r\n" +
    "            'image-analyzer.h2':'Pengaturan Analisis',\r\n" +
    "            'image-analyzer.step1-title':'Upload Gambar',\r\n" +
    "            'image-analyzer.upload-span':'Klik untuk upload gambar',\r\n" +
    "            'image-analyzer.remove-btn':'Hapus Gambar',\r\n" +
    "            'image-analyzer.step2-title':'Level Detail Analisis',\r\n" +
    "            'image-analyzer.step3-title':'Format Prompt',\r\n" +
    "            'image-analyzer.step4-title':'Bahasa Output',\r\n" +
    "            'image-analyzer.lang-id':'Bahasa Indonesia',\r\n" +
    "            'image-analyzer.step5-title':'Format Output',\r\n" +
    "            'image-analyzer.json-tip':'JSON format cocok untuk developer/API integration',\r\n" +
    "            'image-analyzer.analyze-btn':'Analisis Gambar',\r\n" +
    "            'image-analyzer.result-footer':'Gunakan prompt ini untuk membuat gambar serupa dengan AI image generator',\r\n" +
    "            'image-analyzer.empty-title':'Siap Menganalisis Gambar',\r\n" +
    "            'image-analyzer.empty-desc':'Upload gambar, pilih level detail dan format prompt, lalu klik Analisis untuk mendapatkan prompt AI profesional!',\r\n" +
    "            'image-analyzer.feat-detail':'Detail Analisis',\r\n" +
    "            'image-analyzer.feat-format':'6 Format Prompt',\r\n" +
    "            'image-analyzer.feat-lang':'2 Bahasa',\r\n" +
    "            'packaging.h2':'Pengaturan Desain',\r\n" +
    "            'packaging.upload-span':'Klik untuk upload',\r\n" +
    "            'packaging.step2-title':'Jenis Kemasan',\r\n" +
    "            'packaging.type-box':'Box/Kardus',\r\n" +
    "            'packaging.type-pouch':'Pouch/Plastik',\r\n" +
    "            'packaging.type-can':'Can/Kaleng',\r\n" +
    "            'packaging.step3-title':'Style Desain',\r\n" +
    "            'packaging.brand-placeholder':'Masukkan nama brand Anda',\r\n" +
    "            'packaging.color-label':'Pilih warna utama brand',\r\n" +
    "            'packaging.step6-title':'Jumlah Variasi',\r\n" +
    "            'packaging.count-4':'4 Desain',\r\n" +
    "            'packaging.count-6':'6 Desain',\r\n" +
    "            'packaging.count-8':'8 Desain',\r\n" +
    "            'packaging.design-suffix':'Desain Packaging',\r\n" +
    "            'packaging.download-all':'Download Semua',\r\n" +
    "            'packaging.empty-title':'Siap Membuat Desain Packaging',\r\n" +
    "            'packaging.empty-desc':'Upload foto produk, pilih jenis kemasan dan style desain, lalu klik generate untuk membuat packaging design profesional!',\r\n" +
    "            'packaging.feat-types':'6 Jenis Kemasan',\r\n" +
    "            'packaging.feat-styles':'6 Style Desain',\r\n" +
    "            'photo-angle.desc':'Transform foto Anda ke berbagai angle profesional dalam sekali klik - Front, Side, Top, 45\u00B0, dan lebih!',\r\n" +
    "            'photo-angle.upload-title':'Upload Foto',\r\n" +
    "            'photo-angle.placeholder-desc':'Upload foto dan pilih preset angle untuk memulai',\r\n" +
    "            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
