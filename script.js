'use strict';

/********************************************
   Idiomas (inglés por defecto, español opcional)
   El inglés se toma del propio HTML; aquí solo va el español
   y los textos que genera el JavaScript.
********************************************/
const TRADUCCIONES_ES = {
    'nav.label': 'Navegación principal',
    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.certifications': 'Certificaciones',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.copyEmail': 'Copiar correo',

    'hero.intro': `¡Hola Mundo! Soy Daniel
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg" alt="Costa Rica" class="bandera bandera-sm" width="20" height="12">,
        un apasionado desarrollador backend con experiencia en la creación de aplicaciones eficientes y escalables utilizando .NET C#.
        También enfocado en desarrollo de aplicaciones móviles con .NET MAUI y Xamarin.`,
    'hero.cv': 'Descargar CV',
    'hero.projects': 'Ver proyectos',
    'hero.stack': 'Stack tecnológico',
    'hero.photoAlt': 'Foto de Daniel Poveda Romero',

    'exp.title': 'Experiencia',
    'exp.comment': '// 01. experiencia',
    'exp.intro': 'A lo largo de mi trayectoria como desarrollador, he adquirido experiencia en diversas tecnologías y roles. Estas posiciones me han permitido abordar desafíos complejos y proponer soluciones eficaces.',
    'exp.tech': 'Tecnologías',
    'exp.job1.title': 'Programador Medium',
    'exp.job1.date': '2022 — Actualidad',
    'exp.job1.desc': 'Encargado de crear aplicaciones en .NET con arquitecturas escalables, refactorizar código para mejorar calidad y rendimiento, e implementar unit tests. Integré soluciones con Softland ERP y participé en la migración de aplicaciones de Xamarin a .NET MAUI, añadiendo nuevas funcionalidades en proyectos móviles.',
    'exp.job2.title': 'Programador Junior',
    'exp.current': 'Actual',
    'exp.job2.desc': 'Durante este tiempo, me especialicé en desarrollos a la medida, gestión de bases de datos y toma de requerimientos, garantizando entregables alineados a las necesidades de los clientes. Adquirí experiencia con Softland ERP, integrando y personalizando funcionalidades empresariales, además de capacitar a usuarios finales. También inicié mi trayectoria en tecnologías móviles con Xamarin.',

    'cert.title': 'Certificaciones',
    'cert.comment': '// 02. certificaciones',
    'cert.intro': 'A lo largo de mi carrera como desarrollador .NET, he obtenido diversas certificaciones que validan y fortalecen mis conocimientos técnicos, ampliando mi experiencia profesional.',
    'cert.platforms': 'Plataformas',
    'cert.carousel': 'carrusel',
    'cert.featured': 'Certificaciones destacadas',
    'cert.prev': 'Anterior',
    'cert.next': 'Siguiente',
    'cert.c1': 'Certificación Azure Fundamentals',
    'cert.c2': 'Certificación Azure AI Fundamentals',
    'cert.c3': 'Certificado de principios SOLID',
    'cert.c4': 'Certificado de .NET MAUI',
    'cert.c5': 'Certificado de patrones de diseño',
    'cert.more': 'Ver todas las certificaciones',
    'cert.statCerts': 'Certificaciones',
    'cert.statPlatforms': 'Plataformas',
    'cert.statExams': 'Exámenes Microsoft',
    'cert.courses': 'cursos',
    'cert.certs': 'certificaciones',
    'cert.view': 'Ver en tamaño completo',
    'cert.n3': 'Principios SOLID y Clean Code',
    'cert.n4': 'Curso de .NET MAUI',
    'cert.n5': 'Patrones de diseño en C#',

    'proj.title': 'Proyectos',
    'proj.comment': '// 03. proyectos',
    'proj.intro': 'Todo lo que puedas imaginar, lo podrás programar',
    'proj.filter': 'Filtrar proyectos',
    'proj.all': 'Todos',
    'proj.view': 'Ver proyecto',
    'proj.d1': 'App de consola que analiza texto de un PDF: sentimiento, frases clave, entidades y detección de idioma.',
    'proj.d2': 'Detección de rostros y análisis de atributos faciales con el SDK Azure AI Vision Face.',
    'proj.d3': 'Descripciones de imágenes, detección de objetos, OCR y etiquetado con Azure Computer Vision.',
    'proj.d4': 'API REST con autenticación Bearer Token y Dapper, publicada en Azure App Service con Azure SQL.',
    'proj.d5': 'App del clima que consume una API REST, con estilos propios, animaciones Lottie y SkiaSharp.',
    'proj.d6': 'Juego del ahorcado con botones generados dinámicamente, FlexLayout y data binding.',
    'proj.d7': 'Calculadora de índice de masa corporal con indicadores, construida con el patrón MVVM.',
    'proj.d8': 'Landing page responsive con secciones curvas, a partir de un diseño de Frontend Mentor.',
    'proj.d9': 'Landing page responsive con fondos curvos y testimonios, a partir de un diseño de Frontend Mentor.',
    'proj.d10': 'Landing page de banca digital con menú móvil, a partir de un diseño de Frontend Mentor.',

    'footer.kicker': '¿qué sigue?',
    'footer.title': 'Construyamos algo <span class="acento">grande juntos</span>',
    'footer.text': 'Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o solo quieres saludar, mi bandeja de entrada siempre está abierta.',
    'footer.tagline': 'Desarrollador Backend especializado en .NET.',
    'footer.status': 'Disponible para nuevos proyectos',
    'footer.links': 'Navegación',
    'footer.built': 'Hecho con <i class="fa-solid fa-heart" aria-hidden="true"></i> HTML, CSS y JS',
    'footer.top': 'Volver arriba',
    'alert.copied': 'Correo copiado al portapapeles',
    'alert.error': 'No se pudo copiar automáticamente, cópialo aquí:',
    'alert.close': 'Cerrar'
};

