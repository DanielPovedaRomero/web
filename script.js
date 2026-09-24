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
        <img src="assets/img/header/bandera-cr.svg" alt="Costa Rica" class="bandera bandera-sm" width="20" height="12">,
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
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && !e.target.closest('.nav')) setOpen(false);
    });
    window.matchMedia('(min-width: 900px)').addEventListener('change', () => setOpen(false));
}

/* Navbar: siempre visible, cápsula al hacer scroll y píldora que sigue al cursor */
function initNavbar() {
    const header = document.querySelector('.site-header');
    const menu = document.getElementById('menu');
    const indicador = menu && menu.querySelector('.menu-indicador');
    if (!header || !menu || !indicador) return;

    // Cápsula flotante en cuanto se deja la parte superior de la página
    let pendiente = false;
    const actualizar = () => {
        pendiente = false;
        header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', () => {
        if (!pendiente) {
            pendiente = true;
            requestAnimationFrame(actualizar);
        }
    }, { passive: true });
    actualizar();

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

/* Inclinación 3D y foco de luz en las tarjetas de certificados */
function initCertTilt() {
    if (reducirMovimiento || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    document.querySelectorAll('.cert-card').forEach((card) => {
        card.addEventListener('pointermove', (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            card.classList.add('inclinando');
            card.style.setProperty('--mx', `${px * 100}%`);
            card.style.setProperty('--my', `${py * 100}%`);
            card.style.setProperty('--ry', `${(px - 0.5) * 10}deg`);
            card.style.setProperty('--rx', `${(0.5 - py) * 8}deg`);
        });
        card.addEventListener('pointerleave', () => {
            card.classList.remove('inclinando');
            card.style.setProperty('--rx', '0deg');
            card.style.setProperty('--ry', '0deg');
        });
    });
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

/* Fondo interactivo de todo el sitio: red de partículas y símbolos de código
   con profundidad al hacer scroll y una paleta que cambia según la sección */
function initCanvas() {
    const canvas = document.querySelector('.fondo-canvas');
    if (!canvas || !canvas.getContext) return;

    const ctx = canvas.getContext('2d');
    const SIMBOLOS = ['</>', '{ }', 'C#', '=>', '.NET', ';', '( )', '[ ]', '&&', '//'];
    const FUENTE = getComputedStyle(document.documentElement).getPropertyValue('--mono') || 'monospace';

    // Colores [inicio del degradado, fin] de cada sección
    const PALETAS = {
        inicio: [[255, 119, 85], [47, 128, 237]],
        experiencia: [[255, 119, 85], [165, 108, 246]],
        certificaciones: [[47, 128, 237], [126, 231, 135]],
        proyectos: [[165, 108, 246], [255, 119, 85]],
        contacto: [[255, 170, 119], [255, 119, 85]]
    };
    const paleta = PALETAS.inicio.map((c) => [...c]);
    let objetivo = PALETAS.inicio;

    let ancho = 0;
    let alto = 0;
    let particulas = [];
    let ondas = [];
    let distanciaEnlace = 130;
    const cursor = { x: -9999, y: -9999, activo: false };

    const colorEn = (x, alfa) => {
        const t = Math.min(Math.max(x / ancho, 0), 1);
        const [a, b] = paleta;
        return `rgba(${Math.round(a[0] + (b[0] - a[0]) * t)}, ${Math.round(a[1] + (b[1] - a[1]) * t)}, ${Math.round(a[2] + (b[2] - a[2]) * t)}, ${alfa})`;
    };

    const crearParticulas = () => {
        const movil = ancho < 600;
        const total = Math.round(Math.min(Math.max((ancho * alto) / (movil ? 17000 : 14000), 26), movil ? 42 : 85));
        distanciaEnlace = movil ? 100 : 130;
        particulas = Array.from({ length: total }, (_, i) => ({
            x: Math.random() * ancho,
            y: Math.random() * alto,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            z: 0.35 + Math.random() * 0.65,   // profundidad: 1 = cerca, 0.35 = lejos
            r: Math.random() * 1.4 + 0.8,
            simbolo: i % 7 === 0 ? SIMBOLOS[i % SIMBOLOS.length] : null,
            tam: 11 + Math.random() * 5,
            giro: (Math.random() - 0.5) * 0.4
        }));
    };

    const redimensionar = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        ancho = window.innerWidth;
        alto = window.innerHeight;
        canvas.width = Math.round(ancho * dpr);
        canvas.height = Math.round(alto * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        crearParticulas();
        if (reducirMovimiento) dibujar();
    };

    // Posición en pantalla: las partículas lejanas se desplazan menos con el scroll
    const pantallaY = (p) => ((p.y - window.scrollY * p.z * 0.3) % alto + alto) % alto;

    const actualizar = () => {
        // Transición suave hacia la paleta de la sección actual
        for (let i = 0; i < 2; i++) {
            for (let c = 0; c < 3; c++) paleta[i][c] += (objetivo[i][c] - paleta[i][c]) * 0.04;
        }

        for (const p of particulas) {
            const py = pantallaY(p);
            if (cursor.activo) {
                const dx = p.x - cursor.x;
                const dy = py - cursor.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < 140 * 140 && d2 > 0.01) {
                    const d = Math.sqrt(d2);
                    const fuerza = ((140 - d) / 140) * 0.6 * p.z;
                    p.vx += (dx / d) * fuerza;
                    p.vy += (dy / d) * fuerza;
                }
            }
            for (const o of ondas) {
                const dx = p.x - o.x;
                const dy = py - o.y;
                const d = Math.hypot(dx, dy);
                if (d > 0.01 && Math.abs(d - o.radio) < 30) {
                    p.vx += (dx / d) * 1.2 * o.vida;
                    p.vy += (dy / d) * 1.2 * o.vida;
                }
            }
            p.vx = p.vx * 0.96 + (Math.random() - 0.5) * 0.02;
            p.vy = p.vy * 0.96 + (Math.random() - 0.5) * 0.02;
            if (Math.hypot(p.vx, p.vy) < 0.12) {
                p.vx *= 1.05;
                p.vy *= 1.05;
            }
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > ancho) { p.vx *= -1; p.x = Math.min(Math.max(p.x, 0), ancho); }
        }
        ondas = ondas.filter((o) => {
            o.radio += 6;
            o.vida -= 0.02;
            return o.vida > 0;
        });
    };

    const dibujar = () => {
        ctx.clearRect(0, 0, ancho, alto);
        const pos = particulas.map((p) => ({ p, x: p.x, y: pantallaY(p) }));

        // Enlaces entre partículas cercanas y a profundidad parecida
        ctx.lineWidth = 1;
        for (let i = 0; i < pos.length; i++) {
            const a = pos[i];
            for (let j = i + 1; j < pos.length; j++) {
                const b = pos[j];
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                const d2 = dx * dx + dy * dy;
                if (d2 < distanciaEnlace * distanciaEnlace && Math.abs(a.p.z - b.p.z) < 0.35) {
                    const alfa = (1 - Math.sqrt(d2) / distanciaEnlace) * 0.24 * Math.min(a.p.z, b.p.z);
                    ctx.strokeStyle = colorEn((a.x + b.x) / 2, alfa);
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
        }

        // Líneas desde el cursor hacia las partículas que "detecta"
        if (cursor.activo) {
            for (const { x, y } of pos) {
                const d = Math.hypot(x - cursor.x, y - cursor.y);
                if (d < 170) {
                    ctx.strokeStyle = colorEn(x, (1 - d / 170) * 0.5);
                    ctx.beginPath();
                    ctx.moveTo(cursor.x, cursor.y);
                    ctx.lineTo(x, y);
                    ctx.stroke();
                }
            }
        }

        // Partículas y símbolos (más tenues cuanto más lejos)
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (const { p, x, y } of pos) {
            if (p.simbolo) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(p.giro);
                ctx.font = `600 ${p.tam * p.z}px ${FUENTE}`;
                ctx.fillStyle = colorEn(x, 0.4 * p.z);
                ctx.fillText(p.simbolo, 0, 0);
                ctx.restore();
            } else {
                ctx.fillStyle = colorEn(x, 0.75 * p.z);
                ctx.beginPath();
                ctx.arc(x, y, p.r * p.z, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (const o of ondas) {
            ctx.strokeStyle = colorEn(o.x, o.vida * 0.6);
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(o.x, o.y, o.radio, 0, Math.PI * 2);
            ctx.stroke();
        }
    };

    // Bucle: se detiene con la pestaña oculta
    let frame = null;
    const bucle = () => {
        actualizar();
        dibujar();
        frame = requestAnimationFrame(bucle);
    };
    const arrancar = () => {
        if (!frame && !document.hidden && !reducirMovimiento) frame = requestAnimationFrame(bucle);
    };
    const detener = () => {
        cancelAnimationFrame(frame);
        frame = null;
    };
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) detener(); else arrancar();
    });

    // Interacción en toda la página (el canvas es fijo: se usan coordenadas de la ventana)
    window.addEventListener('pointermove', (e) => {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
        cursor.activo = e.pointerType === 'mouse';
    }, { passive: true });
    document.addEventListener('pointerleave', () => { cursor.activo = false; });
    window.addEventListener('pointerdown', (e) => {
        if (e.target.closest('a, button, input, label, .proyecto-card, .cert-card, .exp-card, .nav, .toast')) return;
        ondas.push({ x: e.clientX, y: e.clientY, radio: 0, vida: 1 });
        if (reducirMovimiento) dibujar();
    }, { passive: true });

    // Paleta según la sección visible
    if ('IntersectionObserver' in window) {
        // Franja central de la pantalla: la sección que la cruza define los colores
        const observador = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && PALETAS[entry.target.id]) objetivo = PALETAS[entry.target.id];
            });
        }, { rootMargin: '-45% 0px -45% 0px' });
        document.querySelectorAll('main section[id], footer[id]').forEach((s) => observador.observe(s));
    }

    let redimensionTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(redimensionTimer);
        redimensionTimer = setTimeout(redimensionar, 150);
    });
    redimensionar();
    arrancar();
}

