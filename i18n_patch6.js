// i18n_patch6.js — Fix remaining Indonesian in Home & Create Model tabs
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ================================================================
// HOME TAB — remaining untranslated elements
// ================================================================

// Welcome chat message — replace complex HTML with translatable version
rep(
    `<p class="text-gray-800 leading-relaxed">
                                         Halo! Saya AI Assistant untuk <strong>Affiliate Go Foto Studio</strong> by Arul CG.
                                        <br><br>
                                        Saya siap membantu Anda dengan berbagai pertanyaan. Tanya saya tentang apa saja!
                                        <br><br>
                                         Obrolan umum •  Ide kreatif •  Pengetahuan •  Tips konten
                                        <br><br>
                                        Silakan ketik pertanyaan Anda di bawah!
                                    </p>`,
    `<p class="text-gray-800 leading-relaxed" data-i18n="beranda.welcome-msg">Halo! Saya AI Assistant untuk Affiliate Go Foto Studio by Arul CG. Saya siap membantu Anda dengan berbagai pertanyaan. Tanya saya tentang apa saja!</p>`,
    'beranda.welcome-msg'
);

// WA Channel name
rep(
    '<div class="font-bold">Channel WA AI Guild</div>',
    '<div class="font-bold" data-i18n="beranda.wa-name">Channel WA AI Guild</div>',
    'beranda.wa-name'
);

// Telegram Group name
rep(
    '<div class="font-bold">Grup Affiliate Go Foto Studio</div>',
    '<div class="font-bold" data-i18n="beranda.tg-name">Grup Affiliate Go Foto Studio</div>',
    'beranda.tg-name'
);

// ================================================================
// CREATE MODEL TAB — remaining untranslated elements
// ================================================================

// Purpose paragraph — remove <strong> tags so applyText works cleanly
rep(
    `<p class="text-gray-600 leading-relaxed mb-3">
                                Fitur <strong>"Membuat Model"</strong> dirancang untuk membuat foto model AI berkualitas tinggi dengan latar belakang simple dan pose standar. Foto yang dihasilkan dapat digunakan sebagai <strong>foto model</strong> di berbagai fitur lain dalam aplikasi ini, seperti:
                            </p>`,
    `<p class="text-gray-600 leading-relaxed mb-3" data-i18n="buat-model.purpose-desc">Fitur "Membuat Model" dirancang untuk membuat foto model AI berkualitas tinggi dengan latar belakang simple dan pose standar. Foto yang dihasilkan dapat digunakan sebagai foto model di berbagai fitur lain dalam aplikasi ini, seperti:</p>`,
    'buat-model.purpose-desc'
);

// Info paragraph (second one in the box)
rep(
    `<p class="text-gray-500 text-sm mt-3">
                                <i class="fas fa-info-circle mr-1"></i> Upload foto wajah Anda atau orang lain, AI akan membuat foto model dengan wajah tersebut dalam pose dan kualitas yang konsisten.
                            </p>`,
    `<p class="text-gray-500 text-sm mt-3" data-i18n="buat-model.info-desc"><i class="fas fa-info-circle mr-1"></i> Upload foto wajah Anda atau orang lain, AI akan membuat foto model dengan wajah tersebut dalam pose dan kualitas yang konsisten.</p>`,
    'buat-model.info-desc'
);

