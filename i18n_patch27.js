// i18n_patch27.js — Story Board, Twibon Frame, Story Update
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}
function repR(pattern, replacement, label) {
    if (!pattern.test(html)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(pattern, replacement);
    console.log('OK:  ', label); ok++;
}

// ==================== STORY BOARD ====================

// storyboard.desc
rep(
    '<p class="text-lg text-gray-600">\r\n                        Buat storyboard visual profesional untuk video, film, presentasi, campaign, dan berbagai konten kreatif!\r\n                    </p>',
    '<p class="text-lg text-gray-600" data-i18n="storyboard.desc">\r\n                        Buat storyboard visual profesional untuk video, film, presentasi, campaign, dan berbagai konten kreatif!\r\n                    </p>',
    'storyboard.desc'
);

// storyboard.step1-title — anchor via storyboard-topic textarea
rep(
    '<h3 class="text-lg font-bold text-gray-800">Topik Story</h3>\r\n                                    </div>\r\n                                    <textarea\r\n                                        id="storyboard-topic"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="storyboard.step1-title">Topik Story</h3>\r\n                                    </div>\r\n                                    <textarea\r\n                                        id="storyboard-topic"',
    'storyboard.step1-title'
);

// storyboard.topic-placeholder
rep(
    'id="storyboard-topic"\r\n                                        placeholder="Contoh: Tutorial membuat kopi latte, Campaign launching produk baru, Behind the scenes proses produksi, dll."',
    'id="storyboard-topic"\r\n                                        data-i18n-placeholder="storyboard.topic-placeholder"\r\n                                        placeholder="Contoh: Tutorial membuat kopi latte, Campaign launching produk baru, Behind the scenes proses produksi, dll."',
    'storyboard.topic-placeholder'
);

// storyboard.step2-title — anchor via social-media button
rep(
    '<h3 class="text-lg font-bold text-gray-800">Tipe Story</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="social-media" class="option-btn-storyboard selected',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="storyboard.step2-title">Tipe Story</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="social-media" class="option-btn-storyboard selected',
    'storyboard.step2-title'
);

// storyboard.step3-title — anchor via 5-frame button
rep(
    '<h3 class="text-lg font-bold text-gray-800">Jumlah Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-3 gap-2">\r\n                                        <button data-value="5" class="option-btn-storyboard selected">',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="storyboard.step3-title">Jumlah Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-3 gap-2">\r\n                                        <button data-value="5" class="option-btn-storyboard selected">',
    'storyboard.step3-title'
);

// storyboard.step4-title — anchor via sketch button
rep(
    '<h3 class="text-lg font-bold text-gray-800">Style Visual</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="sketch" class="option-btn-storyboard selected',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="storyboard.step4-title">Style Visual</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="sketch" class="option-btn-storyboard selected',
    'storyboard.step4-title'
);

// storyboard.step5-title — anchor via indonesian button
rep(
    '<h3 class="text-lg font-bold text-gray-800">Bahasa Deskripsi</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="indonesian" class="option-btn-storyboard selected',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="storyboard.step5-title">Bahasa Deskripsi</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="indonesian" class="option-btn-storyboard selected',
    'storyboard.step5-title'
);

// storyboard.lang-id — "Bahasa Indonesia" button text
rep(
    'data-value="indonesian" class="option-btn-storyboard selected text-sm">\r\n                                            <i class="fas fa-flag mr-2"></i>Bahasa Indonesia',
    'data-value="indonesian" class="option-btn-storyboard selected text-sm">\r\n                                            <i class="fas fa-flag mr-2"></i><span data-i18n="storyboard.lang-id">Bahasa Indonesia</span>',
    'storyboard.lang-id'
);

// storyboard.step6-title — anchor via 16:9 storyboard option button (grid-cols-3)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Ukuran Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-3 gap-2">\r\n                                        <button data-value="16:9" class="option-btn-storyboard selected',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="storyboard.step6-title">Ukuran Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-3 gap-2">\r\n                                        <button data-value="16:9" class="option-btn-storyboard selected',
    'storyboard.step6-title'
);

// storyboard.frame-vertical — "Vertikal" span in 9:16 storyboard button
rep(
    'data-value="9:16" class="option-btn-storyboard flex-col py-3 text-sm">\r\n                                            <i class="fas fa-mobile-alt text-lg mb-1"></i>\r\n                                            <span class="font-semibold">9:16</span>\r\n                                            <span class="text-xs opacity-70">Vertikal</span>',
    'data-value="9:16" class="option-btn-storyboard flex-col py-3 text-sm">\r\n                                            <i class="fas fa-mobile-alt text-lg mb-1"></i>\r\n                                            <span class="font-semibold">9:16</span>\r\n                                            <span class="text-xs opacity-70" data-i18n="storyboard.frame-vertical">Vertikal</span>',
    'storyboard.frame-vertical'
);

