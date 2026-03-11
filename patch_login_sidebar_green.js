// patch_login_sidebar_green.js
// Fix login page + sidebar inline styles to green theme.
// Per-feature panel colors (POV Tangan uses same purple) are NOT touched.

const fs = require('fs');
let html = fs.readFileSync('kode.html', 'utf8');
let ok = 0, miss = 0;

function rep(search, replacement, label) {
    if (!html.includes(search)) { console.log('MISS:', label); miss++; return; }
    html = html.replace(search, replacement);
    console.log('OK:  ', label); ok++;
}

// ===== LOGIN OVERLAY BACKGROUND =====
rep(
    '#login-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);',
    '#login-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(135deg, #16a34a 0%, #059669 100%);',
    'login-overlay bg gradient'
);

// ===== LOGIN INPUT FOCUS =====
rep(
    '.login-input:focus {\n            outline: none;\n            border-color: #00d2ff;\n            background: white;\n            box-shadow: 0 0 15px rgba(0, 210, 255, 0.3);\n        }',
    '.login-input:focus {\n            outline: none;\n            border-color: #16a34a;\n            background: white;\n            box-shadow: 0 0 15px rgba(22, 163, 74, 0.3);\n        }',
    'login-input focus color'
);

// ===== LOGIN BUTTON =====
rep(
    'background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);\n            color: white;\n            border: none;\n            border-radius: 10px;\n            cursor: pointer;\n            font-weight: bold;\n            font-size: 16px;\n            transition: all 0.3s ease;\n            box-shadow: 0 4px 15px rgba(0, 210, 255, 0.4);',
    'background: linear-gradient(135deg, #16a34a 0%, #059669 100%);\n            color: white;\n            border: none;\n            border-radius: 10px;\n            cursor: pointer;\n            font-weight: bold;\n            font-size: 16px;\n            transition: all 0.3s ease;\n            box-shadow: 0 4px 15px rgba(22, 163, 74, 0.4);',
    'login-btn bg + shadow'
);

rep(
    '.login-btn:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 6px 20px rgba(0, 210, 255, 0.6);\n        }',
    '.login-btn:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 6px 20px rgba(22, 163, 74, 0.6);\n        }',
    'login-btn hover shadow'
);

// ===== USER INFO BADGE — username color =====
rep(
    '<span style="color: #667eea; font-weight: 600;">',
    '<span style="color: #16a34a; font-weight: 600;">',
    'user-info-badge username color'
);

// ===== SIDEBAR — BERANDA BUTTON inline style =====
rep(
    'style="margin-bottom: 1rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-weight: 600; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);"',
    'style="margin-bottom: 1rem; background: linear-gradient(135deg, #16a34a 0%, #059669 100%); color: white; font-weight: 600; box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);"',
    'sidebar beranda btn gradient'
);

// ===== SIDEBAR — API KEY BUTTON violet end → emerald =====
rep(
    'style="margin-bottom: 0.5rem; background: linear-gradient(135deg, #16a34a 0%, #6366f1 100%); color: white; font-weight: 600; box-shadow: 0 4px 12px rgba(22,163,74,0.3);"',
    'style="margin-bottom: 0.5rem; background: linear-gradient(135deg, #16a34a 0%, #059669 100%); color: white; font-weight: 600; box-shadow: 0 4px 12px rgba(22,163,74,0.3);"',
    'sidebar apikey btn violet→emerald'
);

console.log(`\nDone: ${ok} OK, ${miss} MISS`);
fs.writeFileSync('kode.html', html, 'utf8');
console.log('Saved kode.html');
