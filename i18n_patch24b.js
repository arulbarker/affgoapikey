// i18n_patch24b.js — Fix beauty.remove-btn (indentation mismatch)
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

rep(
    'id="beauty-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                    <i class="fas fa-times mr-1"></i> Hapus Foto',
    'id="beauty-remove-preview" class="mt-2 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-lg transition-colors">\r\n                                    <i class="fas fa-times mr-1"></i> <span data-i18n="unboxing.remove-photo">Hapus Foto</span>',
    'beauty.remove-btn'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
