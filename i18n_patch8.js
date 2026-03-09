// i18n_patch8.js — Mockup Studio + POV Tangan: wire data-i18n to HTML elements
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
// MOCKUP STUDIO
// ================================================================

// 1. h2 Upload Design/Artwork
rep(
    '<h2 class="text-2xl font-bold mb-4 text-gray-800">\n                            <i class="fas fa-cloud-upload-alt mr-2"></i>Upload Design/Artwork\n                        </h2>',
    '<h2 class="text-2xl font-bold mb-4 text-gray-800" data-i18n="mockup.upload-title">\n                            <i class="fas fa-cloud-upload-alt mr-2"></i>Upload Design/Artwork\n                        </h2>',
    'mockup.upload-title'
);

// 2. template-tips paragraph
repR(
    '(<p class="text-xs text-gray-500 mt-2">)[\\r\\n\\s]+(<i class="fas fa-lightbulb mr-1"></i>)[\\r\\n\\s]+(Tips: Upload foto template \\(contoh:)',
    '$1\n                            <i class="fas fa-lightbulb mr-1"></i>\n                            <span data-i18n="mockup.template-tips">Tips: Upload foto template (contoh: foto kaos, gelas, poster, dll). Design akan ditempelkan secara realistis</span>\n                        </p><!--REPLACE_END-->',
    'mockup.template-tips (restructure)'
);
// Clean up the REPLACE_END marker and original content
repR(
    '<span data-i18n="mockup.template-tips">[^<]+</span>[\\r\\n\\s]*</p><!--REPLACE_END-->[\\s\\S]*?(<div class="mb-6">[\\r\\n\\s]*<h3[^>]*data-i18n="mockup.manual-theme-title")',
    '<span data-i18n="mockup.template-tips">Tips: Upload foto template (contoh: foto kaos, gelas, poster, dll). Design akan ditempelkan secara realistis</span>\n                        </p>\n                    </div>\n\n                    <!-- Mockup Theme Input Section (Optional) -->\n                    <div class="mb-6">\n                        <h3 class="text-xl font-bold mb-3 text-gray-800" data-i18n="mockup.manual-theme-title"',
    'mockup.template-tips (clean)'
);

// ================================================================
// SIMPLER APPROACH: Direct string matching with exact content
// ================================================================
// Reset and use clean approach
html = fs.readFileSync('kode.html', 'utf8');
ok = 0; miss = 0;

// 1. h2 Upload Design/Artwork — use regex for CRLF
repR(
    '(<h2 class="text-2xl font-bold mb-4 text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-cloud-upload-alt mr-2"></i>Upload Design/Artwork)',
    '<h2 class="text-2xl font-bold mb-4 text-gray-800" data-i18n="mockup.upload-title">\r\n                            $2',
    'mockup.upload-title'
);

// 2. template-tips p — just add data-i18n to the <p> tag (applyText handles <i> child)
repR(
    '(<p class="text-xs text-gray-500 mt-2">)[\\r\\n\\s]+(<i class="fas fa-lightbulb mr-1"></i>[\\r\\n\\s]+Tips: Upload foto template)',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="mockup.template-tips">\r\n                            $2',
    'mockup.template-tips'
);

// 3. theme-tips p — identify by "Sebutkan jenis mockup"
repR(
    '(<p class="text-xs text-gray-500 mt-2">)[\\r\\n\\s]+(<i class="fas fa-info-circle mr-1"></i>[\\r\\n\\s]+Tips: Sebutkan jenis mockup)',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="mockup.theme-tips">\r\n                            $2',
    'mockup.theme-tips'
);

// 4. h3 Rasio Aspek (mockup) — use context of mockup-ratio-selection
repR(
    '(<h3 class="text-xl font-bold mb-3 text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-expand-arrows-alt mr-2"></i>Rasio Aspek)[\\r\\n\\s]+(</h3>[\\r\\n\\s]+<div id="mockup-ratio-selection")',
    '<h3 class="text-xl font-bold mb-3 text-gray-800" data-i18n="mockup.aspect-ratio-title">\r\n                            $2\r\n                        </h3>\r\n                        <div id="mockup-ratio-selection"',
    'mockup.aspect-ratio-title'
);

// 5. aspect-ratio-tips p (mockup) — after mockup-ratio-selection div
repR(
    '(</div>[\\r\\n\\s]+<p class="text-xs text-gray-500 mt-2">)[\\r\\n\\s]+(<i class="fas fa-lightbulb mr-1"></i>[\\r\\n\\s]+Pilih rasio aspek untuk semua mockup)',
    '</div>\r\n                        <p class="text-xs text-gray-500 mt-2" data-i18n="mockup.aspect-ratio-tips">\r\n                            $2',
    'mockup.aspect-ratio-tips'
);

