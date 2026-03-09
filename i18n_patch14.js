// i18n_patch14.js — Size Guide, Video Frames, Vehicle Modifier
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
// SIZE GUIDE
// ================================================================

// 1. step1-title "Upload Product Photo" h2 — sizeguide (1st occurrence)
rep(
    '<h2 class="text-xl font-bold text-gray-800">Upload Product Photo</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step1-title">Upload Product Photo</h2>',
    'sizeguide.step1-title'
);

// 2. upload-click — sizeguide (1st occurrence)
rep(
    '<p class="text-lg font-semibold text-gray-700">Click to upload product photo</p>',
    '<p class="text-lg font-semibold text-gray-700" data-i18n="sizeguide.upload-click">Click to upload product photo</p>',
    'sizeguide.upload-click'
);

// 3. upload-hint — sizeguide (1st occurrence)
rep(
    '<p class="text-sm text-gray-500 mt-2">PNG, JPG, WEBP, HEIC up to 10MB</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="sizeguide.upload-hint">PNG, JPG, WEBP, HEIC up to 10MB</p>',
    'sizeguide.upload-hint'
);

// 4. remove-photo button (sizeguide)
rep(
    'id="sizeguide-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">',
    'id="sizeguide-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="unboxing.remove-photo">',
    'sizeguide.remove-photo'
);

// 5. step2-title "Select Comparison Object"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Select Comparison Object</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step2-title">Select Comparison Object</h2>',
    'sizeguide.step2-title'
);

// 6. step3-title "Product Dimensions (Optional)" — split into spans
rep(
    '<h2 class="text-xl font-bold text-gray-800">Product Dimensions (Optional)</h2>',
    '<h2 class="text-xl font-bold text-gray-800"><span data-i18n="sizeguide.step3-title">Product Dimensions</span> <span class="text-sm text-gray-400" data-i18n="review.optional-label">(Optional)</span></h2>',
    'sizeguide.step3-title'
);

// 7. dimension labels
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">Width (cm)</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="sizeguide.width-label">Width (cm)</label>',
    'sizeguide.width-label'
);
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">Height (cm)</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="sizeguide.height-label">Height (cm)</label>',
    'sizeguide.height-label'
);
rep(
    '<label class="block text-sm font-semibold text-gray-700 mb-2">Depth (cm)</label>',
    '<label class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="sizeguide.depth-label">Depth (cm)</label>',
    'sizeguide.depth-label'
);

// 8. step4-title "Guide Style"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Guide Style</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step4-title">Guide Style</h2>',
    'sizeguide.step4-title'
);

// 9. step5-title "Aspect Ratio" — sizeguide (1st of 3 occurrences)
rep(
    '<h2 class="text-xl font-bold text-gray-800">Aspect Ratio</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step5-title">Aspect Ratio</h2>',
    'sizeguide.step5-title'
);

// 10. step6-title "Number of Variations" — sizeguide (1st of 2 occurrences)
rep(
    '<h2 class="text-xl font-bold text-gray-800">Number of Variations</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step6-title">Number of Variations</h2>',
    'sizeguide.step6-title'
);

// 11. step7-title "Generate Size Guides"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Generate Size Guides</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step7-title">Generate Size Guides</h2>',
    'sizeguide.step7-title'
);

// 12. generate button prefix/suffix
rep(
    '<i class="fas fa-magic mr-2"></i> Generate <span id="sizeguide-count-text">4</span> Size Guides',
    '<i class="fas fa-magic mr-2"></i> <span data-i18n="sizeguide.gen-prefix">Generate </span><span id="sizeguide-count-text">4</span><span data-i18n="sizeguide.gen-suffix"> Size Guides</span>',
    'sizeguide.gen-btn'
);

// 13. loading text span
rep(
    '<span id="sizeguide-loading-text">Generating size guides...</span>',
    '<span id="sizeguide-loading-text" data-i18n="sizeguide.loading-text">Generating size guides...</span>',
    'sizeguide.loading-text'
);

// 14. results suffix
rep(
    '<span id="sizeguide-results-count">4</span> Size Guides Generated!',
    '<span id="sizeguide-results-count">4</span><span data-i18n="sizeguide.results-suffix"> Size Guides Generated!</span>',
    'sizeguide.results-suffix'
);

// 15. download-all button (sizeguide)
rep(
    'id="sizeguide-download-all-btn" class="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">',
    'id="sizeguide-download-all-btn" class="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-i18n="sizeguide.download-all">',
    'sizeguide.download-all'
);

