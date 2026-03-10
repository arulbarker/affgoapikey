// i18n_patch26b.js — Fix dict anchors for patch26
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// EN dict — anchor after expression.results-header (😊 = \uD83D\uDE0A, 🎭 = \uD83C\uDFAD)
rep(
    "'expression.results-header':'\uD83D\uDE0A Expression Changer Results \uD83C\uDFAD',\r\n            },",
    "'expression.results-header':'\uD83D\uDE0A Expression Changer Results \uD83C\uDFAD',\r\n" +
    "            'bgremover.desc':'Automatically change photo backgrounds with AI! Choose a new background or leave transparent for professional results.',\r\n" +
    "            'bgremover.step1-title':'Upload Photo',\r\n" +
    "            'bgremover.upload-drag':'\uD83D\uDCF8 Click or drag photo',\r\n" +
    "            'bgremover.step2-title':'Choose New Background',\r\n" +
    "            'bgremover.bg-transparent':'Transparent',\r\n" +
    "            'bgremover.bg-white':'White',\r\n" +
    "            'bgremover.bg-black':'Black',\r\n" +
    "            'bgremover.bg-blue':'Blue',\r\n" +
    "            'bgremover.bg-purple':'Purple',\r\n" +
    "            'bgremover.bg-custom':'Custom',\r\n" +
    "            'bgremover.custom-label':'\u2728 Describe Background:',\r\n" +
    "            'bgremover.custom-placeholder':'Example: white professional studio, soft pink gradient, modern room...',\r\n" +
    "            'bgremover.custom-tip':'\uD83D\uDCA1 Describe the background you want',\r\n" +
    "            'bgremover.step3-title':'Aspect Ratio',\r\n" +
    "            'bgremover.step4-title':'Number of Variations',\r\n" +
    "            'bgremover.count-3':'3 Variations',\r\n" +
    "            'bgremover.count-4':'4 Variations',\r\n" +
    "            'bgremover.count-6':'6 Variations',\r\n" +
    "            'bgremover.gen-btn':'Change Background',\r\n" +
    "            'bgremover.gen-note':'\u26A1 Process takes 15-30 seconds per variation',\r\n" +
    "            'bgremover.placeholder-title':'Change Background Results',\r\n" +
    "            'bgremover.placeholder-desc':'Photos with new background will appear here',\r\n" +
    "            'bgremover.results-title':'\u2728 Background Removal Results \u2728',\r\n" +
    "            'bgremover.download-all':'Download All',\r\n" +
    "            'extender.desc':'Extend photos beyond their original frame! Extend background, change aspect ratio, or complete cropped photos with AI.',\r\n" +
    "            'extender.step1-title':'Upload Photo',\r\n" +
    "            'extender.upload-drag':'\uD83D\uDCF8 Click or drag photo',\r\n" +
    "            'extender.step2-title':'Extension Direction',\r\n" +
    "            'extender.dir-all':'All',\r\n" +
    "            'extender.dir-vertical':'Vertical',\r\n" +
    "            'extender.dir-left':'Left',\r\n" +
    "            'extender.dir-right':'Right',\r\n" +
    "            'extender.dir-top':'Top',\r\n" +
    "            'extender.dir-bottom':'Bottom',\r\n" +
    "            'extender.step3-title':'Target Aspect Ratio',\r\n" +
    "            'extender.step4-title':'Number of Variations',\r\n" +
    "            'extender.count-3':'3 Variations',\r\n" +
    "            'extender.count-4':'4 Variations',\r\n" +
    "            'extender.count-6':'6 Variations',\r\n" +
    "            'extender.gen-btn':'Extend Photo',\r\n" +
    "            'extender.gen-note':'\u26A1 Process takes 20-40 seconds per variation',\r\n" +
    "            'extender.placeholder-title':'Photo Extension Results',\r\n" +
    "            'extender.placeholder-desc':'Extended photos will appear here',\r\n" +
    "            'extender.results-title':'\u2728 Photo Extension Results \u2728',\r\n" +
    "            'extender.download-all':'Download All',\r\n" +
    "            },",
    'dict.en'
);

