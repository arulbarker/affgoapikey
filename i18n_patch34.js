// i18n_patch34.js — Opal Image to Video, Voice Over, Video Analyzer
// (Affiliate Go Pro = iframe only, no translatable content)
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ===== OPAL IMAGE TO VIDEO =====

// opal.desc (multi-line — anchor with unique content)
rep(
    '<p class="text-lg text-gray-600 mb-6">\r\n                        Transform your images into stunning',
    '<p class="text-lg text-gray-600 mb-6" data-i18n="opal.desc">\r\n                        Transform your images into stunning',
    'opal.desc'
);

// opal.open-btn (span inside top link button)
rep(
    '<span class="text-lg">Buka Opal Image to Video</span>',
    '<span class="text-lg" data-i18n="opal.open-btn">Buka Opal Image to Video</span>',
    'opal.open-btn'
);

// opal.card1-title
rep(
    '<h2 class="text-xl font-bold text-gray-800">Tentang Opal</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="opal.card1-title">Tentang Opal</h2>',
    'opal.card1-title'
);

// opal.card2-title (raw & in file)
rep(
    '<h2 class="text-xl font-bold text-gray-800">Batasan & Tips</h2>',
    '<h2 class="text-xl font-bold text-gray-800" data-i18n="opal.card2-title">Batasan & Tips</h2>',
    'opal.card2-title'
);

// opal.how-title
rep(
    '<h2 class="text-2xl font-bold text-gray-800">Cara Menggunakan Opal</h2>',
    '<h2 class="text-2xl font-bold text-gray-800" data-i18n="opal.how-title">Cara Menggunakan Opal</h2>',
    'opal.how-title'
);

// opal.bottom-btn (span inside bottom link button)
rep(
    '<span class="text-lg">Mulai Buat Video Sekarang</span>',
    '<span class="text-lg" data-i18n="opal.bottom-btn">Mulai Buat Video Sekarang</span>',
    'opal.bottom-btn'
);

// ===== VOICE OVER STUDIO PRO =====
// Note: panel uses <div class="text-center"> NOT <header> — h1 NOT auto-covered by headers dict

// voice-over.title (h1, multi-line — add data-i18n for explicit coverage)
rep(
    '<h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">\r\n                        Voice Over Studio Pro',
    '<h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3" data-i18n="voice-over.title">\r\n                        Voice Over Studio Pro',
    'voice-over.title'
);

// voice-over.desc (multi-line)
rep(
    '<p class="text-gray-600 text-lg max-w-2xl mx-auto">\r\n                        Transform text to natural speech',
    '<p class="text-gray-600 text-lg max-w-2xl mx-auto" data-i18n="voice-over.desc">\r\n                        Transform text to natural speech',
    'voice-over.desc'
);

// voice-over.text-label (label with <i> child — match by unique for attr)
rep(
    '<label for="vo-text-input" class="block text-sm font-semibold text-gray-700 flex items-center gap-2">',
    '<label for="vo-text-input" class="block text-sm font-semibold text-gray-700 flex items-center gap-2" data-i18n="voice-over.text-label">',
    'voice-over.text-label'
);

// voice-over.gen-btn (span inside generate button)
rep(
    '<span>Generate Voice Over</span>',
    '<span data-i18n="voice-over.gen-btn">Generate Voice Over</span>',
    'voice-over.gen-btn'
);

// voice-over.loading (p text)
rep(
    '<p class="ml-4 text-gray-700 font-semibold text-lg">Generating audio...</p>',
    '<p class="ml-4 text-gray-700 font-semibold text-lg" data-i18n="voice-over.loading">Generating audio...</p>',
    'voice-over.loading'
);

// voice-over.audio-title (h3, multi-line, has <i> child)
rep(
    '<h3 class="text-xl font-bold text-gray-800 flex items-center gap-2">\r\n                                <i class="fas fa-check-circle text-green-500"></i>\r\n                                Audio Generated Successfully',
    '<h3 class="text-xl font-bold text-gray-800 flex items-center gap-2" data-i18n="voice-over.audio-title">\r\n                                <i class="fas fa-check-circle text-green-500"></i>\r\n                                Audio Generated Successfully',
    'voice-over.audio-title'
);

// ===== VIDEO ANALYZER PRO =====

