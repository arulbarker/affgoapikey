// patch_theme_green.js — Change app theme from sky-blue to green
//
// GREEN THEME PALETTE (save these for future reference):
//   Primary:        #16a34a  (green-600)
//   Primary dark:   #15803d  (green-700)
//   Primary light:  #dcfce7  (green-100)
//   Border light:   #bbf7d0  (green-200)
//   Accent:         #059669  (emerald-600)
//   rgba primary:   rgba(22, 163, 74, ...)
//   Gradient brand: from-green-500 to-emerald-600
//   Tailwind main:  green-500, green-600, green-700, green-100, green-200

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

// ===== HEX COLOR REPLACEMENTS =====

repAll('#0ea5e9', '#16a34a', 'hex primary sky-500 → green-600');
repAll('#0284c7', '#15803d', 'hex primary-dark sky-600 → green-700');
repAll('#e0f2fe', '#dcfce7', 'hex light-bg sky-100 → green-100');
repAll('#bae6fd', '#bbf7d0', 'hex light-border sky-200 → green-200');
repAll('#38bdf8', '#4ade80', 'hex sky-400 → green-400');
repAll('#7dd3fc', '#86efac', 'hex sky-300 → green-300');
repAll('#f0f9ff', '#f0fdf4', 'hex sky-50 → green-50');

// rgba variants
repAll('rgba(14, 165, 233, ', 'rgba(22, 163, 74, ', 'rgba sky-500 spaced');
repAll('rgba(14,165,233,', 'rgba(22,163,74,', 'rgba sky-500 compact');
repAll('rgba(14, 165, 233,', 'rgba(22, 163, 74,', 'rgba sky-500 mixed');

// Violet used alongside sky in brand gradient → emerald
// #6366f1 in lang toggle gradient (paired with sky)
rep(
    'background:linear-gradient(135deg,#16a34a,#6366f1)',
    'background:linear-gradient(135deg,#16a34a,#059669)',
    'lang-toggle-active gradient violet → emerald'
);
// In case already replaced in previous step
rep(
    'background:linear-gradient(135deg,#0ea5e9,#6366f1)',
    'background:linear-gradient(135deg,#16a34a,#059669)',
    'lang-toggle-active gradient sky+violet → green+emerald'
);

// ===== TAILWIND CLASS REPLACEMENTS =====

// Brand gradient: from-sky-500 to-violet-500 → from-green-500 to-emerald-600
repAll('from-sky-500 to-violet-500', 'from-green-500 to-emerald-600', 'tailwind brand gradient');

// Step circles & button gradients: from-sky-500 to-sky-600
repAll('from-sky-500 to-sky-600', 'from-green-500 to-green-600', 'tailwind from-sky-500 to-sky-600');
repAll('from-sky-600 to-sky-700', 'from-green-600 to-green-700', 'tailwind from-sky-600 to-sky-700');
repAll('hover:from-sky-600 hover:to-sky-700', 'hover:from-green-600 hover:to-green-700', 'tailwind hover gradient');
repAll('hover:from-sky-600', 'hover:from-green-600', 'tailwind hover:from-sky-600');
repAll('hover:to-sky-700', 'hover:to-green-700', 'tailwind hover:to-sky-700');

// Standalone to-sky-*
repAll('to-sky-600', 'to-green-600', 'tailwind to-sky-600');
repAll('to-sky-700', 'to-green-700', 'tailwind to-sky-700');
repAll('from-sky-500', 'from-green-500', 'tailwind from-sky-500 (remaining)');
repAll('from-sky-600', 'from-green-600', 'tailwind from-sky-600 (remaining)');

// text-sky-*
repAll('text-sky-500', 'text-green-600', 'tailwind text-sky-500');
repAll('text-sky-600', 'text-green-700', 'tailwind text-sky-600');
repAll('text-sky-400', 'text-green-500', 'tailwind text-sky-400');

// bg-sky-*
repAll('bg-sky-500', 'bg-green-600', 'tailwind bg-sky-500');
repAll('bg-sky-600', 'bg-green-700', 'tailwind bg-sky-600');
repAll('bg-sky-50', 'bg-green-50', 'tailwind bg-sky-50');
repAll('bg-sky-100', 'bg-green-100', 'tailwind bg-sky-100');

// hover:bg-sky-*
repAll('hover:bg-sky-500', 'hover:bg-green-600', 'tailwind hover:bg-sky-500');
repAll('hover:bg-sky-600', 'hover:bg-green-700', 'tailwind hover:bg-sky-600');
repAll('hover:bg-sky-100', 'hover:bg-green-100', 'tailwind hover:bg-sky-100');

// border-sky-*
repAll('border-sky-200', 'border-green-200', 'tailwind border-sky-200');
repAll('border-sky-400', 'border-green-400', 'tailwind border-sky-400');
repAll('border-sky-500', 'border-green-600', 'tailwind border-sky-500');
repAll('border-sky-600', 'border-green-700', 'tailwind border-sky-600');

// hover:border-sky-*
repAll('hover:border-sky-400', 'hover:border-green-400', 'tailwind hover:border-sky-400');
repAll('hover:border-sky-500', 'hover:border-green-600', 'tailwind hover:border-sky-500');

// focus:border-sky-*
repAll('focus:border-sky-400', 'focus:border-green-400', 'tailwind focus:border-sky-400');
repAll('focus:border-sky-500', 'focus:border-green-600', 'tailwind focus:border-sky-500');

// ring-sky-*
repAll('ring-sky-500', 'ring-green-600', 'tailwind ring-sky-500');
repAll('focus:ring-sky-500', 'focus:ring-green-600', 'tailwind focus:ring-sky-500');

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
