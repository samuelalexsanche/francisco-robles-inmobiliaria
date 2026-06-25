# Checklist de pendientes — antes de publicar

Sitio de **Andrés Orellana**, asesor de **Vista California Residencial** (Guadalajara).
Datos de los 3 modelos tomados del díptico oficial.

## 1. Contacto
- [ ] **WhatsApp de Andrés** — reemplazar `52XXXXXXXXXX` en:
  - `js/main.js` → constante `WHATSAPP_NUMBER` (controla casi todos los enlaces)
  - `index.html` → enlaces `wa.me/` del navbar, modelos, contacto y footer
  - El flyer muestra `33-31-82-70-XX` (incompleto). Formato final: `52` + 10 dígitos.
- [ ] **Correo de contacto** — agregar (hoy no aparece; opcional añadirlo en la sección contacto)
- [ ] **Redes reales** — los `href="#"` de Instagram/Facebook → "Vista California Residencial"
- [x] Teléfono de ventas Vista California: **33 5351 6281** (ya puesto, confírmalo)
- [x] Web oficial: **vistacalifornia.mx** (ya enlazada en el footer)

## 2. Imágenes
> ⚠️ Las imágenes en `assets/` son **generadas por IA (KIE.ai)** al estilo californiano
> real, como placeholder. Sustitúyelas por renders/fotos oficiales cuando los tengas.
- [ ] **Foto profesional real de Andrés** — `assets/about.png` (sección "Asesor"). Hoy es un rostro IA.
- [ ] **Render/fotos oficiales de los 3 modelos** — `assets/m-ventura.png`, `assets/m-cambria.png`, `assets/m-catalina.png`
- [ ] **Imagen del hero** — `assets/vc-hero.png` (opcional: usar foto real del fraccionamiento)
- Imágenes sin usar de la versión anterior (se pueden borrar): `assets/hero.png`, `assets/francisco.png`, `assets/p1..p6-*.png`

## 3. Datos a confirmar con la desarrolladora
- [ ] **Precios vigentes** de los 3 modelos (`js/main.js`, array `propiedades`)
  - Ventura: desde $938,000 (planta alta) · planta baja $1,160,000
  - Cambria: $1,608,000 · Catalina: $1,998,000
- [ ] **Testimonios reales** — hoy son de ejemplo (`js/main.js`, array `testimonios`); avatares en `i.pravatar.cc`
- [ ] **Correo del responsable** en el Aviso de Privacidad (`index.html`, modal)
- [ ] **Ubicación exacta** del fraccionamiento (hoy: "Carr. a El Salto, zona Tonalá")

## 4. Opcional / marketing
- [ ] **Google Analytics o Meta Pixel** en el `<head>` si se desea tracking
- [ ] **Envío real del formulario** — hoy solo muestra mensaje de éxito.
  Integrar Formspree / backend / WhatsApp API (ver `TODO` al final de `js/main.js`).

## Previsualizar localmente
```bash
cd francisco-robles && python3 -m http.server 8080   # http://localhost:8080
```