// storyboard.gen-btn — anchor via storyboard-generate-btn
repR(
    /(id="storyboard-generate-btn"[\s\S]*?)<span>(Generate Story Board)<\/span>/,
    '$1<span data-i18n="storyboard.gen-btn">$2</span>',
    'storyboard.gen-btn'
);

// storyboard.gen-note
rep(
    '<p class="text-xs text-gray-500 text-center">\r\n                                    <i class="fas fa-info-circle mr-1"></i>\r\n                                    Storyboard akan dibuat dengan AI untuk memvisualisasikan setiap scene\r\n                                </p>',
    '<p class="text-xs text-gray-500 text-center" data-i18n="storyboard.gen-note">\r\n                                    <i class="fas fa-info-circle mr-1"></i>\r\n                                    Storyboard akan dibuat dengan AI untuk memvisualisasikan setiap scene\r\n                                </p>',
    'storyboard.gen-note'
);

// storyboard.results-title
rep(
    '<h3 class="text-xl font-bold text-gray-800 flex items-center gap-2">\r\n                                        <i class="fas fa-images text-purple-600"></i>\r\n                                        Storyboard Frames\r\n                                    </h3>',
    '<h3 class="text-xl font-bold text-gray-800 flex items-center gap-2" data-i18n="storyboard.results-title">\r\n                                        <i class="fas fa-images text-purple-600"></i>\r\n                                        Storyboard Frames\r\n                                    </h3>',
    'storyboard.results-title'
);

// storyboard.download-all
repR(
    /(id="storyboard-download-all-btn"[\s\S]*?)<span>(Download Semua)<\/span>/,
    '$1<span data-i18n="storyboard.download-all">$2</span>',
    'storyboard.download-all'
);

// storyboard modal elements
rep(
    '<p class="text-sm text-purple-100 mt-1">Ubah deskripsi scene untuk hasil yang lebih sesuai</p>',
    '<p class="text-sm text-purple-100 mt-1" data-i18n="storyboard.modal-subtitle">Ubah deskripsi scene untuk hasil yang lebih sesuai</p>',
    'storyboard.modal-subtitle'
);
rep(
    '<p class="text-xs text-gray-600">Deskripsi scene akan digunakan untuk generate gambar</p>',
    '<p class="text-xs text-gray-600" data-i18n="storyboard.modal-frame-note">Deskripsi scene akan digunakan untuk generate gambar</p>',
    'storyboard.modal-frame-note'
);
rep(
    'id="storyboard-modal-preview-container" class="hidden">\r\n                                <label class="text-sm font-semibold text-gray-700 mb-2 block">Gambar Saat Ini:</label>',
    'id="storyboard-modal-preview-container" class="hidden">\r\n                                <label class="text-sm font-semibold text-gray-700 mb-2 block" data-i18n="storyboard.modal-current-img">Gambar Saat Ini:</label>',
    'storyboard.modal-current-img'
);
rep(
    '<label class="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">\r\n                                    <i class="fas fa-pen text-purple-600"></i>\r\n                                    Deskripsi Scene:\r\n                                </label>',
    '<label class="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2" data-i18n="storyboard.modal-desc-label">\r\n                                    <i class="fas fa-pen text-purple-600"></i>\r\n                                    Deskripsi Scene:\r\n                                </label>',
    'storyboard.modal-desc-label'
);
rep(
    'placeholder="Tulis deskripsi visual scene (camera angle, subject, action, background, mood)..."',
    'data-i18n-placeholder="storyboard.modal-prompt-placeholder" placeholder="Tulis deskripsi visual scene (camera angle, subject, action, background, mood)..."',
    'storyboard.modal-prompt-placeholder'
);
rep(
    '<p class="text-xs text-gray-500 mt-2">\r\n                                    <i class="fas fa-info-circle mr-1"></i>\r\n                                    Tips: Sertakan detail visual seperti camera angle, ekspresi, pencahayaan, dan suasana\r\n                                </p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="storyboard.modal-tips">\r\n                                    <i class="fas fa-info-circle mr-1"></i>\r\n                                    Tips: Sertakan detail visual seperti camera angle, ekspresi, pencahayaan, dan suasana\r\n                                </p>',
    'storyboard.modal-tips'
);
rep(
    'id="storyboard-modal-cancel" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all">\r\n                                    <i class="fas fa-times mr-2"></i>Batal',
    'id="storyboard-modal-cancel" class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all" data-i18n="storyboard.modal-cancel">\r\n                                    <i class="fas fa-times mr-2"></i>Batal',
    'storyboard.modal-cancel'
);

