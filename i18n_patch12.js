// i18n_patch12.js — Skincare Review, Food Review, Product Ads
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
// SKINCARE REVIEW (content-skincare-review, 12847-13039)
// ============================================================

// 1. Desc p (multiline)
repR(
    '(<p class="text-lg text-gray-500 mt-2 max-w-3xl mx-auto">)[\\r\\n\\s]*(Buat 10 scene review skincare profesional untuk konten video Anda\\.)[\\r\\n\\s]*(</p>)',
    '$1\r\n                        <span data-i18n="skincare.desc">$2</span>\r\n                    $3',
    'skincare.desc'
);

// 2. Step 1 h2
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Unggah Produk Skincare</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="skincare.step1-title">Unggah Produk Skincare</h2>',
    'skincare.step1-title'
);

// 3. Upload click span
rep(
    '<span class="font-medium text-base">Klik atau seret gambar produk</span>',
    '<span class="font-medium text-base" data-i18n="skincare.upload-click">Klik atau seret gambar produk</span>',
    'skincare.upload-click'
);

// 4. Upload hint span
rep(
    '<span class="text-xs mt-2 text-gray-400">PNG, JPG, WEBP, HEIC (Bisa lebih dari satu)</span>',
    '<span class="text-xs mt-2 text-gray-400" data-i18n="skincare.upload-hint">PNG, JPG, WEBP, HEIC (Bisa lebih dari satu)</span>',
    'skincare.upload-hint'
);

// 5. Step 2 h2
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Deskripsi Skincare</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="skincare.step2-title">Deskripsi Skincare</h2>',
    'skincare.step2-title'
);

// 6. Desc placeholder
rep(
    'placeholder="Deskripsikan produk skincare Anda: jenis produk, manfaat, bahan utama, tekstur..."',
    'data-i18n-placeholder="skincare.desc-placeholder" placeholder="Deskripsikan produk skincare Anda: jenis produk, manfaat, bahan utama, tekstur..."',
    'skincare.desc-placeholder'
);

// 7. Desc tip p
rep(
    '<p class="text-xs text-gray-400 mt-2">💡 Contoh: Serum Vitamin C dengan Niacinamide, mencerahkan kulit, mengurangi flek hitam</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="skincare.desc-tip">💡 Contoh: Serum Vitamin C dengan Niacinamide, mencerahkan kulit, mengurangi flek hitam</p>',
    'skincare.desc-tip'
);

// 8. Step 3 h2 — split nested span (FIRST occurrence = skincare panel)
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Foto Model <span class="text-sm text-gray-400">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold text-gray-800"><span data-i18n="review.step3-title">Foto Model</span> <span class="text-sm text-gray-400" data-i18n="review.optional-label">(Opsional)</span></h2>',
    'skincare.step3-title'
);

// 9. Model click span (FIRST occurrence = skincare panel)
rep(
    '<span class="font-medium">Upload foto reviewer/model</span>',
    '<span class="font-medium" data-i18n="skincare.model-click">Upload foto reviewer/model</span>',
    'skincare.model-click'
);

// 10. Model tip p (FIRST occurrence = skincare panel)
rep(
    '<p class="text-xs text-gray-400 mt-2">🎭 Untuk review lebih personal dengan wajah reviewer</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="skincare.model-tip">🎭 Untuk review lebih personal dengan wajah reviewer</p>',
    'skincare.model-tip'
);

// 11. Step 4 h2 theme
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Pilih Tema Review</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="skincare.theme-title">Pilih Tema Review</h2>',
    'skincare.theme-title'
);

