// i18n_patch16.js — Business Plan, HR Assistant, Marketing Content
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
// BUSINESS PLAN (content-rencana-bisnis)
// ================================================================

// 1. header desc
repR(
    '(<p class="text-lg text-gray-600 mb-2">)[\\r\\n\\s]+(Buat rencana bisnis dan analisis SWOT profesional untuk UMKM & bisnis besar)[\\r\\n\\s]+(</p>)',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="bizplan.desc">\r\n                        $2\r\n                    $3',
    'bizplan.desc'
);

// 2. input h2
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-edit mr-2 text-green-600"></i>Input Bisnis)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="bizplan.input-title">$1',
    'bizplan.input-title'
);

// 3. label "Jenis Bisnis" (with asterisk)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Jenis Bisnis [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="bizplan.label-type">$1',
    'bizplan.label-type'
);

// 4. label "Lokasi Bisnis"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Lokasi Bisnis[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="bizplan.label-location">$1',
    'bizplan.label-location'
);

// 5. label "Target Pasar"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Target Pasar[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="bizplan.label-market">$1',
    'bizplan.label-market'
);

// 6. label "Modal Awal (Opsional)"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Modal Awal \\(Opsional\\)[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="bizplan.label-capital">$1',
    'bizplan.label-capital'
);

// 7. label "Informasi Tambahan" — 1st occurrence (bizplan)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Informasi Tambahan[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="bizplan.label-extra">$1',
    'bizplan.label-extra'
);

// 8. generate button
repR(
    '(id="bp-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-sparkles mr-2"></i>)[\\r\\n\\s]*Generate Rencana Bisnis',
    '$1\r\n                                <span data-i18n="bizplan.gen-btn">Generate Rencana Bisnis</span>',
    'bizplan.gen-btn'
);

// 9. output h2
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-file-alt mr-2 text-green-600"></i>Hasil Rencana Bisnis)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="bizplan.output-title">$1',
    'bizplan.output-title'
);

// 10. output h3 "Rencana Bisnis & SWOT" — single line
rep(
    '<h3 class="font-bold text-gray-800">Rencana Bisnis & SWOT</h3>',
    '<h3 class="font-bold text-gray-800" data-i18n="bizplan.output-h3">Rencana Bisnis & SWOT</h3>',
    'bizplan.output-h3'
);

// 11. copy button
repR(
    '(id="bp-copy-btn"[\\s\\S]*?<i class="fas fa-copy"></i>)[\\r\\n\\s]*Salin',
    '$1<span data-i18n="bizplan.copy-btn">Salin</span>',
    'bizplan.copy-btn'
);

// 12. placeholder title
rep(
    '<p class="text-lg font-semibold">Rencana Bisnis Anda</p>',
    '<p class="text-lg font-semibold" data-i18n="bizplan.placeholder-title">Rencana Bisnis Anda</p>',
    'bizplan.placeholder-title'
);

// 13. placeholder desc
rep(
    '<p class="text-sm">Isi form dan generate rencana bisnis profesional</p>',
    '<p class="text-sm" data-i18n="bizplan.placeholder-desc">Isi form dan generate rencana bisnis profesional</p>',
    'bizplan.placeholder-desc'
);

// ================================================================
// HR ASSISTANT (content-hr-assistant)
// ================================================================

// 14. header desc
repR(
    '(<p class="text-lg text-gray-600 mb-2">)[\\r\\n\\s]+(Buat deskripsi pekerjaan lengkap dan pertanyaan wawancara profesional)[\\r\\n\\s]+(</p>)',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="hr.desc">\r\n                        $2\r\n                    $3',
    'hr.desc'
);

// 15. input h2
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-edit mr-2 text-blue-600"></i>Detail Posisi)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="hr.input-title">$1',
    'hr.input-title'
);

// 16. label "Nama Posisi" (with asterisk)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Nama Posisi [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="hr.label-position">$1',
    'hr.label-position'
);

// 17. label "Industri/Bidang Usaha"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Industri/Bidang Usaha[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="hr.label-industry">$1',
    'hr.label-industry'
);

// 18. label "Level Posisi"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Level Posisi[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="hr.label-level">$1',
    'hr.label-level'
);

// 19. label "Keahlian Khusus (Opsional)"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Keahlian Khusus \\(Opsional\\)[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="hr.label-skills">$1',
    'hr.label-skills'
);

// 20. generate button
repR(
    '(id="hr-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-sparkles mr-2"></i>)[\\r\\n\\s]*Generate Job Description',
    '$1\r\n                                <span data-i18n="hr.gen-btn">Generate Job Description</span>',
    'hr.gen-btn'
);

// 21. output h2
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-file-alt mr-2 text-blue-600"></i>Hasil HR)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="hr.output-title">$1',
    'hr.output-title'
);

