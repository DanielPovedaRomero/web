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
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'nav.copyEmail': 'Copiar correo',

    'hero.intro': `¡Hola Mundo! Soy Daniel
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg" alt="Costa Rica" class="bandera bandera-sm" width="20" height="12">,
        un apasionado desarrollador backend con experiencia en la creación de aplicaciones eficientes y escalables utilizando .NET C#.
        También enfocado en desarrollo de aplicaciones móviles con .NET MAUI y Xamarin.`,
    'hero.cv': 'Descargar CV',
    'hero.photoAlt': 'Foto de Daniel Poveda Romero',

    'exp.title': 'Experiencia',
    'exp.comment': '// 01. experiencia',
    'exp.intro': 'A lo largo de mi trayectoria como desarrollador, he adquirido experiencia en diversas tecnologías y roles. Estas posiciones me han permitido abordar desafíos complejos y proponer soluciones eficaces.',
    'exp.tech': 'Tecnologías',
    'exp.job1.title': 'Programador Medium',
    'exp.job1.date': '2022 — Actualidad',
    'exp.job1.desc': 'Encargado de crear aplicaciones en .NET con arquitecturas escalables, refactorizar código para mejorar calidad y rendimiento, e implementar unit tests. Integré soluciones con Softland ERP y participé en la migración de aplicaciones de Xamarin a .NET MAUI, añadiendo nuevas funcionalidades en proyectos móviles.',
    'exp.job2.title': 'Programador Junior',
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
    'cert.more': 'Ver más',

    'proj.title': 'Proyectos',
    'proj.comment': '// 03. proyectos',
    'proj.intro': 'Todo lo que puedas imaginar, lo podrás programar',
    'proj.filter': 'Filtrar proyectos',
    'proj.all': 'Todos',
    'proj.view': 'Ver',

    'skills.title': 'Habilidades <br><span class="acento">Técnicas</span>',
    'skills.comment': '// 04. habilidades',
    'skills.intro': 'Estas son algunas de las herramientas y tecnologías que he aprendido y perfeccionado a lo largo de mi camino como desarrollador, las cuales me han permitido enfrentar desafíos y crear soluciones efectivas en diversos proyectos.',

    'footer.tagline': 'Desarrollador Backend especializado en .NET.',
    'footer.links': 'Enlaces Rápidos',
    'alert.copied': 'Correo copiado al portapapeles'
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

/* Menú móvil */
function initMenu() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    if (!hamburger || !menu) return;

    const setOpen = (open) => {
        menu.classList.toggle('active', open);
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        hamburger.setAttribute('aria-label', t(open ? 'menuClose' : 'menuOpen'));
    };

    setOpen(false);
    document.addEventListener('cambio-idioma', () => setOpen(menu.classList.contains('active')));

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
                punto.addEventListener('click', () => { index = i; update(); });
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
        prev.disabled = index === 0;
        next.disabled = index === maxIndex();
        renderPuntos();
    };

    prev.addEventListener('click', () => { index--; update(); });
    next.addEventListener('click', () => { index++; update(); });
    window.addEventListener('resize', update);
    document.addEventListener('cambio-idioma', renderPuntos);

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

const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Aparición de elementos al hacer scroll, escalonada entre hermanos */
function initReveal() {
    if (reducirMovimiento || !('IntersectionObserver' in window)) return;

    const selectores = [
        '.titulo-seccion', '.descripcion', '.skills-text',
        '.experiencia-introduccion', '.experiencia-item',
        '.plataformas-titulo', '.plataforma-item', '.carrusel',
        '.filtros', '.proyecto-card', '.skill-card',
        '.footer-container > *'
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

/* Barra de progreso y enlace del menú de la sección visible */
function initScroll() {
    const barra = document.querySelector('.scroll-progress');
    const enlaces = document.querySelectorAll('.menu a');
    const secciones = Array.from(enlaces, (a) => document.querySelector(a.hash)).filter(Boolean);

    let pendiente = false;
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
        enlaces.forEach((a) => a.classList.toggle('activo', a.hash === `#${activa.id}`));
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
initScroll();
initMenu();
initCarrusel();
initFiltros();
initCopiarCorreo();