// 12. Theme subtitle spans (unique texts within skincare panel)
rep(
    '<span class="text-xs opacity-80">Iklan produk profesional & mewah</span>',
    '<span class="text-xs opacity-80" data-i18n="skincare.theme-commercial-sub">Iklan produk profesional & mewah</span>',
    'skincare.theme-commercial-sub'
);
rep(
    '<span class="text-xs text-gray-500">Before-after masalah kulit</span>',
    '<span class="text-xs text-gray-500" data-i18n="skincare.theme-ps-sub">Before-after masalah kulit</span>',
    'skincare.theme-ps-sub'
);
rep(
    '<span class="text-xs text-gray-500">Review jujur ala pengguna</span>',
    '<span class="text-xs text-gray-500" data-i18n="skincare.theme-ugc-sub">Review jujur ala pengguna</span>',
    'skincare.theme-ugc-sub'
);
rep(
    '<span class="text-xs text-gray-500">Perbandingan 2+ produk</span>',
    '<span class="text-xs text-gray-500" data-i18n="skincare.theme-vs-sub">Perbandingan 2+ produk</span>',
    'skincare.theme-vs-sub'
);
rep(
    '<span class="text-xs text-gray-500">Edukasi ingredients & skincare routine</span>',
    '<span class="text-xs text-gray-500" data-i18n="skincare.theme-science-sub">Edukasi ingredients & skincare routine</span>',
    'skincare.theme-science-sub'
);
rep(
    '<span class="text-xs text-gray-500">Visual satisfying & relaxing</span>',
    '<span class="text-xs text-gray-500" data-i18n="skincare.theme-asmr-sub">Visual satisfying & relaxing</span>',
    'skincare.theme-asmr-sub'
);
rep(
    '<span class="text-xs text-gray-500">Tulis tema sendiri sesuai kebutuhan</span>',
    '<span class="text-xs text-gray-500" data-i18n="skincare.theme-custom-sub">Tulis tema sendiri sesuai kebutuhan</span>',
    'skincare.theme-custom-sub'
);

// 13. Custom theme placeholder
rep(
    'placeholder="Contoh: Clean & minimalis dengan background putih, aesthetic pink vibes, natural lighting outdoor..."',
    'data-i18n-placeholder="skincare.theme-placeholder" placeholder="Contoh: Clean & minimalis dengan background putih, aesthetic pink vibes, natural lighting outdoor..."',
    'skincare.theme-placeholder'
);

// 14. VS tip p (has <i> child)
rep(
    '<p class="text-xs text-gray-400 mt-2"><i class="fas fa-info-circle mr-1"></i>Untuk tema VS, upload 2+ produk skincare di Step 1</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="skincare.vs-tip"><i class="fas fa-info-circle mr-1"></i>Untuk tema VS, upload 2+ produk skincare di Step 1</p>',
    'skincare.vs-tip'
);

// 15. Step 6 Jumlah Scene — reuse review.count-title
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Jumlah Scene</h2>\r\n                                </div>\r\n                                <div id="skincare-count-selection"',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="review.count-title">Jumlah Scene</h2>\r\n                                </div>\r\n                                <div id="skincare-count-selection"',
    'skincare.count-title'
);

// 16. Generate button — restructure
rep(
    '<span>Buat <span id="skincare-count-text">7</span> Scene Skincare Review</span>',
    '<span><span data-i18n="review.gen-prefix">Buat</span> <span id="skincare-count-text">7</span> <span data-i18n="skincare.gen-suffix">Scene Skincare Review</span></span>',
    'skincare.gen-suffix'
);

// ============================================================
// FOOD REVIEW (content-food-review, 13042-13188)
// ============================================================

// 17. Desc p
rep(
    '<p class="mt-4 text-lg sm:text-xl text-gray-600">Buat review makanan seperti TikToker & Selebgram dengan AI</p>',
    '<p class="mt-4 text-lg sm:text-xl text-gray-600" data-i18n="frev.desc">Buat review makanan seperti TikToker & Selebgram dengan AI</p>',
    'frev.desc'
);

// 18. Step 1 h2
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Upload Foto Makanan</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="frev.step1-title">Upload Foto Makanan</h2>',
    'frev.step1-title'
);

// 19. Step 1 tip p
rep(
    '<p class="text-sm text-gray-600 mb-4">Upload 1 atau lebih foto makanan yang akan direview (maksimal 5 foto)</p>',
    '<p class="text-sm text-gray-600 mb-4" data-i18n="frev.upload-tip">Upload 1 atau lebih foto makanan yang akan direview (maksimal 5 foto)</p>',
    'frev.upload-tip'
);

