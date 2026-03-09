// i18n_patch15.js — SEO Description, TikTok Ideas, Ad Script
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
// AD SCRIPT (content-script-story-iklan)
// ================================================================

// 1. header desc
rep(
    '<p class="text-lg text-gray-600 mb-2">\n                        Buat narasi iklan yang natural dan meyakinkan untuk promosi produk affiliate\n                    </p>',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="adscript.desc">\n                        Buat narasi iklan yang natural dan meyakinkan untuk promosi produk affiliate\n                    </p>',
    'adscript.desc'
);

// 2. input h2 "Input Story"
repR(
    '(class="text-2xl font-bold mb-6 text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-pen mr-2 text-blue-500"></i>)([\\r\\n\\s]+Input Story)',
    '$1 data-i18n="adscript.input-title">\r\n                            $2$3',
    'adscript.input-title'
);

// 3. label "Target Audience" with asterisk (adscript-specific — tiktok has same label without asterisk)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Target Audience [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="adscript.label-audience">$1',
    'adscript.label-audience'
);

// 4. label "Nama Produk" with asterisk
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Nama Produk [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="adscript.label-product">$1',
    'adscript.label-product'
);

// 5. label "Masalah yang Dipecahkan" with asterisk
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Masalah yang Dipecahkan [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="adscript.label-problem">$1',
    'adscript.label-problem'
);

// 6. label "Manfaat/Solusi Produk" (no asterisk)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Manfaat/Solusi Produk[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="adscript.label-benefits">$1',
    'adscript.label-benefits'
);

// 7. label "Tone/Gaya Bahasa"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Tone/Gaya Bahasa[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="adscript.label-tone">$1',
    'adscript.label-tone'
);

// 8. tone buttons
repR(
    '(data-tone="friendly" class="story-tone-btn active">)[\\r\\n\\s]+(<i class="fas fa-smile mr-2"></i>)([\\r\\n\\s]*)Ramah',
    '$1\r\n                                        $2<span data-i18n="adscript.tone-friendly">Ramah</span>',
    'adscript.tone-friendly'
);
repR(
    '(data-tone="professional" class="story-tone-btn">)[\\r\\n\\s]+(<i class="fas fa-briefcase mr-2"></i>)([\\r\\n\\s]*)Profesional',
    '$1\r\n                                        $2<span data-i18n="adscript.tone-professional">Profesional</span>',
    'adscript.tone-professional'
);
repR(
    '(data-tone="casual" class="story-tone-btn">)[\\r\\n\\s]+(<i class="fas fa-coffee mr-2"></i>)([\\r\\n\\s]*)Santai',
    '$1\r\n                                        $2<span data-i18n="adscript.tone-casual">Santai</span>',
    'adscript.tone-casual'
);
repR(
    '(data-tone="enthusiastic" class="story-tone-btn">)[\\r\\n\\s]+(<i class="fas fa-fire mr-2"></i>)([\\r\\n\\s]*)Antusias',
    '$1\r\n                                        $2<span data-i18n="adscript.tone-enthusiastic">Antusias</span>',
    'adscript.tone-enthusiastic'
);

// 9. label "Panjang Script"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Panjang Script[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="adscript.label-length">$1',
    'adscript.label-length'
);

// 10. length buttons
repR(
    '(data-length="short" class="story-length-btn active">)[\\r\\n\\s]+(<i class="fas fa-clock mr-2"></i>)([\\r\\n\\s]*)Pendek \\(30-60s\\)',
    '$1\r\n                                        $2<span data-i18n="adscript.length-short">Pendek (30-60s)</span>',
    'adscript.length-short'
);
repR(
    '(data-length="long" class="story-length-btn">)[\\r\\n\\s]+(<i class="fas fa-hourglass mr-2"></i>)([\\r\\n\\s]*)Panjang \\(60-120s\\)',
    '$1\r\n                                        $2<span data-i18n="adscript.length-long">Panjang (60-120s)</span>',
    'adscript.length-long'
);

// 11. label "Sertakan Link Affiliate?"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Sertakan Link Affiliate\\?[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="adscript.label-link">$1',
    'adscript.label-link'
);

