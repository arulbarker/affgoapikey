// i18n_patch13.js — Pro Headshot, Unboxing Scene, Before/After
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

// ============================================================
// PROFESSIONAL HEADSHOT (content-professional-headshot)
// ============================================================

// 1. Desc p (multiline)
repR(
    '(<p class="text-lg text-gray-600">)[\\r\\n\\s]*(Buat foto headshot profesional untuk LinkedIn, CV, profil bisnis, dan berbagai kebutuhan profesional dengan AI canggih!)[\\r\\n\\s]*(</p>)',
    '$1\r\n                        <span data-i18n="headshot.desc">$2</span>\r\n                    $3',
    'headshot.desc'
);

// 2. Step 1 h3
rep(
    '<h3 class="text-base font-semibold text-gray-800">Unggah Foto Anda</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="headshot.step1-title">Unggah Foto Anda</h3>',
    'headshot.step1-title'
);

// 3. Upload click p
rep(
    '<p class="mt-3 text-sm md:text-base font-semibold">👔 Klik atau seret foto Anda</p>',
    '<p class="mt-3 text-sm md:text-base font-semibold" data-i18n="headshot.upload-click">👔 Klik atau seret foto Anda</p>',
    'headshot.upload-click'
);

// 4. Step 2 h3
rep(
    '<h3 class="text-base font-semibold text-gray-800">Pilih Tema Profesional</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="headshot.theme-title">Pilih Tema Profesional</h3>',
    'headshot.theme-title'
);

// 5. Custom theme label
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">✨ Tema/Profesi Kustom:</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="headshot.custom-label">✨ Tema/Profesi Kustom:</label>',
    'headshot.custom-label'
);

// 6. Custom theme tip
rep(
    '<p class="text-xs text-gray-500 mt-2">💡 Sebutkan profesi atau gaya foto yang Anda inginkan</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="headshot.custom-tip">💡 Sebutkan profesi atau gaya foto yang Anda inginkan</p>',
    'headshot.custom-tip'
);

// 7. Step 4 h3: Pakaian
rep(
    '<h3 class="text-base font-semibold text-gray-800">Pakaian</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="headshot.attire-title">Pakaian</h3>',
    'headshot.attire-title'
);

// 8. Step 5 h3: Gaya Foto
rep(
    '<h3 class="text-base font-semibold text-gray-800">Gaya Foto</h3>',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="headshot.style-title">Gaya Foto</h3>',
    'headshot.style-title'
);

// 9. Style buttons (unique text within headshot panel)
rep(
    '<span>Klasik</span>',
    '<span data-i18n="headshot.style-classic">Klasik</span>',
    'headshot.style-classic'
);
rep(
    '<span>Modern</span>',
    '<span data-i18n="headshot.style-modern">Modern</span>',
    'headshot.style-modern'
);
rep(
    '<span>Sinematik</span>',
    '<span data-i18n="headshot.style-cinematic">Sinematik</span>',
    'headshot.style-cinematic'
);

// 10. Step 7 h3: Jumlah Variasi (headshot context — id="headshot-count-options" follows)
repR(
    '(<h3 class="text-base font-semibold text-gray-800">Jumlah Variasi</h3>[\\r\\n\\s]*</div>[\\r\\n\\s]*<div id="headshot-count-options")',
    '<h3 class="text-base font-semibold text-gray-800" data-i18n="headshot.count-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="headshot-count-options"',
    'headshot.count-title'
);

// 11. Count buttons
rep(
    '<button type="button" data-value="4" class="option-btn-headshot">4 Foto</button>',
    '<button type="button" data-value="4" class="option-btn-headshot" data-i18n="headshot.count-4">4 Foto</button>',
    'headshot.count-4'
);
rep(
    '<button type="button" data-value="6" class="option-btn-headshot selected">6 Foto</button>',
    '<button type="button" data-value="6" class="option-btn-headshot selected" data-i18n="headshot.count-6">6 Foto</button>',
    'headshot.count-6'
);
rep(
    '<button type="button" data-value="8" class="option-btn-headshot">8 Foto</button>',
    '<button type="button" data-value="8" class="option-btn-headshot" data-i18n="headshot.count-8">8 Foto</button>',
    'headshot.count-8'
);