// 20. Upload click p
rep(
    '<p class="text-gray-700 font-medium">Klik untuk upload foto makanan</p>',
    '<p class="text-gray-700 font-medium" data-i18n="frev.upload-click">Klik untuk upload foto makanan</p>',
    'frev.upload-click'
);

// 21. Upload hint p
rep(
    '<p class="text-sm text-gray-500 mt-1">Format: JPG, PNG, WEBP, HEIC (iPhone)</p>',
    '<p class="text-sm text-gray-500 mt-1" data-i18n="frev.upload-hint">Format: JPG, PNG, WEBP, HEIC (iPhone)</p>',
    'frev.upload-hint'
);

// 22. Step 2 h2
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Deskripsi Makanan</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="frev.step2-title">Deskripsi Makanan</h2>',
    'frev.step2-title'
);

// 23. Step 2 tip p
rep(
    '<p class="text-sm text-gray-600 mb-3">Jelaskan makanan ini (nama, rasa, tekstur, bahan, tempat, harga, dll)</p>',
    '<p class="text-sm text-gray-600 mb-3" data-i18n="frev.desc-tip">Jelaskan makanan ini (nama, rasa, tekstur, bahan, tempat, harga, dll)</p>',
    'frev.desc-tip'
);

// 24. Desc placeholder
rep(
    'placeholder="Contoh: Nasi Goreng Spesial dengan telur mata sapi, ayam fillet, dan kerupuk. Rasanya gurih dan pedas pas. Harga Rp 35.000 di Warung Nasi Pak Budi..."',
    'data-i18n-placeholder="frev.desc-placeholder" placeholder="Contoh: Nasi Goreng Spesial dengan telur mata sapi, ayam fillet, dan kerupuk. Rasanya gurih dan pedas pas. Harga Rp 35.000 di Warung Nasi Pak Budi..."',
    'frev.desc-placeholder'
);

// 25. Step 3 h2 (plain text, no nested span)
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Upload Foto Food Reviewer (Opsional)</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="frev.step3-title">Upload Foto Food Reviewer (Opsional)</h2>',
    'frev.step3-title'
);

// 26. Step 3 tip p
rep(
    '<p class="text-sm text-gray-600 mb-4">Upload foto reviewer untuk konsistensi karakter di semua scene. Jika tidak diupload, fokus pada makanan saja.</p>',
    '<p class="text-sm text-gray-600 mb-4" data-i18n="frev.step3-tip">Upload foto reviewer untuk konsistensi karakter di semua scene. Jika tidak diupload, fokus pada makanan saja.</p>',
    'frev.step3-tip'
);

// 27. Model click p
rep(
    '<p class="text-gray-700 font-medium">Klik untuk upload foto reviewer</p>',
    '<p class="text-gray-700 font-medium" data-i18n="frev.model-click">Klik untuk upload foto reviewer</p>',
    'frev.model-click'
);

// 28. Model hint p
rep(
    '<p class="text-xs text-gray-500 mt-1">Opsional - untuk konsistensi model di semua scene</p>',
    '<p class="text-xs text-gray-500 mt-1" data-i18n="frev.model-hint">Opsional - untuk konsistensi model di semua scene</p>',
    'frev.model-hint'
);

// 29. Step 4 h2 (plain text, no nested span)
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Tema Visual (Opsional)</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="frev.step4-title">Tema Visual (Opsional)</h2>',
    'frev.step4-title'
);

// 30. Step 4 tip p
rep(
    '<p class="text-sm text-gray-600 mb-3">Atur tema atau mood visual untuk review (kosongkan jika default)</p>',
    '<p class="text-sm text-gray-600 mb-3" data-i18n="frev.step4-tip">Atur tema atau mood visual untuk review (kosongkan jika default)</p>',
    'frev.step4-tip'
);

// 31. Theme placeholder
rep(
    'placeholder="Contoh: natural lighting, cozy cafe ambience, street food vibes, fine dining elegant, dll..."',
    'data-i18n-placeholder="frev.theme-placeholder" placeholder="Contoh: natural lighting, cozy cafe ambience, street food vibes, fine dining elegant, dll..."',
    'frev.theme-placeholder'
);

