// i18n_patch31.js — ROI Calculator, AI Caption Generator, Product Comparison
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ===== ROI CALCULATOR =====

// roi.desc (multi-line — match opening tag + start of content)
rep(
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto">\r\n                        Hitung ROI campaign',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="roi.desc">\r\n                        Hitung ROI campaign',
    'roi.desc'
);

// roi.step1-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Campaign Type *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="roi.step1-title">Campaign Type *</h3>',
    'roi.step1-title'
);

// roi.step2-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Revenue Data *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="roi.step2-title">Revenue Data *</h3>',
    'roi.step2-title'
);

// roi.step3-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Monthly Costs *</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="roi.step3-title">Monthly Costs *</h3>',
    'roi.step3-title'
);

// roi.step4-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Projection Period</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="roi.step4-title">Projection Period</h3>',
    'roi.step4-title'
);

// roi.step5-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Growth Scenario</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="roi.step5-title">Growth Scenario</h3>',
    'roi.step5-title'
);

// roi.growth-note (\uD83D\uDCCA = 📊)
rep(
    '<p class="text-xs text-gray-600 mt-2">\uD83D\uDCCA Mempengaruhi growth rate proyeksi sales</p>',
    '<p class="text-xs text-gray-600 mt-2" data-i18n="roi.growth-note">\uD83D\uDCCA Mempengaruhi growth rate proyeksi sales</p>',
    'roi.growth-note'
);

// roi.calc-btn (span inside submit button)
rep(
    '<span>Calculate ROI & Get AI Insights</span>',
    '<span data-i18n="roi.calc-btn">Calculate ROI & Get AI Insights</span>',
    'roi.calc-btn'
);

// roi.process-note (\u23F1\uFE0F = ⏱️)
rep(
    '<p class="text-xs text-center text-gray-500">\u23F1\uFE0F Proses ~10-15 detik</p>',
    '<p class="text-xs text-center text-gray-500" data-i18n="roi.process-note">\u23F1\uFE0F Proses ~10-15 detik</p>',
    'roi.process-note'
);

// roi.placeholder-desc (anchor with preceding sibling)
rep(
    '<p class="text-lg font-semibold">ROI Analysis & Projections</p>\r\n                                <p class="text-sm">Masukkan data campaign untuk mendapatkan insights</p>',
    '<p class="text-lg font-semibold">ROI Analysis & Projections</p>\r\n                                <p class="text-sm" data-i18n="roi.placeholder-desc">Masukkan data campaign untuk mendapatkan insights</p>',
    'roi.placeholder-desc'
);

// roi.loading-desc
rep(
    '<p class="text-sm text-gray-500 mt-2">AI sedang menganalisis data & membuat proyeksi...</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="roi.loading-desc">AI sedang menganalisis data & membuat proyeksi...</p>',
    'roi.loading-desc'
);

// ===== AI CAPTION GENERATOR =====

// caption.desc (multi-line — anchor with unique content)
rep(
    '<p class="text-lg text-gray-600 mb-2">\r\n                        Generate engaging captions',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="caption.desc">\r\n                        Generate engaging captions',
    'caption.desc'
);

// caption.desc2 (has <i> child — anchor with sparkles icon + unique text)
rep(
    '<p class="text-sm text-gray-500">\r\n                        <i class="fas fa-sparkles mr-1"></i>\r\n                        Dapatkan caption menarik',
    '<p class="text-sm text-gray-500" data-i18n="caption.desc2">\r\n                        <i class="fas fa-sparkles mr-1"></i>\r\n                        Dapatkan caption menarik',
    'caption.desc2'
);

// caption.remove-photo (reuse unboxing.remove-photo key — same text)
rep(
    '<button id="caption-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">',
    '<button id="caption-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="unboxing.remove-photo">',
    'caption.remove-photo'
);

// caption.step2-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Platform Target</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="caption.step2-title">Platform Target</h3>',
    'caption.step2-title'
);

// caption.step3-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Caption Tone</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="caption.step3-title">Caption Tone</h3>',
    'caption.step3-title'
);

