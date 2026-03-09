// i18n_patch11.js — Pose Fashion, Food Selfie, Product Review
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
// POSE FASHION (content-pose-fashion)
// ============================================================

// 1. Upload click text
rep(
    '<p class="font-semibold text-lg">Klik atau seret gambar</p>',
    '<p class="font-semibold text-lg" data-i18n="pose.upload-click">Klik atau seret gambar</p>',
    'pose.upload-click'
);

// 2. Upload hint
rep(
    '<p class="text-sm text-gray-500 mt-1">PNG, JPG, atau WEBP (Maks. 5MB)</p>',
    '<p class="text-sm text-gray-500 mt-1" data-i18n="pose.upload-hint">PNG, JPG, atau WEBP (Maks. 5MB)</p>',
    'pose.upload-hint'
);

// 3. Uploaded label
rep(
    '<p class="font-semibold mb-2">Gambar yang diunggah:</p>',
    '<p class="font-semibold mb-2" data-i18n="pose.uploaded-label">Gambar yang diunggah:</p>',
    'pose.uploaded-label'
);

// 4. Custom Pose title h3 (has <i> child — applyText preserves it)
rep(
    '<h3 class="text-xl font-bold text-gray-800 flex items-center">\r\n                                <i class="fas fa-magic mr-2 text-cyan-600"></i>Custom Pose (Opsional)',
    '<h3 class="text-xl font-bold text-gray-800 flex items-center" data-i18n="pose.custom-title">\r\n                                <i class="fas fa-magic mr-2 text-cyan-600"></i>Custom Pose (Opsional)',
    'pose.custom-title'
);

// 5. Custom desc p
rep(
    '<p class="text-sm text-gray-600 mt-1">Tulis deskripsi pose yang Anda inginkan. Jika kosong, akan menggunakan pose default.</p>',
    '<p class="text-sm text-gray-600 mt-1" data-i18n="pose.custom-desc">Tulis deskripsi pose yang Anda inginkan. Jika kosong, akan menggunakan pose default.</p>',
    'pose.custom-desc'
);

// 6. Tips text span (has <strong> child — applyText only replaces text nodes)
rep(
    '<span><strong>Tips:</strong> Jelaskan pose dengan detail dalam bahasa Inggris untuk hasil terbaik. Contoh: "confident standing pose with arms crossed", "elegant sitting pose on chair", "dynamic action pose", dll.</span>',
    '<span data-i18n="pose.tips"><strong>Tips:</strong> Jelaskan pose dengan detail dalam bahasa Inggris untuk hasil terbaik. Contoh: "confident standing pose with arms crossed", "elegant sitting pose on chair", "dynamic action pose", dll.</span>',
    'pose.tips'
);

// 7. Select pose button — wrap text in span
rep(
    '                                Pilih 6 Pose\r\n                            </span>',
    '                                <span data-i18n="pose.select-btn">Pilih 6 Pose</span>\r\n                            </span>',
    'pose.select-btn'
);

// 8. Results title h2
rep(
    '<h2 class="text-2xl font-bold text-gray-800">Hasil Pose...</h2>',
    '<h2 class="text-2xl font-bold text-gray-800" data-i18n="pose.results-title">Hasil Pose...</h2>',
    'pose.results-title'
);

// 9. Download all (poses panel)
repR(
    '(id="poses-download-all-btn"[^>]*>[\\r\\n\\s]*<i class="fas fa-download"></i>[\\r\\n\\s]*)Download Semua([\\r\\n\\s]*</button>[\\r\\n\\s]*</div>[\\r\\n\\s]*<div id="poses-resultsGrid")',
    '$1<span data-i18n="pose.download-all">Download Semua</span>$2',
    'pose.download-all'
);

// ============================================================
// FOOD SELFIE (content-food-selfie)
// ============================================================