// ==================== TWIBON FRAME ====================

// twibon.desc
rep(
    '<p class="text-lg text-gray-600">\r\n                        Tambahkan frame/border profesional pada foto untuk kampanye, event, hari spesial, dan berbagai keperluan!\r\n                    </p>',
    '<p class="text-lg text-gray-600" data-i18n="twibon.desc">\r\n                        Tambahkan frame/border profesional pada foto untuk kampanye, event, hari spesial, dan berbagai keperluan!\r\n                    </p>',
    'twibon.desc'
);

// twibon.upload-text — anchor via twibon-placeholder
rep(
    'id="twibon-placeholder">\r\n                                            <i class="fas fa-cloud-upload-alt text-5xl text-rose-400 mb-3"></i>\r\n                                            <p class="text-gray-700 font-semibold mb-1">Klik untuk upload foto</p>',
    'id="twibon-placeholder">\r\n                                            <i class="fas fa-cloud-upload-alt text-5xl text-rose-400 mb-3"></i>\r\n                                            <p class="text-gray-700 font-semibold mb-1" data-i18n="twibon.upload-text">Klik untuk upload foto</p>',
    'twibon.upload-text'
);

// twibon.remove-btn — reuse unboxing.remove-photo key
repR(
    /(id="twibon-remove-btn"[\s\S]*?)<span>(Hapus Foto)<\/span>/,
    '$1<span data-i18n="unboxing.remove-photo">$2</span>',
    'twibon.remove-btn'
);

// twibon.step2-title — anchor via independence button
rep(
    '<h3 class="text-lg font-bold text-gray-800">Kategori Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="independence" class="option-btn-twibon selected',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="twibon.step2-title">Kategori Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="independence" class="option-btn-twibon selected',
    'twibon.step2-title'
);

// twibon category buttons
rep(
    '<i class="fas fa-flag mr-2"></i>Kemerdekaan',
    '<i class="fas fa-flag mr-2"></i><span data-i18n="twibon.cat-independence">Kemerdekaan</span>',
    'twibon.cat-independence'
);
rep(
    '<i class="fas fa-calendar-day mr-2"></i>Hari Raya',
    '<i class="fas fa-calendar-day mr-2"></i><span data-i18n="twibon.cat-holiday">Hari Raya</span>',
    'twibon.cat-holiday'
);
rep(
    '<i class="fas fa-birthday-cake mr-2"></i>Ulang Tahun',
    '<i class="fas fa-birthday-cake mr-2"></i><span data-i18n="twibon.cat-birthday">Ulang Tahun</span>',
    'twibon.cat-birthday'
);
rep(
    '<i class="fas fa-heart mr-2"></i>Pernikahan',
    '<i class="fas fa-heart mr-2"></i><span data-i18n="twibon.cat-wedding">Pernikahan</span>',
    'twibon.cat-wedding'
);
rep(
    '<i class="fas fa-graduation-cap mr-2"></i>Wisuda',
    '<i class="fas fa-graduation-cap mr-2"></i><span data-i18n="twibon.cat-graduation">Wisuda</span>',
    'twibon.cat-graduation'
);
rep(
    '<i class="fas fa-bullhorn mr-2"></i>Kampanye',
    '<i class="fas fa-bullhorn mr-2"></i><span data-i18n="twibon.cat-campaign">Kampanye</span>',
    'twibon.cat-campaign'
);
rep(
    '<i class="fas fa-building mr-2"></i>Perusahaan',
    '<i class="fas fa-building mr-2"></i><span data-i18n="twibon.cat-corporate">Perusahaan</span>',
    'twibon.cat-corporate'
);

// twibon.step3-title (AI section) — anchor via twibon-description textarea
rep(
    '<h3 class="text-lg font-bold text-gray-800">Deskripsi Frame</h3>\r\n                                    </div>\r\n                                    <textarea\r\n                                        id="twibon-description"',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="twibon.step3-title">Deskripsi Frame</h3>\r\n                                    </div>\r\n                                    <textarea\r\n                                        id="twibon-description"',
    'twibon.step3-title'
);