// 22. output h3
rep(
    '<h3 class="font-bold text-gray-800">Deskripsi Pekerjaan & Wawancara</h3>',
    '<h3 class="font-bold text-gray-800" data-i18n="hr.output-h3">Deskripsi Pekerjaan & Wawancara</h3>',
    'hr.output-h3'
);

// 23. copy button
repR(
    '(id="hr-copy-btn"[\\s\\S]*?<i class="fas fa-copy"></i>)[\\r\\n\\s]*Salin',
    '$1<span data-i18n="hr.copy-btn">Salin</span>',
    'hr.copy-btn'
);

// 24. placeholder desc
rep(
    '<p class="text-sm">Isi detail posisi untuk generate</p>',
    '<p class="text-sm" data-i18n="hr.placeholder-desc">Isi detail posisi untuk generate</p>',
    'hr.placeholder-desc'
);

// ================================================================
// MARKETING CONTENT (content-konten-marketing)
// ================================================================

// 25. header desc
repR(
    '(<p class="text-lg text-gray-600 mb-2">)[\\r\\n\\s]+(Buat konten marketing untuk Instagram, Facebook, Email, dan Google Ads sekaligus)[\\r\\n\\s]+(</p>)',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="marketing.desc">\r\n                        $2\r\n                    $3',
    'marketing.desc'
);

// 26. input h2
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-edit mr-2 text-orange-500"></i>Info Promosi)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="marketing.input-title">$1',
    'marketing.input-title'
);

// 27. label "Nama Produk/Layanan" (with asterisk)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Nama Produk/Layanan [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="marketing.label-product">$1',
    'marketing.label-product'
);

// 28. label "Jenis Promosi"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Jenis Promosi[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="marketing.label-promo">$1',
    'marketing.label-promo'
);

// 29. label "Informasi Tambahan" — 2nd occurrence (marketing)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Informasi Tambahan[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="bizplan.label-extra">$1',
    'marketing.label-extra'
);

// 30. generate button
repR(
    '(id="km-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-sparkles mr-2"></i>)[\\r\\n\\s]*Generate Konten Marketing',
    '$1\r\n                                <span data-i18n="marketing.gen-btn">Generate Konten Marketing</span>',
    'marketing.gen-btn'
);

// 31. output h2
repR(
    '<h2 class="text-2xl font-bold mb-6 text-gray-800">([\\r\\n\\s]+<i class="fas fa-file-alt mr-2 text-orange-500"></i>Hasil Konten)',
    '<h2 class="text-2xl font-bold mb-6 text-gray-800" data-i18n="marketing.output-title">$1',
    'marketing.output-title'
);

// 32. output h3
rep(
    '<h3 class="font-bold text-gray-800">Konten Multi-Platform</h3>',
    '<h3 class="font-bold text-gray-800" data-i18n="marketing.output-h3">Konten Multi-Platform</h3>',
    'marketing.output-h3'
);

// 33. copy button "Salin Semua"
repR(
    '(id="km-copy-btn"[\\s\\S]*?<i class="fas fa-copy"></i>)[\\r\\n\\s]*Salin Semua',
    '$1<span data-i18n="marketing.copy-btn">Salin Semua</span>',
    'marketing.copy-btn'
);

// 34. placeholder title
rep(
    '<p class="text-lg font-semibold">Konten Marketing Anda</p>',
    '<p class="text-lg font-semibold" data-i18n="marketing.placeholder-title">Konten Marketing Anda</p>',
    'marketing.placeholder-title'
);

// 35. placeholder desc
rep(
    '<p class="text-sm">Isi info promosi untuk generate</p>',
    '<p class="text-sm" data-i18n="marketing.placeholder-desc">Isi info promosi untuk generate</p>',
    'marketing.placeholder-desc'
);