// 10. Step 1 h3 upload food
repR(
    '(<div class="w-10 h-10 rounded-xl[^>]*bg-gradient-to-br from-indigo-600 to-purple-600">1</div>[\\r\\n\\s]+)<h3 class="text-lg font-bold text-gray-800">Unggah Foto Makanan</h3>',
    '$1<h3 class="text-lg font-bold text-gray-800" data-i18n="food.upload-title">Unggah Foto Makanan</h3>',
    'food.upload-title'
);

// 11. Food upload click text
rep(
    '<p class="text-sm">Klik atau seret foto makanan</p>',
    '<p class="text-sm" data-i18n="food.upload-click">Klik atau seret foto makanan</p>',
    'food.upload-click'
);

// 12. Model upload pick span
rep(
    '<span class="text-sm text-purple-600 font-medium">Pilih Foto Model/Orang</span>',
    '<span class="text-sm text-purple-600 font-medium" data-i18n="food.model-pick">Pilih Foto Model/Orang</span>',
    'food.model-pick'
);

// 13. Model hint span
rep(
    '<span class="text-xs text-gray-500 mt-1">Orang ini akan muncul di foto dengan makanan</span>',
    '<span class="text-xs text-gray-500 mt-1" data-i18n="food.model-hint">Orang ini akan muncul di foto dengan makanan</span>',
    'food.model-hint'
);

// 14. Model confirm p (has <i> child)
rep(
    '<p class="text-xs text-green-600 mt-1 text-center font-medium">\r\n                                            <i class="fas fa-check-circle mr-1"></i> Model akan muncul di foto bersama makanan\r\n                                        </p>',
    '<p class="text-xs text-green-600 mt-1 text-center font-medium" data-i18n="food.model-confirm">\r\n                                            <i class="fas fa-check-circle mr-1"></i> Model akan muncul di foto bersama makanan\r\n                                        </p>',
    'food.model-confirm'
);

// 15. Model tip p
rep(
    '<p class="text-xs text-gray-500 mt-2">\r\n                                        💡 Upload foto orang yang akan muncul di foto bersama makanan sesuai tema\r\n                                    </p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="food.model-tip">\r\n                                        💡 Upload foto orang yang akan muncul di foto bersama makanan sesuai tema\r\n                                    </p>',
    'food.model-tip'
);

// 16. Step 2 h3 aspect ratio
repR(
    '(<div class="w-10 h-10 rounded-xl[^>]*bg-gradient-to-br from-indigo-600 to-purple-600">2</div>[\\r\\n\\s]+)<h3 class="text-lg font-bold text-gray-800">Pilih Rasio Aspek</h3>',
    '$1<h3 class="text-lg font-bold text-gray-800" data-i18n="food.ratio-title">Pilih Rasio Aspek</h3>',
    'food.ratio-title'
);

// 17. Step 3 h3 theme
repR(
    '(<div class="w-10 h-10 rounded-xl[^>]*bg-gradient-to-br from-indigo-600 to-purple-600">3</div>[\\r\\n\\s]+)<h3 class="text-lg font-bold text-gray-800">Pilih Tema</h3>',
    '$1<h3 class="text-lg font-bold text-gray-800" data-i18n="food.theme-title">Pilih Tema</h3>',
    'food.theme-title'
);

// 18. Section separator "Tema Lainnya"
rep(
    '<span class="text-xs font-bold text-gray-400">Tema Lainnya</span>',
    '<span class="text-xs font-bold text-gray-400" data-i18n="food.section-other">Tema Lainnya</span>',
    'food.section-other'
);

// 19. Custom theme label (inside label tag)
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">✨ Tulis Tema Custom Anda:</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="food.custom-label">✨ Tulis Tema Custom Anda:</label>',
    'food.custom-label'
);

// 20. Custom theme tip
rep(
    '<p class="text-xs text-gray-500 mt-2">💡 Deskripsikan tema fotografi makanan yang Anda inginkan dengan detail</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="food.custom-tip">💡 Deskripsikan tema fotografi makanan yang Anda inginkan dengan detail</p>',
    'food.custom-tip'
);