// 6. generate button (mockup)
repR(
    '(<button[\\s\\S]*?id="mockup-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-magic mr-3"></i>)[\\r\\n\\s]+(Generate 7 Mockup)',
    '$1\r\n                            $2\r\n                            <span data-i18n="mockup.generate-btn">Generate 7 Mockup</span>',
    'mockup.generate-btn'
);

// 7. loading paragraph (mockup) — restructure with two spans
repR(
    '(<p class="text-gray-600 mb-4">)[\\r\\n\\s]+Mohon tunggu, AI sedang menghasilkan (<span id="mockup-progress-text">0/7</span>) mockup',
    '$1\r\n                                <span data-i18n="mockup.loading-wait">Mohon tunggu, AI sedang menghasilkan</span> $2 <span data-i18n="mockup.loading-suffix">mockup</span>',
    'mockup.loading-wait+suffix'
);

// 8. download-all button (mockup)
repR(
    '(<button[\\r\\n\\s]+id="mockup-download-all-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-download mr-2"></i>)[\\r\\n\\s]+(Download Semua)',
    '$1\r\n                                <i class="fas fa-download mr-2"></i>\r\n                                <span data-i18n="mockup.download-all">Download Semua</span>',
    'mockup.download-all'
);

// 9. retry button (mockup)
repR(
    '(<button[\\r\\n\\s]+id="mockup-retry-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-redo mr-2"></i>)Coba Lagi',
    '$1\r\n                                    <i class="fas fa-redo mr-2"></i><span data-i18n="mockup.retry">Coba Lagi</span>',
    'mockup.retry'
);

// ================================================================
// POV TANGAN
// ================================================================

// 10. bg-tips p (pov) — "Upload foto lokasi apapun (bengkel..."
repR(
    '(<p class="text-xs text-gray-500 mt-2">)[\\r\\n\\s]+(<i class="fas fa-magic mr-1"></i>)[\\r\\n\\s]+(Tips: Upload foto lokasi apapun)',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="pov.bg-tips">\r\n                            $2\r\n                            $3',
    'pov.bg-tips'
);

// 11. textarea placeholder
rep(
    'id="pov-product-description"\n                            placeholder=',
    'id="pov-product-description"\n                            data-i18n-placeholder="pov.bg-placeholder"\n                            placeholder=',
    'pov.bg-placeholder'
);

// 12. bg-desc-tips p (pov) — "Deskripsikan background/setting"
repR(
    '(<p class="text-xs text-gray-500 mt-2">)[\\r\\n\\s]+(<i class="fas fa-lightbulb mr-1"></i>)[\\r\\n\\s]+(Tips: Deskripsikan background/setting)',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="pov.bg-desc-tips">\r\n                            $2\r\n                            $3',
    'pov.bg-desc-tips'
);

// 13. hand-1 button
repR(
    '(<button type="button" data-hand-count="1" class="hand-count-btn-pov selected">)[\\r\\n\\s]+(<i class="fas fa-hand-paper mr-2"></i>)1 Tangan',
    '$1\r\n                                $2<span data-i18n="pov.hand-1">1 Tangan</span>',
    'pov.hand-1'
);

// 14. hand-2 button
repR(
    '(<button type="button" data-hand-count="2" class="hand-count-btn-pov">)[\\r\\n\\s]+(<i class="fas fa-hands mr-2"></i>)2 Tangan',
    '$1\r\n                                $2<span data-i18n="pov.hand-2">2 Tangan</span>',
    'pov.hand-2'
);

// 15. hand-desc tips p (pov)
repR(
    '(<p class="text-xs text-gray-500 mt-2">)[\\r\\n\\s]+(<i class="fas fa-lightbulb mr-1"></i>)[\\r\\n\\s]+(Pilih apakah produk akan digenggam)',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="pov.hand-desc">\r\n                            $2\r\n                            $3',
    'pov.hand-desc'
);

// 16. h3 Rasio Aspek (pov) — use context of pov-ratio-selection
repR(
    '(<h3 class="text-xl font-bold mb-3 text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-expand-arrows-alt mr-2"></i>Rasio Aspek)[\\r\\n\\s]+(</h3>[\\r\\n\\s]+<div id="pov-ratio-selection")',
    '<h3 class="text-xl font-bold mb-3 text-gray-800" data-i18n="pov.aspect-title">\r\n                            $2\r\n                        </h3>\r\n                        <div id="pov-ratio-selection"',
    'pov.aspect-title'
);

// 17. aspect-desc tips p (pov) — after pov-ratio-selection
repR(
    '(</div>[\\r\\n\\s]+<p class="text-xs text-gray-500 mt-2">)[\\r\\n\\s]+(<i class="fas fa-lightbulb mr-1"></i>[\\r\\n\\s]+Pilih rasio aspek untuk semua foto POV)',
    '</div>\r\n                        <p class="text-xs text-gray-500 mt-2" data-i18n="pov.aspect-desc">\r\n                            $2',
    'pov.aspect-desc'
);