// 12. Generate button span
rep(
    '<span>Buat Headshot Profesional</span>',
    '<span data-i18n="headshot.generate-btn">Buat Headshot Profesional</span>',
    'headshot.generate-btn'
);

// 13. Tips p (has <i> and <strong> children — applyText replaces only text nodes)
rep(
    '<p class="text-xs text-indigo-800">\r\n                                        <i class="fas fa-lightbulb mr-1"></i>\r\n                                        <strong>Tips:</strong> Gunakan foto close-up dengan pencahayaan baik. AI akan membuat foto headshot profesional dengan tema dan background yang Anda pilih.\r\n                                    </p>',
    '<p class="text-xs text-indigo-800" data-i18n="headshot.tips">\r\n                                        <i class="fas fa-lightbulb mr-1"></i>\r\n                                        <strong>Tips:</strong> Gunakan foto close-up dengan pencahayaan baik. AI akan membuat foto headshot profesional dengan tema dan background yang Anda pilih.\r\n                                    </p>',
    'headshot.tips'
);

// 14. Time note div
rep(
    '<div class="text-center text-xs text-gray-500 mt-2">\r\n                                    ⚡ Proses: ~20-30 detik per foto\r\n                                </div>',
    '<div class="text-center text-xs text-gray-500 mt-2" data-i18n="headshot.time-note">\r\n                                    ⚡ Proses: ~20-30 detik per foto\r\n                                </div>',
    'headshot.time-note'
);

// 15. Placeholder h3
rep(
    '<h3 class="font-semibold text-lg text-slate-600">Headshot Profesional Anda</h3>',
    '<h3 class="font-semibold text-lg text-slate-600" data-i18n="headshot.empty-title">Headshot Profesional Anda</h3>',
    'headshot.empty-title'
);

// 16. Placeholder desc p
rep(
    '<p class="mt-1 text-sm">Foto headshot profesional akan muncul di sini</p>',
    '<p class="mt-1 text-sm" data-i18n="headshot.empty-desc">Foto headshot profesional akan muncul di sini</p>',
    'headshot.empty-desc'
);

// 17. Feature card subtexts
rep(
    '<p class="text-xs text-gray-600 mt-1">Perfect untuk profil profesional Anda</p>',
    '<p class="text-xs text-gray-600 mt-1" data-i18n="headshot.card-linkedin">Perfect untuk profil profesional Anda</p>',
    'headshot.card-linkedin'
);
rep(
    '<p class="text-xs text-gray-600 mt-1">Siap untuk CV dan portfolio</p>',
    '<p class="text-xs text-gray-600 mt-1" data-i18n="headshot.card-business">Siap untuk CV dan portfolio</p>',
    'headshot.card-business'
);
rep(
    '<p class="text-xs text-gray-600 mt-1">Untuk profil tim dan company</p>',
    '<p class="text-xs text-gray-600 mt-1" data-i18n="headshot.card-website">Untuk profil tim dan company</p>',
    'headshot.card-website'
);

// 18. Results h3 (emoji + Indonesian text)
rep(
    '<h3 class="text-xl md:text-2xl font-bold text-gray-800">\r\n                                    👔 Headshot Profesional Anda 📸\r\n                                </h3>',
    '<h3 class="text-xl md:text-2xl font-bold text-gray-800" data-i18n="headshot.results-title">\r\n                                    👔 Headshot Profesional Anda 📸\r\n                                </h3>',
    'headshot.results-title'
);

// 19. Download all button (headshot panel — has <i> child)
repR(
    '(id="headshot-download-all-btn"[^>]*>[\\r\\n\\s]*<i class="fas fa-download"></i>[\\r\\n\\s]*)Download Semua([\\r\\n\\s]*</button>[\\r\\n\\s]*</div>[\\r\\n\\s]*<!-- Results Grid -->)',
    '$1<span data-i18n="headshot.download-all">Download Semua</span>$2',
    'headshot.download-all'
);