// 21. Theme selection tip (nearby text)
rep(
    '<p class="text-xs text-gray-500 mt-2">💡 Pilih tema sesuai target konten Anda</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="food.theme-tip">💡 Pilih tema sesuai target konten Anda</p>',
    'food.theme-tip'
);

// 22. Custom bg title (has <i> child)
rep(
    '<p class="text-sm font-medium text-gray-700 mb-2">\r\n                                        <i class="fas fa-image mr-1"></i> Upload Background Custom (Opsional)\r\n                                    </p>',
    '<p class="text-sm font-medium text-gray-700 mb-2" data-i18n="food.bg-title">\r\n                                        <i class="fas fa-image mr-1"></i> Upload Background Custom (Opsional)\r\n                                    </p>',
    'food.bg-title'
);

// 23. Custom bg pick span
rep(
    '<span class="text-sm text-indigo-600">Pilih Background Custom</span>',
    '<span class="text-sm text-indigo-600" data-i18n="food.bg-pick">Pilih Background Custom</span>',
    'food.bg-pick'
);

// 24. Custom bg confirm p (has <i> child)
rep(
    '<p class="text-xs text-green-600 mt-1 text-center">\r\n                                                <i class="fas fa-check-circle mr-1"></i> Background custom akan digunakan\r\n                                            </p>',
    '<p class="text-xs text-green-600 mt-1 text-center" data-i18n="food.bg-confirm">\r\n                                                <i class="fas fa-check-circle mr-1"></i> Background custom akan digunakan\r\n                                            </p>',
    'food.bg-confirm'
);

// 25. Custom bg tip
rep(
    '<p class="text-xs text-gray-500 mt-2">\r\n                                            💡 Upload background sendiri atau gunakan tema di atas\r\n                                        </p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="food.bg-tip">\r\n                                            💡 Upload background sendiri atau gunakan tema di atas\r\n                                        </p>',
    'food.bg-tip'
);

// 26. Step 4 h3 Referensi — split nested span
rep(
    '<h3 class="text-lg font-bold text-gray-800">Referensi <span class="text-sm text-gray-500">(Opsional)</span></h3>',
    '<h3 class="text-lg font-bold text-gray-800"><span data-i18n="food.ref-title">Referensi</span> <span class="text-sm text-gray-500" data-i18n="food.ref-optional">(Opsional)</span></h3>',
    'food.ref-title+optional'
);

// 27. Ref hint p
rep(
    '<p class="text-xs">Komposisi referensi</p>',
    '<p class="text-xs" data-i18n="food.ref-hint">Komposisi referensi</p>',
    'food.ref-hint'
);

// ============================================================
// PRODUCT REVIEW (content-product-review)
// ============================================================

// 28. Desc p
repR(
    '(<p class="text-lg text-gray-500 mt-2 max-w-3xl mx-auto">)[\\r\\n\\s]+(Solusi AI untuk konten review produk afiliasi Anda\\.)[\\r\\n\\s]+(</p>)',
    '$1\r\n                        <span data-i18n="review.desc">$2</span>\r\n                    $3',
    'review.desc'
);

// 29. Step 1 h2
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Unggah Gambar Produk</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="review.step1-title">Unggah Gambar Produk</h2>',
    'review.step1-title'
);

// 30. Upload click span
rep(
    '<span class="font-medium text-base">Klik atau seret gambar ke sini</span>',
    '<span class="font-medium text-base" data-i18n="review.upload-click">Klik atau seret gambar ke sini</span>',
    'review.upload-click'
);

// 31. Upload hint span
rep(
    '<span class="text-xs mt-2 text-gray-400">PNG, JPG, WEBP (Bisa lebih dari satu)</span>',
    '<span class="text-xs mt-2 text-gray-400" data-i18n="review.upload-hint">PNG, JPG, WEBP (Bisa lebih dari satu)</span>',
    'review.upload-hint'
);

