// i18n_patch17.js — Market Research, Budget Simulation
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

// ================================================================
// MARKET RESEARCH (content-riset-pasar)
// ================================================================

// 1. header desc
repR(
    '(<p class="text-lg text-gray-600 mb-2">)[\\r\\n\\s]+(Dapatkan ide produk baru dan insight tren pasar terkini)[\\r\\n\\s]+(</p>)',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="research.desc">\r\n                        $2\r\n                    $3',
    'research.desc'
);

// 2. input h2 "Info Riset"
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-edit mr-2 text-purple-600"></i>Info Riset)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="research.input-title">$1',
    'research.input-title'
);

// 3. label "Jenis Bisnis Saat Ini" with asterisk
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Jenis Bisnis Saat Ini [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="research.label-business">$1',
    'research.label-business'
);

// 4. label "Tujuan Riset"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Tujuan Riset[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="research.label-goal">$1',
    'research.label-goal'
);

// 5. label "Lokasi/Target Market"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Lokasi/Target Market[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="research.label-location">$1',
    'research.label-location'
);

// 6. label "Preferensi Khusus (Opsional)"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Preferensi Khusus \\(Opsional\\)[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="research.label-pref">$1',
    'research.label-pref'
);

// 7. generate button
repR(
    '(id="rm-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-sparkles mr-2"></i>)[\\r\\n\\s]*Generate Riset & Ide',
    '$1\r\n                                <span data-i18n="research.gen-btn">Generate Riset & Ide</span>',
    'research.gen-btn'
);

// 8. output h2 "Hasil Riset" (fa-lightbulb, not fa-file-alt)
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-lightbulb mr-2 text-purple-600"></i>Hasil Riset)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="research.output-title">$1',
    'research.output-title'
);

// 9. output h3
rep(
    '<h3 class="font-bold text-gray-800">Riset Pasar & Ide Produk</h3>',
    '<h3 class="font-bold text-gray-800" data-i18n="research.output-h3">Riset Pasar & Ide Produk</h3>',
    'research.output-h3'
);

// 10. copy button
repR(
    '(id="rm-copy-btn"[\\s\\S]*?<i class="fas fa-copy"></i>)[\\r\\n\\s]*Salin',
    '$1<span data-i18n="research.copy-btn">Salin</span>',
    'research.copy-btn'
);

// 11. placeholder title
rep(
    '<p class="text-lg font-semibold">Hasil Riset & Ide</p>',
    '<p class="text-lg font-semibold" data-i18n="research.placeholder-title">Hasil Riset & Ide</p>',
    'research.placeholder-title'
);

// 12. placeholder desc
rep(
    '<p class="text-sm">Isi info bisnis untuk mulai riset</p>',
    '<p class="text-sm" data-i18n="research.placeholder-desc">Isi info bisnis untuk mulai riset</p>',
    'research.placeholder-desc'
);

// ================================================================
// BUDGET SIMULATION (content-financial-forecast)
// ================================================================

// 13. header desc
repR(
    '(<p class="text-lg text-gray-600 mb-2">)[\\r\\n\\s]+(Buat proyeksi anggaran dan skenario keuangan untuk bisnis Anda)[\\r\\n\\s]+(</p>)',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="budget.desc">\r\n                        $2\r\n                    $3',
    'budget.desc'
);

// 14. input h2 "Data Keuangan"
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-edit mr-2 text-emerald-600"></i>Data Keuangan)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="budget.input-title">$1',
    'budget.input-title'
);

// 15. label "Proyeksi Pendapatan Bulanan" with asterisk
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Proyeksi Pendapatan Bulanan [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="budget.label-revenue">$1',
    'budget.label-revenue'
);

// 16. label "Tipe Bisnis"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Tipe Bisnis[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="budget.label-type">$1',
    'budget.label-type'
);

// 17. label "Industri" (short, unique in this panel context)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Industri[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="budget.label-industry">$1',
    'budget.label-industry'
);

// 18. label "Skenario yang Ingin Disimulasikan"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Skenario yang Ingin Disimulasikan[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="budget.label-scenario">$1',
    'budget.label-scenario'
);

// 19. label "Detail Tambahan (Opsional)"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Detail Tambahan \\(Opsional\\)[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="budget.label-extra">$1',
    'budget.label-extra'
);

// 20. generate button
repR(
    '(id="ff-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-sparkles mr-2"></i>)[\\r\\n\\s]*Generate Proyeksi Anggaran',
    '$1\r\n                                <span data-i18n="budget.gen-btn">Generate Proyeksi Anggaran</span>',
    'budget.gen-btn'
);

// 21. output h2 "Hasil Proyeksi" (fa-chart-pie, unique)
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-chart-pie mr-2 text-emerald-600"></i>Hasil Proyeksi)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="budget.output-title">$1',
    'budget.output-title'
);

// 22. output h3
rep(
    '<h3 class="font-bold text-gray-800">Proyeksi Anggaran & Saran</h3>',
    '<h3 class="font-bold text-gray-800" data-i18n="budget.output-h3">Proyeksi Anggaran & Saran</h3>',
    'budget.output-h3'
);