// ============================================================
// UNBOXING SCENE (content-unboxing-scene)
// ============================================================

// 20. Desc p
rep(
    '<p class="text-lg text-gray-600 mb-2">\r\n                        Buat konten unboxing yang menarik tanpa harus membuka produk fisik\r\n                    </p>',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="unboxing.desc">\r\n                        Buat konten unboxing yang menarik tanpa harus membuka produk fisik\r\n                    </p>',
    'unboxing.desc'
);

// 21. Step 1 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto Produk</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="unboxing.step1-title">Upload Foto Produk</h3>',
    'unboxing.step1-title'
);

// 22. Hapus Foto button (unboxing panel)
rep(
    '<button id="unboxing-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">\r\n                                        <i class="fas fa-times mr-1"></i> Hapus Foto\r\n                                    </button>',
    '<button id="unboxing-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="unboxing.remove-photo">\r\n                                        <i class="fas fa-times mr-1"></i> Hapus Foto\r\n                                    </button>',
    'unboxing.remove-photo'
);

// 23. Step 6 h3: Jumlah Variasi (unboxing context)
repR(
    '(<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi</h3>[\\r\\n\\s]*</div>[\\r\\n\\s]*<div id="unboxing-count-selection")',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="unboxing.count-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="unboxing-count-selection"',
    'unboxing.count-title'
);

// 24. Generate info p (has <i> child)
rep(
    '<p class="text-sm text-gray-500 text-center mt-2">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate unboxing scenes dengan efek hand & lighting\r\n                                    </p>',
    '<p class="text-sm text-gray-500 text-center mt-2" data-i18n="unboxing.gen-info">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate unboxing scenes dengan efek hand & lighting\r\n                                    </p>',
    'unboxing.gen-info'
);

// 25. Loading p (below spinner)
rep(
    '<p class="text-sm text-gray-500 mt-2">AI sedang membuat unboxing scenes dengan dramatic lighting</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="unboxing.loading-text">AI sedang membuat unboxing scenes dengan dramatic lighting</p>',
    'unboxing.loading-text'
);

// ============================================================
// BEFORE/AFTER (content-before-after — second occurrence at 26712)
// ============================================================

// 26. Desc p
rep(
    '<p class="text-lg text-gray-600 mb-2">\r\n                        Showcase transformasi produk dengan visual before/after yang menarik\r\n                    </p>',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="baf.desc">\r\n                        Showcase transformasi produk dengan visual before/after yang menarik\r\n                    </p>',
    'baf.desc'
);

// 27. Step 1 h3
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload Foto</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="baf.step1-title">Upload Foto</h3>',
    'baf.step1-title'
);

// 28. Hapus Foto button (before/after panel)
rep(
    '<button id="beforeafter-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">\r\n                                        <i class="fas fa-times mr-1"></i> Hapus Foto\r\n                                    </button>',
    '<button id="beforeafter-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="unboxing.remove-photo">\r\n                                        <i class="fas fa-times mr-1"></i> Hapus Foto\r\n                                    </button>',
    'baf.remove-photo'
);

// 29. Step 4 h3: Tampilkan
rep(
    '<h3 class="text-lg font-bold text-gray-800">Tampilkan</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="baf.indicators-title">Tampilkan</h3>',
    'baf.indicators-title'
);

// 30. Step 6 h3: Jumlah Variasi (before/after context)
repR(
    '(<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi</h3>[\\r\\n\\s]*</div>[\\r\\n\\s]*<div id="beforeafter-count-selection")',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="unboxing.count-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="beforeafter-count-selection"',
    'baf.count-title'
);