// twibon.desc-placeholder
rep(
    'id="twibon-description"\r\n                                        placeholder="Contoh: Frame untuk HUT RI ke-79 dengan bendera merah putih, warna patriotik, dan teks \'Dirgahayu Indonesia\'"',
    'id="twibon-description"\r\n                                        data-i18n-placeholder="twibon.desc-placeholder"\r\n                                        placeholder="Contoh: Frame untuk HUT RI ke-79 dengan bendera merah putih, warna patriotik, dan teks \'Dirgahayu Indonesia\'"',
    'twibon.desc-placeholder'
);

// twibon.ai-note
rep(
    '<p class="text-xs text-gray-500 mt-2">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate frame sesuai deskripsi Anda\r\n                                    </p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="twibon.ai-note">\r\n                                        <i class="fas fa-info-circle mr-1"></i>\r\n                                        AI akan generate frame sesuai deskripsi Anda\r\n                                    </p>',
    'twibon.ai-note'
);

// twibon.step3-custom-title — anchor via twibon-custom-section
rep(
    'id="twibon-custom-section" class="hidden">\r\n                                    <div class="flex items-center gap-3 mb-3">\r\n                                        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold text-sm shadow-lg">3</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800">Upload Frame Custom</h3>',
    'id="twibon-custom-section" class="hidden">\r\n                                    <div class="flex items-center gap-3 mb-3">\r\n                                        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold text-sm shadow-lg">3</div>\r\n                                        <h3 class="text-lg font-bold text-gray-800" data-i18n="twibon.step3-custom-title">Upload Frame Custom</h3>',
    'twibon.step3-custom-title'
);

// twibon.frame-upload-text
rep(
    '<p class="text-gray-700 font-semibold mb-1 text-sm">Upload Frame PNG (Transparan)</p>',
    '<p class="text-gray-700 font-semibold mb-1 text-sm" data-i18n="twibon.frame-upload-text">Upload Frame PNG (Transparan)</p>',
    'twibon.frame-upload-text'
);

// twibon.step4-title — anchor via elegant button
rep(
    '<h3 class="text-lg font-bold text-gray-800">Style Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="elegant" class="option-btn-twibon selected',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="twibon.step4-title">Style Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="elegant" class="option-btn-twibon selected',
    'twibon.step4-title'
);

// twibon.step5-title — anchor via 1:1 twibon button (grid-cols-2)
rep(
    '<h3 class="text-lg font-bold text-gray-800">Ukuran Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="1:1" class="option-btn-twibon selected',
    '<h3 class="text-lg font-bold text-gray-800" data-i18n="twibon.step5-title">Ukuran Frame</h3>\r\n                                    </div>\r\n                                    <div class="grid grid-cols-2 gap-2">\r\n                                        <button data-value="1:1" class="option-btn-twibon selected',
    'twibon.step5-title'
);

// twibon.gen-btn
repR(
    /(id="twibon-generate-btn"[\s\S]*?)<span>(Generate Twibon)<\/span>/,
    '$1<span data-i18n="twibon.gen-btn">$2</span>',
    'twibon.gen-btn'
);

// twibon.gen-note
rep(
    '<p class="text-xs text-gray-500 text-center">\r\n                                    <i class="fas fa-info-circle mr-1"></i>\r\n                                    Upload foto dan pilih kategori untuk mulai\r\n                                </p>',
    '<p class="text-xs text-gray-500 text-center" data-i18n="twibon.gen-note">\r\n                                    <i class="fas fa-info-circle mr-1"></i>\r\n                                    Upload foto dan pilih kategori untuk mulai\r\n                                </p>',
    'twibon.gen-note'
);

// twibon.empty-title
rep(
    '<h4 class="text-xl font-bold text-gray-800 mb-2">Belum Ada Preview</h4>',
    '<h4 class="text-xl font-bold text-gray-800 mb-2" data-i18n="twibon.empty-title">Belum Ada Preview</h4>',
    'twibon.empty-title'
);

// twibon.empty-desc
rep(
    '<p class="text-gray-600 mb-4">Upload foto dan generate twibon untuk melihat preview</p>',
    '<p class="text-gray-600 mb-4" data-i18n="twibon.empty-desc">Upload foto dan generate twibon untuk melihat preview</p>',
    'twibon.empty-desc'
);

// twibon.empty-tip — anchor via rose lightbulb icon
rep(
    '<i class="fas fa-lightbulb text-rose-500"></i>\r\n                                        <span>Pilih kategori dan buat frame yang sesuai kebutuhan Anda</span>',
    '<i class="fas fa-lightbulb text-rose-500"></i>\r\n                                        <span data-i18n="twibon.empty-tip">Pilih kategori dan buat frame yang sesuai kebutuhan Anda</span>',
    'twibon.empty-tip'
);