// ID dict — anchor after expression.results-header
rep(
    "'expression.results-header':'\uD83D\uDE0A Hasil Expression Changer \uD83C\uDFAD',\r\n            }",
    "'expression.results-header':'\uD83D\uDE0A Hasil Expression Changer \uD83C\uDFAD',\r\n" +
    "            'bgremover.desc':'Ubah background foto secara otomatis dengan AI! Pilih background baru atau biarkan transparan untuk hasil profesional.',\r\n" +
    "            'bgremover.step1-title':'Unggah Foto',\r\n" +
    "            'bgremover.upload-drag':'\uD83D\uDCF8 Klik atau seret foto',\r\n" +
    "            'bgremover.step2-title':'Pilih Background Baru',\r\n" +
    "            'bgremover.bg-transparent':'Transparan',\r\n" +
    "            'bgremover.bg-white':'Putih',\r\n" +
    "            'bgremover.bg-black':'Hitam',\r\n" +
    "            'bgremover.bg-blue':'Biru',\r\n" +
    "            'bgremover.bg-purple':'Ungu',\r\n" +
    "            'bgremover.bg-custom':'Kustom',\r\n" +
    "            'bgremover.custom-label':'\u2728 Deskripsikan Background:',\r\n" +
    "            'bgremover.custom-placeholder':'Contoh: studio putih profesional, gradient pink soft, ruangan modern...',\r\n" +
    "            'bgremover.custom-tip':'\uD83D\uDCA1 Deskripsikan background yang Anda inginkan',\r\n" +
    "            'bgremover.step3-title':'Aspek Rasio',\r\n" +
    "            'bgremover.step4-title':'Jumlah Variasi',\r\n" +
    "            'bgremover.count-3':'3 Variasi',\r\n" +
    "            'bgremover.count-4':'4 Variasi',\r\n" +
    "            'bgremover.count-6':'6 Variasi',\r\n" +
    "            'bgremover.gen-btn':'Ubah Background',\r\n" +
    "            'bgremover.gen-note':'\u26A1 Proses memerlukan waktu 15-30 detik per variasi',\r\n" +
    "            'bgremover.placeholder-title':'Hasil Ubah Background',\r\n" +
    "            'bgremover.placeholder-desc':'Foto dengan background baru akan muncul di sini',\r\n" +
    "            'bgremover.results-title':'\u2728 Hasil Background Removal \u2728',\r\n" +
    "            'bgremover.download-all':'Download Semua',\r\n" +
    "            'extender.desc':'Perluas foto keluar dari frame aslinya! Extend background, ubah aspect ratio, atau lengkapi foto yang terpotong dengan AI.',\r\n" +
    "            'extender.step1-title':'Unggah Foto',\r\n" +
    "            'extender.upload-drag':'\uD83D\uDCF8 Klik atau seret foto',\r\n" +
    "            'extender.step2-title':'Arah Perluasan',\r\n" +
    "            'extender.dir-all':'Semua',\r\n" +
    "            'extender.dir-vertical':'Vertikal',\r\n" +
    "            'extender.dir-left':'Kiri',\r\n" +
    "            'extender.dir-right':'Kanan',\r\n" +
    "            'extender.dir-top':'Atas',\r\n" +
    "            'extender.dir-bottom':'Bawah',\r\n" +
    "            'extender.step3-title':'Aspek Rasio Target',\r\n" +
    "            'extender.step4-title':'Jumlah Variasi',\r\n" +
    "            'extender.count-3':'3 Variasi',\r\n" +
    "            'extender.count-4':'4 Variasi',\r\n" +
    "            'extender.count-6':'6 Variasi',\r\n" +
    "            'extender.gen-btn':'Perluas Foto',\r\n" +
    "            'extender.gen-note':'\u26A1 Proses memerlukan waktu 20-40 detik per variasi',\r\n" +
    "            'extender.placeholder-title':'Hasil Perluas Foto',\r\n" +
    "            'extender.placeholder-desc':'Foto yang sudah diperluas akan muncul di sini',\r\n" +
    "            'extender.results-title':'\u2728 Hasil Perluasan Foto \u2728',\r\n" +
    "            'extender.download-all':'Download Semua',\r\n" +
    "            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