/* Cursor animado: la bolita sigue al mouse, gira su anillo y reacciona a lo interactivo */
function initCursor() {
    if (reducirMovimiento || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const html = document.documentElement;
    const bola = document.createElement('div');
    bola.className = 'cursor-bola';
    bola.setAttribute('aria-hidden', 'true');
    bola.innerHTML = '<div class="cursor-bola-img"></div>';
    document.body.appendChild(bola);
    html.classList.add('cursor-animado', 'cursor-fuera');

    const INTERACTIVOS = 'a, button, input, label, select, textarea, [role="button"], .proyecto-card, .cert-card';

    window.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        bola.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        html.classList.remove('cursor-fuera');
        html.classList.toggle('cursor-sobre', !!e.target.closest(INTERACTIVOS));
    }, { passive: true });

    window.addEventListener('pointerdown', () => html.classList.add('cursor-clic'));
    window.addEventListener('pointerup', () => html.classList.remove('cursor-clic'));
    document.addEventListener('mouseleave', () => html.classList.add('cursor-fuera'));
}

/* Canvas de la ventana Developer.cs: lluvia de código, escáner,
   brillo y chispas que siguen al mouse y vapor saliendo del café */
function initConsolaCanvas() {
    const ventana = document.querySelector('.code-window');
    const canvas = ventana && ventana.querySelector('.code-window-canvas');
    if (!canvas || reducirMovimiento) return;

    const ctx = canvas.getContext('2d');
    const taza = ventana.querySelector('.tk-cafe');
    const GLIFOS = '{}[]();<>/=+*01#$&.NETC#async await var new =>'.split('');
    const COLORES = ['255, 119, 85', '255, 170, 119', '165, 108, 246', '121, 192, 255'];
    let w = 0;
    let h = 0;
    let dpr = 1;
    let columnas = [];
    let chispas = [];
    let vapor = [];
    let mouse = null;
    let visible = false;
    let raf = null;
    let t = 0;

    const medir = () => {
        const r = ventana.getBoundingClientRect();
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = r.width;
        h = r.height;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const paso = 16;
        columnas = Array.from({ length: Math.ceil(w / paso) }, (_, i) => ({
            x: i * paso + 4,
            y: Math.random() * h,
            v: 0.25 + Math.random() * 0.55,
            color: COLORES[i % COLORES.length],
            glifo: GLIFOS[(Math.random() * GLIFOS.length) | 0],
        }));
    };

    // Posición de la taza relativa a la ventana, para el vapor
    const origenVapor = () => {
        if (!taza) return null;
        const a = ventana.getBoundingClientRect();
        const b = taza.getBoundingClientRect();
        return { x: b.left - a.left + b.width / 2, y: b.top - a.top };
    };

    const dibujar = () => {
        t++;
        ctx.clearRect(0, 0, w, h);

        // Lluvia de glifos
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        columnas.forEach((c) => {
            c.y += c.v;
            if (c.y > h + 20) {
                c.y = -20 - Math.random() * h * 0.5;
                c.glifo = GLIFOS[(Math.random() * GLIFOS.length) | 0];
            }
            if (t % 40 === 0 && Math.random() < 0.3) c.glifo = GLIFOS[(Math.random() * GLIFOS.length) | 0];
            for (let k = 0; k < 4; k++) {
                const y = c.y - k * 14;
                if (y < 0 || y > h) continue;
                let alfa = (k === 0 ? 0.5 : 0.22 / k);
                if (mouse) {
                    const d = Math.hypot(c.x - mouse.x, y - mouse.y);
                    if (d < 90) alfa += (1 - d / 90) * 0.5;
                }
                ctx.fillStyle = `rgba(${c.color}, ${alfa})`;
                ctx.fillText(k === 0 ? c.glifo : GLIFOS[(c.x + k * 7 + ((c.y / 14) | 0)) % GLIFOS.length], c.x, y);
            }
        });

        // Línea de escaneo que baja
        const sy = (t * 0.8) % (h + 60) - 30;
        const g = ctx.createLinearGradient(0, sy - 30, 0, sy + 2);
        g.addColorStop(0, 'rgba(255, 119, 85, 0)');
        g.addColorStop(1, 'rgba(255, 119, 85, 0.16)');
        ctx.fillStyle = g;
        ctx.fillRect(0, sy - 30, w, 32);
        ctx.fillStyle = 'rgba(255, 170, 119, 0.55)';
        ctx.fillRect(0, sy + 1, w, 1);

        // Brillo que sigue al mouse
        if (mouse) {
            const rg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 120);
            rg.addColorStop(0, 'rgba(255, 119, 85, 0.18)');
            rg.addColorStop(1, 'rgba(255, 119, 85, 0)');
            ctx.fillStyle = rg;
            ctx.fillRect(0, 0, w, h);
        }

        // Chispas
        chispas = chispas.filter((p) => (p.vida -= 0.025) > 0);
        chispas.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.03;
            ctx.fillStyle = `rgba(${p.color}, ${p.vida})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.6 * p.vida + 0.4, 0, Math.PI * 2);
            ctx.fill();
        });

        // Vapor del café
        const o = t % 9 === 0 ? origenVapor() : null;
        if (o) vapor.push({ x: o.x + (Math.random() - 0.5) * 4, y: o.y, vida: 1, fase: Math.random() * 6 });
        vapor = vapor.filter((p) => (p.vida -= 0.012) > 0);
        vapor.forEach((p) => {
            p.y -= 0.45;
            const x = p.x + Math.sin(p.fase + t * 0.05) * 3 * (1 - p.vida);
            ctx.fillStyle = `rgba(255, 220, 200, ${p.vida * 0.35})`;
            ctx.beginPath();
            ctx.arc(x, p.y, 2 + (1 - p.vida) * 5, 0, Math.PI * 2);
            ctx.fill();
        });

        raf = visible ? requestAnimationFrame(dibujar) : null;
    };

    const arrancar = () => {
        if (!raf && visible) raf = requestAnimationFrame(dibujar);
    };

    ventana.addEventListener('pointermove', (e) => {
        const r = ventana.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        if (mouse && Math.random() < 0.6) {
            chispas.push({
                x, y,
                vx: (Math.random() - 0.5) * 1.6,
                vy: -Math.random() * 1.4,
                vida: 1,
                color: COLORES[(Math.random() * COLORES.length) | 0],
            });
        }
        mouse = { x, y };
    });
    ventana.addEventListener('pointerleave', () => { mouse = null; });

    new ResizeObserver(medir).observe(ventana);
    new IntersectionObserver(([e]) => {
        visible = e.isIntersecting && ventana.offsetParent !== null;
        arrancar();
    }).observe(ventana);
    document.addEventListener('visibilitychange', () => {
        visible = !document.hidden && ventana.offsetParent !== null;
        arrancar();
    });
    medir();
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
initCanvas();
initCursor();
initConsolaCanvas();
initScroll();
initMenu();
initNavbar();
initCarrusel();
initCertTilt();
initTimeline();
initContadores();
initFiltros();
initTilt();
initCopiarCorreo();