// 18. generate button (pov)
repR(
    '(<button[\\s\\S]*?id="pov-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-magic mr-3"></i>)[\\r\\n\\s]+(Generate 7 Foto POV Tangan)',
    '$1\r\n                            $2\r\n                            <span data-i18n="pov.generate-btn">Generate 7 Foto POV Tangan</span>',
    'pov.generate-btn'
);

// 19. loading h3 (pov)
repR(
    '(<h3 class="text-2xl font-bold text-gray-800 mb-2">)[\\r\\n\\s]+(Sedang Membuat Foto POV Tangan\\.\\.\\.)',
    '<h3 class="text-2xl font-bold text-gray-800 mb-2" data-i18n="pov.loading-title">\r\n                                $2',
    'pov.loading-title'
);

// 20. loading paragraph (pov)
repR(
    '(<p class="text-gray-600 mb-4">)[\\r\\n\\s]+Mohon tunggu, AI sedang menghasilkan (<span id="pov-progress-text">0/7</span>) foto',
    '$1\r\n                                <span data-i18n="pov.loading-wait">Mohon tunggu, AI sedang menghasilkan</span> $2 <span data-i18n="pov.loading-suffix">foto</span>',
    'pov.loading-wait+suffix'
);

// 21. results h2 (pov)
repR(
    '(<h2 class="text-3xl font-bold text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-check-circle text-green-500 mr-2"></i>)[\\r\\n\\s]+(Hasil POV Tangan)',
    '<h2 class="text-3xl font-bold text-gray-800" data-i18n="pov.results-title">\r\n                                $2\r\n                                $3',
    'pov.results-title'
);

// 22. download-all button (pov)
repR(
    '(<button[\\r\\n\\s]+id="pov-download-all-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-download mr-2"></i>)[\\r\\n\\s]+(Download Semua)',
    '$1\r\n                                <i class="fas fa-download mr-2"></i>\r\n                                <span data-i18n="pov.download-all">Download Semua</span>',
    'pov.download-all'
);

// 23. error h3 (pov)
rep(
    '<h3 class="text-xl font-bold text-red-800 mb-2">Terjadi Kesalahan</h3>',
    '<h3 class="text-xl font-bold text-red-800 mb-2" data-i18n="pov.error-title">Terjadi Kesalahan</h3>',
    'pov.error-title'
);

// 24. retry button (pov)
repR(
    '(<button[\\r\\n\\s]+id="pov-retry-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-redo mr-2"></i>)Coba Lagi',
    '$1\r\n                                    <i class="fas fa-redo mr-2"></i><span data-i18n="pov.retry">Coba Lagi</span>',
    'pov.retry'
);

// ================================================================
// ADD NEW DICTIONARY KEYS
// ================================================================

// EN: add new mockup keys after mockup.retry
rep(
    "'mockup.retry':'Try Again',",
    `'mockup.retry':'Try Again',
                'mockup.upload-title':'Upload Design/Artwork',
                'mockup.loading-wait':'Please wait, AI is generating',
                'mockup.loading-suffix':'mockups',`,
    'i18n EN: mockup new keys'
);

// EN: add new pov keys after pov.generate-btn
rep(
    "'pov.generate-btn':'Generate 7 POV Hand Photos',",
    `'pov.generate-btn':'Generate 7 POV Hand Photos',
                'pov.loading-title':'Creating POV Hand Photos...',
                'pov.loading-wait':'Please wait, AI is generating',
                'pov.loading-suffix':'photos',
                'pov.results-title':'POV Hand Results',
                'pov.download-all':'Download All',
                'pov.error-title':'An Error Occurred',
                'pov.retry':'Try Again',`,
    'i18n EN: pov new keys'
);

// ID: add new mockup keys after mockup.retry (ID)
rep(
    "'mockup.retry':'Coba Lagi',",
    `'mockup.retry':'Coba Lagi',
                'mockup.upload-title':'Upload Design/Artwork',
                'mockup.loading-wait':'Mohon tunggu, AI sedang menghasilkan',
                'mockup.loading-suffix':'mockup',`,
    'i18n ID: mockup new keys'
);

// ID: add new pov keys after pov.generate-btn (ID)
rep(
    "'pov.generate-btn':'Generate 7 Foto POV Tangan',",
    `'pov.generate-btn':'Generate 7 Foto POV Tangan',
                'pov.loading-title':'Sedang Membuat Foto POV Tangan...',
                'pov.loading-wait':'Mohon tunggu, AI sedang menghasilkan',
                'pov.loading-suffix':'foto',
                'pov.results-title':'Hasil POV Tangan',
                'pov.download-all':'Download Semua',
                'pov.error-title':'Terjadi Kesalahan',
                'pov.retry':'Coba Lagi',`,
    'i18n ID: pov new keys'
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