// Textos que solo existen en el JavaScript
const TEXTOS_JS = {
    en: {
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        goToCert: (n) => `Go to certification ${n}`,
        switchLang: 'Cambiar a español',
        roles: ['Software Developer', 'Backend Developer', 'Mobile Developer'],
        title: 'Daniel Poveda Romero | .NET Software Developer'
    },
    es: {
        menuOpen: 'Abrir menú',
        menuClose: 'Cerrar menú',
        goToCert: (n) => `Ir a la certificación ${n}`,
        switchLang: 'Switch to English',
        roles: ['Desarrollador de Software', 'Desarrollador Backend', 'Desarrollador Móvil'],
        title: 'Daniel Poveda Romero | Desarrollador de Software .NET'
    }
};

const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let idioma = 'en';
const t = (clave) => TEXTOS_JS[idioma][clave];

function initIdioma() {
    const boton = document.querySelector('.lang-toggle');
    if (!boton) return;

    // Guardar los textos originales en inglés que vienen en el HTML
    const textos = Array.from(document.querySelectorAll('[data-i18n]'), (el) => ({
        el, clave: el.dataset.i18n, en: el.textContent.trim().replace(/\s+/g, ' ')
    }));
    const htmls = Array.from(document.querySelectorAll('[data-i18n-html]'), (el) => ({
        el, clave: el.dataset.i18nHtml, en: el.innerHTML.trim()
    }));
    const atributos = [];
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
        el.dataset.i18nAttr.split(';').forEach((par) => {
            const [attr, clave] = par.split(':');
            atributos.push({ el, attr, clave, en: el.getAttribute(attr) });
        });
    });

    const traducir = ({ clave, en }) => (idioma === 'es' ? TRADUCCIONES_ES[clave] ?? en : en);

    const aplicar = (nuevo) => {
        idioma = nuevo;
        textos.forEach((item) => { item.el.textContent = traducir(item); });
        htmls.forEach((item) => { item.el.innerHTML = traducir(item); });
        atributos.forEach((item) => item.el.setAttribute(item.attr, traducir(item)));

        document.documentElement.lang = nuevo;
        document.title = t('title');
        boton.dataset.activo = nuevo;
        boton.setAttribute('aria-label', t('switchLang'));
        boton.title = t('switchLang');

        try { localStorage.setItem('idioma', nuevo); } catch (e) { /* sin almacenamiento */ }
        document.dispatchEvent(new CustomEvent('cambio-idioma'));
    };

    boton.addEventListener('click', () => aplicar(idioma === 'en' ? 'es' : 'en'));

    let guardado = null;
    try { guardado = localStorage.getItem('idioma'); } catch (e) { /* sin almacenamiento */ }
    if (guardado === 'es') aplicar('es');
    else boton.dataset.activo = 'en';
}

