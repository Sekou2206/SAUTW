const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
const progress=q('#progress');addEventListener('scroll',()=>{if(progress){const m=document.documentElement.scrollHeight-innerHeight;progress.style.width=(m?scrollY/m*100:0)+'%'}});
const io=new IntersectionObserver(entries=>entries.forEach(({target:v,isIntersecting})=>{if(isIntersecting)v.play().catch(()=>{});else v.pause()}),{threshold:.18});qa('video').forEach(v=>io.observe(v));
const main=q('#mainFilm'),sound=q('#sound');if(main&&sound)sound.addEventListener('click',()=>{main.muted=!main.muted;sound.textContent=main.muted?'SON OFF':'SON ON'});
const menu=q('.menu'),nav=q('#nav');if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));qa('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