// 32. Step 6 Jumlah Scene — reuse review.count-title
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Jumlah Scene</h2>\r\n                        </div>\r\n                        <div id="food-count-selection"',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="review.count-title">Jumlah Scene</h2>\r\n                        </div>\r\n                        <div id="food-count-selection"',
    'frev.count-title'
);

// 33. Generate button
rep(
    '<span>Buat <span id="food-count-text">7</span> Scene Food Review</span>',
    '<span><span data-i18n="review.gen-prefix">Buat</span> <span id="food-count-text">7</span> <span data-i18n="frev.gen-suffix">Scene Food Review</span></span>',
    'frev.gen-suffix'
);

// 34. Results tip p
rep(
    '<p class="text-gray-600">Klik scene untuk preview, edit, regenerate, atau download</p>',
    '<p class="text-gray-600" data-i18n="frev.results-tip">Klik scene untuk preview, edit, regenerate, atau download</p>',
    'frev.results-tip'
);

// ============================================================
// PRODUCT ADS (content-product-ads, 13191-13348)
// ============================================================

// 35. Desc p (multiline)
repR(
    '(<p class="text-lg text-gray-500 mt-2 max-w-3xl mx-auto">)[\\r\\n\\s]*(Solusi AI untuk konten promosi brand Anda\\.)[\\r\\n\\s]*(</p>)',
    '$1\r\n                        <span data-i18n="ads.desc">$2</span>\r\n                    $3',
    'ads.desc'
);

// 36. Step 1 h2 — reuse review.step1-title (same text)
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Unggah Gambar Produk</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="review.step1-title">Unggah Gambar Produk</h2>',
    'ads.step1-title'
);

// 37. Upload click span — reuse review.upload-click (same text)
rep(
    '<span class="font-medium text-base">Klik atau seret gambar ke sini</span>',
    '<span class="font-medium text-base" data-i18n="review.upload-click">Klik atau seret gambar ke sini</span>',
    'ads.upload-click'
);

// 38. Upload hint — reuse review.upload-hint (same text)
rep(
    '<span class="text-xs mt-2 text-gray-400">PNG, JPG, WEBP (Bisa lebih dari satu)</span>',
    '<span class="text-xs mt-2 text-gray-400" data-i18n="review.upload-hint">PNG, JPG, WEBP (Bisa lebih dari satu)</span>',
    'ads.upload-hint'
);

// 39. Step 2 h2 — reuse review.step2-title (same text)
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Deskripsi Produk</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="review.step2-title">Deskripsi Produk</h2>',
    'ads.step2-title'
);

// 40. Desc placeholder — reuse review.desc-placeholder (same text)
rep(
    'placeholder="Deskripsikan produk Anda secara detail... atau gunakan AI Generate"\r\n                                <p class="text-xs text-gray-400 mt-2">💡 Tip: Deskripsi detail menghasilkan iklan',
    'data-i18n-placeholder="review.desc-placeholder" placeholder="Deskripsikan produk Anda secara detail... atau gunakan AI Generate"\r\n                                <p class="text-xs text-gray-400 mt-2">💡 Tip: Deskripsi detail menghasilkan iklan',
    'ads.desc-placeholder'
);

// 41. Desc tip p (different ending from review)
rep(
    '<p class="text-xs text-gray-400 mt-2">💡 Tip: Deskripsi detail menghasilkan iklan yang lebih menarik</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="ads.desc-tip">💡 Tip: Deskripsi detail menghasilkan iklan yang lebih menarik</p>',
    'ads.desc-tip'
);

// 42. Step 3 h2 nested span — reuse review keys (SECOND occurrence now)
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Foto Model <span class="text-sm text-gray-400">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold text-gray-800"><span data-i18n="review.step3-title">Foto Model</span> <span class="text-sm text-gray-400" data-i18n="review.optional-label">(Opsional)</span></h2>',
    'ads.step3-title'
);

// 43. Model click span — reuse review.model-click (SECOND occurrence now)
rep(
    '<span class="font-medium">Klik untuk pilih foto model</span>',
    '<span class="font-medium" data-i18n="review.model-click">Klik untuk pilih foto model</span>',
    'ads.model-click'
);