// 32. Step 2 h2
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Deskripsi Produk</h2>',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="review.step2-title">Deskripsi Produk</h2>',
    'review.step2-title'
);

// 33. Desc placeholder
rep(
    'placeholder="Deskripsikan produk Anda secara detail... atau gunakan AI Generate"',
    'data-i18n-placeholder="review.desc-placeholder" placeholder="Deskripsikan produk Anda secara detail... atau gunakan AI Generate"',
    'review.desc-placeholder'
);

// 34. Desc tip p
rep(
    '<p class="text-xs text-gray-400 mt-2">💡 Tip: Deskripsi detail menghasilkan review yang lebih berkualitas</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="review.desc-tip">💡 Tip: Deskripsi detail menghasilkan review yang lebih berkualitas</p>',
    'review.desc-tip'
);

// 35. Step 3 h2 — split nested span "Foto Model (Opsional)"
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Foto Model <span class="text-sm text-gray-400">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold text-gray-800"><span data-i18n="review.step3-title">Foto Model</span> <span class="text-sm text-gray-400" data-i18n="review.optional-label">(Opsional)</span></h2>',
    'review.step3-title+optional'
);

// 36. Model click span
rep(
    '<span class="font-medium">Klik untuk pilih foto model</span>',
    '<span class="font-medium" data-i18n="review.model-click">Klik untuk pilih foto model</span>',
    'review.model-click'
);

// 37. Model tip p
rep(
    '<p class="text-xs text-gray-400 mt-2">🎭 Upload foto model untuk hasil lebih personal</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="review.model-tip">🎭 Upload foto model untuk hasil lebih personal</p>',
    'review.model-tip'
);

// 38. Step 4 h2 — split nested span "Tema Foto (Opsional)"
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Tema Foto <span class="text-sm text-gray-400">(Opsional)</span></h2>',
    '<h2 class="text-xl font-semibold text-gray-800"><span data-i18n="review.step4-title">Tema Foto</span> <span class="text-sm text-gray-400" data-i18n="review.optional-label">(Opsional)</span></h2>',
    'review.step4-title+optional'
);

// 39. Theme placeholder
rep(
    'placeholder="Contoh: Minimalis & bersih, nuansa alam tropis, futuristik dengan neon..."',
    'data-i18n-placeholder="review.theme-placeholder" placeholder="Contoh: Minimalis & bersih, nuansa alam tropis, futuristik dengan neon..."',
    'review.theme-placeholder'
);

// 40. Theme tip p
rep(
    '<p class="text-xs text-gray-400 mt-2">🎨 Tentukan style visual untuk hasil lebih menarik</p>',
    '<p class="text-xs text-gray-400 mt-2" data-i18n="review.theme-tip">🎨 Tentukan style visual untuk hasil lebih menarik</p>',
    'review.theme-tip'
);

// 41. Step 6 h2 Jumlah Scene
rep(
    '<h2 class="text-xl font-semibold text-gray-800">Jumlah Scene</h2>\r\n                                </div>\r\n                                <div id="review-count-selection"',
    '<h2 class="text-xl font-semibold text-gray-800" data-i18n="review.count-title">Jumlah Scene</h2>\r\n                                </div>\r\n                                <div id="review-count-selection"',
    'review.count-title'
);

// 42. Generate button — restructure "Buat N Scene Review"
rep(
    '<span>Buat <span id="review-count-text">7</span> Scene Review</span>',
    '<span><span data-i18n="review.gen-prefix">Buat</span> <span id="review-count-text">7</span> <span data-i18n="review.gen-suffix">Scene Review</span></span>',
    'review.gen-prefix+suffix'
);

