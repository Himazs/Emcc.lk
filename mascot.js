/* EMCC mascot: gently glides across the screen as the page is scrolled (all screen sizes). */
(()=>{const m=document.querySelector('.aura-mascot-float');if(!m)return;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
let t=false;const run=()=>{t=false;const max=document.documentElement.scrollHeight-innerHeight;const p=max>0?Math.min(1,scrollY/max):0;
const sway=Math.min(innerWidth*(innerWidth<700?.12:.34),260);const x=-(.5-.5*Math.cos(p*Math.PI*4))*sway;const y=-Math.sin(p*Math.PI*6)*18;
m.style.translate=`${x.toFixed(1)}px ${y.toFixed(1)}px`};
const go=()=>{if(!t){t=true;requestAnimationFrame(run)}};
addEventListener('scroll',go,{passive:true});addEventListener('resize',go);run()})();