// 31. Count buttons (unique class names)
rep(
    '<button type="button" data-count="3" class="count-btn-beforeafter">\r\n                                            3 Variasi\r\n                                        </button>',
    '<button type="button" data-count="3" class="count-btn-beforeafter" data-i18n="baf.count-3">\r\n                                            3 Variasi\r\n                                        </button>',
    'baf.count-3'
);
rep(
    '<button type="button" data-count="4" class="count-btn-beforeafter count-selected">\r\n                                            4 Variasi\r\n                                        </button>',
    '<button type="button" data-count="4" class="count-btn-beforeafter count-selected" data-i18n="baf.count-4">\r\n                                            4 Variasi\r\n                                        </button>',
    'baf.count-4'
);
rep(
    '<button type="button" data-count="6" class="count-btn-beforeafter">\r\n                                            6 Variasi\r\n                                        </button>',
    '<button type="button" data-count="6" class="count-btn-beforeafter" data-i18n="baf.count-6">\r\n                                            6 Variasi\r\n                                        </button>',
    'baf.count-6'
);

// 32. Generate info p (has <i> child)
rep(
    '<p class="text-sm text-gray-500 text-center mt-2">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate before/after transformasi visual\r\n                                    </p>',
    '<p class="text-sm text-gray-500 text-center mt-2" data-i18n="baf.gen-info">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate before/after transformasi visual\r\n                                    </p>',
    'baf.gen-info'
);

// 33. Loading p
rep(
    '<p class="text-sm text-gray-500 mt-2">AI sedang membuat transformasi visual dengan indicators</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="baf.loading-text">AI sedang membuat transformasi visual dengan indicators</p>',
    'baf.loading-text'
);

// ============================================================
// i18n DICT — EN keys (after 'ads.gen-suffix':'Ad Scenes',)
// ============================================================
rep(
    `'ads.gen-suffix':'Ad Scenes',\r\n            },`,
    `'ads.gen-suffix':'Ad Scenes',\r\n                // professional headshot\r\n                'headshot.desc':'Create professional headshot photos for LinkedIn, CV, business profiles, and various professional needs with advanced AI!',\r\n                'headshot.step1-title':'Upload Your Photo',\r\n                'headshot.upload-click':'\uD83D\uDC54 Click or drag your photo',\r\n                'headshot.theme-title':'Select Professional Theme',\r\n                'headshot.custom-label':'\u2728 Custom Theme/Profession:',\r\n                'headshot.custom-tip':'\uD83D\uDCA1 Name the profession or photo style you want',\r\n                'headshot.attire-title':'Attire',\r\n                'headshot.style-title':'Photo Style',\r\n                'headshot.style-classic':'Classic',\r\n                'headshot.style-modern':'Modern',\r\n                'headshot.style-cinematic':'Cinematic',\r\n                'headshot.count-title':'Number of Variations',\r\n                'headshot.count-4':'4 Photos',\r\n                'headshot.count-6':'6 Photos',\r\n                'headshot.count-8':'8 Photos',\r\n                'headshot.generate-btn':'Create Professional Headshot',\r\n                'headshot.tips':' Use a close-up photo with good lighting. AI will create professional headshot photos with your chosen theme and background.',\r\n                'headshot.time-note':'\u26A1 Process: ~20-30 seconds per photo',\r\n                'headshot.empty-title':'Your Professional Headshot',\r\n                'headshot.empty-desc':'Professional headshot photos will appear here',\r\n                'headshot.card-linkedin':'Perfect for your professional profile',\r\n                'headshot.card-business':'Ready for CV and portfolio',\r\n                'headshot.card-website':'For team profile and company',\r\n                'headshot.results-title':'\uD83D\uDC54 Your Professional Headshot \uD83D\uDCF8',\r\n                'headshot.download-all':'Download All',\r\n                // unboxing scene\r\n                'unboxing.desc':'Create engaging unboxing content without physically opening the product',\r\n                'unboxing.step1-title':'Upload Product Photo',\r\n                'unboxing.remove-photo':' Delete Photo',\r\n                'unboxing.count-title':'Number of Variations',\r\n                'unboxing.gen-info':' AI will generate unboxing scenes with hand & lighting effects',\r\n                'unboxing.loading-text':'AI is creating unboxing scenes with dramatic lighting',\r\n                // before/after\r\n                'baf.desc':'Showcase product transformation with engaging before/after visuals',\r\n                'baf.step1-title':'Upload Photo',\r\n                'baf.indicators-title':'Show',\r\n                'baf.count-3':'3 Variations',\r\n                'baf.count-4':'4 Variations',\r\n                'baf.count-6':'6 Variations',\r\n                'baf.gen-info':' AI will generate before/after visual transformation',\r\n                'baf.loading-text':'AI is creating visual transformation with indicators',\r\n            },`,
    'i18n EN: headshot+unboxing+baf keys'
);

