# Checklist de pendientes — antes de publicar

Reemplaza los siguientes placeholders antes de poner el sitio en producción.

## 1. Datos de contacto
- [ ] **Número de WhatsApp** — reemplazar `52XXXXXXXXXX` en:
  - `js/main.js` → constante `WHATSAPP_NUMBER` (controla casi todos los enlaces)
  - `index.html` → enlaces `wa.me/` del navbar, sección propiedades, contacto y footer
  - Formato: `52` + 10 dígitos, sin espacios ni símbolos (ej. `523312345678`)
- [ ] **Correo de contacto** — buscar `correo@placeholder.com` en `index.html` (sección contacto y footer)
- [ ] **Instagram / Facebook** — reemplazar los `href="#"` y el texto `[PLACEHOLDER]` en contacto y footer

## 2. Imágenes
> ⚠️ Todas las imágenes en `assets/` son **generadas por IA (KIE.ai)** como placeholder
> visual. Reemplázalas por fotografías reales antes de publicar.
- [ ] **Foto profesional de Francisco** — `assets/about.png` (sección "Sobre mí").
  Es una persona generada por IA; debe ser la foto real de Francisco.
- [ ] **Imagen del hero** — `assets/hero.png` (fondo). Opcional cambiarla por una foto real de GDL.
- [ ] **Logo de la inmobiliaria afiliada** — agregar en el navbar (`.brand`, hay un comentario `TODO`)
- [ ] **6 fotos de propiedades** — reemplazar `assets/p1-zapopan.png` … `assets/p6-andares.png`
  (mismas rutas que usa el array `propiedades` en `js/main.js`)
- [ ] **Avatares de testimonios** — hoy usan `i.pravatar.cc` (stock). Cambiar por fotos reales en `js/main.js`.

## 3. Contenido editable
- [ ] **Datos reales de propiedades** — `js/main.js`, array `propiedades` (precio, m², recámaras, colonia, tipo)
- [ ] **Testimonios reales** — `js/main.js`, array `testimonios` (opcional, hoy son de ejemplo)
- [ ] **Correo del responsable en el Aviso de Privacidad** — `index.html`, modal, buscar `[PLACEHOLDER — correo del responsable]`

## 4. Opcional / marketing
- [ ] **Google Analytics o Meta Pixel** — pegar el script en el `<head>` de `index.html` si se desea tracking
- [ ] **Envío real del formulario** — hoy solo muestra mensaje de éxito en pantalla.
  Para recibir los datos, integra un servicio (Formspree, backend propio, o WhatsApp API).
  Ver el `TODO` al final de `js/main.js`.

## Cómo previsualizar localmente
```bash
cd francisco-robles && python3 -m http.server 8080
# abrir http://localhost:8080
```