// 12. generate button
repR(
    '(id="story-script-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-wand-magic-sparkles mr-2"></i>)([\\r\\n\\s]*)Generate Script Story',
    '$1\r\n                                <span data-i18n="adscript.gen-btn">Generate Script Story</span>',
    'adscript.gen-btn'
);

// 13. output h2 "Script Narasi"
repR(
    '(class="text-2xl font-bold mb-6 text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-scroll mr-2 text-blue-500"></i>)([\\r\\n\\s]+Script Narasi)',
    '$1 data-i18n="adscript.output-title">\r\n                            $2$3',
    'adscript.output-title'
);

// 14. output h3 "Script Narasi Iklan"
repR(
    '(<h3 class="font-bold text-gray-800 flex items-center gap-2">)[\\r\\n\\s]+(<i class="fas fa-file-alt text-blue-500"></i>)[\\r\\n\\s]+Script Narasi Iklan',
    '$1 data-i18n="adscript.script-h3">\r\n                                        $2\r\n                                        Script Narasi Iklan',
    'adscript.script-h3'
);

// 15. copy button "Salin" (adscript)
rep(
    'id="story-script-copy-btn"\n                                        class="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"\n                                    >\n                                        <i class="fas fa-copy"></i>Salin',
    'id="story-script-copy-btn"\n                                        class="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"\n                                    >\n                                        <i class="fas fa-copy"></i><span data-i18n="adscript.copy-btn">Salin</span>',
    'adscript.copy-btn'
);

// 16. h3 "Tips Penyampaian"
repR(
    '(<h3 class="font-bold text-gray-800 mb-2 flex items-center gap-2">)[\\r\\n\\s]+(<i class="fas fa-lightbulb text-yellow-500"></i>)[\\r\\n\\s]+Tips Penyampaian',
    '$1 data-i18n="adscript.tips-h3">\r\n                                    $2\r\n                                    Tips Penyampaian',
    'adscript.tips-h3'
);

// 17. placeholder title
rep(
    '<p class="text-lg font-semibold">Script Story Iklan Anda</p>',
    '<p class="text-lg font-semibold" data-i18n="adscript.placeholder-title">Script Story Iklan Anda</p>',
    'adscript.placeholder-title'
);

// 18. placeholder desc
rep(
    '<p class="text-sm">Isi form dan generate script yang meyakinkan!</p>',
    '<p class="text-sm" data-i18n="adscript.placeholder-desc">Isi form dan generate script yang meyakinkan!</p>',
    'adscript.placeholder-desc'
);

// ================================================================
// TIKTOK IDEAS (content-ide-konten-tiktok)
// ================================================================

// 19. header desc
rep(
    '<p class="text-lg text-gray-600 mb-2">\n                        Dapatkan hook viral dan struktur video yang bikin audience berhenti scroll!\n                    </p>',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="tiktok.desc">\n                        Dapatkan hook viral dan struktur video yang bikin audience berhenti scroll!\n                    </p>',
    'tiktok.desc'
);

// 20. input h2 "Input Konten"
repR(
    '(class="text-2xl font-bold mb-6 text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-lightbulb mr-2 text-pink-500"></i>)([\\r\\n\\s]+Input Konten)',
    '$1 data-i18n="tiktok.input-title">\r\n                            $2$3',
    'tiktok.input-title'
);

// 21. label "Kategori Produk" with asterisk (tiktok-specific)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Kategori Produk [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="tiktok.label-category">$1',
    'tiktok.label-category'
);

// 22. label "Nama/Jenis Produk" (no asterisk)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Nama/Jenis Produk[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="tiktok.label-product">$1',
    'tiktok.label-product'
);

// 23. label "Target Audience" without asterisk (tiktok)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Target Audience[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="tiktok.label-audience">$1',
    'tiktok.label-audience'
);

// 24. label "Tipe Konten"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Tipe Konten[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="tiktok.label-type">$1',
    'tiktok.label-type'
);

// 25. "Perbandingan" comparison button (only Indonesian in the tipe-konten buttons)
repR(
    '(data-type="comparison" class="tiktok-type-btn">)[\\r\\n\\s]+(<i class="fas fa-balance-scale mr-2"></i>)([\\r\\n\\s]*)Perbandingan',
    '$1\r\n                                        $2<span data-i18n="tiktok.type-comparison">Perbandingan</span>',
    'tiktok.type-comparison'
);

