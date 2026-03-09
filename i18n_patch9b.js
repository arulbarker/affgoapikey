// i18n_patch9b.js — Fix CRLF misses from patch9
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

// 1. touring.optional-suffix — find the (Opsional) span near Custom Background
repR(
    '(Custom Background )<span class="text-xs text-gray-500">\\(Opsional\\)</span>([\\r\\n\\s]*</p>)',
    '$1<span class="text-xs text-gray-500" data-i18n="touring.optional-suffix">(Opsional)</span>$2',
    'touring.optional-suffix'
);

// 2. touring.count-title h3
repR(
    '(<h3 class="text-lg font-bold text-gray-800">)[\\r\\n\\s]*(Jumlah Variasi)[\\r\\n\\s]*(</h3>)',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="touring.count-title">Jumlah Variasi</h3>',
    'touring.count-title'
);

// 3. touring count buttons (CRLF)
repR(
    '(<button type="button" data-count="4" class="option-btn-touring">)[\\r\\n\\s]*(4 Foto)',
    '$1\r\n                                        <span data-i18n="touring.count-4">4 Foto</span>',
    'touring.count-4'
);
repR(
    '(<button type="button" data-count="6" class="option-btn-touring selected">)[\\r\\n\\s]*(6 Foto)',
    '$1\r\n                                        <span data-i18n="touring.count-6">6 Foto</span>',
    'touring.count-6'
);
repR(
    '(<button type="button" data-count="8" class="option-btn-touring">)[\\r\\n\\s]*(8 Foto)',
    '$1\r\n                                        <span data-i18n="touring.count-8">8 Foto</span>',
    'touring.count-8'
);

// 4. mirror.delete-photo — CRLF
repR(
    '(<button id="mirror-remove-product-preview"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-times mr-1"></i>) Hapus Foto[\\r\\n\\s]*(</button>)',
    '$1\r\n                                    $2 <span data-i18n="mirror.delete-photo">Hapus Foto</span>\r\n                                $3',
    'mirror.delete-photo'
);

// 5. mirror.delete-model — CRLF
repR(
    '(<button id="mirror-remove-model-preview"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-times mr-1"></i>) Hapus Foto Model[\\r\\n\\s]*(</button>)',
    '$1\r\n                                    $2 <span data-i18n="mirror.delete-model">Hapus Foto Model</span>\r\n                                $3',
    'mirror.delete-model'
);

// 6. Mirror hand position buttons (CRLF) — use repR for each
repR(
    '(<button type="button" data-value="holding-phone" class="option-btn-mirror selected">)[\\r\\n\\s]+(<i class="fas fa-hand-holding mr-1"></i>)Pegang HP',
    '$1\r\n                                        $2<span data-i18n="mirror.hand-hold-phone">Pegang HP</span>',
    'mirror.hand-hold-phone'
);
repR(
    '(<button type="button" data-value="one-hand-hip" class="option-btn-mirror">)[\\r\\n\\s]+(<i class="fas fa-hand-rock mr-1"></i>)Tangan di Pinggang',
    '$1\r\n                                        $2<span data-i18n="mirror.hand-hips">Tangan di Pinggang</span>',
    'mirror.hand-hips'
);
repR(
    '(<button type="button" data-value="holding-product" class="option-btn-mirror">)[\\r\\n\\s]+(<i class="fas fa-box mr-1"></i>)Pegang Produk',
    '$1\r\n                                        $2<span data-i18n="mirror.hand-hold-product">Pegang Produk</span>',
    'mirror.hand-hold-product'
);
repR(
    '(<button type="button" data-value="natural" class="option-btn-mirror">)[\\r\\n\\s]+(<i class="fas fa-user mr-1"></i>)Natural/Santai',
    '$1\r\n                                        $2<span data-i18n="mirror.hand-natural">Natural/Santai</span>',
    'mirror.hand-natural'
);
repR(
    '(<button type="button" data-value="both-hands-up" class="option-btn-mirror">)[\\r\\n\\s]+(<i class="fas fa-hands mr-1"></i>)Kedua Tangan Naik',
    '$1\r\n                                        $2<span data-i18n="mirror.hand-both-up">Kedua Tangan Naik</span>',
    'mirror.hand-both-up'
);

// 7. mirror.aspect-title h3 — "Rasio Foto" with mirror-ratio-options context
repR(
    '(<h3 class="text-lg font-bold text-gray-800">)[\\r\\n\\s]*(Rasio Foto)[\\r\\n\\s]*(</h3>[\\r\\n\\s]*<div id="mirror-ratio-options")',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="mirror.aspect-title">Rasio Foto</h3>\r\n                                <div id="mirror-ratio-options"',
    'mirror.aspect-title'
);

// 8. mirror.count-title h3 — "Jumlah Foto" with mirror-count-selection context
repR(
    '(<h3 class="text-lg font-bold text-gray-800">)[\\r\\n\\s]*(Jumlah Foto)[\\r\\n\\s]*(</h3>[\\r\\n\\s]*<div id="mirror-count-selection")',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="mirror.count-title">Jumlah Foto</h3>\r\n                                <div id="mirror-count-selection"',
    'mirror.count-title'
);

// 9. walking.clothes-desc — the en-dash U+2013 might be different in file
repR(
    '(<span class="text-xs text-gray-500">Bisa upload 1)[\\u2011\u2013\u2014-](5 foto baju untuk referensi lebih detail</span>)',
    '<span class="text-xs text-gray-500" data-i18n="walking.clothes-desc">Bisa upload 1\u20115 foto baju untuk referensi lebih detail</span>',
    'walking.clothes-desc'
);

// 10. walking.count-title h3 — "Jumlah Foto" with walkpad-count-selection context
repR(
    '(<h3 class="text-lg font-bold text-gray-800">)[\\r\\n\\s]*(Jumlah Foto)[\\r\\n\\s]*(</h3>[\\r\\n\\s]*<div id="walkpad-count-selection")',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="walking.count-title">Jumlah Foto</h3>\r\n                                    <div id="walkpad-count-selection"',
    'walking.count-title'
);

// 11. i18n ID: touring new keys — insert after 'touring.download-all':'Download All' in ID section
repR(
    "('touring.download-all':'Download All',)[\\r\\n\\s]+('mirror.desc1':'Ubah produk apapun)",
    `$1\r\n                'touring.optional-suffix':'(Opsional)',\r\n                'touring.upload-bg':'Upload Background Sendiri',\r\n                'touring.or-use':'Atau gunakan pilihan di atas',\r\n                'touring.add-photo':'Tambah Foto',\r\n                'touring.count-4':'4 Foto',\r\n                'touring.count-6':'6 Foto',\r\n                'touring.count-8':'8 Foto',\r\n                'touring.gen-prefix':'Generate',\r\n                'touring.gen-suffix':'Foto Touring',\r\n                'touring.loading-text':'Membuat foto touring...',\r\n                'touring.empty-title':'Foto Touring Profesional',\r\n                'touring.empty-desc':'Upload foto model + motor + helm + aksesoris, pilih background jalanan dan tema suasana untuk mendapatkan foto touring yang epic! \uD83C\uDFCD\uFE0F\u2728',\r\n                $2`,
    'i18n ID: touring new keys'
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
