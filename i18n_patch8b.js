// i18n_patch8b.js — Fix pov.bg-placeholder miss (CRLF)
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function repR(pattern, replacement, label) {
    const rx = new RegExp(pattern, 's');
    if (!rx.test(html)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(rx, replacement);
    console.log('OK:  ', label); ok++;
}

// pov textarea — add data-i18n-placeholder before placeholder attribute
repR(
    '(id="pov-product-description")[\\r\\n\\s]+(placeholder=)',
    '$1\r\n                            data-i18n-placeholder="pov.bg-placeholder"\r\n                            $2',
    'pov.bg-placeholder'
);

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