// 16. empty-desc
rep(
    '<p class="text-sm">Upload produk dan pilih settings untuk generate size guides</p>',
    '<p class="text-sm" data-i18n="sizeguide.empty-desc">Upload produk dan pilih settings untuk generate size guides</p>',
    'sizeguide.empty-desc'
);

// ================================================================
// VIDEO FRAMES (reuse sizeguide keys where text is identical)
// ================================================================

// 17. step1-title — videoframes (2nd occurrence of "Upload Product Photo")
rep(
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step1-title">Upload Product Photo</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step1-title">Upload Product Photo</h2>',
    'vframes.step1-title-SKIP'
);
// Actually the 2nd h2 still has no data-i18n — re-approach: add to videoframes h2 using unique context
rep(
    '<h2 class="text-xl font-bold text-gray-800">Upload Product Photo</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step1-title">Upload Product Photo</h2>',
    'vframes.step1-title'
);

// 18. upload-click — videoframes (2nd occurrence)
rep(
    '<p class="text-lg font-semibold text-gray-700">Click to upload product photo</p>',
    '<p class="text-lg font-semibold text-gray-700" data-i18n="sizeguide.upload-click">Click to upload product photo</p>',
    'vframes.upload-click'
);

// 19. upload-hint — videoframes (2nd occurrence)
rep(
    '<p class="text-sm text-gray-500 mt-2">PNG, JPG, WEBP, HEIC up to 10MB</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="sizeguide.upload-hint">PNG, JPG, WEBP, HEIC up to 10MB</p>',
    'vframes.upload-hint'
);

// 20. remove-photo (videoframes)
rep(
    'id="videoframes-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">',
    'id="videoframes-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="unboxing.remove-photo">',
    'vframes.remove-photo'
);

// 21. step2-title "Animation Type"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Animation Type</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="vframes.step2-title">Animation Type</h2>',
    'vframes.step2-title'
);

// 22. step3-title "Background Style"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Background Style</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="vframes.step3-title">Background Style</h2>',
    'vframes.step3-title'
);

// 23. step4-title "Number of Frames"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Number of Frames</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="vframes.step4-title">Number of Frames</h2>',
    'vframes.step4-title'
);

// 24. step5-title "Aspect Ratio" — videoframes (2nd occurrence)
rep(
    '<h2 class="text-xl font-bold text-gray-800">Aspect Ratio</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step5-title">Aspect Ratio</h2>',
    'vframes.step5-title'
);

// 25. step6-title "Generate Video Frames"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Generate Video Frames</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="vframes.step6-title">Generate Video Frames</h2>',
    'vframes.step6-title'
);

// 26. generate button prefix/suffix
rep(
    '<i class="fas fa-magic mr-2"></i> Generate <span id="videoframes-count-text">12</span> Video Frames',
    '<i class="fas fa-magic mr-2"></i> <span data-i18n="sizeguide.gen-prefix">Generate </span><span id="videoframes-count-text">12</span><span data-i18n="vframes.gen-suffix"> Video Frames</span>',
    'vframes.gen-btn'
);

// 27. loading text
rep(
    '<span id="videoframes-loading-text">Generating video frames...</span>',
    '<span id="videoframes-loading-text" data-i18n="vframes.loading-text">Generating video frames...</span>',
    'vframes.loading-text'
);

// 28. results suffix
rep(
    '<span id="videoframes-results-count">12</span> Video Frames Generated!',
    '<span id="videoframes-results-count">12</span><span data-i18n="vframes.results-suffix"> Video Frames Generated!</span>',
    'vframes.results-suffix'
);

// 29. download-all (videoframes)
rep(
    'id="videoframes-download-all-btn" class="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">',
    'id="videoframes-download-all-btn" class="bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-i18n="sizeguide.download-all">',
    'vframes.download-all'
);

// 30. empty-desc
rep(
    '<p class="text-sm">Upload produk dan pilih settings untuk generate video frames</p>',
    '<p class="text-sm" data-i18n="vframes.empty-desc">Upload produk dan pilih settings untuk generate video frames</p>',
    'vframes.empty-desc'
);

// ================================================================
// VEHICLE MODIFIER
// ================================================================

// 31. step1-title "Upload Foto Mobil/Motor"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Upload Foto Mobil/Motor</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="vehicle.step1-title">Upload Foto Mobil/Motor</h2>',
    'vehicle.step1-title'
);

// 32. upload-click "Click to upload vehicle photo"
rep(
    '<p class="text-lg font-semibold text-gray-700">Click to upload vehicle photo</p>',
    '<p class="text-lg font-semibold text-gray-700" data-i18n="vehicle.upload-click">Click to upload vehicle photo</p>',
    'vehicle.upload-click'
);

