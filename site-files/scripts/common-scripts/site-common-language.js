// Language switch shared by every page. The choice is kept in localStorage, so the next page opens in the same language.
function setLang(l){document.body.className=l;document.documentElement.lang=l;try{localStorage.setItem('lang',l)}catch(e){}}
try{const s=localStorage.getItem('lang');if(s==='ko'||s==='en')setLang(s)}catch(e){}
document.addEventListener('click',e=>{const b=e.target.closest('[data-l]');if(b)setLang(b.dataset.l)});
