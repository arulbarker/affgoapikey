// patch_update_modal_i18n.js — Make update modal bilingual EN/ID
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');

const OLD = `        btn.addEventListener('click', function() {
            // Mark as seen
            try { localStorage.setItem(STORAGE_KEY, UPDATE_VERSION); } catch(e) {}
            const dot = btn.querySelector('.update-notif-dot');
            if (dot) dot.style.display = 'none';

            var html = '<div style="font-family:Inter,sans-serif;">' +

            // Header badge
            '<div class="flex items-center justify-center gap-2 mb-3 p-3 rounded-xl" style="background:linear-gradient(135deg,#f5f3ff 0%,#fdf2f8 100%);border:2px solid #7c3aed;">' +
            '<i class="fas fa-bolt" style="color:#7c3aed;font-size:1.1rem;"></i>' +
            '<span class="font-bold text-lg" style="color:#6d28d9;">Versi 21</span>' +
            '<span class="text-xs text-gray-500 ml-1">&#8212; Maret 2026</span>' +
            '</div>' +

            // 85 tools badge
            '<div class="flex items-center justify-center gap-2 mb-5 px-4 py-2 rounded-xl" style="background:linear-gradient(135deg,#fef3c7 0%,#fde68a 100%);border:2px solid #f59e0b;">' +
            '<i class="fas fa-layer-group" style="color:#d97706;"></i>' +
            '<span class="font-bold text-sm" style="color:#92400e;">86 AI Tools</span>' +
            '<span class="text-xs" style="color:#b45309;">tersedia di aplikasi ini</span>' +
            '</div>' +

            // FITUR BARU
            '<div class="update-modal-section" style="border-color:#7c3aed;">' +
            '<div class="flex items-center gap-2 mb-3">' +
            '<span style="background:linear-gradient(135deg,#7c3aed,#db2777);color:white;" class="update-modal-badge"><i class="fas fa-plus-circle mr-1"></i>Fitur Baru</span>' +
            '</div>' +

            // Walking Pad
            '<div class="update-modal-item">' +
            '<i class="fas fa-walking mt-0.5 flex-shrink-0" style="color:#7c3aed;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">Walking Pad Lifestyle</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">Tab baru di kategori Product Photography. Upload foto model + foto baju (maks. 5 foto), AI menghasilkan foto model memakai baju tersebut sambil berdiri/berjalan di atas walking pad. Pilih dari 18 tema ruangan (female/male/netral), 6 camera angle, 3 pose, 5 pencahayaan, dan rasio 9:16/3:4/1:1. Cocok untuk konten affiliate fashion &amp; TikTok/Reels.</p>' +
            '</div>' +
            '</div>' +

            // Kartu Lebaran
            '<div class="update-modal-item">' +
            '<i class="fas fa-envelope-open-text mt-0.5 flex-shrink-0" style="color:#16a34a;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">Kartu Ucapan Lebaran</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">Tab baru di kategori Family &amp; Lifestyle. Buat kartu ucapan Idul Fitri dengan 20 tema desain, embed foto wajah keluarga (opsional, maks. 5 foto), nama keluarga, 4 pilihan ucapan + custom, dan pilihan rasio format.</p>' +
            '</div>' +
            '</div>' +

            // Timelapse Renovasi
            '<div class="update-modal-item">' +
            '<i class="fas fa-house-chimney mt-0.5 flex-shrink-0" style="color:#f59e0b;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">Timelapse Renovasi</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">Tab baru di kategori Creative Tools PRO. AI menghasilkan 2\\u20136 foto progres renovasi bangunan secara berurutan \\u2014 dari kondisi awal hingga hasil akhir. Tersedia 20 tema arsitektur (Modern, Scandinavian, Industrial, Tropis, Japanese Zen, dll), 4 pilihan rasio, sudut kamera konsisten di semua frame, dan bisa generate tanpa upload foto. Cocok untuk dijadikan video timelapse dengan Image to Video.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +

            // UPDATE FITUR
            '<div class="update-modal-section" style="border-color:#f59e0b;">' +
            '<div class="flex items-center gap-2 mb-3">' +
            '<span style="background:linear-gradient(135deg,#f59e0b,#16a34a);color:white;" class="update-modal-badge"><i class="fas fa-sync-alt mr-1"></i>Update Fitur</span>' +
            '</div>' +

            // Foto Keluarga
            '<div class="update-modal-item">' +
            '<i class="fas fa-users mt-0.5 flex-shrink-0" style="color:#f59e0b;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">Foto Keluarga &#8212; Tema Lebaran</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">Ditambahkan 6 tema Lebaran &amp; Ramadan baru: Pasangan Sofa, Ruang Tamu Lebaran, Mudik Kampung, Halaman Masjid, Meja Makan Lebaran, dan Taman Bunga Lebaran.</p>' +
            '</div>' +
            '</div>' +

            // Food Selfie
            '<div class="update-modal-item">' +
            '<i class="fas fa-utensils mt-0.5 flex-shrink-0" style="color:#f59e0b;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">Food Selfie Pro &#8212; Tema Ramadan</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">Ditambahkan 8 tema Ramadan &amp; Lebaran: Buka Puasa, Flat Lay Takjil, Kurma Premium, Lantern Ramadan, Ketupat &amp; Opor, Kue Lebaran, Sahur Subuh, dan Es &amp; Minuman Buka.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +

            // PERBAIKAN
            '<div class="update-modal-section" style="border-color:#3b82f6;">' +
            '<div class="flex items-center gap-2 mb-3">' +
            '<span style="background:linear-gradient(135deg,#3b82f6,#06b6d4);color:white;" class="update-modal-badge"><i class="fas fa-wrench mr-1"></i>Perbaikan</span>' +
            '</div>' +

            '<div class="update-modal-item">' +
            '<i class="fas fa-mobile-alt mt-0.5 flex-shrink-0" style="color:#3b82f6;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">Kompatibilitas Mobile</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">Tombol Preview &amp; Download pada semua tab fitur baru kini selalu terlihat di perangkat mobile (tidak perlu hover). Tombol menggunakan ikon saja di mobile, teks muncul di desktop.</p>' +
            '</div>' +
            '</div>' +

            '<div class="update-modal-item">' +
            '<i class="fas fa-eye mt-0.5 flex-shrink-0" style="color:#3b82f6;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">Tombol Preview &#8212; Modal Konsisten</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">Semua tombol Preview kini menggunakan modal global yang sama: bisa ditutup dengan klik di luar, tekan ESC, atau tombol X. Mendukung touch gesture mobile.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +

            // Footer
            '<div class="text-center pt-2 text-xs text-gray-400">' +
            'AFF GO STUDIO by Arul CG &#8212; Thank you for using the app!' +
            '</div>' +
            '</div>';

            if (window.showUniversalModal) {
                window.showUniversalModal('\\u26a1 Update Terbaru \\u2014 Versi 21', html);
            }
        });`;