// 33. upload-hint (3rd occurrence)
rep(
    '<p class="text-sm text-gray-500 mt-2">PNG, JPG, WEBP, HEIC up to 10MB</p>',
    '<p class="text-sm text-gray-500 mt-2" data-i18n="sizeguide.upload-hint">PNG, JPG, WEBP, HEIC up to 10MB</p>',
    'vehicle.upload-hint'
);

// 34. remove-photo (vehicle)
rep(
    'id="vehicle-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">',
    'id="vehicle-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="unboxing.remove-photo">',
    'vehicle.remove-photo'
);

// 35. step2-title "Jenis Kendaraan"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Jenis Kendaraan</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="vehicle.step2-title">Jenis Kendaraan</h2>',
    'vehicle.step2-title'
);

// 36. type-car "Mobil" option button div
rep(
    '<button type="button" data-vehicletype="car" class="option-btn-vehicle selected">\n                            <i class="fas fa-car text-2xl mb-1"></i>\n                            <div class="font-semibold">Mobil</div>',
    '<button type="button" data-vehicletype="car" class="option-btn-vehicle selected">\n                            <i class="fas fa-car text-2xl mb-1"></i>\n                            <div class="font-semibold" data-i18n="vehicle.type-car">Mobil</div>',
    'vehicle.type-car'
);

// 37. type-moto "Motor" option button div
rep(
    '<button type="button" data-vehicletype="motorcycle" class="option-btn-vehicle">\n                            <i class="fas fa-motorcycle text-2xl mb-1"></i>\n                            <div class="font-semibold">Motor</div>',
    '<button type="button" data-vehicletype="motorcycle" class="option-btn-vehicle">\n                            <i class="fas fa-motorcycle text-2xl mb-1"></i>\n                            <div class="font-semibold" data-i18n="vehicle.type-moto">Motor</div>',
    'vehicle.type-moto'
);

// 38. step3-title "Kategori Modifikasi"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Kategori Modifikasi</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="vehicle.step3-title">Kategori Modifikasi</h2>',
    'vehicle.step3-title'
);

// 39. step4-title "Style Modifikasi"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Style Modifikasi</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="vehicle.step4-title">Style Modifikasi</h2>',
    'vehicle.step4-title'
);

// 40. step5-title "Deskripsi Custom (Optional)" — split into spans
rep(
    '<h2 class="text-xl font-bold text-gray-800">Deskripsi Custom (Optional)</h2>',
    '<h2 class="text-xl font-bold text-gray-800"><span data-i18n="vehicle.step5-title">Custom Description</span> <span class="text-sm text-gray-400" data-i18n="review.optional-label">(Optional)</span></h2>',
    'vehicle.step5-title'
);

// 41. custom-placeholder
rep(
    'id="vehicle-custom-description" rows="3" placeholder="Contoh: Tambahkan wide body kit agresif, cat hitam matte dengan racing stripes merah, velg racing 19 inch, dll..."',
    'id="vehicle-custom-description" rows="3" data-i18n-placeholder="vehicle.custom-placeholder" placeholder="Contoh: Tambahkan wide body kit agresif, cat hitam matte dengan racing stripes merah, velg racing 19 inch, dll..."',
    'vehicle.custom-placeholder'
);

// 42. custom-tip
rep(
    '<p class="text-xs text-gray-500 mt-2">Deskripsikan modifikasi spesifik yang Anda inginkan untuk hasil yang lebih akurat</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="vehicle.custom-tip">Deskripsikan modifikasi spesifik yang Anda inginkan untuk hasil yang lebih akurat</p>',
    'vehicle.custom-tip'
);

// 43. step6-title "Aspect Ratio" — vehicle (3rd occurrence)
rep(
    '<h2 class="text-xl font-bold text-gray-800">Aspect Ratio</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step5-title">Aspect Ratio</h2>',
    'vehicle.step6-title'
);

// 44. step7-title "Number of Variations" — vehicle (2nd occurrence)
rep(
    '<h2 class="text-xl font-bold text-gray-800">Number of Variations</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="sizeguide.step6-title">Number of Variations</h2>',
    'vehicle.step7-title'
);

// 45. step8-title "Generate Modified Vehicles"
rep(
    '<h2 class="text-xl font-bold text-gray-800">Generate Modified Vehicles</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="vehicle.step8-title">Generate Modified Vehicles</h2>',
    'vehicle.step8-title'
);

