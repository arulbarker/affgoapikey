// i18n_patch9c.js — Fix last 4 misses
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function repR(pattern, replacement, label) {
    const rx = new RegExp(pattern, 's');
    if (!rx.test(html)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(rx, replacement);
    console.log('OK:  ', label); ok++;
}

// 1. mirror.aspect-title — h3 step 8 in mirror panel (06b6d4 color, step 8)
repR(
    '(linear-gradient\\(135deg, #06b6d4, #0284c1\\);">8</div>[\\r\\n\\s]+<h3 class="text-lg font-bold text-gray-800">)Rasio Foto(</h3>)',
    '$1<span data-i18n="mirror.aspect-title">Rasio Foto</span>$2',
    'mirror.aspect-title'
);

// 2. mirror.count-title — h3 step 9 in mirror panel (06b6d4 color, step 9)
repR(
    '(linear-gradient\\(135deg, #06b6d4, #0284c1\\);">9</div>[\\r\\n\\s]+<h3 class="text-lg font-bold text-gray-800">)Jumlah Foto(</h3>)',
    '$1<span data-i18n="mirror.count-title">Jumlah Foto</span>$2',
    'mirror.count-title'
);

// 3. walking.count-title — h3 step 8 in walking pad panel (db2877 gradient)
repR(
    '(linear-gradient\\(135deg, #7c3aed 0%, #db2877 100%\\);">8</div>[\\r\\n\\s]+<h3 class="text-lg font-bold text-gray-800">)Jumlah Foto(</h3>)',
    '$1<span data-i18n="walking.count-title">Jumlah Foto</span>$2',
    'walking.count-title'
);

// 4. walking.clothes-desc — uses HTML entity &#8211; for en-dash
repR(
    '(<span class="text-xs text-gray-500">)Bisa upload 1&#8211;5 foto baju untuk referensi lebih detail(</span>)',
    '<span class="text-xs text-gray-500" data-i18n="walking.clothes-desc">Bisa upload 1&#8211;5 foto baju untuk referensi lebih detail</span>',
    'walking.clothes-desc'
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