// twibon.download-btn
repR(
    /(id="twibon-download-btn"[\s\S]*?)<span>(Download Twibon)<\/span>/,
    '$1<span data-i18n="twibon.download-btn">$2</span>',
    'twibon.download-btn'
);

// ==================== STORY UPDATE ====================

// story-update.title — h1 NOT in <header>, explicit data-i18n needed
rep(
    '<h1 class="text-3xl md:text-4xl font-bold text-gray-900">Story Update Generator</h1>',
    '<h1 class="text-3xl md:text-4xl font-bold text-gray-900" data-i18n="story-update.title">Story Update Generator</h1>',
    'story-update.title'
);

// story-update.desc
rep(
    '<p class="text-gray-500 mt-2">Buat foto story harian yang realistis sesuai gaya hidupmu.</p>',
    '<p class="text-gray-500 mt-2" data-i18n="story-update.desc">Buat foto story harian yang realistis sesuai gaya hidupmu.</p>',
    'story-update.desc'
);

// story-update.upload-label
rep(
    'id="story-update-upload-label" class="font-semibold mb-2 block text-gray-700 cursor-pointer w-full p-3 text-center bg-indigo-100 text-indigo-700 rounded-lg border-2 border-dashed border-indigo-300 hover:bg-indigo-200 transition">\r\n                                    Upload Fotomu\r\n                                </label>',
    'id="story-update-upload-label" class="font-semibold mb-2 block text-gray-700 cursor-pointer w-full p-3 text-center bg-indigo-100 text-indigo-700 rounded-lg border-2 border-dashed border-indigo-300 hover:bg-indigo-200 transition" data-i18n="story-update.upload-label">\r\n                                    Upload Fotomu\r\n                                </label>',
    'story-update.upload-label'
);

// story-update.upload-note
rep(
    '<p class="text-xs text-gray-500 mt-2">Upload foto selfie dengan wajah terlihat jelas untuk hasil terbaik.</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="story-update.upload-note">Upload foto selfie dengan wajah terlihat jelas untuk hasil terbaik.</p>',
    'story-update.upload-note'
);

// story-update.economic-label
rep(
    'for="story-update-economic-status" class="font-semibold mb-2 block text-gray-700">Pilih Kelas Ekonomi:</label>',
    'for="story-update-economic-status" class="font-semibold mb-2 block text-gray-700" data-i18n="story-update.economic-label">Pilih Kelas Ekonomi:</label>',
    'story-update.economic-label'
);

// story-update.theme-label
rep(
    'for="story-update-theme" class="font-semibold mb-2 block text-gray-700">Pilih Tema Story:</label>',
    'for="story-update-theme" class="font-semibold mb-2 block text-gray-700" data-i18n="story-update.theme-label">Pilih Tema Story:</label>',
    'story-update.theme-label'
);

// story-update.activity-label
rep(
    'for="story-update-specific-activity" class="font-semibold mb-2 block text-gray-700">Kegiatan Spesifik (Opsional):</label>',
    'for="story-update-specific-activity" class="font-semibold mb-2 block text-gray-700" data-i18n="story-update.activity-label">Kegiatan Spesifik (Opsional):</label>',
    'story-update.activity-label'
);

// story-update.activity-placeholder
rep(
    'id="story-update-specific-activity" class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="Contoh: Makan sate di Gasibu, Bandung"',
    'id="story-update-specific-activity" class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" data-i18n-placeholder="story-update.activity-placeholder" placeholder="Contoh: Makan sate di Gasibu, Bandung"',
    'story-update.activity-placeholder'
);

// story-update.activity-note
rep(
    '<p class="text-xs text-gray-500 mt-2">Jika diisi, ini akan digunakan sebagai tema utama story.</p>',
    '<p class="text-xs text-gray-500 mt-2" data-i18n="story-update.activity-note">Jika diisi, ini akan digunakan sebagai tema utama story.</p>',
    'story-update.activity-note'
);

// story-update.photo-style-label
rep(
    '<label class="font-semibold mb-2 block text-gray-700">Gaya Foto:</label>',
    '<label class="font-semibold mb-2 block text-gray-700" data-i18n="story-update.photo-style-label">Gaya Foto:</label>',
    'story-update.photo-style-label'
);

