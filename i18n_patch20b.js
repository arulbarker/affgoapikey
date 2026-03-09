// i18n_patch20b.js — Fix graduation.bg-tip (emoji in pattern)
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// The tip p is unique by its class combination + partial text (avoid emoji)
// Class: text-xs text-gray-500 mt-2  — also used elsewhere, anchor on surrounding content
// Search for partial unique text after the emoji
rep(
    'Upload background sendiri atau pilih dari pilihan di atas\r\n                                        </p>',
    '<span data-i18n="graduation.bg-tip">Upload background sendiri atau pilih dari pilihan di atas</span>\r\n                                        </p>',
    'graduation.bg-tip'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