/* Menú móvil a pantalla completa */
function initMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    if (!hamburger || !menu) return;

    // Orden de aparición escalonada de cada opción
    Array.from(menu.children).forEach((li, i) => li.style.setProperty('--i', i));

    const setOpen = (open) => {
        menu.classList.toggle('active', open);
        hamburger.classList.toggle('open', open);
        document.documentElement.classList.toggle('menu-abierto', open);
        hamburger.setAttribute('aria-expanded', String(open));
        hamburger.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
    };

    setOpen(false);
    document.addEventListener('cambio-idioma', () => setOpen(menu.classList.contains('active')));

    hamburger.addEventListener('click', () => setOpen(!menu.classList.contains('active')));

    // Cerrar al elegir una sección, con Escape o al pasar a escritorio
    menu.addEventListener('click', (e) => {
        if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
    });
    window.matchMedia('(min-width: 900px)').addEventListener('change', () => setOpen(false));
}

/* Navbar: cápsula al hacer scroll, se oculta al bajar y píldora que sigue al cursor */
function initNavbar() {
    const header = document.querySelector('.site-header');
    const menu = document.getElementById('menu');
    const indicador = menu && menu.querySelector('.menu-indicador');
    if (!header || !menu || !indicador) return;

    // Estado según el scroll
    let ultimoY = window.scrollY;
    let pendiente = false;
    const actualizar = () => {
        pendiente = false;
        const y = window.scrollY;
        header.classList.toggle('scrolled', y > 20);
        const bajando = y > ultimoY + 4;
        const subiendo = y < ultimoY - 4;
        if (bajando && y > 400 && !menu.classList.contains('active')) header.classList.add('oculto');
        if (subiendo || y <= 400) header.classList.remove('oculto');
        if (bajando || subiendo) ultimoY = y;
    };
    window.addEventListener('scroll', () => {
        if (!pendiente) {
            pendiente = true;
            requestAnimationFrame(actualizar);
        }
    }, { passive: true });
    actualizar();

    // Mostrar la barra si se navega con teclado dentro de ella
    header.addEventListener('focusin', () => header.classList.remove('oculto'));

    // Píldora deslizante: sigue al cursor y vuelve a la sección activa
    const escritorio = window.matchMedia('(min-width: 900px)');
    const moverA = (enlace) => {
        if (!enlace || !escritorio.matches) {
            indicador.classList.remove('visible');
            return;
        }
        indicador.style.width = `${enlace.offsetWidth}px`;
        indicador.style.height = `${enlace.offsetHeight}px`;
        indicador.style.transform = `translate(${enlace.offsetLeft}px, ${enlace.offsetTop}px)`;
        indicador.classList.add('visible');
    };
    const volverAlActivo = () => moverA(menu.querySelector('a.activo'));

    menu.querySelectorAll('a').forEach((enlace) => {
        enlace.addEventListener('mouseenter', () => moverA(enlace));
        enlace.addEventListener('focus', () => moverA(enlace));
    });
    menu.addEventListener('mouseleave', volverAlActivo);
    document.addEventListener('seccion-activa', volverAlActivo);
    document.addEventListener('cambio-idioma', volverAlActivo);
    window.addEventListener('resize', volverAlActivo);
    document.fonts?.ready.then(volverAlActivo);
}