// caption.step4-title (Jumlah Variasi — use following div id as anchor)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="caption-count-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="caption.step4-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="caption-count-selection"',
    'caption.step4-title'
);

// caption.gen-info (has <i> child — anchor with unique text)
rep(
    '<p class="text-sm text-gray-500 text-center mt-2">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate caption lengkap',
    '<p class="text-sm text-gray-500 text-center mt-2" data-i18n="caption.gen-info">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate caption lengkap',
    'caption.gen-info'
);

// caption.loading-desc
rep(
    '<p class="text-sm text-gray-500 mt-2">AI sedang menganalisis foto dan membuat caption menarik</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="caption.loading-desc">AI sedang menganalisis foto dan membuat caption menarik</p>',
    'caption.loading-desc'
);

// caption.placeholder-desc
rep(
    '<p class="text-sm">Upload foto dan pilih settings untuk generate captions</p>',
    '<p class="text-sm" data-i18n="caption.placeholder-desc">Upload foto dan pilih settings untuk generate captions</p>',
    'caption.placeholder-desc'
);

// ===== PRODUCT COMPARISON =====

// comparison.desc (multi-line — anchor with unique content)
rep(
    '<p class="text-lg text-gray-600 mb-2">\r\n                        Buat visual perbandingan produk',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="comparison.desc">\r\n                        Buat visual perbandingan produk',
    'comparison.desc'
);

// comparison.desc2 (has <i> child — anchor with sparkles icon + unique text)
rep(
    '<p class="text-sm text-gray-500">\r\n                        <i class="fas fa-sparkles mr-1"></i>\r\n                        Side-by-side comparison',
    '<p class="text-sm text-gray-500" data-i18n="comparison.desc2">\r\n                        <i class="fas fa-sparkles mr-1"></i>\r\n                        Side-by-side comparison',
    'comparison.desc2'
);

// comparison.step1-title
rep(
    '<h3 class="text-lg font-bold text-gray-800">Upload 2-3 Produk</h3>',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="comparison.step1-title">Upload 2-3 Produk</h3>',
    'comparison.step1-title'
);

// comparison.step5-title (Jumlah Variasi — reuse caption.step4-title key)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="comparison-count-selection"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="caption.step4-title">Jumlah Variasi</h3>\r\n                                    </div>\r\n                                    <div id="comparison-count-selection"',
    'comparison.step5-title'
);

// comparison.gen-info (has <i> child — anchor with unique text)
rep(
    '<p class="text-sm text-gray-500 text-center mt-2">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate comparison visual',
    '<p class="text-sm text-gray-500 text-center mt-2" data-i18n="comparison.gen-info">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate comparison visual',
    'comparison.gen-info'
);

// comparison.loading-desc
rep(
    '<p class="text-sm text-gray-500 mt-2">AI sedang menganalisis produk dan membuat comparison visual</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="comparison.loading-desc">AI sedang menganalisis produk dan membuat comparison visual</p>',
    'comparison.loading-desc'
);

// comparison.placeholder-desc
rep(
    '<p class="text-sm">Upload 2-3 produk dan pilih settings untuk generate comparisons</p>',
    '<p class="text-sm" data-i18n="comparison.placeholder-desc">Upload 2-3 produk dan pilih settings untuk generate comparisons</p>',
    'comparison.placeholder-desc'
);

// ===== DICT ENTRIES =====