// va.desc (multi-line — anchor with unique content)
rep(
    '<p class="text-gray-300 text-lg max-w-2xl mx-auto">\r\n                            Ekstrak frames dari video',
    '<p class="text-gray-300 text-lg max-w-2xl mx-auto" data-i18n="va.desc">\r\n                            Ekstrak frames dari video',
    'va.desc'
);

// va.file-name (p with unique id)
rep(
    '<p id="va-file-name" class="text-gray-400 text-sm mt-3">Belum ada video dipilih</p>',
    '<p id="va-file-name" class="text-gray-400 text-sm mt-3" data-i18n="va.file-name">Belum ada video dipilih</p>',
    'va.file-name'
);

// va.analyze-btn (span inside analyze button)
rep(
    '<span>Mulai Analisis</span>',
    '<span data-i18n="va.analyze-btn">Mulai Analisis</span>',
    'va.analyze-btn'
);

// va.frames-title (h3, multi-line, has <i> child)
rep(
    '<h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">\r\n                                <i class="fas fa-images text-purple-400"></i>\r\n                                Extracted Frames',
    '<h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2" data-i18n="va.frames-title">\r\n                                <i class="fas fa-images text-purple-400"></i>\r\n                                Extracted Frames',
    'va.frames-title'
);

// ===== DICT ENTRIES =====

// EN dict
rep(
    "'fotogenic.placeholder-p':'Upload a photo and choose an effect to start',\r\n            },",
    "'fotogenic.placeholder-p':'Upload a photo and choose an effect to start',\r\n            // Opal Image to Video\r\n            'opal.desc':'Transform your images into stunning AI-powered videos with Google Opal (Veo 3)',\r\n            'opal.open-btn':'Open Opal Image to Video',\r\n            'opal.card1-title':'About Opal',\r\n            'opal.card2-title':'Limits & Tips',\r\n            'opal.how-title':'How to Use Opal',\r\n            'opal.bottom-btn':'Start Creating Videos Now',\r\n            // Voice Over\r\n            'voice-over.title':'Voice Over Studio Pro',\r\n            'voice-over.desc':'Transform text to natural speech with full professional controls',\r\n            'voice-over.text-label':'Enter Text',\r\n            'voice-over.gen-btn':'Generate Voice Over',\r\n            'voice-over.loading':'Generating audio...',\r\n            'voice-over.audio-title':'Audio Generated Successfully',\r\n            // Video Analyzer\r\n            'va.desc':'Extract frames from video and generate detailed AI prompts to recreate similar videos',\r\n            'va.file-name':'No video selected',\r\n            'va.analyze-btn':'Start Analysis',\r\n            'va.frames-title':'Extracted Frames',\r\n            },",
    'dict.en'
);

// ID dict
rep(
    "'fotogenic.placeholder-p':'Upload foto dan pilih efek untuk mulai',\r\n            }",
    "'fotogenic.placeholder-p':'Upload foto dan pilih efek untuk mulai',\r\n            // Opal Image to Video\r\n            'opal.desc':'Ubah gambar Anda menjadi video AI yang memukau dengan Google Opal (Veo 3)',\r\n            'opal.open-btn':'Buka Opal Image to Video',\r\n            'opal.card1-title':'Tentang Opal',\r\n            'opal.card2-title':'Batasan & Tips',\r\n            'opal.how-title':'Cara Menggunakan Opal',\r\n            'opal.bottom-btn':'Mulai Buat Video Sekarang',\r\n            // Voice Over\r\n            'voice-over.title':'Voice Over Studio Pro',\r\n            'voice-over.desc':'Transform text to natural speech dengan kontrol profesional lengkap',\r\n            'voice-over.text-label':'Masukkan Teks',\r\n            'voice-over.gen-btn':'Generate Voice Over',\r\n            'voice-over.loading':'Menghasilkan audio...',\r\n            'voice-over.audio-title':'Audio Berhasil Dibuat',\r\n            // Video Analyzer\r\n            'va.desc':'Ekstrak frames dari video dan generate AI prompt yang detail untuk recreate video serupa',\r\n            'va.file-name':'Belum ada video dipilih',\r\n            'va.analyze-btn':'Mulai Analisis',\r\n            'va.frames-title':'Frame yang Diekstrak',\r\n            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