/* Carrusel de certificaciones: autoplay, vuelta infinita, teclado y gestos */
function initCarrusel() {
    const carrusel = document.querySelector('.carrusel');
    if (!carrusel) return;

    const viewport = carrusel.querySelector('.carrusel-viewport');
    const track = carrusel.querySelector('.carrusel-track');
    const slides = track.children;
    const prev = carrusel.querySelector('.carrusel-btn.prev');
    const next = carrusel.querySelector('.carrusel-btn.next');
    const DURACION = 5000;
    let index = 0;

    const step = () => {
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
        return slides[0].getBoundingClientRect().width + gap;
    };
    const visibles = () => Math.max(1, Math.round((track.clientWidth + 1) / step()));
    const maxIndex = () => Math.max(0, slides.length - visibles());

    // Indicadores de posición: uno por cada posición posible
    const puntos = document.createElement('div');
    puntos.className = 'carrusel-puntos';
    carrusel.after(puntos);
    carrusel.style.setProperty('--duracion', `${DURACION}ms`);

    const renderPuntos = () => {
        const total = maxIndex() + 1;
        if (puntos.children.length !== total) {
            puntos.replaceChildren(...Array.from({ length: total }, (_, i) => {
                const punto = document.createElement('button');
                punto.type = 'button';
                punto.className = 'carrusel-punto';
                punto.addEventListener('click', () => irA(i));
                return punto;
            }));
        }
        Array.from(puntos.children).forEach((p, i) => {
            p.classList.toggle('active', i === index);
            p.setAttribute('aria-label', t('goToCert')(i + 1));
        });
    };

    const update = () => {
        index = Math.min(Math.max(index, 0), maxIndex());
        track.style.transform = `translateX(${-step() * index}px)`;
        renderPuntos();
    };

    // Avanzar con vuelta infinita en ambos sentidos
    const mover = (delta) => {
        const total = maxIndex() + 1;
        irA((index + delta + total) % total);
    };

    /* Autoplay: se pausa al pasar el cursor, al enfocar con teclado,
       al tocar, cuando la sección no está en pantalla o la pestaña está oculta */
    let timer = null;
    const motivosPausa = new Set();

    const reiniciarProgreso = () => {
        const activo = puntos.querySelector('.carrusel-punto.active');
        if (!activo) return;
        activo.classList.remove('active');
        void activo.offsetWidth; // reinicia la animación de la barra
        activo.classList.add('active');
    };

    const programar = () => {
        clearTimeout(timer);
        if (reducirMovimiento || motivosPausa.size) return;
        timer = setTimeout(() => mover(1), DURACION);
    };

    const irA = (i) => {
        index = i;
        update();
        reiniciarProgreso();
        programar();
    };

    const pausar = (motivo) => {
        motivosPausa.add(motivo);
        carrusel.classList.add('pausado');
        clearTimeout(timer);
    };

    const reanudar = (motivo) => {
        motivosPausa.delete(motivo);
        if (motivosPausa.size) return;
        carrusel.classList.remove('pausado');
        reiniciarProgreso();
        programar();
    };

    carrusel.addEventListener('mouseenter', () => pausar('hover'));
    carrusel.addEventListener('mouseleave', () => reanudar('hover'));
    carrusel.addEventListener('focusin', () => pausar('foco'));
    carrusel.addEventListener('focusout', (e) => {
        if (!carrusel.contains(e.relatedTarget)) reanudar('foco');
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) pausar('oculta'); else reanudar('oculta');
    });
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) reanudar('fuera'); else pausar('fuera');
        }, { threshold: 0.3 }).observe(carrusel);
    }

    prev.addEventListener('click', () => mover(-1));
    next.addEventListener('click', () => mover(1));
    window.addEventListener('resize', update);
    document.addEventListener('cambio-idioma', renderPuntos);

    // Flechas del teclado cuando el foco está dentro del carrusel
    carrusel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); mover(-1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); mover(1); }
    });

    // Deslizar con el dedo en móviles
    let inicioX = null;
    viewport.addEventListener('touchstart', (e) => {
        inicioX = e.touches[0].clientX;
        pausar('tactil');
    }, { passive: true });
    viewport.addEventListener('touchend', (e) => {
        if (inicioX !== null) {
            const delta = e.changedTouches[0].clientX - inicioX;
            inicioX = null;
            if (Math.abs(delta) > 40) mover(delta < 0 ? 1 : -1);
        }
        reanudar('tactil');
    });

    update();
    programar();
}