// 26. label "Durasi Video Target"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Durasi Video Target[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="tiktok.label-duration">$1',
    'tiktok.label-duration'
);

// 27. generate button
repR(
    '(id="tiktok-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-magic mr-2"></i>)([\\r\\n\\s]*)Generate Ide Konten',
    '$1\r\n                                <span data-i18n="tiktok.gen-btn">Generate Ide Konten</span>',
    'tiktok.gen-btn'
);

// 28. output h2 "Ide Konten Video"
repR(
    '(class="text-2xl font-bold mb-6 text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-video mr-2 text-pink-500"></i>)([\\r\\n\\s]+Ide Konten Video)',
    '$1 data-i18n="tiktok.output-title">\r\n                            $2$3',
    'tiktok.output-title'
);

// 29. h3 "Hook Pembuka (3 detik pertama)"
repR(
    '(<h3 class="font-bold text-gray-800 flex items-center gap-2">)[\\r\\n\\s]+(<i class="fas fa-bullhorn text-pink-500"></i>)[\\r\\n\\s]+Hook Pembuka \\(3 detik pertama\\)',
    '$1 data-i18n="tiktok.hook-h3">\r\n                                        $2\r\n                                        Hook Pembuka (3 detik pertama)',
    'tiktok.hook-h3'
);

// 30. h3 "Struktur Video"
repR(
    '(<h3 class="font-bold text-gray-800 flex items-center gap-2">)[\\r\\n\\s]+(<i class="fas fa-list-ol text-blue-500"></i>)[\\r\\n\\s]+Struktur Video',
    '$1 data-i18n="tiktok.structure-h3">\r\n                                    $2\r\n                                    Struktur Video',
    'tiktok.structure-h3'
);

// 31. h3 "Saran Audio/Musik"
repR(
    '(<h3 class="font-bold text-gray-800 flex items-center gap-2">)[\\r\\n\\s]+(<i class="fas fa-music text-purple-500"></i>)[\\r\\n\\s]+Saran Audio/Musik',
    '$1 data-i18n="tiktok.audio-h3">\r\n                                    $2\r\n                                    Saran Audio/Musik',
    'tiktok.audio-h3'
);

// 32. h3 "Hashtag Rekomendasi"
repR(
    '(<h3 class="font-bold text-gray-800 flex items-center gap-2">)[\\r\\n\\s]+(<i class="fas fa-hashtag text-green-500"></i>)[\\r\\n\\s]+Hashtag Rekomendasi',
    '$1 data-i18n="tiktok.hashtag-h3">\r\n                                    $2\r\n                                    Hashtag Rekomendasi',
    'tiktok.hashtag-h3'
);

// 33. placeholder title
rep(
    '<p class="text-lg font-semibold">Ide Konten TikTok Anda</p>',
    '<p class="text-lg font-semibold" data-i18n="tiktok.placeholder-title">Ide Konten TikTok Anda</p>',
    'tiktok.placeholder-title'
);

// 34. placeholder desc
rep(
    '<p class="text-sm">Pilih kategori dan generate ide viral!</p>',
    '<p class="text-sm" data-i18n="tiktok.placeholder-desc">Pilih kategori dan generate ide viral!</p>',
    'tiktok.placeholder-desc'
);

// ================================================================
// SEO DESCRIPTION (content-deskripsi-produk)
// ================================================================

// 35. header desc
rep(
    '<p class="text-lg text-gray-600 mb-2">\n                        Buat deskripsi produk yang menarik dan optimal untuk Shopee & TikTok Shop\n                    </p>',
    '<p class="text-lg text-gray-600 mb-2" data-i18n="seodesc.desc">\n                        Buat deskripsi produk yang menarik dan optimal untuk Shopee & TikTok Shop\n                    </p>',
    'seodesc.desc'
);

// 36. input h2 "Input Produk"
repR(
    '(class="text-2xl font-bold mb-6 text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-edit mr-2 text-orange-500"></i>)([\\r\\n\\s]+Input Produk)',
    '$1 data-i18n="seodesc.input-title">\r\n                            $2$3',
    'seodesc.input-title'
);