// 23. copy button
repR(
    '(id="ff-copy-btn"[\\s\\S]*?<i class="fas fa-copy"></i>)[\\r\\n\\s]*Salin',
    '$1<span data-i18n="budget.copy-btn">Salin</span>',
    'budget.copy-btn'
);

// 24. placeholder title
rep(
    '<p class="text-lg font-semibold">Proyeksi Keuangan Anda</p>',
    '<p class="text-lg font-semibold" data-i18n="budget.placeholder-title">Proyeksi Keuangan Anda</p>',
    'budget.placeholder-title'
);

// 25. placeholder desc
rep(
    '<p class="text-sm">Isi data untuk simulasi anggaran</p>',
    '<p class="text-sm" data-i18n="budget.placeholder-desc">Isi data untuk simulasi anggaran</p>',
    'budget.placeholder-desc'
);

// ================================================================
// i18n DICTIONARY
// ================================================================
rep(
    `'marketing.placeholder-desc':'Fill in promotion info to generate',\r\n            },`,
    `'marketing.placeholder-desc':'Fill in promotion info to generate',\r\n` +
    `            'research.desc':'Get new product ideas and insights on the latest market trends',\r\n` +
    `            'research.input-title':'Research Info',\r\n` +
    `            'research.label-business':'Current Business Type',\r\n` +
    `            'research.label-goal':'Research Goal',\r\n` +
    `            'research.label-location':'Location/Target Market',\r\n` +
    `            'research.label-pref':'Special Preferences (Optional)',\r\n` +
    `            'research.gen-btn':'Generate Research & Ideas',\r\n` +
    `            'research.output-title':'Research Results',\r\n` +
    `            'research.output-h3':'Market Research & Product Ideas',\r\n` +
    `            'research.copy-btn':'Copy',\r\n` +
    `            'research.placeholder-title':'Research Results & Ideas',\r\n` +
    `            'research.placeholder-desc':'Fill in business info to start research',\r\n` +
    `            'budget.desc':'Create budget projections and financial scenarios for your business',\r\n` +
    `            'budget.input-title':'Financial Data',\r\n` +
    `            'budget.label-revenue':'Monthly Revenue Projection',\r\n` +
    `            'budget.label-type':'Business Type',\r\n` +
    `            'budget.label-industry':'Industry',\r\n` +
    `            'budget.label-scenario':'Scenario to Simulate',\r\n` +
    `            'budget.label-extra':'Additional Details (Optional)',\r\n` +
    `            'budget.gen-btn':'Generate Budget Projection',\r\n` +
    `            'budget.output-title':'Projection Results',\r\n` +
    `            'budget.output-h3':'Budget Projection & Recommendations',\r\n` +
    `            'budget.copy-btn':'Copy',\r\n` +
    `            'budget.placeholder-title':'Your Financial Projection',\r\n` +
    `            'budget.placeholder-desc':'Fill in data for budget simulation',\r\n` +
    `            },`,
    'EN dict insert'
);

rep(
    `'marketing.placeholder-desc':'Isi info promosi untuk generate',\r\n            }`,
    `'marketing.placeholder-desc':'Isi info promosi untuk generate',\r\n` +
    `            'research.desc':'Dapatkan ide produk baru dan insight tren pasar terkini',\r\n` +
    `            'research.input-title':'Info Riset',\r\n` +
    `            'research.label-business':'Jenis Bisnis Saat Ini',\r\n` +
    `            'research.label-goal':'Tujuan Riset',\r\n` +
    `            'research.label-location':'Lokasi/Target Market',\r\n` +
    `            'research.label-pref':'Preferensi Khusus (Opsional)',\r\n` +
    `            'research.gen-btn':'Generate Riset & Ide',\r\n` +
    `            'research.output-title':'Hasil Riset',\r\n` +
    `            'research.output-h3':'Riset Pasar & Ide Produk',\r\n` +
    `            'research.copy-btn':'Salin',\r\n` +
    `            'research.placeholder-title':'Hasil Riset & Ide',\r\n` +
    `            'research.placeholder-desc':'Isi info bisnis untuk mulai riset',\r\n` +
    `            'budget.desc':'Buat proyeksi anggaran dan skenario keuangan untuk bisnis Anda',\r\n` +
    `            'budget.input-title':'Data Keuangan',\r\n` +
    `            'budget.label-revenue':'Proyeksi Pendapatan Bulanan',\r\n` +
    `            'budget.label-type':'Tipe Bisnis',\r\n` +
    `            'budget.label-industry':'Industri',\r\n` +
    `            'budget.label-scenario':'Skenario yang Ingin Disimulasikan',\r\n` +
    `            'budget.label-extra':'Detail Tambahan (Opsional)',\r\n` +
    `            'budget.gen-btn':'Generate Proyeksi Anggaran',\r\n` +
    `            'budget.output-title':'Hasil Proyeksi',\r\n` +
    `            'budget.output-h3':'Proyeksi Anggaran & Saran',\r\n` +
    `            'budget.copy-btn':'Salin',\r\n` +
    `            'budget.placeholder-title':'Proyeksi Keuangan Anda',\r\n` +
    `            'budget.placeholder-desc':'Isi data untuk simulasi anggaran',\r\n` +
    `            }`,
    'ID dict insert'
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