/* Contadores que suben desde 0 al aparecer en pantalla */
function initContadores() {
    const numeros = document.querySelectorAll('[data-contar]');
    if (reducirMovimiento || !('IntersectionObserver' in window)) return;

    const animar = (el) => {
        const final = Number(el.dataset.contar);
        const inicio = performance.now();
        const duracion = 1400;
        const frame = (ahora) => {
            const avance = Math.min((ahora - inicio) / duracion, 1);
            const suave = 1 - Math.pow(1 - avance, 3);
            el.textContent = Math.round(final * suave);
            if (avance < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            animar(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.6 });

    numeros.forEach((el) => {
        el.textContent = '0';
        observer.observe(el);
    });
}

/* Línea de tiempo de experiencia: spotlight y progreso con el scroll */
function initTimeline() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    // Orden de aparición de las etiquetas de cada tarjeta
    timeline.querySelectorAll('.etiquetas').forEach((lista) => {
        Array.from(lista.children).forEach((etiqueta, i) => etiqueta.style.setProperty('--i', i));
    });

    // Resplandor que sigue al cursor dentro de cada tarjeta
    timeline.querySelectorAll('.exp-card').forEach((card) => {
        card.addEventListener('pointermove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });

    if (reducirMovimiento) return;

    // La línea se llena a medida que el centro de la pantalla la recorre
    let pendiente = false;
    const actualizar = () => {
        pendiente = false;
        const rect = timeline.getBoundingClientRect();
        const centro = window.innerHeight * 0.6;
        const progreso = Math.min(Math.max((centro - rect.top) / rect.height, 0), 1);
        timeline.style.setProperty('--tl-progreso', progreso.toFixed(3));
    };

    window.addEventListener('scroll', () => {
        if (!pendiente) {
            pendiente = true;
            requestAnimationFrame(actualizar);
        }
    }, { passive: true });
    window.addEventListener('resize', actualizar);
    actualizar();
}

/* Filtro de proyectos: pestañas con indicador deslizante y contadores */
function initFiltros() {
    const contenedor = document.querySelector('.filtros');
    if (!contenedor) return;

    const botones = contenedor.querySelectorAll('.filtro-btn');
    const indicador = contenedor.querySelector('.filtro-indicador');
    const proyectos = document.querySelectorAll('.proyecto-card');

    // Cantidad de proyectos por categoría
    botones.forEach((boton) => {
        const filtro = boton.dataset.filtro;
        const total = filtro === 'todos'
            ? proyectos.length
            : Array.from(proyectos).filter((p) => p.dataset.categoria === filtro).length;
        boton.querySelector('.filtro-count').textContent = total;
    });

    // Mover la píldora detrás del botón activo
    const moverIndicador = () => {
        const activo = contenedor.querySelector('.filtro-btn.active');
        indicador.style.width = `${activo.offsetWidth}px`;
        indicador.style.height = `${activo.offsetHeight}px`;
        indicador.style.transform = `translate(${activo.offsetLeft}px, ${activo.offsetTop}px)`;
    };
    contenedor.classList.add('con-indicador');
    moverIndicador();
    window.addEventListener('resize', moverIndicador);
    document.addEventListener('cambio-idioma', moverIndicador);
    document.fonts?.ready.then(moverIndicador);

    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            const filtro = boton.dataset.filtro;

            botones.forEach((btn) => {
                const activo = btn === boton;
                btn.classList.toggle('active', activo);
                btn.setAttribute('aria-pressed', String(activo));
            });
            moverIndicador();

            let orden = 0;
            proyectos.forEach((proyecto) => {
                const visible = filtro === 'todos' || proyecto.dataset.categoria === filtro;
                proyecto.hidden = !visible;
                proyecto.classList.remove('entrando');
                if (visible && !reducirMovimiento) {
                    void proyecto.offsetWidth; // reinicia la animación
                    proyecto.style.setProperty('--retraso-filtro', `${orden++ * 0.06}s`);
                    proyecto.classList.add('entrando');
                }
            });
        });
    });
}