// 37. label "Nama/Judul Produk" with asterisk
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Nama/Judul Produk [\\r\\n\\s]*<span class="text-red-500">)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="seodesc.label-name">$1',
    'seodesc.label-name'
);

// 38. label "Link Produk (Opsional)"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Link Produk \\(Opsional\\)[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="seodesc.label-link">$1',
    'seodesc.label-link'
);

// 39. label "Kategori Produk" (seodesc — no asterisk)
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Kategori Produk[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="seodesc.label-category">$1',
    'seodesc.label-category'
);

// 40. label "Fitur/Keunggulan Produk"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Fitur/Keunggulan Produk[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="seodesc.label-features">$1',
    'seodesc.label-features'
);

// 41. label "Platform Target"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Platform Target[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="seodesc.label-platform">$1',
    'seodesc.label-platform'
);

// 42. label "Panjang Deskripsi"
repR(
    'class="block text-sm font-semibold text-gray-700 mb-2">([\\r\\n\\s]+Panjang Deskripsi[\\r\\n\\s]+</label>)',
    'class="block text-sm font-semibold text-gray-700 mb-2" data-i18n="seodesc.label-length">$1',
    'seodesc.label-length'
);

// 43. length buttons (seodesc)
repR(
    '(data-length="short" class="desc-length-btn active">)[\\r\\n\\s]+(<i class="fas fa-align-left mr-2"></i>)([\\r\\n\\s]*)Pendek',
    '$1\r\n                                        $2<span data-i18n="seodesc.length-short">Pendek</span>',
    'seodesc.length-short'
);
repR(
    '(data-length="long" class="desc-length-btn">)[\\r\\n\\s]+(<i class="fas fa-align-justify mr-2"></i>)([\\r\\n\\s]*)Panjang',
    '$1\r\n                                        $2<span data-i18n="seodesc.length-long">Panjang</span>',
    'seodesc.length-long'
);

// 44. generate button
repR(
    '(id="desc-generate-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-sparkles mr-2"></i>)([\\r\\n\\s]*)Generate Deskripsi',
    '$1\r\n                                <span data-i18n="seodesc.gen-btn">Generate Deskripsi</span>',
    'seodesc.gen-btn'
);

// 45. output h2 "Hasil Deskripsi"
repR(
    '(class="text-2xl font-bold mb-6 text-gray-800">)[\\r\\n\\s]+(<i class="fas fa-file-alt mr-2 text-orange-500"></i>)([\\r\\n\\s]+Hasil Deskripsi)',
    '$1 data-i18n="seodesc.output-title">\r\n                            $2$3',
    'seodesc.output-title'
);

// 46. copy button "Salin" (seodesc)
repR(
    '(id="desc-copy-btn"[^>]*>)[\\r\\n\\s]+(<i class="fas fa-copy"></i>)([\\r\\n\\s]*)Salin',
    '$1\r\n                                        $2<span data-i18n="seodesc.copy-btn">Salin</span>',
    'seodesc.copy-btn'
);

// 47. placeholder title
rep(
    '<p class="text-lg font-semibold">Deskripsi Produk Anda</p>',
    '<p class="text-lg font-semibold" data-i18n="seodesc.placeholder-title">Deskripsi Produk Anda</p>',
    'seodesc.placeholder-title'
);

// 48. placeholder desc
rep(
    '<p class="text-sm">Isi form di samping dan klik Generate</p>',
    '<p class="text-sm" data-i18n="seodesc.placeholder-desc">Isi form di samping dan klik Generate</p>',
    'seodesc.placeholder-desc'
);