// EN dict — insert after logo.download-all
rep(
    "'logo.download-all':'Download All',\r\n            },",
    "'logo.download-all':'Download All',\r\n            // ROI Calculator\r\n            'roi.desc':'Calculate ROI for your campaign with AI insights! Get profit projections, break-even analysis, and optimization recommendations to maximize returns.',\r\n            'roi.step1-title':'Campaign Type *',\r\n            'roi.step2-title':'Revenue Data *',\r\n            'roi.step3-title':'Monthly Costs *',\r\n            'roi.step4-title':'Projection Period',\r\n            'roi.step5-title':'Growth Scenario',\r\n            'roi.growth-note':'\uD83D\uDCCA Affects projected sales growth rate',\r\n            'roi.calc-btn':'Calculate ROI & Get AI Insights',\r\n            'roi.process-note':'\u23F1\uFE0F Process ~10-15 seconds',\r\n            'roi.placeholder-desc':'Enter campaign data to get insights',\r\n            'roi.loading-desc':'AI is analyzing data & creating projections...',\r\n            // AI Caption Generator\r\n            'caption.desc':'Generate engaging captions for Instagram, TikTok & Facebook with AI',\r\n            'caption.desc2':'Get engaging captions, hooks, CTAs, hashtags & emoji suggestions',\r\n            'caption.step2-title':'Target Platform',\r\n            'caption.step3-title':'Caption Tone',\r\n            'caption.step4-title':'Number of Variations',\r\n            'caption.gen-info':'AI will generate complete captions with hooks, CTAs & hashtags',\r\n            'caption.loading-desc':'AI is analyzing your photo and creating engaging captions',\r\n            'caption.placeholder-desc':'Upload a photo and choose settings to generate captions',\r\n            // Product Comparison\r\n            'comparison.desc':'Create attractive and professional product comparison visuals',\r\n            'comparison.desc2':'Side-by-side comparison with pros & cons, feature highlights & winner badge',\r\n            'comparison.step1-title':'Upload 2-3 Products',\r\n            'comparison.gen-info':'AI will generate comparison visuals with detailed analysis',\r\n            'comparison.loading-desc':'AI is analyzing products and creating comparison visuals',\r\n            'comparison.placeholder-desc':'Upload 2-3 products and choose settings to generate comparisons',\r\n            },",
    'dict.en'
);

// ID dict — insert after logo.download-all
rep(
    "'logo.download-all':'Download Semua',\r\n            }",
    "'logo.download-all':'Download Semua',\r\n            // ROI Calculator\r\n            'roi.desc':'Hitung ROI campaign Anda dengan AI insights! Dapatkan proyeksi profit, break-even analysis, dan rekomendasi optimization untuk maximize returns.',\r\n            'roi.step1-title':'Tipe Campaign *',\r\n            'roi.step2-title':'Data Revenue *',\r\n            'roi.step3-title':'Biaya Bulanan *',\r\n            'roi.step4-title':'Periode Proyeksi',\r\n            'roi.step5-title':'Skenario Pertumbuhan',\r\n            'roi.growth-note':'\uD83D\uDCCA Mempengaruhi growth rate proyeksi sales',\r\n            'roi.calc-btn':'Hitung ROI & Dapatkan AI Insights',\r\n            'roi.process-note':'\u23F1\uFE0F Proses ~10-15 detik',\r\n            'roi.placeholder-desc':'Masukkan data campaign untuk mendapatkan insights',\r\n            'roi.loading-desc':'AI sedang menganalisis data & membuat proyeksi...',\r\n            // AI Caption Generator\r\n            'caption.desc':'Generate caption menarik untuk Instagram, TikTok & Facebook dengan AI',\r\n            'caption.desc2':'Dapatkan caption menarik, hooks, CTA, hashtags & emoji suggestions',\r\n            'caption.step2-title':'Platform Target',\r\n            'caption.step3-title':'Tone Caption',\r\n            'caption.step4-title':'Jumlah Variasi',\r\n            'caption.gen-info':'AI akan generate caption lengkap dengan hooks, CTA & hashtags',\r\n            'caption.loading-desc':'AI sedang menganalisis foto dan membuat caption menarik',\r\n            'caption.placeholder-desc':'Upload foto dan pilih settings untuk generate captions',\r\n            // Product Comparison\r\n            'comparison.desc':'Buat visual perbandingan produk yang menarik dan profesional',\r\n            'comparison.desc2':'Side-by-side comparison dengan pros & cons, feature highlights & winner badge',\r\n            'comparison.step1-title':'Upload 2-3 Produk',\r\n            'comparison.gen-info':'AI akan generate comparison visual dengan analisis detail',\r\n            'comparison.loading-desc':'AI sedang menganalisis produk dan membuat comparison visual',\r\n            'comparison.placeholder-desc':'Upload 2-3 produk dan pilih settings untuk generate comparisons',\r\n            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
