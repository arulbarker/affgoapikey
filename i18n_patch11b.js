// i18n_patch11b.js — Fix 3 misses from patch11
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

// 1. food.bg-title — p spans multiple lines (CRLF)
repR(
    '(<p class="text-sm font-medium text-gray-700 mb-2">)[\\r\\n\\s]+(<i class="fas fa-image mr-1"></i> Upload Background Custom \\(Opsional\\))[\\r\\n\\s]+(</p>)',
    '$1\r\n                                        $2\r\n                                    $3',
    'food.bg-title — check'
);
// Now add the data-i18n attribute
rep(
    '<p class="text-sm font-medium text-gray-700 mb-2">\r\n                                        <i class="fas fa-image mr-1"></i> Upload Background Custom (Opsional)\r\n                                    </p>',
    '<p class="text-sm font-medium text-gray-700 mb-2" data-i18n="food.bg-title">\r\n                                        <i class="fas fa-image mr-1"></i> Upload Background Custom (Opsional)\r\n                                    </p>',
    'food.bg-title'
);

// 2. i18n EN dict — insert after 'religious.download-all':'Download All', before closing },
rep(
    `'religious.download-all':'Download All',\r\n            },`,
    `'religious.download-all':'Download All',\r\n                // pose fashion\r\n                'pose.upload-click':'Click or drag image',\r\n                'pose.upload-hint':'PNG, JPG, or WEBP (Max. 5MB)',\r\n                'pose.uploaded-label':'Uploaded image:',\r\n                'pose.custom-title':'Custom Pose (Optional)',\r\n                'pose.custom-desc':'Write the pose description you want. If empty, default pose will be used.',\r\n                'pose.tips':' Describe the pose in detail in English for best results. Example: "confident standing pose with arms crossed", "elegant sitting pose on chair", "dynamic action pose", etc.',\r\n                'pose.select-btn':'Select 6 Poses',\r\n                'pose.results-title':'Pose Results...',\r\n                'pose.download-all':'Download All',\r\n                // food selfie\r\n                'food.upload-title':'Upload Food Photo',\r\n                'food.upload-click':'Click or drag food photo',\r\n                'food.model-pick':'Select Model/Person Photo',\r\n                'food.model-hint':'This person will appear in the photo with the food',\r\n                'food.model-confirm':' Model will appear in photo with food',\r\n                'food.model-tip':'\uD83D\uDCA1 Upload a photo of the person who will appear in the food photo matching the theme',\r\n                'food.ratio-title':'Select Aspect Ratio',\r\n                'food.theme-title':'Select Theme',\r\n                'food.section-other':'Other Themes',\r\n                'food.custom-label':'\u2728 Write Your Custom Theme:',\r\n                'food.custom-tip':'\uD83D\uDCA1 Describe the food photography theme you want in detail',\r\n                'food.theme-tip':'\uD83D\uDCA1 Choose a theme that fits your content target',\r\n                'food.bg-title':' Upload Custom Background (Optional)',\r\n                'food.bg-pick':'Select Custom Background',\r\n                'food.bg-confirm':' Custom background will be used',\r\n                'food.bg-tip':'\uD83D\uDCA1 Upload your own background or use the theme above',\r\n                'food.ref-title':'Reference',\r\n                'food.ref-optional':'(Optional)',\r\n                'food.ref-hint':'Reference composition',\r\n                // product review\r\n                'review.desc':'AI solution for your affiliate product review content.',\r\n                'review.step1-title':'Upload Product Image',\r\n                'review.upload-click':'Click or drag image here',\r\n                'review.upload-hint':'PNG, JPG, WEBP (Can upload more than one)',\r\n                'review.step2-title':'Product Description',\r\n                'review.desc-placeholder':'Describe your product in detail... or use AI Generate',\r\n                'review.desc-tip':'\uD83D\uDCA1 Tip: Detailed descriptions produce higher quality reviews',\r\n                'review.step3-title':'Model Photo',\r\n                'review.optional-label':'(Optional)',\r\n                'review.model-click':'Click to select model photo',\r\n                'review.model-tip':'\uD83C\uDFAD Upload model photo for more personal results',\r\n                'review.step4-title':'Photo Theme',\r\n                'review.theme-placeholder':'Example: Minimalist & clean, tropical nature vibes, futuristic with neon...',\r\n                'review.theme-tip':'\uD83C\uDFA8 Define visual style for more attractive results',\r\n                'review.count-title':'Number of Scenes',\r\n                'review.gen-prefix':'Create',\r\n                'review.gen-suffix':'Scene Review',\r\n            },`,
    'i18n EN: pose+food+review keys'
);

