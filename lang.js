(function(){const K='ys_lang',D='en';const g=()=>localStorage.getItem(K)||D;
function a(l){document.documentElement.setAttribute('lang',l);
document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=(l==='es')?(el.getAttribute('data-es')||''):(el.getAttribute('data-en')||'');});
const en=document.getElementById('btn-en'),es=document.getElementById('btn-es');if(en&&es){en.classList.toggle('active',l==='en');es.classList.toggle('active',l==='es');}}
function s(l){localStorage.setItem(K,l);a(l);}document.addEventListener('DOMContentLoaded',()=>{a(g());
const en=document.getElementById('btn-en'),es=document.getElementById('btn-es');if(en)en.addEventListener('click',()=>s('en'));if(es)es.addEventListener('click',()=>s('es'));});})();