// story-update.style-sendiri & style-bareng
rep(
    'peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 transition">Sendiri</div>',
    'peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 transition" data-i18n="story-update.style-sendiri">Sendiri</div>',
    'story-update.style-sendiri'
);
rep(
    'peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 transition">Bareng Temen</div>',
    'peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 transition" data-i18n="story-update.style-bareng">Bareng Temen</div>',
    'story-update.style-bareng'
);

// story-update.ratio-label
rep(
    '<label class="font-semibold mb-2 block text-gray-700">Pilih Rasio Gambar:</label>',
    '<label class="font-semibold mb-2 block text-gray-700" data-i18n="story-update.ratio-label">Pilih Rasio Gambar:</label>',
    'story-update.ratio-label'
);

// story-update.gen-btn
repR(
    /(id="story-update-generate-btn"[^>]*)>/,
    '$1 data-i18n="story-update.gen-btn">',
    'story-update.gen-btn'
);

// story-update.placeholder-title
rep(
    '<h3 class="text-xl font-bold text-gray-800 mb-2">Hasil Story Update Anda</h3>',
    '<h3 class="text-xl font-bold text-gray-800 mb-2" data-i18n="story-update.placeholder-title">Hasil Story Update Anda</h3>',
    'story-update.placeholder-title'
);

// story-update.placeholder-desc
rep(
    '<p class="text-gray-500 text-sm max-w-sm">10 foto story akan muncul di sini. Setiap foto bisa di-preview dan download!</p>',
    '<p class="text-gray-500 text-sm max-w-sm" data-i18n="story-update.placeholder-desc">10 foto story akan muncul di sini. Setiap foto bisa di-preview dan download!</p>',
    'story-update.placeholder-desc'
);

// story-update.placeholder-10var
rep(
    '<i class="fas fa-check text-indigo-500"></i>\r\n                                    <span>10 Variasi</span>',
    '<i class="fas fa-check text-indigo-500"></i>\r\n                                    <span data-i18n="story-update.placeholder-10var">10 Variasi</span>',
    'story-update.placeholder-10var'
);

// story-update.download-all
repR(
    /(id="story-download-all-btn"[^>]*)>/,
    '$1 data-i18n="story-update.download-all">',
    'story-update.download-all'
);

// ==================== DICT ====================