// ================================================================
// i18n DICTIONARY — insert after vehicle.empty-desc in EN dict
// ================================================================
rep(
    `'vehicle.empty-desc':'Upload vehicle and select desired modifications',\r\n            },`,
    `'vehicle.empty-desc':'Upload vehicle and select desired modifications',\r\n` +
    // Ad Script
    `            'adscript.desc':'Create natural and convincing ad narration for affiliate product promotion',\r\n` +
    `            'adscript.input-title':'Input Story',\r\n` +
    `            'adscript.label-audience':'Target Audience',\r\n` +
    `            'adscript.label-product':'Product Name',\r\n` +
    `            'adscript.label-problem':'Problem Being Solved',\r\n` +
    `            'adscript.label-benefits':'Product Benefits/Solution',\r\n` +
    `            'adscript.label-tone':'Tone/Language Style',\r\n` +
    `            'adscript.tone-friendly':'Friendly',\r\n` +
    `            'adscript.tone-professional':'Professional',\r\n` +
    `            'adscript.tone-casual':'Casual',\r\n` +
    `            'adscript.tone-enthusiastic':'Enthusiastic',\r\n` +
    `            'adscript.label-length':'Script Length',\r\n` +
    `            'adscript.length-short':'Short (30-60s)',\r\n` +
    `            'adscript.length-long':'Long (60-120s)',\r\n` +
    `            'adscript.label-link':'Include Affiliate Link?',\r\n` +
    `            'adscript.gen-btn':'Generate Ad Script',\r\n` +
    `            'adscript.output-title':'Ad Script',\r\n` +
    `            'adscript.script-h3':'Ad Narration Script',\r\n` +
    `            'adscript.copy-btn':'Copy',\r\n` +
    `            'adscript.tips-h3':'Delivery Tips',\r\n` +
    `            'adscript.placeholder-title':'Your Ad Story Script',\r\n` +
    `            'adscript.placeholder-desc':'Fill the form and generate a convincing script!',\r\n` +
    // TikTok Ideas
    `            'tiktok.desc':'Get viral hooks and video structure that make audiences stop scrolling!',\r\n` +
    `            'tiktok.input-title':'Content Input',\r\n` +
    `            'tiktok.label-category':'Product Category',\r\n` +
    `            'tiktok.label-product':'Product Name/Type',\r\n` +
    `            'tiktok.label-audience':'Target Audience',\r\n` +
    `            'tiktok.label-type':'Content Type',\r\n` +
    `            'tiktok.type-comparison':'Comparison',\r\n` +
    `            'tiktok.label-duration':'Target Video Duration',\r\n` +
    `            'tiktok.gen-btn':'Generate Content Ideas',\r\n` +
    `            'tiktok.output-title':'Video Content Ideas',\r\n` +
    `            'tiktok.hook-h3':'Opening Hook (First 3 Seconds)',\r\n` +
    `            'tiktok.structure-h3':'Video Structure',\r\n` +
    `            'tiktok.audio-h3':'Audio/Music Suggestions',\r\n` +
    `            'tiktok.hashtag-h3':'Hashtag Recommendations',\r\n` +
    `            'tiktok.placeholder-title':'Your TikTok Content Ideas',\r\n` +
    `            'tiktok.placeholder-desc':'Choose category and generate viral ideas!',\r\n` +
    // SEO Description
    `            'seodesc.desc':'Create attractive and optimized product descriptions for Shopee & TikTok Shop',\r\n` +
    `            'seodesc.input-title':'Product Input',\r\n` +
    `            'seodesc.label-name':'Product Name/Title',\r\n` +
    `            'seodesc.label-link':'Product Link (Optional)',\r\n` +
    `            'seodesc.label-category':'Product Category',\r\n` +
    `            'seodesc.label-features':'Product Features/Advantages',\r\n` +
    `            'seodesc.label-platform':'Target Platform',\r\n` +
    `            'seodesc.label-length':'Description Length',\r\n` +
    `            'seodesc.length-short':'Short',\r\n` +
    `            'seodesc.length-long':'Long',\r\n` +
    `            'seodesc.gen-btn':'Generate Description',\r\n` +
    `            'seodesc.output-title':'Description Results',\r\n` +
    `            'seodesc.copy-btn':'Copy',\r\n` +
    `            'seodesc.placeholder-title':'Your Product Description',\r\n` +
    `            'seodesc.placeholder-desc':'Fill the form and click Generate',\r\n` +
    `            },`,
    'EN dict insert'
);

