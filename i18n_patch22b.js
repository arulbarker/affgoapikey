// i18n_patch22b.js — Fix room.desc miss (indentation mismatch)
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function repR(pattern, replacement, label) {
    const rx = new RegExp(pattern, 's');
    if (!rx.test(html)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(rx, replacement);
    console.log('OK:  ', label); ok++;
}

repR(
    '(<p class="text-lg text-gray-600 max-w-3xl mx-auto">)\\s+Transform your room with AI-powered',
    '<p class="text-lg text-gray-600 max-w-3xl mx-auto" data-i18n="room.desc">\r\n                        Transform your room with AI-powered',
    'room.desc'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
