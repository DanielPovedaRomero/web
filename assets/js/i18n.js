/********************************************
   Idioma compartido para las subpáginas del portafolio.
   - Inglés por defecto, español opcional.
   - Cada texto se escribe en ambos idiomas con el atributo lang:
       <p lang="en">Hello</p><p lang="es">Hola</p>
     y i18n.css oculta el idioma que no está activo.
   - Atributos traducibles: data-es-alt, data-es-title, data-es-aria-label,
     data-es-value, data-es-placeholder.
   - El título de la pestaña en español va en <title data-es="...">.
   - La elección se guarda en localStorage ('idioma'), la misma clave
     que usa la página principal.
   Cargar en <head> SIN defer para evitar un parpadeo del otro idioma:
     <script src=".../i18n.js" data-inicio="ruta/al/index.html"></script>
********************************************/
(function () {
    'use strict';

    const CLAVE = 'idioma';
    const ATRIBUTOS = ['alt', 'title', 'aria-label', 'value', 'placeholder'];
    const script = document.currentScript;
    const html = document.documentElement;

    const leer = () => {
        try { return localStorage.getItem(CLAVE) === 'es' ? 'es' : 'en'; } catch (e) { return 'en'; }
    };
    const guardar = (valor) => {
        try { localStorage.setItem(CLAVE, valor); } catch (e) { /* sin almacenamiento */ }
    };

    let idioma = leer();
    html.lang = idioma;

    const aplicar = (nuevo) => {
        idioma = nuevo;
        html.lang = nuevo;

        const titulo = document.querySelector('title');
        if (titulo && titulo.dataset.es) {
            titulo.dataset.en ??= titulo.textContent;
            document.title = nuevo === 'es' ? titulo.dataset.es : titulo.dataset.en;
        }

        ATRIBUTOS.forEach((attr) => {
            document.querySelectorAll(`[data-es-${attr}]`).forEach((el) => {
                const original = `data-en-${attr}`;
                if (!el.hasAttribute(original)) el.setAttribute(original, el.getAttribute(attr) ?? '');
                el.setAttribute(attr, el.getAttribute(nuevo === 'es' ? `data-es-${attr}` : original));
            });
        });

        const boton = document.querySelector('.lang-toggle');
        if (boton) {
            const etiqueta = nuevo === 'es' ? 'Switch to English' : 'Cambiar a español';
            boton.dataset.activo = nuevo;
            boton.setAttribute('aria-label', etiqueta);
            boton.title = etiqueta;
        }
    };

    // Botón flotante: volver al portafolio + selector de idioma
    const crearWidget = () => {
        const widget = document.createElement('div');
        widget.className = 'i18n-widget';

        const inicio = script && script.dataset.inicio;
        if (inicio) {
            const volver = document.createElement('a');
            volver.className = 'i18n-volver';
            volver.href = inicio;
            volver.innerHTML = '<span aria-hidden="true">&larr;</span> '
                + '<span lang="en">Portfolio</span><span lang="es">Portafolio</span>';
            widget.append(volver);
        }

        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'lang-toggle';
        boton.innerHTML = '<span data-lang="en">EN</span><span data-lang="es">ES</span>';
        boton.addEventListener('click', () => {
            const nuevo = idioma === 'en' ? 'es' : 'en';
            guardar(nuevo);
            aplicar(nuevo);
        });
        widget.append(boton);

        document.body.append(widget);
    };

    document.addEventListener('DOMContentLoaded', () => {
        crearWidget();
        aplicar(idioma);
    });

    // Si el idioma cambia en otra pestaña, sincronizar
    window.addEventListener('storage', (e) => {
        if (e.key === CLAVE) aplicar(leer());
    });
})();