// ================================================================
// i18n DICTIONARY
// ================================================================
rep(
    `'seodesc.placeholder-desc':'Fill the form and click Generate',\r\n            },`,
    `'seodesc.placeholder-desc':'Fill the form and click Generate',\r\n` +
    // Business Plan
    `            'bizplan.desc':'Create professional business plans and SWOT analysis for SMEs & large businesses',\r\n` +
    `            'bizplan.input-title':'Business Input',\r\n` +
    `            'bizplan.label-type':'Business Type',\r\n` +
    `            'bizplan.label-location':'Business Location',\r\n` +
    `            'bizplan.label-market':'Target Market',\r\n` +
    `            'bizplan.label-capital':'Initial Capital (Optional)',\r\n` +
    `            'bizplan.label-extra':'Additional Information',\r\n` +
    `            'bizplan.gen-btn':'Generate Business Plan',\r\n` +
    `            'bizplan.output-title':'Business Plan Results',\r\n` +
    `            'bizplan.output-h3':'Business Plan & SWOT',\r\n` +
    `            'bizplan.copy-btn':'Copy',\r\n` +
    `            'bizplan.placeholder-title':'Your Business Plan',\r\n` +
    `            'bizplan.placeholder-desc':'Fill the form and generate a professional business plan',\r\n` +
    // HR Assistant
    `            'hr.desc':'Create complete job descriptions and professional interview questions',\r\n` +
    `            'hr.input-title':'Position Details',\r\n` +
    `            'hr.label-position':'Position Name',\r\n` +
    `            'hr.label-industry':'Industry/Business Field',\r\n` +
    `            'hr.label-level':'Position Level',\r\n` +
    `            'hr.label-skills':'Special Skills (Optional)',\r\n` +
    `            'hr.gen-btn':'Generate Job Description',\r\n` +
    `            'hr.output-title':'HR Results',\r\n` +
    `            'hr.output-h3':'Job Description & Interview Questions',\r\n` +
    `            'hr.copy-btn':'Copy',\r\n` +
    `            'hr.placeholder-desc':'Fill in position details to generate',\r\n` +
    // Marketing Content
    `            'marketing.desc':'Create marketing content for Instagram, Facebook, Email, and Google Ads all at once',\r\n` +
    `            'marketing.input-title':'Promotion Info',\r\n` +
    `            'marketing.label-product':'Product/Service Name',\r\n` +
    `            'marketing.label-promo':'Promotion Type',\r\n` +
    `            'marketing.gen-btn':'Generate Marketing Content',\r\n` +
    `            'marketing.output-title':'Content Results',\r\n` +
    `            'marketing.output-h3':'Multi-Platform Content',\r\n` +
    `            'marketing.copy-btn':'Copy All',\r\n` +
    `            'marketing.placeholder-title':'Your Marketing Content',\r\n` +
    `            'marketing.placeholder-desc':'Fill in promotion info to generate',\r\n` +
    `            },`,
    'EN dict insert'
);

rep(
    `'seodesc.placeholder-desc':'Isi form di samping dan klik Generate',\r\n            }`,
    `'seodesc.placeholder-desc':'Isi form di samping dan klik Generate',\r\n` +
    // Business Plan
    `            'bizplan.desc':'Buat rencana bisnis dan analisis SWOT profesional untuk UMKM & bisnis besar',\r\n` +
    `            'bizplan.input-title':'Input Bisnis',\r\n` +
    `            'bizplan.label-type':'Jenis Bisnis',\r\n` +
    `            'bizplan.label-location':'Lokasi Bisnis',\r\n` +
    `            'bizplan.label-market':'Target Pasar',\r\n` +
    `            'bizplan.label-capital':'Modal Awal (Opsional)',\r\n` +
    `            'bizplan.label-extra':'Informasi Tambahan',\r\n` +
    `            'bizplan.gen-btn':'Generate Rencana Bisnis',\r\n` +
    `            'bizplan.output-title':'Hasil Rencana Bisnis',\r\n` +
    `            'bizplan.output-h3':'Rencana Bisnis & SWOT',\r\n` +
    `            'bizplan.copy-btn':'Salin',\r\n` +
    `            'bizplan.placeholder-title':'Rencana Bisnis Anda',\r\n` +
    `            'bizplan.placeholder-desc':'Isi form dan generate rencana bisnis profesional',\r\n` +
    // HR Assistant
    `            'hr.desc':'Buat deskripsi pekerjaan lengkap dan pertanyaan wawancara profesional',\r\n` +
    `            'hr.input-title':'Detail Posisi',\r\n` +
    `            'hr.label-position':'Nama Posisi',\r\n` +
    `            'hr.label-industry':'Industri/Bidang Usaha',\r\n` +
    `            'hr.label-level':'Level Posisi',\r\n` +
    `            'hr.label-skills':'Keahlian Khusus (Opsional)',\r\n` +
    `            'hr.gen-btn':'Generate Job Description',\r\n` +
    `            'hr.output-title':'Hasil HR',\r\n` +
    `            'hr.output-h3':'Deskripsi Pekerjaan & Wawancara',\r\n` +
    `            'hr.copy-btn':'Salin',\r\n` +
    `            'hr.placeholder-desc':'Isi detail posisi untuk generate',\r\n` +
    // Marketing Content
    `            'marketing.desc':'Buat konten marketing untuk Instagram, Facebook, Email, dan Google Ads sekaligus',\r\n` +
    `            'marketing.input-title':'Info Promosi',\r\n` +
    `            'marketing.label-product':'Nama Produk/Layanan',\r\n` +
    `            'marketing.label-promo':'Jenis Promosi',\r\n` +
    `            'marketing.gen-btn':'Generate Konten Marketing',\r\n` +
    `            'marketing.output-title':'Hasil Konten',\r\n` +
    `            'marketing.output-h3':'Konten Multi-Platform',\r\n` +
    `            'marketing.copy-btn':'Salin Semua',\r\n` +
    `            'marketing.placeholder-title':'Konten Marketing Anda',\r\n` +
    `            'marketing.placeholder-desc':'Isi info promosi untuk generate',\r\n` +
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
