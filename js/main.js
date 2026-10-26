// Ruth Seguel Hair Studio · «Brillo»
(() => {
  const L = () => (document.documentElement.lang === 'en' ? 'en' : 'es');
  const tx = (o) => (typeof o === 'string' ? o : o[L()] || o.es);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const BOOKSY = 'https://booksy.com/es-es/60523_ruth-seguel-hair-studio_peluqueria_50365_canyelles';

  // ---------- carta de Booksy (precios reales, octubre 2026) ----------
  const S = (es, en, price, min, from, d) => ({ n: { es, en }, price, min, from: !!from, d });
  const MENU = [
    { k: { es: 'Color', en: 'Colour' }, items: [
      S('Color experience', 'Colour experience', 69, 90, 0, { es: 'Raíz con color sin amoníaco Kevin Murphy y tratamiento de color en medios y puntas. Media melena 69 €, largo 80 €.', en: 'Ammonia-free Kevin Murphy root colour plus a colour treatment on lengths and ends. Mid-length €69, long €80.' }),
      S('Baño de luz Color Gloss', 'Color Gloss shine bath', 58, 60, 0, { es: 'Coloración ácida que respeta la cutícula. Brillo uniforme que dura más de 15 lavados.', en: 'Acid colour that respects the cuticle. Even shine that lasts over 15 washes.' }),
      S('Color express (solo raíz)', 'Express colour (roots only)', 49, 60),
      S('Decoloración global', 'Full bleach', 180, 120)
    ] },
    { k: { es: 'Mechas', en: 'Highlights' }, items: [
      S('Babylights + balayage + color tratamiento + Olaplex', 'Babylights + balayage + treatment colour + Olaplex', 156, 150, 0, { es: 'Reflejos naturales que aclaran de uno a tres tonos.', en: 'Natural highlights, one to three shades lighter.' }),
      S('Balayage + color tratamiento + Olaplex (difuminado)', 'Balayage + treatment colour + Olaplex (blended)', 136, 120, 1, { es: 'Incluye lavado y secado.', en: 'Wash and blow-dry included.' }),
      S('Balayage + cobertura de raíz + matiz + Olaplex', 'Balayage + root cover + toner + Olaplex', 156, 150, 1),
      S('Color + puntos de luz + matiz', 'Colour + face-framing lights + toner', 98, 100, 0, { es: 'Incluye lavado y secado.', en: 'Wash and blow-dry included.' }),
      S('Mechas clásicas', 'Classic highlights', 116, 90)
    ] },
    { k: { es: 'Tratamientos', en: 'Treatments' }, items: [
      S('Infusión Kevin Murphy', 'Kevin Murphy infusion', 35, 40, 0, { es: 'Hidratación y nutrición intensas con aceite de moringa. No incluye secado.', en: 'Deep hydration and nourishment with moringa oil. Blow-dry not included.' }),
      S('Tratamiento Bae Berry', 'Bae Berry treatment', 60, 40, 1, { es: 'Multiplica los enlaces de la fibra. Para pelo teñido, decolorado, seco o con alisados. No incluye secado.', en: 'Rebuilds the hair’s bonds. For coloured, bleached, dry or straightened hair. Blow-dry not included.' }),
      S('Tratamiento EPRES', 'EPRES treatment', 20, 15),
      S('Detox para el cuero cabelludo', 'Scalp detox', 30, 40, 0, { es: 'Limpia impurezas, oxigena y ayuda a que el resto de productos penetren mejor.', en: 'Removes build-up, refreshes the scalp and helps other products work better.' }),
      S('DROP hidratación / reparación / platinum', 'DROP hydration / repair / platinum', 25, 30),
      S('Nutrición express', 'Express nourishment', 25, 30),
      S('Softy Mood (GOA Organics), sin frizz', 'Softy Mood (GOA Organics), frizz-free', 140, 120, 1, { es: 'Elimina el encrespamiento sin alisar ni cambiar tu forma. Media melena 140 €, larga 170 €, extra larga 200 €.', en: 'Removes frizz without straightening or changing your texture. Mid €140, long €170, extra long €200.' }),
      S('Sublime 10.31 (GOA Organics)', 'Sublime 10.31 (GOA Organics)', 80, 45, 1, { es: 'Reconstruye la fibra por dentro y sella la cutícula. Sin siliconas. Media 80 €, larga 120 €, extra larga 150 €.', en: 'Rebuilds the fibre and seals the cuticle. Silicone-free. Mid €80, long €120, extra long €150.' }),
      S('Diagnóstico Keratin Infusión', 'Keratin Infusion diagnosis', 10, 15)
    ] },
    { k: { es: 'Corte y peinado', en: 'Cut & styling' }, items: [
      S('Corte + peinado esencial', 'Cut + essential styling', 37, 30),
      S('Corte + secado medio', 'Cut + blow-dry, medium', 40, 35),
      S('Corte + secado largo', 'Cut + blow-dry, long', 45, 50),
      S('Corte mujer (sin secado)', 'Women’s cut (no blow-dry)', 25, 30),
      S('Peinado medio', 'Styling, medium', 30, 35, 1),
      S('Peinado largo', 'Styling, long', 40, 40, 1),
      S('Peinado con styler', 'Styling with styler', 45, 35),
      S('Corte hombre', 'Men’s cut', 18, 30),
      S('Corte hombre + barba', 'Men’s cut + beard', 24, 40),
      S('Corte niño', 'Kids’ cut', 16, 20),
      S('Retoque de flequillo', 'Fringe trim', 10, 10)
    ] },
    { k: { es: 'Novias e invitadas', en: 'Brides & guests' }, items: [
      S('Novia en el estudio', 'Bride, in the studio', 180, 90, 0, { es: 'Asesoramiento, prueba de peinado, tratamiento de nutrición o brillo y peinado el día de la boda.', en: 'Consultation, trial, nourishing or shine treatment and styling on the day.' }),
      S('Novia a domicilio', 'Bride, at your place', 216, 90),
      S('Invitada: fashion fix', 'Guest: fashion fix', 35, 20),
      S('Invitada: peinado con ondas', 'Guest: waves', 45, 35, 1),
      S('Invitada: semirrecogido', 'Guest: half-up', 65, 45, 1),
      S('Invitada: recogido', 'Guest: updo', 75, 45, 1)
    ] },
    { k: { es: 'Manicura y pedicura', en: 'Nails' }, items: [
      S('Manicura rusa', 'Russian manicure', 20, 30),
      S('Manicura normal', 'Classic manicure', 25, 60),
      S('Manicura semipermanente', 'Gel polish manicure', 30, 60, 0, { es: 'Dura unas 3 semanas.', en: 'Lasts about 3 weeks.' }),
      S('Rusa semipermanente + refuerzo de gel', 'Russian gel polish + gel overlay', 35, 90),
      S('Pedicura normal', 'Classic pedicure', 30, 60),
      S('Pedicura básica + esmaltado', 'Basic pedicure + polish', 35, 60),
      S('Pedicura completa + semipermanente', 'Full pedicure + gel polish', 40, 60),
      S('Extensión de gel', 'Gel extensions', 60, 120),
      S('Retirar semipermanente', 'Gel polish removal', 6, 15),
      S('Retirar gel de otro centro', 'Gel removal (other salon)', 10, 30),
      S('Francesa (extra)', 'French tips (extra)', 5, 5)
    ] }
  ];
  const find = (es) => { for (const c of MENU) for (const i of c.items) if (i.n.es === es) return i; };
  const eur = (n) => (L() === 'en' ? '€' + n : n + ' €');
  const dur = (m) => { const h = Math.floor(m / 60), r = m % 60; return (h ? h + ' h' : '') + (h && r ? ' ' : '') + (r ? r + ' min' : ''); };

  // ---------- pestañas de precios ----------
  const tabs = document.getElementById('tabs'), menu = document.getElementById('menu');
  let cur = 0;
  function drawTabs() {
    tabs.innerHTML = MENU.map((c, i) => `<button type="button" class="tab" role="tab" aria-selected="${i === cur}" data-i="${i}">${tx(c.k)}</button>`).join('');
  }
  function drawMenu(anim) {
    const c = MENU[cur];
    menu.innerHTML = c.items.map((i) => `<div class="mi"><b>${tx(i.n)}</b><span class="pr">${i.from ? (L() === 'en' ? 'from ' : 'desde ') : ''}${eur(i.price)}</span><small>${dur(i.min)}${i.d ? ' · ' + tx(i.d) : ''}</small></div>`).join('');
    if (anim && !reduce) gsap.from(menu.children, { y: 18, opacity: 0, duration: .6, stagger: .035, ease: 'power3.out', clearProps: 'all' });
  }
  tabs.addEventListener('click', (e) => { const b = e.target.closest('.tab'); if (!b) return; cur = +b.dataset.i; drawTabs(); drawMenu(true); });
  tabs.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    cur = (cur + (e.key === 'ArrowRight' ? 1 : MENU.length - 1)) % MENU.length; drawTabs(); drawMenu(true); tabs.children[cur].focus();
  });

  // ---------- plan de color ----------
  const GOAL = {
    raiz: { s: ['Color experience'], sw: 'linear-gradient(180deg,#2a1d17 0%,#4a3326 30%,#5d4130 100%)', alt: 'Color express (solo raíz)' },
    luz: { s: ['Color + puntos de luz + matiz'], sw: 'linear-gradient(180deg,#3a2a20 0%,#6d4c36 45%,#b48a62 100%)' },
    balayage: { s: ['Balayage + color tratamiento + Olaplex (difuminado)'], sw: 'linear-gradient(180deg,#3b2a20 0%,#7a5a40 35%,#c9a17a 70%,#e6cfae 100%)' },
    brillo: { s: ['Baño de luz Color Gloss'], sw: 'linear-gradient(180deg,#30201a 0%,#5b3a2c 50%,#7c5240 100%)' },
    rubio: { s: ['Decoloración global'], sw: 'linear-gradient(180deg,#6b5640 0%,#cbb592 40%,#efe3cc 75%,#f8f1e4 100%)' }
  };
  const CARE = { sano: null, seco: 'Infusión Kevin Murphy', roto: 'Tratamiento Bae Berry' };
  const NOTE = {
    sano: { es: 'Tu pelo está en buen momento: vamos directas al color.', en: 'Your hair is in good shape, so we go straight to colour.' },
    seco: { es: 'Sumamos una infusión hidratante para que el color brille más y dure.', en: 'We add a hydrating infusion so the colour shines more and lasts.' },
    roto: { es: 'Primero reparamos los enlaces. Si está muy dañado, Ruth puede proponerte tratar antes y colorear unas semanas después.', en: 'First we rebuild the bonds. If it is very damaged, Ruth may suggest treating it first and colouring a few weeks later.' }
  };
  const form = document.getElementById('pq'), list = document.getElementById('planList');
  const sw = document.querySelector('.swatch');
  function plan(anim) {
    const f = new FormData(form), g = f.get('goal'), h = f.get('hair'), len = f.get('len');
    const names = [];
    if (CARE[h]) names.push(CARE[h]);
    names.push(...GOAL[g].s);
    if (g === 'rubio' && h !== 'roto') names.unshift('Tratamiento Bae Berry');
    if (g === 'rubio') names.push('DROP hidratación / reparación / platinum');
    const items = [...new Set(names)].map(find);
    let total = 0, mins = 0, from = false;
    list.innerHTML = items.map((i) => {
      let p = i.price;
      if (i.n.es === 'Color experience' && len === 'largo') p = 80;
      if (len === 'largo' && i.from) from = true;
      if (i.from) from = true;
      total += p; mins += i.min;
      return `<li><b>${tx(i.n)}</b><span class="pr">${eur(p)}</span>${i.d ? `<small>${tx(i.d)}</small>` : ''}</li>`;
    }).join('');
    if (len === 'largo') from = true;
    document.getElementById('planTime').textContent = dur(mins);
    document.getElementById('planPrice').textContent = eur(total);
    document.getElementById('planNote').textContent = tx(NOTE[h]) + (g === 'raiz' ? (L() === 'en' ? ' Only touching up roots? Express colour is €49.' : ' ¿Solo retocar raíz? El color express son 49 €.') : '');
    sw.style.setProperty('--sw', GOAL[g].sw);
    const msg = (L() === 'en' ? 'Hi Ruth! I made my colour plan on your website: ' : '¡Hola Ruth! He hecho mi plan de color en la web: ') + items.map((i) => tx(i.n)).join(' + ') + '. ' + (L() === 'en' ? 'Could you tell me availability?' : '¿Qué disponibilidad tienes?');
    document.getElementById('planWa').href = 'https://wa.me/34666523015?text=' + encodeURIComponent(msg);
    if (anim && !reduce) gsap.from(list.children, { x: 24, opacity: 0, duration: .55, stagger: .07, ease: 'power3.out', clearProps: 'all' });
  }
  form.addEventListener('change', () => plan(true));

  // ---------- abierto ahora ----------
  function now() {
    const el = document.getElementById('now');
    const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Madrid' }));
    const day = d.getDay(), m = d.getHours() * 60 + d.getMinutes();
    const close = day >= 2 && day <= 5 ? 19 * 60 : day === 6 ? 18 * 60 : 0;
    const open = close && m >= 540 && m < close;
    el.classList.toggle('open', !!open);
    el.textContent = open ? (L() === 'en' ? 'Open now · until ' : 'Abierto ahora · hasta las ') + close / 60 + ':00' : (L() === 'en' ? 'Closed now · we open Tuesday to Saturday at 9:00' : 'Ahora cerrado · abrimos de martes a sábado a las 9:00');
  }

  // ---------- texto en palabras para animarlo ----------
  function split(root = document) {
    root.querySelectorAll('.split').forEach((el) => {
      if (el.dataset.done === el.innerHTML) return;
      el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => `<span class="w"><span>${w}</span></span>`).join(' ');
      el.dataset.done = el.innerHTML;
    });
  }

  // ---------- brillo con el cursor ----------
  function gloss() {
    document.querySelectorAll('.gal .gloss').forEach((g) => {
      if (fine) {
        g.addEventListener('pointermove', (e) => {
          const r = g.getBoundingClientRect();
          g.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
          g.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
        });
        g.addEventListener('pointerenter', () => g.classList.add('lit'));
        g.addEventListener('pointerleave', () => g.classList.remove('lit'));
      } else {
        g.addEventListener('click', () => { g.classList.remove('sweep'); void g.offsetWidth; g.classList.add('sweep'); });
      }
    });
  }

  // ---------- cabecera ----------
  function header() {
    const top = document.querySelector('.top');
    let last = 0;
    addEventListener('scroll', () => {
      const y = scrollY;
      top.classList.toggle('solid', y > 40);
      top.classList.toggle('hide', y > 500 && y > last + 4);
      if (y < last - 4) top.classList.remove('hide');
      last = y;
    }, { passive: true });
  }

  // ---------- animaciones ----------
  function motion() {
    gsap.registerPlugin(ScrollTrigger);
    const words = (el) => el.querySelectorAll('.w > span');
    document.querySelectorAll('h2.split').forEach((h) => {
      gsap.from(words(h), { yPercent: 110, rotate: 4, duration: 1.1, ease: 'expo.out', stagger: .05, scrollTrigger: { trigger: h, start: 'top 85%' } });
    });
    gsap.utils.toArray('.sec-head p, .metodo-q, .nv-txt p, .mn-txt p, .vs-dl, .card').forEach((el) => {
      gsap.from(el, { y: 30, opacity: 0, filter: 'blur(6px)', duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
    });
    document.querySelectorAll('.step').forEach((s, i) => {
      gsap.from(s.children, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: .08, delay: i * .08, scrollTrigger: { trigger: '.steps', start: 'top 80%' } });
      gsap.to(s, { '--p': 1, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 85%', end: 'bottom 55%', scrub: true } });
    });
    // galería: cada foto entra con un barrido de luz
    gsap.utils.toArray('.g').forEach((g) => {
      gsap.fromTo(g, { clipPath: 'inset(12% 12% 12% 12% round 16px)', opacity: 0 }, { clipPath: 'inset(0% 0% 0% 0% round 16px)', opacity: 1, duration: 1.3, ease: 'expo.out',
        scrollTrigger: { trigger: g, start: 'top 90%', onEnter: () => setTimeout(() => g.classList.add('sweep'), 350) } });
      gsap.to(g.querySelector('img'), { yPercent: -5, ease: 'none', scrollTrigger: { trigger: g, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    gsap.from('.nv-imgs img', { y: 80, opacity: 0, rotate: (i) => [-3, 4, -2][i], duration: 1.4, ease: 'expo.out', stagger: .14, scrollTrigger: { trigger: '.nv-imgs', start: 'top 80%' } });
    gsap.to('.nv-a', { yPercent: -6, ease: 'none', scrollTrigger: { trigger: '.novias', scrub: true } });
    gsap.to('.nv-b', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.novias', scrub: true } });
    gsap.from('.mn-imgs img', { y: 70, opacity: 0, duration: 1.3, ease: 'expo.out', stagger: .15, scrollTrigger: { trigger: '.mn-imgs', start: 'top 82%' } });
    gsap.from('.r', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', stagger: .08, scrollTrigger: { trigger: '.rs', start: 'top 85%' } });
    gsap.to('.hero-img img', { yPercent: 8, scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  }

  function intro() {
    const loader = document.querySelector('.loader');
    const heroWords = document.querySelectorAll('.hero-h .w > span');
    if (reduce) { document.body.classList.add('ready'); return; }
    gsap.set(heroWords, { yPercent: 110 });
    gsap.set('.hero-rate, .hero-p, .hero-cta, .hero-facts', { y: 24, opacity: 0 });
    gsap.set('.hero-img', { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' });
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.fromTo('.loader-name', { backgroundPosition: '100% 0' }, { backgroundPosition: '0% 0', duration: 1.5, ease: 'power2.inOut' })
      .from('.loader-sub', { opacity: 0, y: 10, duration: .6 }, .3)
      .to(loader, { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', duration: 1.1, ease: 'expo.inOut' }, '+=.1')
      .set(loader, { display: 'none' })
      .to('.hero-img', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.4 }, '-=.75')
      .to(heroWords, { yPercent: 0, duration: 1.2, stagger: .06 }, '-=1.1')
      .to('.hero-rate, .hero-p, .hero-cta, .hero-facts', { y: 0, opacity: 1, duration: 1, stagger: .08, clearProps: 'all' }, '-=.9')
      .add(() => document.body.classList.add('ready'));
    loader.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
  }

  function init() {
    split();
    drawTabs(); drawMenu(false); plan(false); now();
    gloss(); header();
    if (typeof gsap === 'undefined') { document.body.classList.add('ready'); return; }
    intro();
    if (!reduce) motion();
    document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
  document.addEventListener('langchange', () => {
    if (!document.body.dataset.inited) return;
    split(); drawTabs(); drawMenu(false); plan(false); now();
    document.querySelectorAll('.split .w > span').forEach((s) => gsap.set(s, { yPercent: 0, rotate: 0 }));
  });
  const go = () => { init(); document.body.dataset.inited = '1'; };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
})();
