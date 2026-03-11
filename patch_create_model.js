// patch_create_model.js
// Fix Create Model tab: violet/indigo → green, Indonesian JS strings → bilingual
const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}
function repAll(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    const count = html.split(search).length - 1;
    html = html.split(search).join(replacement);
    console.log(`OK:   ${label} (${count}x)`); ok++;
}

// ===== HTML COLORS: buat-model panel =====

// Header gradient
rep(
    'from-violet-600 via-purple-600 to-indigo-600',
    'from-green-600 via-emerald-500 to-green-700',
    'header gradient'
);

// Info box background + border
rep(
    'from-violet-50 via-purple-50 to-indigo-50 border-2 border-violet-200',
    'from-green-50 via-emerald-50 to-green-50 border-2 border-green-200',
    'info box bg+border'
);

// Info box icon circle
rep(
    'bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg',
    'bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg',
    'info icon circle'
);

// Feature badge spans (Virtual Try-On etc)
repAll('border border-violet-200 text-violet-700', 'border border-green-200 text-green-700', 'feature badges');

// Step circles (from-violet-500 to-indigo-600 in rounded-full)
repAll(
    'bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-bold text-sm shadow-lg',
    'bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-sm shadow-lg',
    'step circles'
);

// Upload area hover
rep(
    'hover:bg-gradient-to-br hover:from-violet-50 hover:to-indigo-50 transition-all border-2 border-dashed border-gray-300 hover:border-violet-400',
    'hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all border-2 border-dashed border-gray-300 hover:border-green-400',
    'upload area hover'
);

// SVG face icon color
rep(
    'class="w-14 h-14 mb-3 text-violet-400"',
    'class="w-14 h-14 mb-3 text-green-400"',
    'upload svg icon'
);

// Textarea focus ring
rep(
    'focus:ring-2 focus:ring-violet-500 focus:border-violet-500',
    'focus:ring-2 focus:ring-green-500 focus:border-green-500',
    'textarea focus ring'
);

// Non-selected gender/type/ratio/count buttons hover
repAll('hover:border-violet-400 transition-all active:scale-95" data-gender', 'hover:border-green-400 transition-all active:scale-95" data-gender', 'gender btn hover');
repAll('hover:border-violet-400 transition-all active:scale-95 text-left" data-type', 'hover:border-green-400 transition-all active:scale-95 text-left" data-type', 'type btn hover');
repAll('hover:border-violet-400 transition-all active:scale-95" data-ratio', 'hover:border-green-400 transition-all active:scale-95" data-ratio', 'ratio btn hover');
repAll('hover:border-violet-400 transition-all active:scale-95" data-count', 'hover:border-green-400 transition-all active:scale-95" data-count', 'count btn hover');

// Icon colors inside non-selected buttons
rep('class="fas fa-venus text-lg text-violet-500"', 'class="fas fa-venus text-lg text-green-600"', 'venus icon');
repAll('text-2xl text-violet-500"', 'text-2xl text-green-600"', 'type btn icons');

// Selected button inline styles: #7c3aed → #16a34a, #6366f1 → #059669, rgba(124,58,237 → rgba(22,163,74
repAll('border-color: #7c3aed; background: linear-gradient(135deg, #7c3aed, #6366f1); color: white; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3)',
       'border-color: #16a34a; background: linear-gradient(135deg, #16a34a, #059669); color: white; box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3)',
       'selected btn inline style');

// Generate button
rep(
    'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white" disabled',
    'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white" disabled',
    'generate btn gradient'
);

// Results title icon
rep('class="fas fa-images mr-2 text-violet-500"', 'class="fas fa-images mr-2 text-green-600"', 'results icon');

// Download all button
rep(
    'bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg',
    'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-lg',
    'download all btn'
);

// ===== JS COLORS: card placeholder + loader + result download btn =====

rep(
    'card.className = `relative group rounded-xl overflow-hidden bg-gradient-to-br from-violet-100 to-indigo-100 ${aspectClass} flex items-center justify-center`;',
    'card.className = `relative group rounded-xl overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 ${aspectClass} flex items-center justify-center`;',
    'JS card placeholder bg'
);

rep(
    "card.innerHTML = '<div class=\"loader !border-l-violet-600\"></div>';",
    "card.innerHTML = '<div class=\"loader !border-l-green-600\"></div>';",
    'JS card loader color'
);

rep(
    'from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white px-3 py-2 rounded-full',
    'from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 py-2 rounded-full',
    'JS result download btn gradient'
);

// ===== JS STRINGS: Indonesian → bilingual =====

// Loading text
rep(
    "generateBtn.innerHTML = '<div class=\"loader\"></div><span class=\"ml-2\">Membuat foto model...</span>';",
    "generateBtn.innerHTML = '<div class=\"loader\"></div><span class=\"ml-2\">' + ((localStorage.getItem('app_language')||'en')==='en' ? 'Creating model photos...' : 'Membuat foto model...') + '</span>';",
    'JS loading text'
);

// Button reset text after generate
rep(
    'generateBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg><span>Buat <span id="buat-model-count-text">${selectedCount}</span> Foto Model</span>`;',
    'generateBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>` + ((localStorage.getItem(\'app_language\')||\'en\')===\'en\' ? `<span>Create <span id="buat-model-count-text">${selectedCount}</span> Model Photos</span>` : `<span>Buat <span id="buat-model-count-text">${selectedCount}</span> Foto Model</span>`);',
    'JS btn reset text'
);

// Error text "Gagal"
rep(
    '<p class="text-sm">Gagal</p></div>',
    '<p class="text-sm">' + "' + ((localStorage.getItem('app_language')||'en')==='en' ? 'Failed' : 'Gagal') + '" + '</p></div>',
    'JS error text'
);

// Download all "Selesai!"
rep(
    "downloadAllBtn.innerHTML = '<i class=\"fas fa-check mr-2\"></i><span>Selesai!</span>';",
    "downloadAllBtn.innerHTML = '<i class=\"fas fa-check mr-2\"></i><span>' + ((localStorage.getItem('app_language')||'en')==='en' ? 'Done!' : 'Selesai!') + '</span>';",
    'JS download done text'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
