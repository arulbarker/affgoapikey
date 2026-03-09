// i18n_patch13b.js — Fix 3 CRLF misses from patch13
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

// 1. headshot.results-title — h3 multiline content
repR(
    '(<h3 class="text-xl md:text-2xl font-bold text-gray-800">)[\\r\\n\\s]+(👔 Headshot Profesional Anda 📸)[\\r\\n\\s]+(</h3>)',
    '<h3 class="text-xl md:text-2xl font-bold text-gray-800" data-i18n="headshot.results-title">\r\n                                    👔 Headshot Profesional Anda 📸\r\n                                $3',
    'headshot.results-title'
);

// 2. unboxing.remove-photo — target by button ID
rep(
    'id="unboxing-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">',
    'id="unboxing-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="unboxing.remove-photo">',
    'unboxing.remove-photo'
);

// 3. baf.remove-photo — target by button ID
rep(
    'id="beforeafter-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg">',
    'id="beforeafter-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg" data-i18n="unboxing.remove-photo">',
    'baf.remove-photo'
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
