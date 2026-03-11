// patch_brand.js — Brand rename, login translation, lang toggle restructure, i18n headers
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ===== BRAND NAME =====

rep(
    '<title>Affiliate Go Foto Studio by Arul CG</title>',
    '<title>AFF GO STUDIO by Arul CG</title>',
    'title'
);
rep(
    '<h1><i class="fas fa-magic"></i> Affiliate Go Foto Studio <span class="text-xs bg-gradient-to-r from-sky-500 to-violet-500 text-white px-2 py-1 rounded-full">V21</span></h1>',
    '<h1><i class="fas fa-magic"></i> AFF GO STUDIO <span class="text-xs bg-gradient-to-r from-sky-500 to-violet-500 text-white px-2 py-1 rounded-full">V21</span></h1>',
    'mobile-header-h1'
);
rep(
    'Affiliate Go Foto Studio\r\n                </h1>',
    'AFF GO STUDIO\r\n                </h1>',
    'sidebar-h1'
);
// Beranda welcome h1 raw text (shown before i18n JS runs)
rep(
    '<i class="fas fa-robot mr-3"></i>Selamat Datang di Affiliate Go Foto studio',
    '<i class="fas fa-robot mr-3"></i>Welcome to AFF GO STUDIO',
    'beranda-h1-raw'
);
// Update footer modal string
rep(
    'Affiliate Go Foto Studio by Arul CG &#8212; Terima kasih sudah menggunakan!',
    'AFF GO STUDIO by Arul CG &#8212; Thank you for using the app!',
    'modal-footer'
);

// ===== LOGIN PAGE — translate to English =====

rep(
    '<h2><i class="fas fa-lock"></i> Affiliate GO</h2>',
    '<h2><i class="fas fa-lock"></i> AFF GO STUDIO</h2>',
    'login-h2'
);
rep(
    '<p style="font-size: 0.95em; opacity: 0.9;">Masukkan Email Pembelian Anda</p>',
    '<p style="font-size: 0.95em; opacity: 0.9;">Enter your purchase email</p>',
    'login-subtitle'
);
rep(
    'placeholder="contoh@gmail.com"',
    'placeholder="your@email.com"',
    'login-placeholder'
);
rep(
    '<i class="fas fa-sign-in-alt"></i> MASUK APLIKASI\r\n            </button>',
    '<i class="fas fa-sign-in-alt"></i> LOGIN\r\n            </button>',
    'login-btn-text'
);
rep(
    '<i class="fas fa-spinner fa-spin"></i> Sedang memverifikasi...',
    '<i class="fas fa-spinner fa-spin"></i> Verifying...',
    'login-loading'
);
rep(
    '<i class="fas fa-shield-alt"></i> Sistem Login Terenkripsi & Aman',
    '<i class="fas fa-shield-alt"></i> Encrypted & Secure Login System',
    'login-security'
);

// ===== LOGIN JS STRINGS =====

rep(
    "loginBtn.innerHTML = '<i class=\"fas fa-spinner fa-spin\"></i> MEMVERIFIKASI...';",
    "loginBtn.innerHTML = '<i class=\"fas fa-spinner fa-spin\"></i> VERIFYING...';",
    'js-login-verifying'
);
rep(
    "loginBtn.innerHTML = '<i class=\"fas fa-sign-in-alt\"></i> MASUK APLIKASI';",
    "loginBtn.innerHTML = '<i class=\"fas fa-sign-in-alt\"></i> LOGIN';",
    'js-login-btn-restore-1'
);
rep(
    "loginBtn.innerHTML = '<i class=\"fas fa-sign-in-alt\"></i> MASUK APLIKASI';",
    "loginBtn.innerHTML = '<i class=\"fas fa-sign-in-alt\"></i> LOGIN';",
    'js-login-btn-restore-2'
);
rep(
    '"Email tidak terdaftar. Pastikan sudah membeli Affiliate GO."',
    '"Email not registered. Please make sure you have purchased AFF GO STUDIO."',
    'js-login-error-default'
);
rep(
    'error.innerText = "\u274C Gagal koneksi ke server. Periksa koneksi internet Anda.";',
    'error.innerText = "\u274C Connection failed. Please check your internet connection.";',
    'js-login-conn-error'
);

// ===== SIDEBAR LANG TOGGLE RESTRUCTURE =====
// Move lang-toggle out of flex row with V21 — make it full-width separate row

rep(
    '<div class="mt-2 flex items-center justify-center gap-2">\r\n                    <span class="text-xs bg-gradient-to-r from-sky-500 to-violet-500 text-white px-3 py-1 rounded-full font-semibold shadow-lg">V21</span>\r\n                    <div class="lang-toggle">\r\n                        <button class="lang-toggle-btn lang-active" data-lang="en">EN</button>\r\n                        <button class="lang-toggle-btn" data-lang="id">ID</button>\r\n                    </div>\r\n                </div>',
    '<div class="mt-2 flex items-center justify-center">\r\n                    <span class="text-xs bg-gradient-to-r from-sky-500 to-violet-500 text-white px-3 py-1 rounded-full font-semibold shadow-lg">V21</span>\r\n                </div>\r\n                <div class="lang-toggle">\r\n                    <button class="lang-toggle-btn lang-active" data-lang="en">EN</button>\r\n                    <button class="lang-toggle-btn" data-lang="id">ID</button>\r\n                </div>',
    'sidebar-lang-toggle-restructure'
);

