/* ============================================================
   Andrés Orellana · Asesor Vista California Residencial — main.js
   ============================================================ */

/* WhatsApp del asesor — TODO: reemplazar con el número real (52 + 10 dígitos).
   El flyer muestra 33-31-82-70-XX (incompleto). Tel. ventas Vista California: 33 5351 6281 */
const WHATSAPP_NUMBER = "52XXXXXXXXXX";

/* ---------------- Modelos de Vista California (editable) ---------------
   Datos reales del díptico oficial. Imágenes en assets/ generadas por IA
   al estilo californiano real (TODO: sustituir por render/foto oficial). */
/* Helper de galería: G("archivo", "etiqueta") -> {src, cap} */
const G = (file, cap) => ({ src: `assets/${file}.png`, cap });

const propiedades = [
  {
    id: 1, modelo: "Ventura", desde: true,
    precio: "$938,000", cat: "2rec",
    recamaras: 2, banos: 1, m2: "50.5", cochera: 1, terreno: "6 × 16 m",
    nota: "Dúplex · planta baja desde $1,160,000",
    cover: "assets/ventura_pb6.png",
    galeria: [
      G("ventura_pb6", "Fachada del conjunto"),
      G("ventura_pa1", "Planta alta"), G("ventura_pa7", "Planta alta"),
      G("ventura_pa2", "Planta alta"), G("ventura_pa3", "Planta alta"),
      G("ventura_pa4", "Planta alta"), G("ventura_pa5", "Planta alta"),
      G("ventura_pa6", "Planta alta"),
      G("ventura_pb", "Planta baja"), G("ventura_pb2", "Planta baja"),
      G("ventura_pb3", "Planta baja"), G("ventura_pb4", "Planta baja"),
      G("ventura_pb5", "Planta baja"), G("ventura_pb7", "Planta baja"),
      G("ventura_pb8", "Planta baja")
    ]
  },
  {
    id: 2, modelo: "Cambria", desde: false,
    precio: "$1,608,000", cat: "2rec",
    recamaras: 2, banos: 1.5, m2: "66.6", cochera: 1, terreno: "4.5 × 16 m",
    nota: "Sala, comedor, cocina y ½ baño en planta baja",
    cover: "assets/cambria7.png",
    galeria: [
      G("cambria7", "Fachada del conjunto"),
      G("cambria8", "Interior"), G("cambria1", "Interior"),
      G("cambria2", "Interior"), G("cambria5", "Interior"),
      G("cambria6", "Interior"), G("cambria3", "Interior"),
      G("cambria4", "Interior")
    ]
  },
  {
    id: 3, modelo: "Catalina", desde: false,
    precio: "$1,998,000", cat: "3rec",
    recamaras: 3, banos: 2, m2: "84.1", cochera: 2, terreno: "5 × 16 m",
    nota: "Recámara en planta baja · cochera para 2 autos",
    cover: "assets/catalina1.png",
    galeria: [
      G("catalina1", "Interior"), G("catalina6", "Interior"),
      G("catalina2", "Interior"), G("catalina5", "Interior"),
      G("catalina3", "Interior"), G("catalina4", "Interior")
    ]
  }
];

/* Íconos SVG (referencian el sprite definido en index.html) */
const ICO = (id) => `<svg class="ico" aria-hidden="true"><use href="#${id}"/></svg>`;

/* ----------------- Testimonios (editable) ----------------------- */
const testimonios = [
  { texto: "Andrés nos acompañó en todo el proceso de nuestro crédito INFONAVIT. Estrenamos casa en Vista California sin enganche y con entrega inmediata.", nombre: "María y Jorge", colonia: "Modelo Catalina", foto: "https://i.pravatar.cc/128?img=32" },
  { texto: "Como compradores primerizos teníamos mil dudas. Nos explicó cada paso con paciencia y nos consiguió el mejor modelo para nuestro presupuesto.", nombre: "Ricardo M.", colonia: "Modelo Ventura", foto: "https://i.pravatar.cc/128?img=12" },
  { texto: "El fraccionamiento es hermoso y muy seguro. Andrés fue honesto y siempre disponible. 100% recomendado para estrenar tu primera casa.", nombre: "Ana Sofía", colonia: "Modelo Cambria", foto: "https://i.pravatar.cc/128?img=45" },
  { texto: "Nos encantó la seguridad 24/7 y el parque central para los niños. Todo el trámite fue rápido y sin complicaciones gracias a su asesoría.", nombre: "Familia Gutiérrez", colonia: "Modelo Catalina", foto: "https://i.pravatar.cc/128?img=20" }
];

/* ----------------- Helpers WhatsApp ----------------------------- */
function waLink(mensaje) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

/* =================== Render propiedades ========================= */
const grid = document.getElementById("propertiesGrid");

