
# LIVIN Inmobiliaria - Rediseño de Sitio Web

## Introducción

El proyecto **LIVIN Inmobiliaria** busca rediseñar el sitio web de la empresa para ofrecer una apariencia más moderna y mejorar su visibilidad en línea. Está dirigido principalmente a clientes interesados en propiedades inmobiliarias, brindándoles una experiencia de usuario optimizada y atractiva.

## Tecnologías Usadas

El proyecto utiliza las siguientes tecnologías:

- **Webpack**: Para la configuración y empaquetado del proyecto.
- **HTML (Pug)**: Para una estructura más limpia y modular.
- **CSS (SCSS)**: Para estilización y personalización avanzada.
- **TailwindCSS**: Para agilizar el diseño y mantener un código CSS eficiente.
- **JavaScript**: Para funcionalidades interactivas.
- **SwiperJS**: Para la implementación de carruseles.

Estas tecnologías fueron seleccionadas por su dinamismo y facilidad de desarrollo, lo que garantiza un flujo de trabajo eficiente y flexible.

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```
src/
├── assets/
│   ├── fonts/
│   ├── images/
│   ├── video/
│   └── components/
│       ├── banners/
│       ├── buttons/
│       ├── cards/
│       ├── categories/
│       ├── lead-outs/
│       ├── modals/
│       ├── searchers/
│       ├── sections/
│       ├── sliders/
│       └── tabs/
├── layouts/
│   └── base.pug
├── pages/
│   └── home.pug
├── styles/
│   ├── _variables.scss
│   └── main.scss
├── scripts/
│   └── main.js
├── footer.pug
├── footer.scss
├── header.pug
├── header.scss
├── index.pug
└── .babelrc
```

Cada carpeta tiene un propósito específico, permitiendo modularidad y facilidad de mantenimiento.

## Cómo Ejecutar el Proyecto

Para clonar y ejecutar el proyecto localmente, sigue los siguientes pasos:

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd livin-redesign
   ```

2. Instala las dependencias utilizando `pnpm`:
   ```bash
   pnpm install
   ```

3. Ejecuta el proyecto en modo desarrollo:
   ```bash
   pnpm start
   ```

4. Para generar una versión de producción:
   ```bash
   pnpm build
   ```

## Características Principales

- **Carruseles con SwiperJS**: Para mostrar contenido visual de manera dinámica.
- **Header y Footer reutilizables**: Diseñados para ser consistentes y fáciles de actualizar.

## Autor

Este proyecto fue desarrollado por el equipo de **Dive Digital**.
