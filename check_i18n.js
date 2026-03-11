const fs = require('fs');
const content = fs.readFileSync('kode.html', 'utf8');
const panelRe = /id="(content-[^"]+)" class="main-content-panel/g;
const panels = [];
let m;
while ((m = panelRe.exec(content)) !== null) panels.push({id:m[1],pos:m.index});
let done=0,todo=0;
panels.forEach(function(p,i){
    const end=i+1<panels.length?panels[i+1].pos:content.length;
    const chunk=content.slice(p.pos,end);
    const count=(chunk.match(/data-i18n=/g)||[]).length;
    const isIframe=chunk.includes('<iframe') && chunk.split('\n').length<15;
    if(count>0||isIframe){done++;}else{todo++;console.log('TODO:',p.id);}
});
console.log('DONE:',done,'/ TODO:',todo,'/ TOTAL:',panels.length);
