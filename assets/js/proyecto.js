/********************************************
   Páginas de detalle de proyectos:
   fondo, ruta tipo terminal, progreso de lectura,
   aparición al hacer scroll, índice lateral y visor de imágenes
********************************************/
(function () {
    'use strict';

    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const body = document.body;
    const content = document.querySelector('.project-content');
    if (!content) return;

    /* Fondo y barra de progreso */
    const fondo = document.createElement('div');
    fondo.className = 'p-fondo';
    fondo.setAttribute('aria-hidden', 'true');
    fondo.innerHTML = '<span></span><span></span><span></span>';
    const progreso = document.createElement('div');
    progreso.className = 'p-progreso';
    progreso.setAttribute('aria-hidden', 'true');
    body.prepend(fondo, progreso);

    const actualizarProgreso = () => {
        const max = document.documentElement.scrollHeight - innerHeight;
        progreso.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    };
    addEventListener('scroll', actualizarProgreso, { passive: true });
    actualizarProgreso();

    /* Ruta tipo terminal: ~/projects/azure/p4 */
    const partes = location.pathname.split('/').filter(Boolean);
    const familia = partes[partes.length - 3] || 'project';
    const pagina = (partes[partes.length - 2] || '').replace(/[<>&"]/g, '');
    const ruta = document.createElement('p');
    ruta.className = 'p-ruta';
    ruta.setAttribute('aria-hidden', 'true');
    ruta.innerHTML = `<i class="fa-solid fa-code-branch"></i><span class="gris">~/projects/</span>${familia.replace(/[<>&"]/g, '')}<span class="gris">/</span><span class="marca">${pagina}</span>`;
    const titulo = document.querySelector('.project-title-section');
    if (titulo) titulo.prepend(ruta);

    /* Aparición al hacer scroll */
    const objetivos = document.querySelectorAll(
        '.project-content > h2, .project-content > p, .project-links, .api-section, .challenge-item, .screenshot, .api-image'
    );
    if (!reducirMovimiento && 'IntersectionObserver' in window) {
        document.documentElement.classList.add('js-revelar');
        // Retraso escalonado entre hermanos de una misma cuadrícula
        document.querySelectorAll('.challenges-list, .gallery').forEach((grupo) => {
            Array.from(grupo.children).forEach((el, i) => el.style.setProperty('--d', i % 4));
        });
        objetivos.forEach((el) => el.classList.add('revelar'));

        const io = new IntersectionObserver((entradas) => {
            entradas.forEach((e) => {
                if (!e.isIntersecting) return;
                const el = e.target;
                el.classList.add('visible');
                el.addEventListener('transitionend', () => el.classList.add('listo'), { once: true });
                io.unobserve(el);
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        objetivos.forEach((el) => io.observe(el));
    }

    /* Índice lateral con la sección activa resaltada */
    const secciones = Array.from(document.querySelectorAll('.api-section, .project-challenges, .project-links'))
        .filter((s) => s.querySelector('h2'));
    const galeriaTitulo = document.querySelector('.gallery')?.previousElementSibling;
    if (galeriaTitulo && galeriaTitulo.tagName === 'H2') secciones.push(galeriaTitulo);

    if (secciones.length > 2) {
        const indice = document.createElement('nav');
        indice.className = 'p-indice';
        indice.setAttribute('aria-label', 'On this page');
        indice.dataset.esAriaLabel = 'En esta página';
        indice.innerHTML = '<p><span lang="en">On this page</span><span lang="es">En esta página</span></p>';

        const enlaces = secciones.map((s, i) => {
            s.id ||= `seccion-${i + 1}`;
            const h2 = s.tagName === 'H2' ? s : s.querySelector('h2');
            const a = document.createElement('a');
            a.href = `#${s.id}`;
            // Copia los textos en ambos idiomas, sin emojis
            a.innerHTML = h2.innerHTML.replace(/^[^<]*(?=<)/, '');
            indice.append(a);
            return a;
        });
        body.append(indice);

        if ('IntersectionObserver' in window) {
            const spy = new IntersectionObserver((entradas) => {
                entradas.forEach((e) => {
                    if (!e.isIntersecting) return;
                    const i = secciones.indexOf(e.target);
                    enlaces.forEach((a, j) => a.classList.toggle('activo', j === i));
                });
            }, { rootMargin: '-45% 0px -50% 0px' });
            secciones.forEach((s) => spy.observe(s));
        }
    }

    /* Visor de imágenes */
    const imagenes = Array.from(document.querySelectorAll('.api-image img, .screenshot img'));
    if (!imagenes.length) return;

    const visor = document.createElement('dialog');
    visor.className = 'p-visor';
    visor.setAttribute('aria-label', 'Image viewer');
    visor.innerHTML = `
        <div class="p-visor-barra">
            <span class="p-visor-puntos" aria-hidden="true"><span></span><span></span><span></span></span>
            <span class="p-visor-titulo"></span>
            <span class="p-visor-contador"></span>
            <button type="button" class="p-visor-cerrar" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <figure><img src="" alt=""></figure>
        <button type="button" class="p-visor-nav prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>
        <button type="button" class="p-visor-nav next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>`;
    body.append(visor);

    const visorImg = visor.querySelector('figure img');
    const visorTitulo = visor.querySelector('.p-visor-titulo');
    const visorContador = visor.querySelector('.p-visor-contador');
    let actual = 0;

    const mostrar = (i) => {
        actual = (i + imagenes.length) % imagenes.length;
        const img = imagenes[actual];
        visorImg.src = img.currentSrc || img.src;
        visorImg.alt = img.alt;
        visorTitulo.textContent = img.alt;
        visorContador.textContent = `${actual + 1} / ${imagenes.length}`;
        visorImg.classList.remove('cambia');
        void visorImg.offsetWidth;
        visorImg.classList.add('cambia');
    };

    imagenes.forEach((img, i) => {
        img.loading = 'lazy';
        img.decoding = 'async';
        img.tabIndex = 0;
        img.setAttribute('role', 'button');
        const abrir = () => {
            mostrar(i);
            visor.showModal();
            body.classList.add('visor-abierto');
        };
        img.addEventListener('click', abrir);
        img.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); }
        });
    });

    visor.addEventListener('close', () => body.classList.remove('visor-abierto'));
    visor.querySelector('.p-visor-cerrar').addEventListener('click', () => visor.close());
    visor.querySelector('.prev').addEventListener('click', () => mostrar(actual - 1));
    visor.querySelector('.next').addEventListener('click', () => mostrar(actual + 1));
    visor.addEventListener('click', (e) => { if (e.target === visor) visor.close(); });
    visor.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') mostrar(actual - 1);
        if (e.key === 'ArrowRight') mostrar(actual + 1);
    });
})();
