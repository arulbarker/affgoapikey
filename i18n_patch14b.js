// i18n_patch14b.js — Fix 2 CRLF misses from patch14 (vehicle.type-car, vehicle.type-moto)
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

// 1. vehicle.type-car — target by data-vehicletype="car"
repR(
    '(data-vehicletype="car" class="option-btn-vehicle selected">[\\r\\n\\s]+<i class="fas fa-car text-2xl mb-1"></i>[\\r\\n\\s]+<div class="font-semibold")>Mobil</div>',
    '$1 data-i18n="vehicle.type-car">Mobil</div>',
    'vehicle.type-car'
);

// 2. vehicle.type-moto — target by data-vehicletype="motorcycle"
repR(
    '(data-vehicletype="motorcycle" class="option-btn-vehicle">[\\r\\n\\s]+<i class="fas fa-motorcycle text-2xl mb-1"></i>[\\r\\n\\s]+<div class="font-semibold")>Motor</div>',
    '$1 data-i18n="vehicle.type-moto">Motor</div>',
    'vehicle.type-moto'
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