/* Inclinación 3D de las tarjetas de proyecto siguiendo el cursor */
function initTilt() {
    if (reducirMovimiento || !window.matchMedia('(hover: hover)').matches) return;

    document.querySelectorAll('.proyecto-card').forEach((card) => {
        const inner = card.querySelector('.proyecto-inner');

        card.addEventListener('pointermove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            inner.style.setProperty('--ry', `${(x - 0.5) * 12}deg`);
            inner.style.setProperty('--rx', `${(0.5 - y) * 10}deg`);
            inner.style.setProperty('--gx', `${x * 100}%`);
            inner.style.setProperty('--gy', `${y * 100}%`);
        });

        card.addEventListener('pointerleave', () => {
            inner.style.setProperty('--rx', '0deg');
            inner.style.setProperty('--ry', '0deg');
        });
    });
}

/* Copiar correo al portapapeles con botón animado y notificación */
function initCopiarCorreo() {
    const botones = document.querySelectorAll('.copy-email');
    const toast = document.getElementById('copy-alert');
    if (!botones.length || !toast) return;

    const DURACION = 3500;
    toast.style.setProperty('--duracion', `${DURACION}ms`);
    let timer = null;
    let inicio = 0;
    let restante = DURACION;

    // Clipboard API y, si no está disponible (http o navegador antiguo), método clásico
    const copiar = async (texto) => {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(texto);
            return;
        }
        const area = document.createElement('textarea');
        area.value = texto;
        area.setAttribute('readonly', '');
        area.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
        document.body.append(area);
        area.select();
        const ok = document.execCommand('copy');
        area.remove();
        if (!ok) throw new Error('No se pudo copiar');
    };

    const ocultar = () => {
        clearTimeout(timer);
        toast.classList.remove('show', 'pausado');
    };

    const programar = (ms) => {
        clearTimeout(timer);
        inicio = Date.now();
        restante = ms;
        timer = setTimeout(ocultar, ms);
    };

    const mostrar = (error) => {
        toast.classList.remove('show', 'pausado');
        toast.classList.toggle('toast--error', error);
        void toast.offsetWidth; // reinicia las animaciones si ya estaba visible
        toast.classList.add('show');
        programar(error ? DURACION * 2 : DURACION);
    };

    // Pausar mientras el cursor está encima
    toast.addEventListener('mouseenter', () => {
        if (!toast.classList.contains('show')) return;
        clearTimeout(timer);
        restante -= Date.now() - inicio;
        toast.classList.add('pausado');
    });
    toast.addEventListener('mouseleave', () => {
        if (!toast.classList.contains('show')) return;
        toast.classList.remove('pausado');
        programar(Math.max(restante, 800));
    });

    toast.querySelector('.toast-cerrar').addEventListener('click', ocultar);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') ocultar();
    });

    botones.forEach((boton) => {
        boton.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                await copiar(boton.dataset.email);
                boton.classList.remove('copiado');
                void boton.offsetWidth;
                boton.classList.add('copiado');
                setTimeout(() => boton.classList.remove('copiado'), 1800);
                mostrar(false);
            } catch (err) {
                mostrar(true);
            }
        });
    });
}

