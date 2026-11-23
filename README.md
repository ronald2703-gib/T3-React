# Vitalia (boceto 2)

React + Vite + Material UI. Sin archivos CSS: todo con `sx`, `theme` y componentes MUI.
Paleta: blanco, negro y naranja suave (editable en `src/theme.js`).

    npm install
    npm run dev

## Rutas
- `/`  Landing
- `/acceso`  Iniciar sesión + Registro
- `/recuperar`  Recuperar contraseña / usuario
- `/admin`, `/admin/usuarios`, `/admin/rutinas`, `/admin/recetas`, `/admin/configuracion`
- `/cliente`, `/cliente/rutinas`, `/cliente/alimentacion`, `/cliente/progreso`, `/cliente/perfil`

En ambos dashboards hay botones "Página principal" y "Cerrar sesión".

## PWA
Se configura en `vite.config.js` con `vite-plugin-pwa` (manifest, íconos y service worker).
El registro del service worker lo inyecta el plugin solo; no hay código de PWA en `src`.

    npm install
    npm run build
    npm run preview

Abre la dirección que muestra `preview` y usa "Instalar app" en Chrome o Edge.
Con `npm run dev` la PWA no se activa.
Íconos en `public/icons`, logo en `public/logo.svg`, ilustraciones en `public/images`.
