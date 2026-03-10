// i18n_patch30b.js — Fix 5 MISS from patch30 (emoji prefix in p tags)
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// photo-restoration.mode-note (\uD83D\uDCA1 = 💡)
rep(
    '<p class="text-xs text-gray-500 mt-2">\uD83D\uDCA1 Pilih jenis restorasi sesuai kondisi foto</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="photo-restoration.mode-note">\uD83D\uDCA1 Pilih jenis restorasi sesuai kondisi foto</p>',
    'photo-restoration.mode-note'
);

// photo-restoration.intensity-note (\uD83C\uDF9A\uFE0F = 🎚️)
rep(
    '<p class="text-xs text-gray-500 mt-3">\uD83C\uDF9A\uFE0F Intensitas restorasi yang akan diterapkan</p>',
    '<p class="text-xs text-gray-500 mt-3" data-i18n="photo-restoration.intensity-note">\uD83C\uDF9A\uFE0F Intensitas restorasi yang akan diterapkan</p>',
    'photo-restoration.intensity-note'
);

// photo-restoration.ratio-note (\uD83D\uDCD0 = 📐)
rep(
    '<p class="text-xs text-gray-500 mt-2">\uD83D\uDCD0 Tetap original atau crop ke ratio tertentu</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="photo-restoration.ratio-note">\uD83D\uDCD0 Tetap original atau crop ke ratio tertentu</p>',
    'photo-restoration.ratio-note'
);

// logo.desc-bisnis-note (\uD83D\uDCDD = 📝)
rep(
    '<p class="text-xs text-gray-500 mt-1">\uD83D\uDCDD Bantu AI memahami brand Anda</p>',
    '<p class="text-xs text-gray-500 mt-1" data-i18n="logo.desc-bisnis-note">\uD83D\uDCDD Bantu AI memahami brand Anda</p>',
    'logo.desc-bisnis-note'
);

// logo.color-note (\uD83C\uDFA8 = 🎨)
rep(
    '<p class="text-xs text-gray-500 mt-2">\uD83C\uDFA8 Kosongkan untuk AI pilih otomatis berdasarkan brand</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="logo.color-note">\uD83C\uDFA8 Kosongkan untuk AI pilih otomatis berdasarkan brand</p>',
    'logo.color-note'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
