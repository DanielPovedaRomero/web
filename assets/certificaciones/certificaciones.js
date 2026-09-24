/********************************************
   Certificaciones: filtros, búsqueda, visor,
   inclinación 3D y contadores
********************************************/
(function () {
    'use strict';

    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tarjetas = Array.from(document.querySelectorAll('.cert'));
    const vacio = document.querySelector('.vacio');
    const buscador = document.querySelector('.buscador input');
    let filtro = 'todos';

    /* Filtros por plataforma + búsqueda por texto */
    const normalizar = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

    const aplicarFiltros = () => {
        const q = normalizar(buscador.value.trim());
        let visibles = 0;
        tarjetas.forEach((t) => {
            const ok = (filtro === 'todos' || t.dataset.plataforma === filtro)
                && (!q || normalizar(t.textContent).includes(q));
            t.hidden = !ok;
            if (ok) {
                t.style.setProperty('--i', visibles);
                t.classList.remove('entra', 'listo');
                void t.offsetWidth; // reinicia la animación de entrada
                t.classList.add('entra');
                visibles++;
            }
        });
        vacio.hidden = visibles > 0;
    };

    document.querySelectorAll('.filtro').forEach((boton) => {
        boton.addEventListener('click', () => {
            document.querySelectorAll('.filtro').forEach((b) => {
                b.classList.toggle('activo', b === boton);
                b.setAttribute('aria-pressed', b === boton);
            });
            filtro = boton.dataset.filtro;
            aplicarFiltros();
        });
    });
    buscador.addEventListener('input', aplicarFiltros);

    // Al terminar la entrada se quita su animación para que no se repita al salir del hover
    tarjetas.forEach((t) => t.addEventListener('animationend', (e) => {
        if (e.animationName === 'entrar') t.classList.add('listo');
    }));

    /* Entrada escalonada al hacer scroll */
    if ('IntersectionObserver' in window && !reducirMovimiento) {
        const io = new IntersectionObserver((entradas) => {
            entradas.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('entra');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
        tarjetas.forEach((t) => io.observe(t));
    } else {
        tarjetas.forEach((t) => t.classList.add('entra'));
    }

    /* Inclinación 3D y foco de luz (solo con mouse) */
    if (!reducirMovimiento && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        tarjetas.forEach((card) => {
            card.addEventListener('pointermove', (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                card.classList.add('inclinando');
                card.style.setProperty('--mx', `${px * 100}%`);
                card.style.setProperty('--my', `${py * 100}%`);
                card.style.setProperty('--ry', `${(px - 0.5) * 8}deg`);
                card.style.setProperty('--rx', `${(0.5 - py) * 6}deg`);
            });
            card.addEventListener('pointerleave', () => {
                card.classList.remove('inclinando');
                card.style.setProperty('--rx', '0deg');
                card.style.setProperty('--ry', '0deg');
            });
        });
    }

    /* Contadores animados */
    const contar = (el) => {
        const fin = Number(el.dataset.contar);
        if (reducirMovimiento) return;
        const inicio = performance.now();
        const paso = (ahora) => {
            const p = Math.min((ahora - inicio) / 900, 1);
            el.textContent = Math.round(fin * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(paso);
        };
        requestAnimationFrame(paso);
    };
    document.querySelectorAll('[data-contar]').forEach(contar);

    /* Visor de certificados */
    const visor = document.querySelector('.visor');
    const visorImg = visor.querySelector('img');
    const visorTitulo = visor.querySelector('.visor-titulo');
    let actual = 0;

    const visiblesAhora = () => tarjetas.filter((t) => !t.hidden);

    const mostrar = (tarjeta) => {
        const lista = visiblesAhora();
        actual = lista.indexOf(tarjeta);
        const titulo = tarjeta.querySelector('h3').innerText.trim();
        visorImg.src = tarjeta.querySelector('.cert-preview').dataset.src;
        visorImg.alt = titulo;
        visorTitulo.textContent = titulo;
        visor.style.setProperty('--marca', tarjeta.style.getPropertyValue('--marca'));
        visorImg.classList.remove('cambia');
        void visorImg.offsetWidth;
        visorImg.classList.add('cambia');
    };

    const mover = (delta) => {
        const lista = visiblesAhora();
        if (!lista.length) return;
        mostrar(lista[(actual + delta + lista.length) % lista.length]);
    };

    tarjetas.forEach((t) => {
        t.querySelector('.cert-preview').addEventListener('click', () => {
            mostrar(t);
            visor.showModal();
            document.body.classList.add('visor-abierto');
        });
    });

    const cerrar = () => visor.close();
    visor.addEventListener('close', () => document.body.classList.remove('visor-abierto'));
    visor.querySelector('.visor-cerrar').addEventListener('click', cerrar);
    visor.querySelector('.prev').addEventListener('click', () => mover(-1));
    visor.querySelector('.next').addEventListener('click', () => mover(1));
    visor.addEventListener('click', (e) => { if (e.target === visor) cerrar(); });
    visor.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') mover(-1);
        if (e.key === 'ArrowRight') mover(1);
    });
})();
