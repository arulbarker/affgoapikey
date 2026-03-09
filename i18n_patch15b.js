// i18n_patch15b.js — Fix 19 misses from patch15
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
// AD SCRIPT misses
// ================================================================

// 1. adscript.desc — header p (CRLF in rep)
repR(
    '(<p class="text-lg text-gray-600 mb-2">)[\\r\\n\\s]+(Buat narasi iklan yang natural dan meyakinkan untuk promosi produk affiliate)[\\r\\n\\s]+(</p>)',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="adscript.desc">\r\n                        $2\r\n                    $3',
    'adscript.desc'
);

// 2. adscript.input-title — h2 with fa-pen icon (icon+text on same line, no whitespace between)
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-pen mr-2 text-blue-500"></i>Input Story)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="adscript.input-title">$1',
    'adscript.input-title'
);

// 3. tone buttons — class comes BEFORE data-tone in actual HTML
repR(
    'class="story-tone-btn active" data-tone="friendly">([\\r\\n\\s]+<i class="fas fa-smile mr-2"></i>)[\\r\\n\\s]*Ramah',
    'class="story-tone-btn active" data-tone="friendly">$1<span data-i18n="adscript.tone-friendly">Ramah</span>',
    'adscript.tone-friendly'
);
repR(
    'class="story-tone-btn" data-tone="professional">([\\r\\n\\s]+<i class="fas fa-briefcase mr-2"></i>)[\\r\\n\\s]*Profesional',
    'class="story-tone-btn" data-tone="professional">$1<span data-i18n="adscript.tone-professional">Profesional</span>',
    'adscript.tone-professional'
);
repR(
    'class="story-tone-btn" data-tone="casual">([\\r\\n\\s]+<i class="fas fa-coffee mr-2"></i>)[\\r\\n\\s]*Santai',
    'class="story-tone-btn" data-tone="casual">$1<span data-i18n="adscript.tone-casual">Santai</span>',
    'adscript.tone-casual'
);
repR(
    'class="story-tone-btn" data-tone="enthusiastic">([\\r\\n\\s]+<i class="fas fa-fire mr-2"></i>)[\\r\\n\\s]*Antusias',
    'class="story-tone-btn" data-tone="enthusiastic">$1<span data-i18n="adscript.tone-enthusiastic">Antusias</span>',
    'adscript.tone-enthusiastic'
);

// 4. length buttons — class before data-length
repR(
    'class="story-length-btn active" data-length="short">([\\r\\n\\s]+<i class="fas fa-clock mr-2"></i>)[\\r\\n\\s]*Pendek \\(30-60s\\)',
    'class="story-length-btn active" data-length="short">$1<span data-i18n="adscript.length-short">Pendek (30-60s)</span>',
    'adscript.length-short'
);
repR(
    'class="story-length-btn" data-length="long">([\\r\\n\\s]+<i class="fas fa-hourglass mr-2"></i>)[\\r\\n\\s]*Panjang \\(60-120s\\)',
    'class="story-length-btn" data-length="long">$1<span data-i18n="adscript.length-long">Panjang (60-120s)</span>',
    'adscript.length-long'
);

// 5. adscript.output-title — h2 with fa-scroll (icon+text on same line)
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-scroll mr-2 text-blue-500"></i>Script Narasi)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="adscript.output-title">$1',
    'adscript.output-title'
);

// 6. adscript.copy-btn — multiline button, target by ID
repR(
    '(id="story-script-copy-btn"[\\s\\S]*?<i class="fas fa-copy"></i>)[\\r\\n\\s]*Salin',
    '$1<span data-i18n="adscript.copy-btn">Salin</span>',
    'adscript.copy-btn'
);

// ================================================================
// TIKTOK IDEAS misses
// ================================================================

// 7. tiktok.desc — header p (CRLF)
repR(
    '(<p class="text-lg text-gray-600 mb-2">)[\\r\\n\\s]+(Dapatkan hook viral dan struktur video yang bikin audience berhenti scroll!)[\\r\\n\\s]+(</p>)',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="tiktok.desc">\r\n                        $2\r\n                    $3',
    'tiktok.desc'
);

// 8. tiktok.input-title — h2 with fa-lightbulb
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-lightbulb mr-2 text-pink-500"></i>Input Konten)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="tiktok.input-title">$1',
    'tiktok.input-title'
);

// 9. tiktok.type-comparison — class before data-type
repR(
    'class="tiktok-type-btn" data-type="comparison">([\\r\\n\\s]+<i class="fas fa-balance-scale mr-2"></i>)[\\r\\n\\s]*Perbandingan',
    'class="tiktok-type-btn" data-type="comparison">$1<span data-i18n="tiktok.type-comparison">Perbandingan</span>',
    'tiktok.type-comparison'
);

// 10. tiktok.output-title — h2 with fa-video
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-video mr-2 text-pink-500"></i>Ide Konten Video)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="tiktok.output-title">$1',
    'tiktok.output-title'
);

// ================================================================
// SEO DESCRIPTION misses
// ================================================================

// 11. seodesc.desc — header p (CRLF)
repR(
    '(<p class="text-lg text-gray-600 mb-2">)[\\r\\n\\s]+(Buat deskripsi produk yang menarik dan optimal untuk Shopee & TikTok Shop)[\\r\\n\\s]+(</p>)',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="seodesc.desc">\r\n                        $2\r\n                    $3',
    'seodesc.desc'
);

// 12. seodesc.input-title — h2 with fa-edit
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-edit mr-2 text-orange-500"></i>Input Produk)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="seodesc.input-title">$1',
    'seodesc.input-title'
);

// 13. seodesc length buttons — class before data-length
repR(
    'class="desc-length-btn active" data-length="short">([\\r\\n\\s]+<i class="fas fa-align-left mr-2"></i>)[\\r\\n\\s]*Pendek',
    'class="desc-length-btn active" data-length="short">$1<span data-i18n="seodesc.length-short">Pendek</span>',
    'seodesc.length-short'
);
repR(
    'class="desc-length-btn" data-length="long">([\\r\\n\\s]+<i class="fas fa-align-justify mr-2"></i>)[\\r\\n\\s]*Panjang',
    'class="desc-length-btn" data-length="long">$1<span data-i18n="seodesc.length-long">Panjang</span>',
    'seodesc.length-long'
);

// 14. seodesc.output-title — h2 with fa-file-alt
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-file-alt mr-2 text-orange-500"></i>Hasil Deskripsi)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="seodesc.output-title">$1',
    'seodesc.output-title'
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