const NEW = `        btn.addEventListener('click', function() {
            // Mark as seen
            try { localStorage.setItem(STORAGE_KEY, UPDATE_VERSION); } catch(e) {}
            const dot = btn.querySelector('.update-notif-dot');
            if (dot) dot.style.display = 'none';

            var lang = (function(){ try { return localStorage.getItem('app_language') || 'en'; } catch(e){ return 'en'; } })();
            var isEN = lang === 'en';

            var modalTitle = isEN ? '\\u26a1 Latest Update \\u2014 Version 21' : '\\u26a1 Update Terbaru \\u2014 Versi 21';

            var html = '<div style="font-family:Inter,sans-serif;">' +

            // Header badge
            '<div class="flex items-center justify-center gap-2 mb-3 p-3 rounded-xl" style="background:linear-gradient(135deg,#f5f3ff 0%,#fdf2f8 100%);border:2px solid #7c3aed;">' +
            '<i class="fas fa-bolt" style="color:#7c3aed;font-size:1.1rem;"></i>' +
            '<span class="font-bold text-lg" style="color:#6d28d9;">' + (isEN ? 'Version 21' : 'Versi 21') + '</span>' +
            '<span class="text-xs text-gray-500 ml-1">&#8212; ' + (isEN ? 'March 2026' : 'Maret 2026') + '</span>' +
            '</div>' +

            // 86 tools badge
            '<div class="flex items-center justify-center gap-2 mb-5 px-4 py-2 rounded-xl" style="background:linear-gradient(135deg,#fef3c7 0%,#fde68a 100%);border:2px solid #f59e0b;">' +
            '<i class="fas fa-layer-group" style="color:#d97706;"></i>' +
            '<span class="font-bold text-sm" style="color:#92400e;">86 AI Tools</span>' +
            '<span class="text-xs" style="color:#b45309;">' + (isEN ? 'available in this app' : 'tersedia di aplikasi ini') + '</span>' +
            '</div>' +

            // NEW FEATURES
            '<div class="update-modal-section" style="border-color:#7c3aed;">' +
            '<div class="flex items-center gap-2 mb-3">' +
            '<span style="background:linear-gradient(135deg,#7c3aed,#db2777);color:white;" class="update-modal-badge"><i class="fas fa-plus-circle mr-1"></i>' + (isEN ? 'New Features' : 'Fitur Baru') + '</span>' +
            '</div>' +

            // Walking Pad
            '<div class="update-modal-item">' +
            '<i class="fas fa-walking mt-0.5 flex-shrink-0" style="color:#7c3aed;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">Walking Pad Lifestyle</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">' + (isEN
                ? 'New tab in Product Photography. Upload a model photo + clothing photos (max 5), AI generates the model wearing the outfit while standing/walking on a walking pad. Choose from 18 room themes (female/male/neutral), 6 camera angles, 3 poses, 5 lighting styles, and 9:16/3:4/1:1 ratios. Great for fashion affiliate content &amp; TikTok/Reels.'
                : 'Tab baru di kategori Product Photography. Upload foto model + foto baju (maks. 5 foto), AI menghasilkan foto model memakai baju tersebut sambil berdiri/berjalan di atas walking pad. Pilih dari 18 tema ruangan (female/male/netral), 6 camera angle, 3 pose, 5 pencahayaan, dan rasio 9:16/3:4/1:1. Cocok untuk konten affiliate fashion &amp; TikTok/Reels.') + '</p>' +
            '</div>' +
            '</div>' +

            // Kartu Lebaran
            '<div class="update-modal-item">' +
            '<i class="fas fa-envelope-open-text mt-0.5 flex-shrink-0" style="color:#16a34a;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">' + (isEN ? 'Eid Greeting Card' : 'Kartu Ucapan Lebaran') + '</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">' + (isEN
                ? 'New tab in Family &amp; Lifestyle. Create Eid al-Fitr greeting cards with 20 design themes, embed family face photos (optional, max 5), family name, 4 greeting options + custom, and format ratio choices.'
                : 'Tab baru di kategori Family &amp; Lifestyle. Buat kartu ucapan Idul Fitri dengan 20 tema desain, embed foto wajah keluarga (opsional, maks. 5 foto), nama keluarga, 4 pilihan ucapan + custom, dan pilihan rasio format.') + '</p>' +
            '</div>' +
            '</div>' +

            // Timelapse Renovasi
            '<div class="update-modal-item">' +
            '<i class="fas fa-house-chimney mt-0.5 flex-shrink-0" style="color:#f59e0b;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">' + (isEN ? 'Renovation Timelapse' : 'Timelapse Renovasi') + '</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">' + (isEN
                ? 'New tab in Creative Tools PRO. AI generates 2\\u20136 sequential renovation progress photos \\u2014 from initial condition to final result. Available in 20 architectural themes (Modern, Scandinavian, Industrial, Tropical, Japanese Zen, etc.), 4 ratio options, consistent camera angle across all frames, and works without uploading a photo. Perfect for creating timelapse videos with Image to Video.'
                : 'Tab baru di kategori Creative Tools PRO. AI menghasilkan 2\\u20136 foto progres renovasi bangunan secara berurutan \\u2014 dari kondisi awal hingga hasil akhir. Tersedia 20 tema arsitektur (Modern, Scandinavian, Industrial, Tropis, Japanese Zen, dll), 4 pilihan rasio, sudut kamera konsisten di semua frame, dan bisa generate tanpa upload foto. Cocok untuk dijadikan video timelapse dengan Image to Video.') + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +

            // FEATURE UPDATES
            '<div class="update-modal-section" style="border-color:#f59e0b;">' +
            '<div class="flex items-center gap-2 mb-3">' +
            '<span style="background:linear-gradient(135deg,#f59e0b,#16a34a);color:white;" class="update-modal-badge"><i class="fas fa-sync-alt mr-1"></i>' + (isEN ? 'Feature Updates' : 'Update Fitur') + '</span>' +
            '</div>' +

            // Foto Keluarga
            '<div class="update-modal-item">' +
            '<i class="fas fa-users mt-0.5 flex-shrink-0" style="color:#f59e0b;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">' + (isEN ? 'Family Photo &#8212; Eid Theme' : 'Foto Keluarga &#8212; Tema Lebaran') + '</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">' + (isEN
                ? 'Added 6 new Eid &amp; Ramadan themes: Sofa Couple, Eid Living Room, Hometown Mudik, Mosque Yard, Eid Dining Table, and Flower Garden Eid.'
                : 'Ditambahkan 6 tema Lebaran &amp; Ramadan baru: Pasangan Sofa, Ruang Tamu Lebaran, Mudik Kampung, Halaman Masjid, Meja Makan Lebaran, dan Taman Bunga Lebaran.') + '</p>' +
            '</div>' +
            '</div>' +

            // Food Selfie
            '<div class="update-modal-item">' +
            '<i class="fas fa-utensils mt-0.5 flex-shrink-0" style="color:#f59e0b;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">' + (isEN ? 'Food Selfie Pro &#8212; Ramadan Theme' : 'Food Selfie Pro &#8212; Tema Ramadan') + '</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">' + (isEN
                ? 'Added 8 Ramadan &amp; Eid themes: Iftar Dinner, Takjil Flat Lay, Premium Dates, Ramadan Lantern, Ketupat &amp; Opor, Eid Cookies, Sahur Subuh, and Iced Drinks.'
                : 'Ditambahkan 8 tema Ramadan &amp; Lebaran: Buka Puasa, Flat Lay Takjil, Kurma Premium, Lantern Ramadan, Ketupat &amp; Opor, Kue Lebaran, Sahur Subuh, dan Es &amp; Minuman Buka.') + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +

            // BUG FIXES
            '<div class="update-modal-section" style="border-color:#3b82f6;">' +
            '<div class="flex items-center gap-2 mb-3">' +
            '<span style="background:linear-gradient(135deg,#3b82f6,#06b6d4);color:white;" class="update-modal-badge"><i class="fas fa-wrench mr-1"></i>' + (isEN ? 'Bug Fixes' : 'Perbaikan') + '</span>' +
            '</div>' +

            '<div class="update-modal-item">' +
            '<i class="fas fa-mobile-alt mt-0.5 flex-shrink-0" style="color:#3b82f6;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">' + (isEN ? 'Mobile Compatibility' : 'Kompatibilitas Mobile') + '</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">' + (isEN
                ? 'Preview &amp; Download buttons on all new feature tabs are now always visible on mobile (no hover needed). Buttons use icon-only on mobile, text appears on desktop.'
                : 'Tombol Preview &amp; Download pada semua tab fitur baru kini selalu terlihat di perangkat mobile (tidak perlu hover). Tombol menggunakan ikon saja di mobile, teks muncul di desktop.') + '</p>' +
            '</div>' +
            '</div>' +

            '<div class="update-modal-item">' +
            '<i class="fas fa-eye mt-0.5 flex-shrink-0" style="color:#3b82f6;"></i>' +
            '<div>' +
            '<p class="font-semibold text-gray-800 text-sm">' + (isEN ? 'Preview Button &#8212; Consistent Modal' : 'Tombol Preview &#8212; Modal Konsisten') + '</p>' +
            '<p class="text-xs text-gray-500 mt-0.5">' + (isEN
                ? 'All Preview buttons now use the same global modal: can be closed by clicking outside, pressing ESC, or the X button. Supports mobile touch gestures.'
                : 'Semua tombol Preview kini menggunakan modal global yang sama: bisa ditutup dengan klik di luar, tekan ESC, atau tombol X. Mendukung touch gesture mobile.') + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +

            // Footer
            '<div class="text-center pt-2 text-xs text-gray-400">' +
            'AFF GO STUDIO by Arul CG &#8212; Thank you for using the app!' +
            '</div>' +
            '</div>';

            if (window.showUniversalModal) {
                window.showUniversalModal(modalTitle, html);
            }
        });`;

if (!html.includes(OLD)) {
    console.log('MISS — search string not found. Check for CRLF or whitespace differences.');
    process.exit(1);
}
html = html.replace(OLD, NEW);
console.log('OK: update modal replaced with bilingual EN/ID version');
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