// 3. i18n ID dict — insert after 'religious.download-all':'Download Semua', before closing }
rep(
    `'religious.download-all':'Download Semua',\r\n            }`,
    `'religious.download-all':'Download Semua',\r\n                // pose fashion\r\n                'pose.upload-click':'Klik atau seret gambar',\r\n                'pose.upload-hint':'PNG, JPG, atau WEBP (Maks. 5MB)',\r\n                'pose.uploaded-label':'Gambar yang diunggah:',\r\n                'pose.custom-title':'Custom Pose (Opsional)',\r\n                'pose.custom-desc':'Tulis deskripsi pose yang Anda inginkan. Jika kosong, akan menggunakan pose default.',\r\n                'pose.tips':' Jelaskan pose dengan detail dalam bahasa Inggris untuk hasil terbaik. Contoh: "confident standing pose with arms crossed", "elegant sitting pose on chair", "dynamic action pose", dll.',\r\n                'pose.select-btn':'Pilih 6 Pose',\r\n                'pose.results-title':'Hasil Pose...',\r\n                'pose.download-all':'Download Semua',\r\n                // food selfie\r\n                'food.upload-title':'Unggah Foto Makanan',\r\n                'food.upload-click':'Klik atau seret foto makanan',\r\n                'food.model-pick':'Pilih Foto Model/Orang',\r\n                'food.model-hint':'Orang ini akan muncul di foto dengan makanan',\r\n                'food.model-confirm':' Model akan muncul di foto bersama makanan',\r\n                'food.model-tip':'\uD83D\uDCA1 Upload foto orang yang akan muncul di foto bersama makanan sesuai tema',\r\n                'food.ratio-title':'Pilih Rasio Aspek',\r\n                'food.theme-title':'Pilih Tema',\r\n                'food.section-other':'Tema Lainnya',\r\n                'food.custom-label':'\u2728 Tulis Tema Custom Anda:',\r\n                'food.custom-tip':'\uD83D\uDCA1 Deskripsikan tema fotografi makanan yang Anda inginkan dengan detail',\r\n                'food.theme-tip':'\uD83D\uDCA1 Pilih tema sesuai target konten Anda',\r\n                'food.bg-title':' Upload Background Custom (Opsional)',\r\n                'food.bg-pick':'Pilih Background Custom',\r\n                'food.bg-confirm':' Background custom akan digunakan',\r\n                'food.bg-tip':'\uD83D\uDCA1 Upload background sendiri atau gunakan tema di atas',\r\n                'food.ref-title':'Referensi',\r\n                'food.ref-optional':'(Opsional)',\r\n                'food.ref-hint':'Komposisi referensi',\r\n                // product review\r\n                'review.desc':'Solusi AI untuk konten review produk afiliasi Anda.',\r\n                'review.step1-title':'Unggah Gambar Produk',\r\n                'review.upload-click':'Klik atau seret gambar ke sini',\r\n                'review.upload-hint':'PNG, JPG, WEBP (Bisa lebih dari satu)',\r\n                'review.step2-title':'Deskripsi Produk',\r\n                'review.desc-placeholder':'Deskripsikan produk Anda secara detail... atau gunakan AI Generate',\r\n                'review.desc-tip':'\uD83D\uDCA1 Tip: Deskripsi detail menghasilkan review yang lebih berkualitas',\r\n                'review.step3-title':'Foto Model',\r\n                'review.optional-label':'(Opsional)',\r\n                'review.model-click':'Klik untuk pilih foto model',\r\n                'review.model-tip':'\uD83C\uDFAD Upload foto model untuk hasil lebih personal',\r\n                'review.step4-title':'Tema Foto',\r\n                'review.theme-placeholder':'Contoh: Minimalis & bersih, nuansa alam tropis, futuristik dengan neon...',\r\n                'review.theme-tip':'\uD83C\uDFA8 Tentukan style visual untuk hasil lebih menarik',\r\n                'review.count-title':'Jumlah Scene',\r\n                'review.gen-prefix':'Buat',\r\n                'review.gen-suffix':'Scene Review',\r\n            }`,
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