// ============================================================
// i18n DICT — EN keys (insert after 'religious.download-all')
// ============================================================
repR(
    "('religious\\.download-all':'Download All',)([\\r\\n\\s]+'mirror\\.desc1')",
    `$1\r\n                // pose fashion\r\n                'pose.upload-click':'Click or drag image',\r\n                'pose.upload-hint':'PNG, JPG, or WEBP (Max. 5MB)',\r\n                'pose.uploaded-label':'Uploaded image:',\r\n                'pose.custom-title':'Custom Pose (Optional)',\r\n                'pose.custom-desc':'Write the pose description you want. If empty, default pose will be used.',\r\n                'pose.tips':' Describe the pose in detail in English for best results. Example: "confident standing pose with arms crossed", "elegant sitting pose on chair", "dynamic action pose", etc.',\r\n                'pose.select-btn':'Select 6 Poses',\r\n                'pose.results-title':'Pose Results...',\r\n                'pose.download-all':'Download All',\r\n                // food selfie\r\n                'food.upload-title':'Upload Food Photo',\r\n                'food.upload-click':'Click or drag food photo',\r\n                'food.model-pick':'Select Model/Person Photo',\r\n                'food.model-hint':'This person will appear in the photo with the food',\r\n                'food.model-confirm':' Model will appear in photo with food',\r\n                'food.model-tip':'\uD83D\uDCA1 Upload a photo of the person who will appear in the food photo matching the theme',\r\n                'food.ratio-title':'Select Aspect Ratio',\r\n                'food.theme-title':'Select Theme',\r\n                'food.section-other':'Other Themes',\r\n                'food.custom-label':'\u2728 Write Your Custom Theme:',\r\n                'food.custom-tip':'\uD83D\uDCA1 Describe the food photography theme you want in detail',\r\n                'food.theme-tip':'\uD83D\uDCA1 Choose a theme that fits your content target',\r\n                'food.bg-title':' Upload Custom Background (Optional)',\r\n                'food.bg-pick':'Select Custom Background',\r\n                'food.bg-confirm':' Custom background will be used',\r\n                'food.bg-tip':'\uD83D\uDCA1 Upload your own background or use the theme above',\r\n                'food.ref-title':'Reference',\r\n                'food.ref-optional':'(Optional)',\r\n                'food.ref-hint':'Reference composition',\r\n                // product review\r\n                'review.desc':'AI solution for your affiliate product review content.',\r\n                'review.step1-title':'Upload Product Image',\r\n                'review.upload-click':'Click or drag image here',\r\n                'review.upload-hint':'PNG, JPG, WEBP (Can upload more than one)',\r\n                'review.step2-title':'Product Description',\r\n                'review.desc-placeholder':'Describe your product in detail... or use AI Generate',\r\n                'review.desc-tip':'\uD83D\uDCA1 Tip: Detailed descriptions produce higher quality reviews',\r\n                'review.step3-title':'Model Photo',\r\n                'review.optional-label':'(Optional)',\r\n                'review.model-click':'Click to select model photo',\r\n                'review.model-tip':'\uD83C\uDFAD Upload model photo for more personal results',\r\n                'review.step4-title':'Photo Theme',\r\n                'review.theme-placeholder':'Example: Minimalist & clean, tropical nature vibes, futuristic with neon...',\r\n                'review.theme-tip':'\uD83C\uDFA8 Define visual style for more attractive results',\r\n                'review.count-title':'Number of Scenes',\r\n                'review.gen-prefix':'Create',\r\n                'review.gen-suffix':'Scene Review',\r\n                $2`,
    'i18n EN: pose+food+review keys'
);