// EN dict — anchor after extender.download-all
rep(
    "'extender.download-all':'Download All',\r\n            },",
    "'extender.download-all':'Download All',\r\n" +
    "            'storyboard.desc':'Create professional visual storyboards for videos, films, presentations, campaigns, and various creative content!',\r\n" +
    "            'storyboard.step1-title':'Story Topic',\r\n" +
    "            'storyboard.topic-placeholder':'Example: Tutorial making latte coffee, Campaign for new product launch, Behind the scenes production process, etc.',\r\n" +
    "            'storyboard.step2-title':'Story Type',\r\n" +
    "            'storyboard.step3-title':'Number of Frames',\r\n" +
    "            'storyboard.step4-title':'Visual Style',\r\n" +
    "            'storyboard.step5-title':'Description Language',\r\n" +
    "            'storyboard.lang-id':'Indonesian',\r\n" +
    "            'storyboard.step6-title':'Frame Size',\r\n" +
    "            'storyboard.frame-vertical':'Vertical',\r\n" +
    "            'storyboard.gen-btn':'Generate Story Board',\r\n" +
    "            'storyboard.gen-note':'Storyboard will be created with AI to visualize each scene',\r\n" +
    "            'storyboard.results-title':'Storyboard Frames',\r\n" +
    "            'storyboard.download-all':'Download All',\r\n" +
    "            'storyboard.modal-subtitle':'Change scene description for better results',\r\n" +
    "            'storyboard.modal-frame-note':'Scene description will be used to generate the image',\r\n" +
    "            'storyboard.modal-current-img':'Current Image:',\r\n" +
    "            'storyboard.modal-desc-label':'Scene Description:',\r\n" +
    "            'storyboard.modal-prompt-placeholder':'Write visual scene description (camera angle, subject, action, background, mood)...',\r\n" +
    "            'storyboard.modal-tips':'Tips: Include visual details like camera angle, expression, lighting, and atmosphere',\r\n" +
    "            'storyboard.modal-cancel':'Cancel',\r\n" +
    "            'twibon.desc':'Add professional frames/borders to photos for campaigns, events, special days, and various needs!',\r\n" +
    "            'twibon.upload-text':'Click to upload photo',\r\n" +
    "            'twibon.step2-title':'Frame Category',\r\n" +
    "            'twibon.cat-independence':'Independence',\r\n" +
    "            'twibon.cat-holiday':'Islamic Holiday',\r\n" +
    "            'twibon.cat-birthday':'Birthday',\r\n" +
    "            'twibon.cat-wedding':'Wedding',\r\n" +
    "            'twibon.cat-graduation':'Graduation',\r\n" +
    "            'twibon.cat-campaign':'Campaign',\r\n" +
    "            'twibon.cat-corporate':'Corporate',\r\n" +
    "            'twibon.step3-title':'Frame Description',\r\n" +
    "            'twibon.desc-placeholder':'Example: Frame for Independence Day with red-white flag, patriotic colors',\r\n" +
    "            'twibon.ai-note':'AI will generate a frame according to your description',\r\n" +
    "            'twibon.step3-custom-title':'Upload Custom Frame',\r\n" +
    "            'twibon.frame-upload-text':'Upload Frame PNG (Transparent)',\r\n" +
    "            'twibon.step4-title':'Frame Style',\r\n" +
    "            'twibon.step5-title':'Frame Size',\r\n" +
    "            'twibon.gen-btn':'Generate Twibon',\r\n" +
    "            'twibon.gen-note':'Upload photo and choose category to start',\r\n" +
    "            'twibon.empty-title':'No Preview Yet',\r\n" +
    "            'twibon.empty-desc':'Upload photo and generate twibon to see preview',\r\n" +
    "            'twibon.empty-tip':'Choose a category and create a frame that suits your needs',\r\n" +
    "            'twibon.download-btn':'Download Twibon',\r\n" +
    "            'story-update.title':'Story Update Generator',\r\n" +
    "            'story-update.desc':'Create realistic daily story photos that match your lifestyle.',\r\n" +
    "            'story-update.upload-label':'Upload Your Photo',\r\n" +
    "            'story-update.upload-note':'Upload a selfie with your face clearly visible for best results.',\r\n" +
    "            'story-update.economic-label':'Choose Economic Class:',\r\n" +
    "            'story-update.theme-label':'Choose Story Theme:',\r\n" +
    "            'story-update.activity-label':'Specific Activity (Optional):',\r\n" +
    "            'story-update.activity-placeholder':'Example: Eating satay in Gasibu, Bandung',\r\n" +
    "            'story-update.activity-note':'If filled, this will be used as the main theme of the story.',\r\n" +
    "            'story-update.photo-style-label':'Photo Style:',\r\n" +
    "            'story-update.style-sendiri':'Solo',\r\n" +
    "            'story-update.style-bareng':'With Friends',\r\n" +
    "            'story-update.ratio-label':'Choose Image Ratio:',\r\n" +
    "            'story-update.gen-btn':'Generate 10 Stories',\r\n" +
    "            'story-update.placeholder-title':'Your Story Update Results',\r\n" +
    "            'story-update.placeholder-desc':'10 story photos will appear here. Each photo can be previewed and downloaded!',\r\n" +
    "            'story-update.placeholder-10var':'10 Variations',\r\n" +
    "            'story-update.download-all':'Download All',\r\n" +
    "            },",
    'dict.en'
);