// 44. Model tip — reuse review.model-tip (SECOND occurrence now)
rep(
    '<p class="text-xs text-gray-400 mt-2">🎭 Upload foto model untuk hasil lebih personal</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="review.model-tip">🎭 Upload foto model untuk hasil lebih personal</p>',
    'ads.model-tip'
);

// 45. Step 4 h2 nested span — reuse review keys (second occurrence)
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Tema Foto <span class="text-sm text-gray-400">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold text-gray-800"><span data-i18n="review.step4-title">Tema Foto</span> <span class="text-sm text-gray-400" data-i18n="review.optional-label">(Opsional)</span></h2>',
    'ads.step4-title'
);

// 46. Theme placeholder — reuse review.theme-placeholder (same text)
rep(
    'placeholder="Contoh: Minimalis & bersih, nuansa alam tropis, futuristik dengan neon..."\r\n                                <p class="text-xs text-gray-400 mt-2">🎨 Tentukan style visual',
    'data-i18n-placeholder="review.theme-placeholder" placeholder="Contoh: Minimalis & bersih, nuansa alam tropis, futuristik dengan neon..."\r\n                                <p class="text-xs text-gray-400 mt-2">🎨 Tentukan style visual',
    'ads.theme-placeholder'
);

// 47. Theme tip — reuse review.theme-tip (same text, second occurrence)
rep(
    '<p class="text-xs text-gray-400 mt-2">🎨 Tentukan style visual untuk hasil lebih menarik</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="review.theme-tip">🎨 Tentukan style visual untuk hasil lebih menarik</p>',
    'ads.theme-tip'
);

// 48. Step 5 narrator h2
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Pilih Suara Narator</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="ads.narrator-title">Pilih Suara Narator</h2>',
    'ads.narrator-title'
);

// 49. Narrator tip p
rep(
    '<p class="text-xs text-gray-400 mt-2">🎬 Pilih narator sesuai target audiens iklan</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="ads.narrator-tip">🎬 Pilih narator sesuai target audiens iklan</p>',
    'ads.narrator-tip'
);

// 50. Step 6 Pilih Rasio Aspek
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Pilih Rasio Aspek</h2>\r\n                                </div>\r\n                                <div id="ads-ratio-selection"',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="ads.ratio-title">Pilih Rasio Aspek</h2>\r\n                                </div>\r\n                                <div id="ads-ratio-selection"',
    'ads.ratio-title'
);

// 51. Step 7 Jumlah Scene — reuse review.count-title
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Jumlah Scene</h2>\r\n                                </div>\r\n                                <div id="ads-count-selection"',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="review.count-title">Jumlah Scene</h2>\r\n                                </div>\r\n                                <div id="ads-count-selection"',
    'ads.count-title'
);

// 52. Generate button
rep(
    '<span>Buat <span id="ads-count-text">7</span> Scene Iklan</span>',
    '<span><span data-i18n="review.gen-prefix">Buat</span> <span id="ads-count-text">7</span> <span data-i18n="ads.gen-suffix">Scene Iklan</span></span>',
    'ads.gen-suffix'
);

