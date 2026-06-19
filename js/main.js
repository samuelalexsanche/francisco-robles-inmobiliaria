/* ============================================================
   Francisco Robles · Asesor Inmobiliario GDL — main.js
   ============================================================ */

/* WhatsApp base — TODO: reemplazar con el número real (52 + 10 dígitos) */
const WHATSAPP_NUMBER = "52XXXXXXXXXX";

/* ---------------- Datos de propiedades (editable) --------------- */
/* NOTA: las imágenes en assets/ fueron generadas por IA como placeholder.
   TODO: reemplazar por fotografías reales de cada propiedad. */
const propiedades = [
  {
    id: 1, titulo: "Casa 3 Rec en Zapopan", tipo: "venta",
    precio: "$3,500,000 MXN", recamaras: 3, banos: 2, m2: 180,
    colonia: "Jardines del Country",
    imagen: "assets/p1-zapopan.png"
  },
  {
    id: 2, titulo: "Departamento en Providencia", tipo: "renta",
    precio: "$18,000/mes", recamaras: 2, banos: 1, m2: 90,
    colonia: "Providencia",
    imagen: "assets/p2-providencia.png"
  },
  {
    id: 3, titulo: "Casa en Chapalita", tipo: "venta",
    precio: "$5,200,000 MXN", recamaras: 4, banos: 3, m2: 260,
    colonia: "Chapalita",
    imagen: "assets/p3-chapalita.png"
  },
  {
    id: 4, titulo: "Departamento en Américas", tipo: "renta",
    precio: "$14,500/mes", recamaras: 1, banos: 1, m2: 65,
    colonia: "Las Américas",
    imagen: "assets/p4-americas.png"
  },
  {
    id: 5, titulo: "Casa en Tlaquepaque", tipo: "venta",
    precio: "$2,800,000 MXN", recamaras: 3, banos: 2, m2: 145,
    colonia: "San Pedro Tlaquepaque",
    imagen: "assets/p5-tlaquepaque.png"
  },
  {
    id: 6, titulo: "Penthouse en Andares", tipo: "venta",
    precio: "$9,800,000 MXN", recamaras: 3, banos: 3, m2: 320,
    colonia: "Andares",
    imagen: "assets/p6-andares.png"
  }
];

/* Íconos SVG (referencian el sprite definido en index.html) */
const ICO = (id) => `<svg class="ico" aria-hidden="true"><use href="#${id}"/></svg>`;

/* ----------------- Testimonios (editable) ----------------------- */
const testimonios = [
  { texto: "Francisco nos acompañó en todo momento. Encontramos la casa de nuestros sueños en Zapopan y el proceso fue clarísimo de principio a fin.", nombre: "María y Jorge", colonia: "Jardines del Country", foto: "https://i.pravatar.cc/128?img=32" },
  { texto: "Vendí mi departamento más rápido de lo que imaginé y al precio que esperaba. Su conocimiento del mercado tapatío es impresionante.", nombre: "Ricardo M.", colonia: "Providencia", foto: "https://i.pravatar.cc/128?img=12" },
  { texto: "Como compradores primerizos teníamos mil dudas. Francisco nos explicó cada paso legal con paciencia. 100% recomendado.", nombre: "Ana Sofía", colonia: "Chapalita", foto: "https://i.pravatar.cc/128?img=45" },
  { texto: "Profesional, honesto y siempre disponible. Rentar nuestra propiedad con él fue una experiencia sin estrés.", nombre: "Familia Gutiérrez", colonia: "Las Américas", foto: "https://i.pravatar.cc/128?img=20" }
];

/* ----------------- Helpers WhatsApp ----------------------------- */
function waLink(mensaje) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

/* =================== Render propiedades ========================= */
const grid = document.getElementById("propertiesGrid");

function renderPropiedades(filtro = "todos") {
  const lista = filtro === "todos" ? propiedades : propiedades.filter(p => p.tipo === filtro);
  grid.innerHTML = lista.map((p, i) => `
    <article class="prop-card" data-tipo="${p.tipo}" style="animation-delay:${i * 0.06}s">
      <div class="prop-media">
        <img src="${p.imagen}" alt="${p.titulo}, ${p.colonia}" loading="lazy" width="400" height="280" />
        <span class="prop-tag ${p.tipo}">${p.tipo === "venta" ? "En venta" : "En renta"}</span>
      </div>
      <div class="prop-body">
        <p class="prop-colonia">${ICO("i-pin")} ${p.colonia}</p>
        <h3>${p.titulo}</h3>
        <p class="prop-price">${p.precio}</p>
        <div class="prop-feats">
          <span>${ICO("i-bed")} ${p.recamaras} rec</span>
          <span>${ICO("i-bath")} ${p.banos} baños</span>
          <span>${ICO("i-area")} ${p.m2} m²</span>
        </div>
        <a class="btn btn-outline" href="${waLink(`Hola Francisco, me interesa la propiedad: ${p.titulo}`)}" target="_blank" rel="noopener">Ver detalles</a>
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
  successMsg.textContent = `✅ ¡Gracias ${nombre}! Francisco te contactará pronto.`;
  successMsg.hidden = false;
  form.reset();
  /* TODO: integrar envío real (email / backend / WhatsApp API) si se desea. */
});