// ID dict — anchor after extender.download-all
rep(
    "'extender.download-all':'Download Semua',\r\n            }",
    "'extender.download-all':'Download Semua',\r\n" +
    "            'storyboard.desc':'Buat storyboard visual profesional untuk video, film, presentasi, campaign, dan berbagai konten kreatif!',\r\n" +
    "            'storyboard.step1-title':'Topik Story',\r\n" +
    "            'storyboard.topic-placeholder':'Contoh: Tutorial membuat kopi latte, Campaign launching produk baru, Behind the scenes proses produksi, dll.',\r\n" +
    "            'storyboard.step2-title':'Tipe Story',\r\n" +
    "            'storyboard.step3-title':'Jumlah Frame',\r\n" +
    "            'storyboard.step4-title':'Style Visual',\r\n" +
    "            'storyboard.step5-title':'Bahasa Deskripsi',\r\n" +
    "            'storyboard.lang-id':'Bahasa Indonesia',\r\n" +
    "            'storyboard.step6-title':'Ukuran Frame',\r\n" +
    "            'storyboard.frame-vertical':'Vertikal',\r\n" +
    "            'storyboard.gen-btn':'Generate Story Board',\r\n" +
    "            'storyboard.gen-note':'Storyboard akan dibuat dengan AI untuk memvisualisasikan setiap scene',\r\n" +
    "            'storyboard.results-title':'Storyboard Frames',\r\n" +
    "            'storyboard.download-all':'Download Semua',\r\n" +
    "            'storyboard.modal-subtitle':'Ubah deskripsi scene untuk hasil yang lebih sesuai',\r\n" +
    "            'storyboard.modal-frame-note':'Deskripsi scene akan digunakan untuk generate gambar',\r\n" +
    "            'storyboard.modal-current-img':'Gambar Saat Ini:',\r\n" +
    "            'storyboard.modal-desc-label':'Deskripsi Scene:',\r\n" +
    "            'storyboard.modal-prompt-placeholder':'Tulis deskripsi visual scene (camera angle, subject, action, background, mood)...',\r\n" +
    "            'storyboard.modal-tips':'Tips: Sertakan detail visual seperti camera angle, ekspresi, pencahayaan, dan suasana',\r\n" +
    "            'storyboard.modal-cancel':'Batal',\r\n" +
    "            'twibon.desc':'Tambahkan frame/border profesional pada foto untuk kampanye, event, hari spesial, dan berbagai keperluan!',\r\n" +
    "            'twibon.upload-text':'Klik untuk upload foto',\r\n" +
    "            'twibon.step2-title':'Kategori Frame',\r\n" +
    "            'twibon.cat-independence':'Kemerdekaan',\r\n" +
    "            'twibon.cat-holiday':'Hari Raya',\r\n" +
    "            'twibon.cat-birthday':'Ulang Tahun',\r\n" +
    "            'twibon.cat-wedding':'Pernikahan',\r\n" +
    "            'twibon.cat-graduation':'Wisuda',\r\n" +
    "            'twibon.cat-campaign':'Kampanye',\r\n" +
    "            'twibon.cat-corporate':'Perusahaan',\r\n" +
    "            'twibon.step3-title':'Deskripsi Frame',\r\n" +
    "            'twibon.desc-placeholder':'Contoh: Frame untuk HUT RI dengan bendera merah putih, warna patriotik',\r\n" +
    "            'twibon.ai-note':'AI akan generate frame sesuai deskripsi Anda',\r\n" +
    "            'twibon.step3-custom-title':'Upload Frame Custom',\r\n" +
    "            'twibon.frame-upload-text':'Upload Frame PNG (Transparan)',\r\n" +
    "            'twibon.step4-title':'Style Frame',\r\n" +
    "            'twibon.step5-title':'Ukuran Frame',\r\n" +
    "            'twibon.gen-btn':'Generate Twibon',\r\n" +
    "            'twibon.gen-note':'Upload foto dan pilih kategori untuk mulai',\r\n" +
    "            'twibon.empty-title':'Belum Ada Preview',\r\n" +
    "            'twibon.empty-desc':'Upload foto dan generate twibon untuk melihat preview',\r\n" +
    "            'twibon.empty-tip':'Pilih kategori dan buat frame yang sesuai kebutuhan Anda',\r\n" +
    "            'twibon.download-btn':'Download Twibon',\r\n" +
    "            'story-update.title':'Story Update Generator',\r\n" +
    "            'story-update.desc':'Buat foto story harian yang realistis sesuai gaya hidupmu.',\r\n" +
    "            'story-update.upload-label':'Upload Fotomu',\r\n" +
    "            'story-update.upload-note':'Upload foto selfie dengan wajah terlihat jelas untuk hasil terbaik.',\r\n" +
    "            'story-update.economic-label':'Pilih Kelas Ekonomi:',\r\n" +
    "            'story-update.theme-label':'Pilih Tema Story:',\r\n" +
    "            'story-update.activity-label':'Kegiatan Spesifik (Opsional):',\r\n" +
    "            'story-update.activity-placeholder':'Contoh: Makan sate di Gasibu, Bandung',\r\n" +
    "            'story-update.activity-note':'Jika diisi, ini akan digunakan sebagai tema utama story.',\r\n" +
    "            'story-update.photo-style-label':'Gaya Foto:',\r\n" +
    "            'story-update.style-sendiri':'Sendiri',\r\n" +
    "            'story-update.style-bareng':'Bareng Temen',\r\n" +
    "            'story-update.ratio-label':'Pilih Rasio Gambar:',\r\n" +
    "            'story-update.gen-btn':'Generate 10 Stories',\r\n" +
    "            'story-update.placeholder-title':'Hasil Story Update Anda',\r\n" +
    "            'story-update.placeholder-desc':'10 foto story akan muncul di sini. Setiap foto bisa di-preview dan download!',\r\n" +
    "            'story-update.placeholder-10var':'10 Variasi',\r\n" +
    "            'story-update.download-all':'Download Semua',\r\n" +
    "            }",
    'dict.id'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