// 46. generate button prefix/suffix
rep(
    '<i class="fas fa-magic mr-2"></i> Generate <span id="vehicle-count-text">4</span> Modified Versions',
    '<i class="fas fa-magic mr-2"></i> <span data-i18n="sizeguide.gen-prefix">Generate </span><span id="vehicle-count-text">4</span><span data-i18n="vehicle.gen-suffix"> Modified Versions</span>',
    'vehicle.gen-btn'
);

// 47. loading text
rep(
    '<span id="vehicle-loading-text">Modifying vehicle...</span>',
    '<span id="vehicle-loading-text" data-i18n="vehicle.loading-text">Modifying vehicle...</span>',
    'vehicle.loading-text'
);

// 48. results suffix
rep(
    '<span id="vehicle-results-count">4</span> Modified Versions Generated!',
    '<span id="vehicle-results-count">4</span><span data-i18n="vehicle.results-suffix"> Modified Versions Generated!</span>',
    'vehicle.results-suffix'
);

// 49. download-all (vehicle)
rep(
    'id="vehicle-download-all-btn" class="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">',
    'id="vehicle-download-all-btn" class="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-i18n="sizeguide.download-all">',
    'vehicle.download-all'
);

// 50. empty-desc
rep(
    '<p class="text-sm">Upload kendaraan dan pilih modifikasi yang diinginkan</p>',
    '<p class="text-sm" data-i18n="vehicle.empty-desc">Upload kendaraan dan pilih modifikasi yang diinginkan</p>',
    'vehicle.empty-desc'
);

// ================================================================
// i18n DICTIONARY — insert after baf.loading-text in EN dict
// ================================================================
rep(
    `'baf.loading-text':'AI is creating visual transformation with indicators',\r\n            },`,
    `'baf.loading-text':'AI is creating visual transformation with indicators',\r\n` +
    `            'sizeguide.step1-title':'Upload Product Photo',\r\n` +
    `            'sizeguide.upload-click':'Click to upload product photo',\r\n` +
    `            'sizeguide.upload-hint':'PNG, JPG, WEBP, HEIC up to 10MB',\r\n` +
    `            'sizeguide.step2-title':'Select Comparison Object',\r\n` +
    `            'sizeguide.step3-title':'Product Dimensions',\r\n` +
    `            'sizeguide.width-label':'Width (cm)',\r\n` +
    `            'sizeguide.height-label':'Height (cm)',\r\n` +
    `            'sizeguide.depth-label':'Depth (cm)',\r\n` +
    `            'sizeguide.step4-title':'Guide Style',\r\n` +
    `            'sizeguide.step5-title':'Aspect Ratio',\r\n` +
    `            'sizeguide.step6-title':'Number of Variations',\r\n` +
    `            'sizeguide.step7-title':'Generate Size Guides',\r\n` +
    `            'sizeguide.gen-prefix':'Generate ',\r\n` +
    `            'sizeguide.gen-suffix':' Size Guides',\r\n` +
    `            'sizeguide.loading-text':'Generating size guides...',\r\n` +
    `            'sizeguide.results-suffix':' Size Guides Generated!',\r\n` +
    `            'sizeguide.download-all':'Download All',\r\n` +
    `            'sizeguide.empty-desc':'Upload product and select settings to generate size guides',\r\n` +
    `            'vframes.step2-title':'Animation Type',\r\n` +
    `            'vframes.step3-title':'Background Style',\r\n` +
    `            'vframes.step4-title':'Number of Frames',\r\n` +
    `            'vframes.step6-title':'Generate Video Frames',\r\n` +
    `            'vframes.gen-suffix':' Video Frames',\r\n` +
    `            'vframes.loading-text':'Generating video frames...',\r\n` +
    `            'vframes.results-suffix':' Video Frames Generated!',\r\n` +
    `            'vframes.empty-desc':'Upload product and select settings to generate video frames',\r\n` +
    `            'vehicle.step1-title':'Upload Vehicle Photo',\r\n` +
    `            'vehicle.upload-click':'Click to upload vehicle photo',\r\n` +
    `            'vehicle.step2-title':'Vehicle Type',\r\n` +
    `            'vehicle.type-car':'Car',\r\n` +
    `            'vehicle.type-moto':'Motorcycle',\r\n` +
    `            'vehicle.step3-title':'Modification Categories',\r\n` +
    `            'vehicle.step4-title':'Modification Style',\r\n` +
    `            'vehicle.step5-title':'Custom Description',\r\n` +
    `            'vehicle.custom-placeholder':'e.g., Add aggressive wide body kit, matte black paint with red racing stripes, 19-inch racing wheels, etc...',\r\n` +
    `            'vehicle.custom-tip':'Describe specific modifications you want for more accurate results',\r\n` +
    `            'vehicle.step8-title':'Generate Modified Vehicles',\r\n` +
    `            'vehicle.gen-suffix':' Modified Versions',\r\n` +
    `            'vehicle.loading-text':'Modifying vehicle...',\r\n` +
    `            'vehicle.results-suffix':' Modified Versions Generated!',\r\n` +
    `            'vehicle.download-all':'Download All',\r\n` +
    `            'vehicle.empty-desc':'Upload vehicle and select desired modifications',\r\n` +
    `            },`,
    'EN dict insert'
);

