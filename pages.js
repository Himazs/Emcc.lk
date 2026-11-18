
(() => {
 const toggle=document.querySelector('.menu-toggle'); const nav=document.querySelector('.nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}));}
 document.querySelectorAll('.current-year').forEach(el=>el.textContent=new Date().getFullYear());
 const path=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===path){a.classList.add('active');a.setAttribute('aria-current','page')}});
 const gallery=document.querySelector('#page-gallery');if(gallery){const buttons=[...gallery.querySelectorAll('.page-gallery-item')];document.querySelectorAll('.gallery-filter button').forEach(filter=>filter.addEventListener('click',()=>{document.querySelectorAll('.gallery-filter button').forEach(b=>b.classList.remove('active'));filter.classList.add('active');buttons.forEach(b=>b.hidden=filter.dataset.filter!=='all'&&b.dataset.kind!==filter.dataset.filter)}));const lb=document.querySelector('#page-lightbox'),img=lb.querySelector('img'),caption=lb.querySelector('p');buttons.forEach(b=>b.addEventListener('click',()=>{img.src=b.querySelector('img').src;caption.textContent=b.dataset.caption;lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));const close=()=>{lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow=''};lb.querySelector('button').addEventListener('click',close);lb.addEventListener('click',e=>{if(e.target===lb)close()});addEventListener('keydown',e=>{if(e.key==='Escape')close()});}
 const days=document.querySelector('#days');if(days){const target=new Date('2027-01-14T00:00:00+05:30').getTime();const tick=()=>{let ms=Math.max(0,target-Date.now()),d=Math.floor(ms/86400000);ms%=86400000;const h=Math.floor(ms/3600000);ms%=3600000;const m=Math.floor(ms/60000),s=Math.floor(ms%60000/1000);days.textContent=d;document.querySelector('#hours').textContent=String(h).padStart(2,'0');document.querySelector('#minutes').textContent=String(m).padStart(2,'0');document.querySelector('#seconds').textContent=String(s).padStart(2,'0');if(Date.now()>=target)document.querySelector('#aura-countdown-title').textContent='AURA 2027 is here!'};tick();setInterval(tick,1000)}
})();


// Add the crest-led full-screen menu identity on every page.
(()=>{
 const nav=document.querySelector('.nav');
 const toggle=document.querySelector('.menu-toggle');
 if(!nav||!toggle||nav.querySelector('.menu-brand')) return;
 const brand=document.createElement('a');
 brand.className='menu-brand';brand.href='index.html';brand.setAttribute('aria-label','EMCC home');
 brand.innerHTML='<img src="assets/school-crest-white.webp" alt="Ethungahakotuwa Muslim Central College crest"><strong>EMCC</strong><small>ETHUNGAHAKOTUWA MUSLIM<br>CENTRAL COLLEGE · EST. 1949</small>';
 nav.prepend(brand);
 const sync=()=>{const opened=nav.classList.contains('open');document.body.classList.toggle('nav-open',opened);toggle.setAttribute('aria-expanded',String(opened));toggle.setAttribute('aria-label',opened?'Close navigation':'Open navigation')};
 new MutationObserver(sync).observe(nav,{attributes:true,attributeFilter:['class']});
 nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');sync()}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');sync()}});
 sync();
})();