function renderPropiedades(filtro = "todos") {
  const lista = filtro === "todos" ? propiedades : propiedades.filter(p => p.cat === filtro);
  grid.innerHTML = lista.map((p, i) => `
    <article class="prop-card" data-cat="${p.cat}" style="animation-delay:${i * 0.06}s">
      <button type="button" class="prop-media" data-gallery="${p.id}" aria-label="Ver fotos del modelo ${p.modelo}">
        <img src="${p.cover}" alt="Modelo ${p.modelo}, Vista California Residencial" loading="lazy" width="400" height="267" />
        <span class="prop-tag entrega">Entrega inmediata</span>
        <span class="prop-count">${ICO("i-gallery")} ${p.galeria.length} fotos</span>
      </button>
      <div class="prop-body">
        <p class="prop-colonia">${ICO("i-pin")} Vista California Residencial</p>
        <h3>Modelo ${p.modelo}</h3>
        <p class="prop-price">${p.desde ? '<span class="prop-desde">Desde</span> ' : ''}${p.precio}<span class="prop-mxn"> MXN</span></p>
        <div class="prop-feats">
          <span>${ICO("i-bed")} ${p.recamaras} rec</span>
          <span>${ICO("i-bath")} ${p.banos} baños</span>
          <span>${ICO("i-area")} ${p.m2} m²</span>
          <span>${ICO("i-car")} ${p.cochera} ${p.cochera > 1 ? "autos" : "auto"}</span>
        </div>
        <p class="prop-nota">${p.nota}</p>
        <div class="prop-actions">
          <button type="button" class="btn btn-soft" data-gallery="${p.id}">${ICO("i-gallery")} Ver fotos</button>
          <a class="btn btn-outline" href="${waLink(`Hola Andrés, me interesa el modelo ${p.modelo} de Vista California. ¿Me das más información?`)}" target="_blank" rel="noopener">Más información</a>
        </div>
      </div>
    </article>
  `).join("");
}
renderPropiedades();

/* Filtros */
document.querySelectorAll(".pill").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderPropiedades(btn.dataset.filter);
  });
});

/* =================== Lightbox de galería ======================= */
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbCap = document.getElementById("lbCap");
const lbCount = document.getElementById("lbCount");
const lbTitle = document.getElementById("lbTitle");
let lbGallery = [];
let lbIndex = 0;
let lbReturnFocus = null;

function lbShow(i) {
  lbIndex = (i + lbGallery.length) % lbGallery.length;
  const item = lbGallery[lbIndex];
  lbImg.src = item.src;
  lbImg.alt = `${lbTitle.textContent} — ${item.cap}`;
  lbCap.textContent = item.cap;
  lbCount.textContent = `${lbIndex + 1} / ${lbGallery.length}`;
}
function openGallery(gallery, title, startAt = 0) {
  lbReturnFocus = document.activeElement;
  lbGallery = gallery;
  lbTitle.textContent = title;
  lbShow(startAt);
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("lbNext").focus();
  document.addEventListener("keydown", onLbKey);
}
function openLightbox(modelId, startAt = 0) {
  const p = propiedades.find(x => x.id === Number(modelId));
  if (p) openGallery(p.galeria, `Modelo ${p.modelo}`, startAt);
}
function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
  document.removeEventListener("keydown", onLbKey);
  if (lbReturnFocus) lbReturnFocus.focus();
}
function onLbKey(e) {
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowRight") lbShow(lbIndex + 1);
  else if (e.key === "ArrowLeft") lbShow(lbIndex - 1);
}
grid.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-gallery]");
  if (trigger) openLightbox(trigger.dataset.gallery);
});
document.getElementById("lbNext").addEventListener("click", () => lbShow(lbIndex + 1));
document.getElementById("lbPrev").addEventListener("click", () => lbShow(lbIndex - 1));
lightbox.querySelectorAll("[data-close-lb]").forEach(el => el.addEventListener("click", closeLightbox));

/* =================== Galería de Entorno ======================== */
const entorno = [
  G("entorno1", "Acceso y vista al valle"),
  G("entorno5", "Andadores al atardecer"),
  G("entorno6", "Parque central"),
  G("entorno4", "Juegos infantiles"),
  G("entorno3", "Áreas verdes"),
  G("entorno2", "El fraccionamiento")
];
const entornoGrid = document.getElementById("entornoGrid");
if (entornoGrid) {
  entornoGrid.innerHTML = entorno.map((e, i) => `
    <button type="button" class="entorno-item" data-egal="${i}" aria-label="Ver foto: ${e.cap}">
      <img src="${e.src}" alt="${e.cap} — Vista California" loading="lazy" />
      <span class="entorno-cap">${ICO("i-pin")} ${e.cap}</span>
    </button>
  `).join("");
  entornoGrid.addEventListener("click", (ev) => {
    const t = ev.target.closest("[data-egal]");
    if (t) openGallery(entorno, "Entorno · Vista California", Number(t.dataset.egal));
  });
}