// ===== I18N DICT — beranda headers =====

// EN headers dict: beranda
rep(
    "'beranda':'Selamat Datang di Affiliate Go Foto Studio'",
    "'beranda':'Welcome to AFF GO STUDIO'",
    'en-header-beranda'
);
// ID headers dict: beranda
rep(
    "'beranda':'Selamat Datang di Affiliate Go Foto Studio'",
    "'beranda':'Selamat Datang di AFF GO STUDIO'",
    'id-header-beranda'
);

// EN beranda.welcome-msg
rep(
    "'beranda.welcome-msg':'Hello! I am AI Assistant for Affiliate Go Foto Studio by Arul CG. I am ready to help you with various questions. Ask me anything!'",
    "'beranda.welcome-msg':'Hello! I am the AI Assistant for AFF GO STUDIO by Arul CG. I am ready to help you with any questions. Ask me anything!'",
    'en-welcome-msg'
);
// ID beranda.welcome-msg
rep(
    "'beranda.welcome-msg':'Halo! Saya AI Assistant untuk Affiliate Go Foto Studio by Arul CG. Saya siap membantu Anda dengan berbagai pertanyaan. Tanya saya tentang apa saja!'",
    "'beranda.welcome-msg':'Halo! Saya AI Assistant untuk AFF GO STUDIO by Arul CG. Saya siap membantu Anda dengan berbagai pertanyaan. Tanya saja!'",
    'id-welcome-msg'
);

// EN beranda.tg-name
rep(
    "'beranda.tg-name':'Affiliate Go Foto Studio Group'",
    "'beranda.tg-name':'AFF GO STUDIO Group'",
    'en-tg-name'
);
// ID beranda.tg-name
rep(
    "'beranda.tg-name':'Grup Affiliate Go Foto Studio'",
    "'beranda.tg-name':'Grup AFF GO STUDIO'",
    'id-tg-name'
);

// EN tutorial label
rep(
    "'beranda.tutorial-label':'Affiliate Go Video Tutorials:'",
    "'beranda.tutorial-label':'AFF GO STUDIO Video Tutorials:'",
    'en-tutorial-label'
);
// ID tutorial label
rep(
    "'beranda.tutorial-label':'Video Tutorial Affiliate Go:'",
    "'beranda.tutorial-label':'Video Tutorial AFF GO STUDIO:'",
    'id-tutorial-label'
);

// EN tut1
rep(
    "'beranda.tut1-title':'Getting Started with Affiliate Go'",
    "'beranda.tut1-title':'Getting Started with AFF GO STUDIO'",
    'en-tut1'
);
// ID tut1
rep(
    "'beranda.tut1-title':'Panduan Pertama Kali Pakai Affiliate Go'",
    "'beranda.tut1-title':'Panduan Pertama Kali Pakai AFF GO STUDIO'",
    'id-tut1'
);

// EN tut2
rep(
    "'beranda.tut2-title':'How to Affiliate with Affiliate Go'",
    "'beranda.tut2-title':'How to Affiliate with AFF GO STUDIO'",
    'en-tut2'
);
// ID tut2
rep(
    "'beranda.tut2-title':'Cara Affiliasi Affiliate Go'",
    "'beranda.tut2-title':'Cara Affiliasi AFF GO STUDIO'",
    'id-tut2'
);

// EN beranda.welcome-msg inline text (data-i18n element initial value)
rep(
    'data-i18n="beranda.welcome-msg">Halo! Saya AI Assistant untuk Affiliate Go Foto Studio by Arul CG. Saya siap membantu Anda dengan berbagai pertanyaan. Tanya saya tentang apa saja!</p>',
    'data-i18n="beranda.welcome-msg">Hello! I am the AI Assistant for AFF GO STUDIO by Arul CG. I am ready to help you with any questions. Ask me anything!</p>',
    'beranda-welcome-msg-inline'
);

// beranda tg-name inline text
rep(
    'data-i18n="beranda.tg-name">Grup Affiliate Go Foto Studio</div>',
    'data-i18n="beranda.tg-name">AFF GO STUDIO Group</div>',
    'beranda-tg-name-inline'
);

// beranda tutorial-label inline text
rep(
    'data-i18n="beranda.tutorial-label">Video Tutorial Affiliate Go:</span>',
    'data-i18n="beranda.tutorial-label">AFF GO STUDIO Video Tutorials:</span>',
    'beranda-tutorial-label-inline'
);

// beranda tut1 inline text
rep(
    'data-i18n="beranda.tut1-title">Panduan Pertama Kali Pakai Affiliate Go</div>',
    'data-i18n="beranda.tut1-title">Getting Started with AFF GO STUDIO</div>',
    'beranda-tut1-inline'
);

// beranda tut2 inline text
rep(
    'data-i18n="beranda.tut2-title">Cara Affiliasi Affiliate Go</div>',
    'data-i18n="beranda.tut2-title">How to Affiliate with AFF GO STUDIO</div>',
    'beranda-tut2-inline'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
