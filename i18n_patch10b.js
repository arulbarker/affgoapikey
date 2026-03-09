// i18n_patch10b.js — Fix tryon.desc CRLF miss
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function repR(pattern, replacement, label) {
    const rx = new RegExp(pattern, 's');
    if (!rx.test(html)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(rx, replacement);
    console.log('OK:  ', label); ok++;
}

// tryon.desc — p with leading whitespace before text (CRLF)
repR(
    '(<p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">)[\\r\\n\\s]+(Coba produk fashion secara virtual dengan AI\\. Pilih angle dan dapatkan hasil profesional!)[\\r\\n\\s]+(</p>)',
    '$1\r\n                        <span data-i18n="tryon.desc">$2</span>\r\n                    $3',
    'tryon.desc'
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
