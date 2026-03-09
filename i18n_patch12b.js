// i18n_patch12b.js — Fix ads.desc-placeholder and ads.theme-placeholder
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// Target by textarea ID to avoid CRLF issues
rep(
    'id="ads-product-desc-input" rows="4" class="w-full p-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition resize-none" placeholder="Deskripsikan produk Anda secara detail... atau gunakan AI Generate"',
    'id="ads-product-desc-input" rows="4" class="w-full p-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition resize-none" data-i18n-placeholder="review.desc-placeholder" placeholder="Deskripsikan produk Anda secara detail... atau gunakan AI Generate"',
    'ads.desc-placeholder'
);

rep(
    'id="ads-photo-theme-input" rows="3" class="w-full p-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition resize-none" placeholder="Contoh: Minimalis & bersih, nuansa alam tropis, futuristik dengan neon..."',
    'id="ads-photo-theme-input" rows="3" class="w-full p-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition resize-none" data-i18n-placeholder="review.theme-placeholder" placeholder="Contoh: Minimalis & bersih, nuansa alam tropis, futuristik dengan neon..."',
    'ads.theme-placeholder'
);

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
