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
- [x] **Foto profesional real de Andrés** — `assets/about.png` (sección "Asesor"). Ya colocada (recortada de su foto de perfil, B/N).
- [x] **Fotos reales de los 3 modelos** — cada modelo tiene galería con lightbox:
  - Ventura: `ventura_pb6` (fachada) + `ventura_pa1..7` (planta alta) + `ventura_pb..pb8` (planta baja)
  - Cambria: `cambria1..8` (`cambria7` = fachada del conjunto)
  - Catalina: `catalina1..6` (interiores)
  - Portada y orden editables en el array `propiedades` de `js/main.js` (campos `cover` y `galeria`).
- [ ] **Imagen del hero** — `assets/vc-hero.png` es generada por IA (opcional: cambiar por foto real del fraccionamiento)
- Las imágenes IA/placeholder anteriores ya se eliminaron del repo.

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