// ============================================================
// i18n DICT — ID keys (insert after 'religious.download-all' in ID section)
// ============================================================
repR(
    "('religious\\.download-all':'Download Semua',)([\\r\\n\\s]+'mirror\\.desc1')",
    `$1\r\n                // pose fashion\r\n                'pose.upload-click':'Klik atau seret gambar',\r\n                'pose.upload-hint':'PNG, JPG, atau WEBP (Maks. 5MB)',\r\n                'pose.uploaded-label':'Gambar yang diunggah:',\r\n                'pose.custom-title':'Custom Pose (Opsional)',\r\n                'pose.custom-desc':'Tulis deskripsi pose yang Anda inginkan. Jika kosong, akan menggunakan pose default.',\r\n                'pose.tips':' Jelaskan pose dengan detail dalam bahasa Inggris untuk hasil terbaik. Contoh: "confident standing pose with arms crossed", "elegant sitting pose on chair", "dynamic action pose", dll.',\r\n                'pose.select-btn':'Pilih 6 Pose',\r\n                'pose.results-title':'Hasil Pose...',\r\n                'pose.download-all':'Download Semua',\r\n                // food selfie\r\n                'food.upload-title':'Unggah Foto Makanan',\r\n                'food.upload-click':'Klik atau seret foto makanan',\r\n                'food.model-pick':'Pilih Foto Model/Orang',\r\n                'food.model-hint':'Orang ini akan muncul di foto dengan makanan',\r\n                'food.model-confirm':' Model akan muncul di foto bersama makanan',\r\n                'food.model-tip':'\uD83D\uDCA1 Upload foto orang yang akan muncul di foto bersama makanan sesuai tema',\r\n                'food.ratio-title':'Pilih Rasio Aspek',\r\n                'food.theme-title':'Pilih Tema',\r\n                'food.section-other':'Tema Lainnya',\r\n                'food.custom-label':'\u2728 Tulis Tema Custom Anda:',\r\n                'food.custom-tip':'\uD83D\uDCA1 Deskripsikan tema fotografi makanan yang Anda inginkan dengan detail',\r\n                'food.theme-tip':'\uD83D\uDCA1 Pilih tema sesuai target konten Anda',\r\n                'food.bg-title':' Upload Background Custom (Opsional)',\r\n                'food.bg-pick':'Pilih Background Custom',\r\n                'food.bg-confirm':' Background custom akan digunakan',\r\n                'food.bg-tip':'\uD83D\uDCA1 Upload background sendiri atau gunakan tema di atas',\r\n                'food.ref-title':'Referensi',\r\n                'food.ref-optional':'(Opsional)',\r\n                'food.ref-hint':'Komposisi referensi',\r\n                // product review\r\n                'review.desc':'Solusi AI untuk konten review produk afiliasi Anda.',\r\n                'review.step1-title':'Unggah Gambar Produk',\r\n                'review.upload-click':'Klik atau seret gambar ke sini',\r\n                'review.upload-hint':'PNG, JPG, WEBP (Bisa lebih dari satu)',\r\n                'review.step2-title':'Deskripsi Produk',\r\n                'review.desc-placeholder':'Deskripsikan produk Anda secara detail... atau gunakan AI Generate',\r\n                'review.desc-tip':'\uD83D\uDCA1 Tip: Deskripsi detail menghasilkan review yang lebih berkualitas',\r\n                'review.step3-title':'Foto Model',\r\n                'review.optional-label':'(Opsional)',\r\n                'review.model-click':'Klik untuk pilih foto model',\r\n                'review.model-tip':'\uD83C\uDFAD Upload foto model untuk hasil lebih personal',\r\n                'review.step4-title':'Tema Foto',\r\n                'review.theme-placeholder':'Contoh: Minimalis & bersih, nuansa alam tropis, futuristik dengan neon...',\r\n                'review.theme-tip':'\uD83C\uDFA8 Tentukan style visual untuk hasil lebih menarik',\r\n                'review.count-title':'Jumlah Scene',\r\n                'review.gen-prefix':'Buat',\r\n                'review.gen-suffix':'Scene Review',\r\n                $2`,
    'i18n ID: pose+food+review keys'
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