/* Aparición de elementos al hacer scroll, escalonada entre hermanos */
function initReveal() {
    if (reducirMovimiento || !('IntersectionObserver' in window)) return;

    const selectores = [
        '.titulo-seccion', '.descripcion', '.stack',
        '.experiencia-introduccion', '.tl-item',
        '.cert-stat', '.plataformas-titulo', '.plataforma-item', '.carrusel',
        '.filtros', '.proyecto-card',
        '.footer-cta', '.footer-grid > *'
    ];
    const elementos = document.querySelectorAll(selectores.join(','));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    elementos.forEach((el) => {
        const hermanos = Array.from(el.parentElement.children).filter((h) => h.matches(selectores.join(',')));
        const posicion = Math.min(hermanos.indexOf(el), 8);
        el.style.setProperty('--retraso', `${posicion * 0.08}s`);
        el.classList.add('reveal');
        observer.observe(el);
    });
}

/* Efecto máquina de escribir que rota entre varios roles */
function initTyped() {
    const el = document.querySelector('.typed');
    if (!el) return;

    const h1 = el.closest('h1');
    let palabra = 0;
    let letras = 0;
    let borrando = true;

    // Mostrar el primer rol del idioma actual y reiniciar el ciclo
    const reiniciar = () => {
        palabra = 0;
        el.textContent = t('roles')[0];
        letras = el.textContent.length;
        borrando = true;
        h1.setAttribute('aria-label', `.NET ${t('roles').join(', ')}`);
    };
    reiniciar();
    document.addEventListener('cambio-idioma', reiniciar);
    if (reducirMovimiento) return;

    const tick = () => {
        const palabras = t('roles');
        const actual = palabras[palabra];
        letras += borrando ? -1 : 1;
        el.textContent = actual.slice(0, letras);

        let espera = borrando ? 45 : 90;
        if (!borrando && letras === actual.length) {
            borrando = true;
            espera = 2200;
        } else if (borrando && letras === 0) {
            borrando = false;
            palabra = (palabra + 1) % palabras.length;
            espera = 400;
        }
        setTimeout(tick, espera);
    };
    setTimeout(tick, 2500);
}

/* Parallax de la portada: las capas siguen al cursor con distinta profundidad */
function initParallax() {
    const inicio = document.querySelector('.inicio');
    if (!inicio || reducirMovimiento || !window.matchMedia('(hover: hover)').matches) return;

    let pendiente = false;
    let x = 0;
    let y = 0;

    inicio.addEventListener('pointermove', (e) => {
        const rect = inicio.getBoundingClientRect();
        x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        if (pendiente) return;
        pendiente = true;
        requestAnimationFrame(() => {
            pendiente = false;
            inicio.style.setProperty('--px', x.toFixed(3));
            inicio.style.setProperty('--py', y.toFixed(3));
        });
    });

    inicio.addEventListener('pointerleave', () => {
        inicio.style.setProperty('--px', 0);
        inicio.style.setProperty('--py', 0);
    });
}

/* Barra de progreso y enlace del menú de la sección visible */
function initScroll() {
    const barra = document.querySelector('.scroll-progress');
    const enlaces = document.querySelectorAll('.menu a[href^="#"]');
    const secciones = Array.from(enlaces, (a) => document.querySelector(a.hash)).filter(Boolean);

    let pendiente = false;
    let seccionActual = null;
    const actualizar = () => {
        pendiente = false;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        barra.style.setProperty('--progreso', max > 0 ? window.scrollY / max : 0);

        const linea = window.scrollY + window.innerHeight / 3;
        let activa = secciones[0];
        secciones.forEach((sec) => { if (sec.offsetTop <= linea) activa = sec; });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
            activa = secciones[secciones.length - 1];
        }
        if (activa.id !== seccionActual) {
            seccionActual = activa.id;
            enlaces.forEach((a) => a.classList.toggle('activo', a.hash === `#${activa.id}`));
            document.dispatchEvent(new CustomEvent('seccion-activa'));
        }
    };

    window.addEventListener('scroll', () => {
        if (!pendiente) {
            pendiente = true;
            requestAnimationFrame(actualizar);
        }
    }, { passive: true });
    actualizar();
}

initIdioma();
document.getElementById('year').textContent = new Date().getFullYear();
initReveal();
initTyped();
initParallax();
initScroll();
initMenu();
initNavbar();
initCarrusel();
initTimeline();
initContadores();
initFiltros();
initTilt();
initCopiarCorreo();
