// i18n_patch7.js — Fix 4 CRLF misses from patch6
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function repR(pattern, replacement, label) {
    const rx = new RegExp(pattern, 's');
    if (!rx.test(html)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(rx, replacement);
    console.log('OK:  ', label); ok++;
}
function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// 1. beranda.welcome-msg — multiline CRLF, has <strong> and <br>
repR(
    '<p class="text-gray-800 leading-relaxed">[\\r\\n\\s]+Halo! Saya AI Assistant[\\s\\S]*?Silakan ketik pertanyaan Anda di bawah![\\r\\n\\s]*</p>',
    '<p class="text-gray-800 leading-relaxed" data-i18n="beranda.welcome-msg">Halo! Saya AI Assistant untuk Affiliate Go Foto Studio by Arul CG. Saya siap membantu Anda dengan berbagai pertanyaan. Tanya saya tentang apa saja!</p>',
    'beranda.welcome-msg'
);

// 2. buat-model.purpose-desc — multiline CRLF, has <strong> tags inside
repR(
    '<p class="text-gray-600 leading-relaxed mb-3">[\\r\\n\\s]+Fitur <strong>[\\s\\S]*?seperti:[\\r\\n\\s]*</p>',
    '<p class="text-gray-600 leading-relaxed mb-3" data-i18n="buat-model.purpose-desc">Fitur "Membuat Model" dirancang untuk membuat foto model AI berkualitas tinggi dengan latar belakang simple dan pose standar. Foto yang dihasilkan dapat digunakan sebagai foto model di berbagai fitur lain dalam aplikasi ini, seperti:</p>',
    'buat-model.purpose-desc'
);

// 3. buat-model.info-desc — multiline CRLF, has <i> icon
repR(
    '<p class="text-gray-500 text-sm mt-3">[\\r\\n\\s]+<i class="fas fa-info-circle mr-1"></i> Upload foto wajah[\\s\\S]*?yang konsisten\\.[\\r\\n\\s]*</p>',
    '<p class="text-gray-500 text-sm mt-3" data-i18n="buat-model.info-desc"><i class="fas fa-info-circle mr-1"></i> Upload foto wajah Anda atau orang lain, AI akan membuat foto model dengan wajah tersebut dalam pose dan kualitas yang konsisten.</p>',
    'buat-model.info-desc'
);

// 4. buat-model.foto-label — replace 3 "Foto" spans inside count-btn-model buttons
// Each: <span class="font-medium text-sm">Foto</span>  (inside buat-model-count-selection div)
repR(
    '(<div id="buat-model-count-selection"[\\s\\S]*?</div>[\\r\\n\\s]*</div>[\\r\\n\\s]*</div>)',
    (match) => match.replace(/<span class="font-medium text-sm">Foto<\/span>/g,
        '<span class="font-medium text-sm" data-i18n="buat-model.foto-label">Foto</span>'),
    'buat-model.foto-label (3 buttons)'
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
