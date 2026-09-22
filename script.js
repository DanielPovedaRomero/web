'use strict';

/* Menú móvil */
function initMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    if (!hamburger || !menu) return;

    const setOpen = (open) => {
        menu.classList.toggle('active', open);
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        hamburger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };

    hamburger.addEventListener('click', () => setOpen(!menu.classList.contains('active')));

    // Cerrar al elegir una sección, con Escape o al hacer clic fuera
    menu.addEventListener('click', (e) => {
        if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav')) setOpen(false);
    });
}

/* Carrusel de certificaciones: se recalcula según el ancho real de cada slide */
function initCarrusel() {
    const carrusel = document.querySelector('.carrusel');
    if (!carrusel) return;

    const viewport = carrusel.querySelector('.carrusel-viewport');
    const track = carrusel.querySelector('.carrusel-track');
    const slides = track.children;
    const prev = carrusel.querySelector('.carrusel-btn.prev');
    const next = carrusel.querySelector('.carrusel-btn.next');
    let index = 0;

    const step = () => {
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        return slides[0].getBoundingClientRect().width + gap;
    };
    const visibles = () => Math.max(1, Math.round((viewport.clientWidth + 1) / step()));
    const maxIndex = () => Math.max(0, slides.length - visibles());

    // Indicadores de posición: uno por cada posición posible
    const puntos = document.createElement('div');
    puntos.className = 'carrusel-puntos';
    carrusel.after(puntos);

    const renderPuntos = () => {
        const total = maxIndex() + 1;
        if (puntos.children.length !== total) {
            puntos.replaceChildren(...Array.from({ length: total }, (_, i) => {
                const punto = document.createElement('button');
                punto.type = 'button';
                punto.className = 'carrusel-punto';
                punto.setAttribute('aria-label', `Ir a la certificación ${i + 1}`);
                punto.addEventListener('click', () => { index = i; update(); });
                return punto;
            }));
        }
        Array.from(puntos.children).forEach((p, i) => p.classList.toggle('active', i === index));
    };

    const update = () => {
        index = Math.min(Math.max(index, 0), maxIndex());
        track.style.transform = `translateX(${-step() * index}px)`;
        prev.disabled = index === 0;
        next.disabled = index === maxIndex();
        renderPuntos();
    };

    prev.addEventListener('click', () => { index--; update(); });
    next.addEventListener('click', () => { index++; update(); });
    window.addEventListener('resize', update);

    // Deslizar con el dedo en móviles
    let inicioX = null;
    viewport.addEventListener('touchstart', (e) => { inicioX = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener('touchend', (e) => {
        if (inicioX === null) return;
        const delta = e.changedTouches[0].clientX - inicioX;
        inicioX = null;
        if (Math.abs(delta) > 40) {
            index += delta < 0 ? 1 : -1;
            update();
        }
    });

    update();
}

/* Filtro de proyectos */
function initFiltros() {
    const botones = document.querySelectorAll('.filtro-btn');
    const proyectos = document.querySelectorAll('.proyecto-card');

    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            const filtro = boton.dataset.filtro;

            botones.forEach((btn) => {
                const activo = btn === boton;
                btn.classList.toggle('active', activo);
                btn.setAttribute('aria-pressed', String(activo));
            });

            proyectos.forEach((proyecto) => {
                proyecto.hidden = filtro !== 'todos' && proyecto.dataset.categoria !== filtro;
            });
        });
    });
}

/* Copiar correo al portapapeles; si no se puede, el enlace mailto sigue funcionando */
function initCopiarCorreo() {
    const link = document.querySelector('.copy-email');
    const alerta = document.getElementById('copy-alert');
    if (!link || !alerta || !navigator.clipboard) return;

    let timer;
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(link.dataset.email);
            alerta.classList.add('show');
            clearTimeout(timer);
            timer = setTimeout(() => alerta.classList.remove('show'), 3000);
        } catch (err) {
            window.location.href = link.href;
        }
    });
}

document.getElementById('year').textContent = new Date().getFullYear();
initMenu();
initCarrusel();
initFiltros();
initCopiarCorreo();