// ============================================================
// i18n DICT — EN keys (insert after 'review.gen-suffix':'Scene Review',)
// ============================================================
rep(
    `'review.gen-suffix':'Scene Review',\r\n            },`,
    `'review.gen-suffix':'Scene Review',\r\n                // skincare review\r\n                'skincare.desc':'Create 10 professional skincare review scenes for your video content.',\r\n                'skincare.step1-title':'Upload Skincare Product',\r\n                'skincare.upload-click':'Click or drag product image',\r\n                'skincare.upload-hint':'PNG, JPG, WEBP, HEIC (Can upload more than one)',\r\n                'skincare.step2-title':'Skincare Description',\r\n                'skincare.desc-placeholder':'Describe your skincare product: type, benefits, key ingredients, texture...',\r\n                'skincare.desc-tip':'\uD83D\uDCA1 Example: Vitamin C Serum with Niacinamide, brightens skin, reduces dark spots',\r\n                'skincare.model-click':'Upload reviewer/model photo',\r\n                'skincare.model-tip':'\uD83C\uDFAD For more personal review with reviewer face',\r\n                'skincare.theme-title':'Select Review Theme',\r\n                'skincare.theme-commercial-sub':'Professional & luxurious product ad',\r\n                'skincare.theme-ps-sub':'Before-after skin issues',\r\n                'skincare.theme-ugc-sub':'Honest user-style review',\r\n                'skincare.theme-vs-sub':'Comparison of 2+ products',\r\n                'skincare.theme-science-sub':'Ingredients education & skincare routine',\r\n                'skincare.theme-asmr-sub':'Satisfying & relaxing visuals',\r\n                'skincare.theme-custom-sub':'Write your own theme as needed',\r\n                'skincare.theme-placeholder':'Example: Clean & minimalist white background, aesthetic pink vibes, natural lighting outdoor...',\r\n                'skincare.vs-tip':'For VS theme, upload 2+ skincare products in Step 1',\r\n                'skincare.gen-suffix':'Skincare Review Scenes',\r\n                // food review\r\n                'frev.desc':'Create food reviews like TikTokers & Instagram influencers with AI',\r\n                'frev.step1-title':'Upload Food Photos',\r\n                'frev.upload-tip':'Upload 1 or more food photos to review (max 5 photos)',\r\n                'frev.upload-click':'Click to upload food photo',\r\n                'frev.upload-hint':'Format: JPG, PNG, WEBP, HEIC (iPhone)',\r\n                'frev.step2-title':'Food Description',\r\n                'frev.desc-tip':'Describe this food (name, taste, texture, ingredients, location, price, etc.)',\r\n                'frev.desc-placeholder':'Example: Special Fried Rice with sunny side egg, fillet chicken, and crackers. Savory and perfectly spicy. Price Rp 35,000 at Warung Nasi Pak Budi...',\r\n                'frev.step3-title':'Upload Food Reviewer Photo (Optional)',\r\n                'frev.step3-tip':'Upload reviewer photo for character consistency across all scenes. If not uploaded, focus on food only.',\r\n                'frev.model-click':'Click to upload reviewer photo',\r\n                'frev.model-hint':'Optional - for model consistency across all scenes',\r\n                'frev.step4-title':'Visual Theme (Optional)',\r\n                'frev.step4-tip':'Set visual theme or mood for review (leave empty for default)',\r\n                'frev.theme-placeholder':'Example: natural lighting, cozy cafe ambience, street food vibes, fine dining elegant, etc...',\r\n                'frev.gen-suffix':'Scene Food Review',\r\n                'frev.results-tip':'Click scene to preview, edit, regenerate, or download',\r\n                // product ads\r\n                'ads.desc':'AI solution for your brand promotional content.',\r\n                'ads.desc-tip':'\uD83D\uDCA1 Tip: Detailed descriptions produce more engaging ads',\r\n                'ads.narrator-title':'Select Narrator Voice',\r\n                'ads.narrator-tip':'\uD83C\uDFAC Choose narrator matching your ad target audience',\r\n                'ads.ratio-title':'Select Aspect Ratio',\r\n                'ads.gen-suffix':'Ad Scenes',\r\n            },`,
    'i18n EN: skincare+frev+ads keys'
);