// "Foto" label in count buttons — wrap all three
rep(
    `<button type="button" class="count-btn-model flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-xl hover:border-violet-400 transition-all active:scale-95" data-count="2">
                                    <span class="font-bold text-lg">2</span>
                                    <span class="font-medium text-sm">Foto</span>
                                </button>
                                <button type="button" class="count-btn-model selected flex items-center justify-center gap-2 p-3 border-2 rounded-xl transition-all active:scale-95" data-count="4" style="border-color: #7c3aed; background: linear-gradient(135deg, #7c3aed, #6366f1); color: white; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);">
                                    <span class="font-bold text-lg">4</span>
                                    <span class="font-medium text-sm">Foto</span>
                                </button>
                                <button type="button" class="count-btn-model flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-xl hover:border-violet-400 transition-all active:scale-95" data-count="6">
                                    <span class="font-bold text-lg">6</span>
                                    <span class="font-medium text-sm">Foto</span>
                                </button>`,
    `<button type="button" class="count-btn-model flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-xl hover:border-violet-400 transition-all active:scale-95" data-count="2">
                                    <span class="font-bold text-lg">2</span>
                                    <span class="font-medium text-sm" data-i18n="buat-model.foto-label">Foto</span>
                                </button>
                                <button type="button" class="count-btn-model selected flex items-center justify-center gap-2 p-3 border-2 rounded-xl transition-all active:scale-95" data-count="4" style="border-color: #7c3aed; background: linear-gradient(135deg, #7c3aed, #6366f1); color: white; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);">
                                    <span class="font-bold text-lg">4</span>
                                    <span class="font-medium text-sm" data-i18n="buat-model.foto-label">Foto</span>
                                </button>
                                <button type="button" class="count-btn-model flex items-center justify-center gap-2 p-3 border-2 border-gray-200 rounded-xl hover:border-violet-400 transition-all active:scale-95" data-count="6">
                                    <span class="font-bold text-lg">6</span>
                                    <span class="font-medium text-sm" data-i18n="buat-model.foto-label">Foto</span>
                                </button>`,
    'buat-model.foto-label (3 buttons)'
);

// Generate button — split "Buat" and "Foto Model" into separate translatable spans
rep(
    '<span>Buat <span id="buat-model-count-text">4</span> Foto Model</span>',
    '<span><span data-i18n="buat-model.gen-prefix">Buat</span> <span id="buat-model-count-text">4</span> <span data-i18n="buat-model.gen-suffix">Foto Model</span></span>',
    'buat-model.generate-btn restructure'
);

// ================================================================
// ADD NEW KEYS TO i18n DICTIONARY
// ================================================================

// EN keys — insert after beranda.support-label
rep(
    "'beranda.support-label':'Support & Social Media:',",
    `'beranda.support-label':'Support & Social Media:',
                'beranda.welcome-msg':'Hello! I am AI Assistant for Affiliate Go Foto Studio by Arul CG. I am ready to help you with various questions. Ask me anything!',
                'beranda.wa-name':'WA AI Guild Channel',
                'beranda.tg-name':'Affiliate Go Foto Studio Group',
                'buat-model.purpose-desc':'The "Create Model" feature is designed to create high-quality AI model photos with simple backgrounds and standard poses. The resulting photos can be used as model photos in various other features in this app, such as:',
                'buat-model.info-desc':'Upload your own or someone else\\'s face photo, AI will create model photos with that face in consistent poses and quality.',
                'buat-model.foto-label':'Photos',
                'buat-model.gen-prefix':'Create',
                'buat-model.gen-suffix':'Model Photos',`,
    'i18n EN: beranda + buat-model new keys'
);

// ID keys — insert after beranda.support-label in ID section
rep(
    "'beranda.support-label':'Support & Media Sosial:',",
    `'beranda.support-label':'Support & Media Sosial:',
                'beranda.welcome-msg':'Halo! Saya AI Assistant untuk Affiliate Go Foto Studio by Arul CG. Saya siap membantu Anda dengan berbagai pertanyaan. Tanya saya tentang apa saja!',
                'beranda.wa-name':'Channel WA AI Guild',
                'beranda.tg-name':'Grup Affiliate Go Foto Studio',
                'buat-model.purpose-desc':'Fitur "Membuat Model" dirancang untuk membuat foto model AI berkualitas tinggi dengan latar belakang simple dan pose standar. Foto yang dihasilkan dapat digunakan sebagai foto model di berbagai fitur lain dalam aplikasi ini, seperti:',
                'buat-model.info-desc':'Upload foto wajah Anda atau orang lain, AI akan membuat foto model dengan wajah tersebut dalam pose dan kualitas yang konsisten.',
                'buat-model.foto-label':'Foto',
                'buat-model.gen-prefix':'Buat',
                'buat-model.gen-suffix':'Foto Model',`,
    'i18n ID: beranda + buat-model new keys'
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