// insert after baf.loading-text in ID dict
rep(
    `'baf.loading-text':'AI sedang membuat transformasi visual dengan indicators',\r\n            }`,
    `'baf.loading-text':'AI sedang membuat transformasi visual dengan indicators',\r\n` +
    `            'sizeguide.step1-title':'Upload Foto Produk',\r\n` +
    `            'sizeguide.upload-click':'Klik untuk upload foto produk',\r\n` +
    `            'sizeguide.upload-hint':'PNG, JPG, WEBP, HEIC maks 10MB',\r\n` +
    `            'sizeguide.step2-title':'Pilih Objek Pembanding',\r\n` +
    `            'sizeguide.step3-title':'Dimensi Produk',\r\n` +
    `            'sizeguide.width-label':'Lebar (cm)',\r\n` +
    `            'sizeguide.height-label':'Tinggi (cm)',\r\n` +
    `            'sizeguide.depth-label':'Kedalaman (cm)',\r\n` +
    `            'sizeguide.step4-title':'Gaya Panduan',\r\n` +
    `            'sizeguide.step5-title':'Rasio Aspek',\r\n` +
    `            'sizeguide.step6-title':'Jumlah Variasi',\r\n` +
    `            'sizeguide.step7-title':'Generate Size Guides',\r\n` +
    `            'sizeguide.gen-prefix':'Generate ',\r\n` +
    `            'sizeguide.gen-suffix':' Size Guides',\r\n` +
    `            'sizeguide.loading-text':'Membuat size guides...',\r\n` +
    `            'sizeguide.results-suffix':' Size Guides Berhasil Dibuat!',\r\n` +
    `            'sizeguide.download-all':'Download Semua',\r\n` +
    `            'sizeguide.empty-desc':'Upload produk dan pilih settings untuk generate size guides',\r\n` +
    `            'vframes.step2-title':'Tipe Animasi',\r\n` +
    `            'vframes.step3-title':'Gaya Background',\r\n` +
    `            'vframes.step4-title':'Jumlah Frame',\r\n` +
    `            'vframes.step6-title':'Generate Video Frames',\r\n` +
    `            'vframes.gen-suffix':' Video Frames',\r\n` +
    `            'vframes.loading-text':'Membuat video frames...',\r\n` +
    `            'vframes.results-suffix':' Video Frames Berhasil Dibuat!',\r\n` +
    `            'vframes.empty-desc':'Upload produk dan pilih settings untuk generate video frames',\r\n` +
    `            'vehicle.step1-title':'Upload Foto Mobil/Motor',\r\n` +
    `            'vehicle.upload-click':'Klik untuk upload foto kendaraan',\r\n` +
    `            'vehicle.step2-title':'Jenis Kendaraan',\r\n` +
    `            'vehicle.type-car':'Mobil',\r\n` +
    `            'vehicle.type-moto':'Motor',\r\n` +
    `            'vehicle.step3-title':'Kategori Modifikasi',\r\n` +
    `            'vehicle.step4-title':'Style Modifikasi',\r\n` +
    `            'vehicle.step5-title':'Deskripsi Custom',\r\n` +
    `            'vehicle.custom-placeholder':'Contoh: Tambahkan wide body kit agresif, cat hitam matte dengan racing stripes merah, velg racing 19 inch, dll...',\r\n` +
    `            'vehicle.custom-tip':'Deskripsikan modifikasi spesifik yang Anda inginkan untuk hasil yang lebih akurat',\r\n` +
    `            'vehicle.step8-title':'Generate Kendaraan Termodifikasi',\r\n` +
    `            'vehicle.gen-suffix':' Versi Modifikasi',\r\n` +
    `            'vehicle.loading-text':'Memodifikasi kendaraan...',\r\n` +
    `            'vehicle.results-suffix':' Versi Modifikasi Berhasil Dibuat!',\r\n` +
    `            'vehicle.download-all':'Download Semua',\r\n` +
    `            'vehicle.empty-desc':'Upload kendaraan dan pilih modifikasi yang diinginkan',\r\n` +
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