/* =================== Carrusel de testimonios =================== */
const track = document.getElementById("carouselTrack");
const dotsWrap = document.getElementById("carouselDots");
let current = 0;
let autoTimer = null;

track.innerHTML = testimonios.map(t => `
  <div class="t-slide">
    <p class="t-quote">${t.texto}</p>
    <div class="t-person">
      <img src="${t.foto}" alt="" loading="lazy" width="60" height="60" />
      <div class="t-meta">
        <div class="t-name">${t.nombre}</div>
        <div class="t-colonia">${t.colonia}</div>
      </div>
    </div>
  </div>
`).join("");

dotsWrap.innerHTML = testimonios.map((_, i) =>
  `<button class="dot ${i === 0 ? "is-active" : ""}" data-i="${i}" role="tab" aria-label="Testimonio ${i + 1}" aria-selected="${i === 0}"></button>`
).join("");

function goTo(i) {
  current = (i + testimonios.length) % testimonios.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  dotsWrap.querySelectorAll(".dot").forEach((d, idx) => {
    const active = idx === current;
    d.classList.toggle("is-active", active);
    d.setAttribute("aria-selected", active);
  });
}

document.getElementById("carouselNext").addEventListener("click", () => { goTo(current + 1); resetAuto(); });
document.getElementById("carouselPrev").addEventListener("click", () => { goTo(current - 1); resetAuto(); });
dotsWrap.querySelectorAll(".dot").forEach(d =>
  d.addEventListener("click", () => { goTo(+d.dataset.i); resetAuto(); })
);

function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 5000); }
function resetAuto() { clearInterval(autoTimer); startAuto(); }
const carousel = document.getElementById("carousel");
carousel.addEventListener("mouseenter", () => clearInterval(autoTimer));
carousel.addEventListener("mouseleave", startAuto);
startAuto();

/* =================== Navbar móvil + scroll ===================== */
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function toggleMenu(open) {
  hamburger.classList.toggle("open", open);
  navLinks.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open);
  if (open) { navOverlay.hidden = false; requestAnimationFrame(() => navOverlay.classList.add("show")); }
  else { navOverlay.classList.remove("show"); setTimeout(() => (navOverlay.hidden = true), 300); }
}
hamburger.addEventListener("click", () => toggleMenu(!navLinks.classList.contains("open")));
navOverlay.addEventListener("click", () => toggleMenu(false));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggleMenu(false)));

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
}, { passive: true });

/* =================== Scroll reveal ============================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* =================== Modal Aviso de Privacidad ================= */
const modal = document.getElementById("privacyModal");
let lastFocused = null;

function openModal() {
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
  document.addEventListener("keydown", onModalKey);
}
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  document.removeEventListener("keydown", onModalKey);
  if (lastFocused) lastFocused.focus();
}
function onModalKey(e) {
  if (e.key === "Escape") closeModal();
  if (e.key === "Tab") {
    const f = modal.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
}
document.getElementById("openPrivacy").addEventListener("click", openModal);
document.getElementById("openPrivacyFooter").addEventListener("click", openModal);
modal.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));

/* =================== Validación del formulario ================= */
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

function setError(input, msg) {
  const el = form.querySelector(`.error[data-for="${input.id}"]`);
  if (el) el.textContent = msg;
  input.setAttribute("aria-invalid", msg ? "true" : "false");
}

function validate() {
  let ok = true;
  const nombre = form.nombre, tel = form.telefono, email = form.email, busca = form.busca, priv = form.privacidad;

  if (!nombre.value.trim()) { setError(nombre, "Por favor escribe tu nombre."); ok = false; } else setError(nombre, "");

  const telDigits = tel.value.replace(/\D/g, "");
  if (telDigits.length !== 10) { setError(tel, "Ingresa un teléfono de 10 dígitos."); ok = false; } else setError(tel, "");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setError(email, "Ingresa un correo válido."); ok = false; } else setError(email, "");

  if (!busca.value) { setError(busca, "Selecciona una opción."); ok = false; } else setError(busca, "");

  if (!priv.checked) { setError(priv, "Debes aceptar el Aviso de Privacidad."); ok = false; } else setError(priv, "");

  return ok;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.hidden = true;
  if (!validate()) {
    const firstErr = form.querySelector('[aria-invalid="true"]');
    if (firstErr) firstErr.focus();
    return;
  }
  const nombre = form.nombre.value.trim().split(" ")[0];
  successMsg.textContent = `✅ ¡Gracias ${nombre}! Andrés te contactará pronto.`;
  successMsg.hidden = false;
  form.reset();
  /* TODO: integrar envío real (email / backend / WhatsApp API) si se desea. */
});