// ============================================================
// i18n DICT — ID keys (insert after 'review.gen-suffix':'Scene Review',)
// ============================================================
rep(
    `'review.gen-suffix':'Scene Review',\r\n            }`,
    `'review.gen-suffix':'Scene Review',\r\n                // skincare review\r\n                'skincare.desc':'Buat 10 scene review skincare profesional untuk konten video Anda.',\r\n                'skincare.step1-title':'Unggah Produk Skincare',\r\n                'skincare.upload-click':'Klik atau seret gambar produk',\r\n                'skincare.upload-hint':'PNG, JPG, WEBP, HEIC (Bisa lebih dari satu)',\r\n                'skincare.step2-title':'Deskripsi Skincare',\r\n                'skincare.desc-placeholder':'Deskripsikan produk skincare Anda: jenis produk, manfaat, bahan utama, tekstur...',\r\n                'skincare.desc-tip':'\uD83D\uDCA1 Contoh: Serum Vitamin C dengan Niacinamide, mencerahkan kulit, mengurangi flek hitam',\r\n                'skincare.model-click':'Upload foto reviewer/model',\r\n                'skincare.model-tip':'\uD83C\uDFAD Untuk review lebih personal dengan wajah reviewer',\r\n                'skincare.theme-title':'Pilih Tema Review',\r\n                'skincare.theme-commercial-sub':'Iklan produk profesional & mewah',\r\n                'skincare.theme-ps-sub':'Before-after masalah kulit',\r\n                'skincare.theme-ugc-sub':'Review jujur ala pengguna',\r\n                'skincare.theme-vs-sub':'Perbandingan 2+ produk',\r\n                'skincare.theme-science-sub':'Edukasi ingredients & skincare routine',\r\n                'skincare.theme-asmr-sub':'Visual satisfying & relaxing',\r\n                'skincare.theme-custom-sub':'Tulis tema sendiri sesuai kebutuhan',\r\n                'skincare.theme-placeholder':'Contoh: Clean & minimalis dengan background putih, aesthetic pink vibes, natural lighting outdoor...',\r\n                'skincare.vs-tip':'Untuk tema VS, upload 2+ produk skincare di Step 1',\r\n                'skincare.gen-suffix':'Scene Skincare Review',\r\n                // food review\r\n                'frev.desc':'Buat review makanan seperti TikToker & Selebgram dengan AI',\r\n                'frev.step1-title':'Upload Foto Makanan',\r\n                'frev.upload-tip':'Upload 1 atau lebih foto makanan yang akan direview (maksimal 5 foto)',\r\n                'frev.upload-click':'Klik untuk upload foto makanan',\r\n                'frev.upload-hint':'Format: JPG, PNG, WEBP, HEIC (iPhone)',\r\n                'frev.step2-title':'Deskripsi Makanan',\r\n                'frev.desc-tip':'Jelaskan makanan ini (nama, rasa, tekstur, bahan, tempat, harga, dll)',\r\n                'frev.desc-placeholder':'Contoh: Nasi Goreng Spesial dengan telur mata sapi, ayam fillet, dan kerupuk. Rasanya gurih dan pedas pas. Harga Rp 35.000 di Warung Nasi Pak Budi...',\r\n                'frev.step3-title':'Upload Foto Food Reviewer (Opsional)',\r\n                'frev.step3-tip':'Upload foto reviewer untuk konsistensi karakter di semua scene. Jika tidak diupload, fokus pada makanan saja.',\r\n                'frev.model-click':'Klik untuk upload foto reviewer',\r\n                'frev.model-hint':'Opsional - untuk konsistensi model di semua scene',\r\n                'frev.step4-title':'Tema Visual (Opsional)',\r\n                'frev.step4-tip':'Atur tema atau mood visual untuk review (kosongkan jika default)',\r\n                'frev.theme-placeholder':'Contoh: natural lighting, cozy cafe ambience, street food vibes, fine dining elegant, dll...',\r\n                'frev.gen-suffix':'Scene Food Review',\r\n                'frev.results-tip':'Klik scene untuk preview, edit, regenerate, atau download',\r\n                // product ads\r\n                'ads.desc':'Solusi AI untuk konten promosi brand Anda.',\r\n                'ads.desc-tip':'\uD83D\uDCA1 Tip: Deskripsi detail menghasilkan iklan yang lebih menarik',\r\n                'ads.narrator-title':'Pilih Suara Narator',\r\n                'ads.narrator-tip':'\uD83C\uDFAC Pilih narator sesuai target audiens iklan',\r\n                'ads.ratio-title':'Pilih Rasio Aspek',\r\n                'ads.gen-suffix':'Scene Iklan',\r\n            }`,
    'i18n ID: skincare+frev+ads keys'
);

// ================================================================
console.log(`\nDone: ${ok} OK, ${miss} MISS`);

// Verify syntax
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
