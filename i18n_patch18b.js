// i18n_patch18b.js — Fix 8 misses from patch18
// Root cause: '\s' in JS string drops backslash → use '\\s' so RegExp sees \s (whitespace)
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

// 1. family.step2-tip — use \\s+ (double backslash so RegExp gets \s)
repR(
    '(<p class="text-xs text-gray-600 mb-3">)\\s+(<i class="fas fa-info-circle mr-1"></i>)\\s+Upload background sendiri atau kosongkan untuk background AI',
    '<p class="text-xs text-gray-600 mb-3" data-i18n="family.step2-tip">\r\n                                        $2\r\n                                        Upload background sendiri atau kosongkan untuk background AI',
    'family.step2-tip'
);

// 2. maternity.step1-tip — unique "solo maternity" text
repR(
    '(<p class="text-sm text-gray-600 mb-3">)\\s+(<i class="fas fa-info-circle mr-1"></i>)\\s+Upload 1 foto untuk solo maternity',
    '<p class="text-sm text-gray-600 mb-3" data-i18n="maternity.step1-tip">\r\n                                    $2\r\n                                    Upload 1 foto untuk solo maternity',
    'maternity.step1-tip'
);

// 3-5. count buttons — use \\s+
repR(
    '(data-count="4" class="count-btn-maternity">)\\s+4 Foto\\s+(</button>)',
    '$1\r\n                                    <span data-i18n="maternity.count-4">4 Foto</span>\r\n                                $2',
    'maternity.count-4'
);
repR(
    '(data-count="6" class="count-btn-maternity count-selected">)\\s+6 Foto\\s+(</button>)',
    '$1\r\n                                    <span data-i18n="maternity.count-6">6 Foto</span>\r\n                                $2',
    'maternity.count-6'
);
repR(
    '(data-count="8" class="count-btn-maternity">)\\s+8 Foto\\s+(</button>)',
    '$1\r\n                                    <span data-i18n="maternity.count-8">8 Foto</span>\r\n                                $2',
    'maternity.count-8'
);

// 6. maternity.gen-btn — wrap Generate and Foto Maternity around dynamic span
repR(
    '(<i class="fas fa-wand-magic-sparkles mr-2"></i>)\\s+Generate (<span id="maternity-count-text">6</span>) Foto Maternity',
    '$1\r\n                                <span data-i18n="maternity.gen-prefix">Generate</span> $2 <span data-i18n="maternity.gen-suffix">Foto Maternity</span>',
    'maternity.gen-btn'
);

// 7. maternity.gen-tip — unique "30-60 detik" text
repR(
    '(<p class="text-sm text-gray-500 text-center mt-2">)\\s+(<i class="fas fa-info-circle mr-1"></i>)\\s+Proses membutuhkan waktu 30-60 detik',
    '<p class="text-sm text-gray-500 text-center mt-2" data-i18n="maternity.gen-tip">\r\n                                $2\r\n                                Proses membutuhkan waktu 30-60 detik',
    'maternity.gen-tip'
);

// 8. maternity.download-all — simple rep on unique span
rep(
    '<span>Download Semua</span>',
    '<span data-i18n="family.download-all">Download Semua</span>',
    'maternity.download-all'
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