// insert after vehicle.empty-desc in ID dict
rep(
    `'vehicle.empty-desc':'Upload kendaraan dan pilih modifikasi yang diinginkan',\r\n            }`,
    `'vehicle.empty-desc':'Upload kendaraan dan pilih modifikasi yang diinginkan',\r\n` +
    // Ad Script
    `            'adscript.desc':'Buat narasi iklan yang natural dan meyakinkan untuk promosi produk affiliate',\r\n` +
    `            'adscript.input-title':'Input Story',\r\n` +
    `            'adscript.label-audience':'Target Audience',\r\n` +
    `            'adscript.label-product':'Nama Produk',\r\n` +
    `            'adscript.label-problem':'Masalah yang Dipecahkan',\r\n` +
    `            'adscript.label-benefits':'Manfaat/Solusi Produk',\r\n` +
    `            'adscript.label-tone':'Tone/Gaya Bahasa',\r\n` +
    `            'adscript.tone-friendly':'Ramah',\r\n` +
    `            'adscript.tone-professional':'Profesional',\r\n` +
    `            'adscript.tone-casual':'Santai',\r\n` +
    `            'adscript.tone-enthusiastic':'Antusias',\r\n` +
    `            'adscript.label-length':'Panjang Script',\r\n` +
    `            'adscript.length-short':'Pendek (30-60s)',\r\n` +
    `            'adscript.length-long':'Panjang (60-120s)',\r\n` +
    `            'adscript.label-link':'Sertakan Link Affiliate?',\r\n` +
    `            'adscript.gen-btn':'Generate Script Story',\r\n` +
    `            'adscript.output-title':'Script Narasi',\r\n` +
    `            'adscript.script-h3':'Script Narasi Iklan',\r\n` +
    `            'adscript.copy-btn':'Salin',\r\n` +
    `            'adscript.tips-h3':'Tips Penyampaian',\r\n` +
    `            'adscript.placeholder-title':'Script Story Iklan Anda',\r\n` +
    `            'adscript.placeholder-desc':'Isi form dan generate script yang meyakinkan!',\r\n` +
    // TikTok Ideas
    `            'tiktok.desc':'Dapatkan hook viral dan struktur video yang bikin audience berhenti scroll!',\r\n` +
    `            'tiktok.input-title':'Input Konten',\r\n` +
    `            'tiktok.label-category':'Kategori Produk',\r\n` +
    `            'tiktok.label-product':'Nama/Jenis Produk',\r\n` +
    `            'tiktok.label-audience':'Target Audience',\r\n` +
    `            'tiktok.label-type':'Tipe Konten',\r\n` +
    `            'tiktok.type-comparison':'Perbandingan',\r\n` +
    `            'tiktok.label-duration':'Durasi Video Target',\r\n` +
    `            'tiktok.gen-btn':'Generate Ide Konten',\r\n` +
    `            'tiktok.output-title':'Ide Konten Video',\r\n` +
    `            'tiktok.hook-h3':'Hook Pembuka (3 detik pertama)',\r\n` +
    `            'tiktok.structure-h3':'Struktur Video',\r\n` +
    `            'tiktok.audio-h3':'Saran Audio/Musik',\r\n` +
    `            'tiktok.hashtag-h3':'Hashtag Rekomendasi',\r\n` +
    `            'tiktok.placeholder-title':'Ide Konten TikTok Anda',\r\n` +
    `            'tiktok.placeholder-desc':'Pilih kategori dan generate ide viral!',\r\n` +
    // SEO Description
    `            'seodesc.desc':'Buat deskripsi produk yang menarik dan optimal untuk Shopee & TikTok Shop',\r\n` +
    `            'seodesc.input-title':'Input Produk',\r\n` +
    `            'seodesc.label-name':'Nama/Judul Produk',\r\n` +
    `            'seodesc.label-link':'Link Produk (Opsional)',\r\n` +
    `            'seodesc.label-category':'Kategori Produk',\r\n` +
    `            'seodesc.label-features':'Fitur/Keunggulan Produk',\r\n` +
    `            'seodesc.label-platform':'Platform Target',\r\n` +
    `            'seodesc.label-length':'Panjang Deskripsi',\r\n` +
    `            'seodesc.length-short':'Pendek',\r\n` +
    `            'seodesc.length-long':'Panjang',\r\n` +
    `            'seodesc.gen-btn':'Generate Deskripsi',\r\n` +
    `            'seodesc.output-title':'Hasil Deskripsi',\r\n` +
    `            'seodesc.copy-btn':'Salin',\r\n` +
    `            'seodesc.placeholder-title':'Deskripsi Produk Anda',\r\n` +
    `            'seodesc.placeholder-desc':'Isi form di samping dan klik Generate',\r\n` +
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