// ============================================================
// i18n DICT — ID keys (after 'ads.gen-suffix':'Scene Iklan',)
// ============================================================
rep(
    `'ads.gen-suffix':'Scene Iklan',\r\n            }`,
    `'ads.gen-suffix':'Scene Iklan',\r\n                // professional headshot\r\n                'headshot.desc':'Buat foto headshot profesional untuk LinkedIn, CV, profil bisnis, dan berbagai kebutuhan profesional dengan AI canggih!',\r\n                'headshot.step1-title':'Unggah Foto Anda',\r\n                'headshot.upload-click':'\uD83D\uDC54 Klik atau seret foto Anda',\r\n                'headshot.theme-title':'Pilih Tema Profesional',\r\n                'headshot.custom-label':'\u2728 Tema/Profesi Kustom:',\r\n                'headshot.custom-tip':'\uD83D\uDCA1 Sebutkan profesi atau gaya foto yang Anda inginkan',\r\n                'headshot.attire-title':'Pakaian',\r\n                'headshot.style-title':'Gaya Foto',\r\n                'headshot.style-classic':'Klasik',\r\n                'headshot.style-modern':'Modern',\r\n                'headshot.style-cinematic':'Sinematik',\r\n                'headshot.count-title':'Jumlah Variasi',\r\n                'headshot.count-4':'4 Foto',\r\n                'headshot.count-6':'6 Foto',\r\n                'headshot.count-8':'8 Foto',\r\n                'headshot.generate-btn':'Buat Headshot Profesional',\r\n                'headshot.tips':' Gunakan foto close-up dengan pencahayaan baik. AI akan membuat foto headshot profesional dengan tema dan background yang Anda pilih.',\r\n                'headshot.time-note':'\u26A1 Proses: ~20-30 detik per foto',\r\n                'headshot.empty-title':'Headshot Profesional Anda',\r\n                'headshot.empty-desc':'Foto headshot profesional akan muncul di sini',\r\n                'headshot.card-linkedin':'Perfect untuk profil profesional Anda',\r\n                'headshot.card-business':'Siap untuk CV dan portfolio',\r\n                'headshot.card-website':'Untuk profil tim dan company',\r\n                'headshot.results-title':'\uD83D\uDC54 Headshot Profesional Anda \uD83D\uDCF8',\r\n                'headshot.download-all':'Download Semua',\r\n                // unboxing scene\r\n                'unboxing.desc':'Buat konten unboxing yang menarik tanpa harus membuka produk fisik',\r\n                'unboxing.step1-title':'Upload Foto Produk',\r\n                'unboxing.remove-photo':' Hapus Foto',\r\n                'unboxing.count-title':'Jumlah Variasi',\r\n                'unboxing.gen-info':' AI akan generate unboxing scenes dengan efek hand & lighting',\r\n                'unboxing.loading-text':'AI sedang membuat unboxing scenes dengan dramatic lighting',\r\n                // before/after\r\n                'baf.desc':'Showcase transformasi produk dengan visual before/after yang menarik',\r\n                'baf.step1-title':'Upload Foto',\r\n                'baf.indicators-title':'Tampilkan',\r\n                'baf.count-3':'3 Variasi',\r\n                'baf.count-4':'4 Variasi',\r\n                'baf.count-6':'6 Variasi',\r\n                'baf.gen-info':' AI akan generate before/after transformasi visual',\r\n                'baf.loading-text':'AI sedang membuat transformasi visual dengan indicators',\r\n            }`,
    'i18n ID: headshot+unboxing+baf keys'
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
