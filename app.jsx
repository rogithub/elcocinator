/* El Cocinator — Landing page */

const STEPS = [
{ n: "01", title: "Paredes", desc: "Levantamos tu espacio real. Ventanas, puertas, instalaciones." },
{ n: "02", title: "Electrodomésticos", desc: "Estufa, refri, horno: medidas exactas, ubicación definitiva." },
{ n: "03", title: "Distribución", desc: "Flujo de cocina. Triángulo de trabajo. Zonas claras." },
{ n: "04", title: "Muebles Bajos", desc: "Cajones, alacenas, puertas. Cada hueco aprobado por ti." },
{ n: "05", title: "Muebles Altos", desc: "Alturas reales, tipo de bisagra, vidrios, acabados." },
{ n: "06", title: "Colores", desc: "Maderas, lacas, mármoles. Lo que se compra es lo que ves." },
{ n: "07", title: "Render IA", desc: "Una imagen fotorrealista para enseñarle a quien quieras." },
{ n: "08", title: "Medidas Finales", desc: "Plano con cotas exteriores. Tu carpintero corta sin dudar." }];


const RENDERS = [
{ src: "assets/render-1.png", caption: "Cocina en L · Granito beige · Nogal", meta: "Aguascalientes, 2026" },
{ src: "assets/render-2.png", caption: "Península mármol Calacatta · Roble claro", meta: "Querétaro, 2026" },
{ src: "assets/render-3.png", caption: "U abierta · Mármol blanco · Laca mate", meta: "León, 2026" }];


const INCLUDES = [
"Modelo 3D completo (8 pasos)",
"1 render fotorrealista con IA",
"Plano con medidas exteriores",
"Cambios ilimitados por etapa",
"Entrega en 7–21 días hábiles",
"Archivo guardado 6 meses",
"Pago en 2 partes disponible"];


/* ---------- Header ---------- */
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? "bg-paper/85 backdrop-blur-md border-b border-ink/8" : "bg-transparent"}`
      }>
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src="assets/logo.png" alt="El Cocinator" className="h-9 w-9 rounded-full object-cover ring-1 ring-ink/10" />
          <div className="leading-none">
            <div className={`font-display text-[19px] tracking-tight ${scrolled ? "text-ink" : "text-white drop-shadow"}`} style={{ lineHeight: "1", fontFamily: "Karla" }}>EL COCINATOR

            </div>
            <div className={`text-[10px] tracking-[0.22em] uppercase mt-0.5 ${scrolled ? "text-ink/55" : "text-white/75"}`}>
              Diseño de Cocinas 3D
            </div>
          </div>
        </a>
        <nav className={`hidden md:flex items-center gap-9 text-sm ${scrolled ? "text-ink/70" : "text-white/85"}`}>
          <a href="#renders" className="hover:opacity-100 opacity-80 transition">Trabajo</a>
          <a href="#proceso" className="hover:opacity-100 opacity-80 transition">Proceso</a>
          <a href="#precio" className="hover:opacity-100 opacity-80 transition">Precio</a>
          <a href="#contacto" className="hover:opacity-100 opacity-80 transition">Contacto</a>
        </nav>
        <WhatsAppButton size="sm" pulse={false} className="hidden sm:inline-flex">
          Cotizar
        </WhatsAppButton>
      </div>
    </header>);

}

/* ---------- Section 1 — Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden grain text-white">
      {/* BG image */}
      <img
        src="assets/render-1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.78) saturate(0.95)" }} />
      
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
          "linear-gradient(180deg, rgba(15,14,12,0.55) 0%, rgba(15,14,12,0.35) 35%, rgba(15,14,12,0.55) 75%, rgba(15,14,12,0.85) 100%)"
        }} />
      
      <div
        className="absolute inset-0"
        style={{
          background:
          "linear-gradient(90deg, rgba(15,14,12,0.6) 0%, rgba(15,14,12,0.2) 55%, rgba(15,14,12,0) 100%)"
        }} />
      

      {/* Content */}
      <div className="relative h-full min-h-[100svh] max-w-[1440px] mx-auto px-6 md:px-10 pt-32 pb-20 flex flex-col">
        {/* Top eyebrow */}
        <Reveal delay={120}>
          <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-white/70">
            <span className="w-8 h-px bg-white/50" />
            Estudio de diseño · Aguascalientes, MX
          </div>
        </Reveal>

        <div className="mt-auto grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <h1 className="font-display font-light text-[clamp(40px,7.4vw,108px)] leading-[0.96] tracking-[-0.025em]">
              <Reveal delay={220} y={28}><span className="block">Tu cocina,</span></Reveal>
              <Reveal delay={340} y={28}><span className="block italic font-normal">diseñada</span></Reveal>
              <Reveal delay={460} y={28}>
                <span className="block">antes de que el</span>
              </Reveal>
              <Reveal delay={580} y={28}>
                <span className="block">carpintero empiece.</span>
              </Reveal>
            </h1>

            <Reveal delay={780}>
              <p className="mt-8 max-w-xl text-white/80 text-[17px] md:text-lg leading-relaxed font-light">
                Diseño 3D profesional con medidas exactas. Tú apruebas cada paso
                antes de que se corte una sola pieza.
              </p>
            </Reveal>

            <Reveal delay={920}>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <WhatsAppButton size="lg">Empezar mi cocina por WhatsApp</WhatsAppButton>
                <a
                  href="#renders"
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white text-sm border-b border-white/40 hover:border-white pb-1 transition">
                  
                  Ver trabajo reciente
                  <IconArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right metadata column */}
          <div className="md:col-span-4 hidden md:block">
            <Reveal delay={1040}>
              <div className="border-t border-white/25 pt-6 space-y-6">
                <div>
                  <div className="text-[10px] tracking-[0.28em] uppercase text-white/55">Desde</div>
                  <div className="font-display text-4xl mt-1">$1,900 <span className="text-base text-white/65 align-top tracking-wide">MXN</span></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/55 mb-1">Entrega</div>
                    <div className="text-white/90">7–21 días</div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/55 mb-1">Cambios</div>
                    <div className="text-white/90">Ilimitados</div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/55 mb-1">Render IA</div>
                    <div className="text-white/90">Incluido</div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-white/55 mb-1">Pago</div>
                    <div className="text-white/90">En 2 partes</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute left-6 md:left-10 bottom-6 flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-white/55">
          <span>Desliza</span>
          <IconArrowDown size={14} className="scroll-cue" />
        </div>
      </div>
    </section>);

}

/* ---------- Section 2 — Renders ---------- */
function Renders() {
  return (
    <section id="renders" className="bg-paper py-28 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <div className="md:col-span-7">
            <Reveal>
              <div className="text-[11px] tracking-[0.28em] uppercase text-ink/50 mb-5">— 01 / Trabajo</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-light text-[clamp(36px,5.4vw,76px)] leading-[1.02] tracking-[-0.022em]">
                Así se ve tu cocina <span className="italic">antes</span> de construirla.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={200}>
              <p className="text-ink/65 text-[15px] leading-relaxed">
                Cada render se hace sobre las medidas reales del espacio. No es una
                aproximación: es la cocina que tu carpintero va a fabricar.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {RENDERS.map((r, i) =>
          <Reveal key={i} delay={i * 140}>
              <figure className="group">
                <div className="render-tile rounded-[2px] aspect-[4/5] bg-cream">
                  <img src={r.src} alt={r.caption} className="w-full h-full object-cover" />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <div className="text-[14px] text-ink/85">{r.caption}</div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-ink/45 whitespace-nowrap">
                    {r.meta}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>

        <Reveal delay={300}>
          <div className="mt-16 md:mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-8">
            <p className="text-ink/65 text-[15px] max-w-md">
              Más de <span className="text-ink font-medium">45 cocinas diseñadas al mes</span> para clientes en todo México.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-ink/85 hover:text-ink text-sm border-b border-ink/40 hover:border-ink pb-1 transition">
              
              Quiero la mía
              <IconArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ---------- Section 3 — 8 pasos ---------- */
function Steps() {
  return (
    <section id="proceso" className="bg-cream py-28 md:py-40 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16 md:mb-20">
          <div className="md:col-span-7">
            <Reveal>
              <div className="text-[11px] tracking-[0.28em] uppercase text-ink/50 mb-5">— 02 / Proceso</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-light text-[clamp(36px,5.4vw,76px)] leading-[1.02] tracking-[-0.022em]">
                8 pasos. <span className="italic">Cada uno</span> aprobado por ti.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={200}>
              <p className="text-ink/65 text-[15px] leading-relaxed">
                Avanzamos por etapas. Si algo no te late en el paso 3, no pasamos al 4. 
                Sin sorpresas el día de la instalación.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {STEPS.map((s, i) =>
          <Reveal key={s.n} delay={i % 4 * 100}>
              <article className="step-card bg-cream p-7 md:p-8 h-full flex flex-col justify-between min-h-[260px] border border-transparent">
                <div className="flex items-start justify-between">
                  <span className="font-display text-[44px] leading-none text-ink/85">{s.n}</span>
                  <span className="mt-1.5 inline-flex items-center justify-center w-7 h-7 rounded-full border border-ink/15 text-ink/55">
                    <IconCheck size={14} />
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-[22px] tracking-tight text-ink mb-2">{s.title}</h3>
                  <p className="text-[13.5px] text-ink/60 leading-relaxed">{s.desc}</p>
                </div>
              </article>
            </Reveal>
          )}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap gap-3 items-center text-[12px] text-ink/55">
            <span className="inline-flex items-center gap-1.5"><IconCheck size={14} /> Cambios ilimitados por etapa</span>
            <span className="opacity-30">·</span>
            <span className="inline-flex items-center gap-1.5"><IconCalendar size={14} /> Entrega en 7–21 días hábiles</span>
            <span className="opacity-30">·</span>
            <span className="inline-flex items-center gap-1.5"><IconShield size={14} /> Archivo guardado 6 meses</span>
          </div>
        </Reveal>
      </div>
    </section>);

}

/* ---------- Section 4 — Pricing ---------- */
function Pricing() {
  return (
    <section id="precio" className="bg-paper py-28 md:py-40">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-[11px] tracking-[0.28em] uppercase text-ink/50 mb-5">— 03 / Precio</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display font-light text-[clamp(40px,5.6vw,82px)] leading-[1.0] tracking-[-0.022em]">
                Desde
                <span className="block italic">$1,900 MXN.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-ink/65 text-[15px] leading-relaxed max-w-md">
                Un solo paquete, todo incluido. Sin letras chiquitas, sin cobros extra
                por cambios, sin "te lo dejo en…". El precio que ves es el que pagas.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex items-center gap-4 text-sm text-ink/55">
                <span className="inline-flex items-center gap-1.5"><IconShield size={16} /> RFC verificado</span>
                <span className="opacity-40">·</span>
                <span className="inline-flex items-center gap-1.5"><IconStar size={16} /> +300K seguidores</span>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={150}>
              <div className="relative bg-ink text-white rounded-[6px] p-8 md:p-12 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full"
                  style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.07), transparent 70%)" }} />
                
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] tracking-[0.28em] uppercase text-white/50 mb-3">Paquete completo</div>
                    <div className="font-display text-[56px] md:text-[72px] leading-none">
                      $1,900 <span className="text-xl text-white/55 align-top tracking-wide">MXN</span>
                    </div>
                    <div className="text-white/60 text-sm mt-2">por proyecto · IVA incluido</div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-white/70 border border-white/20 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-whatsapp" /> Lugar disponible
                  </span>
                </div>

                <div className="mt-10 h-px w-full bg-white/10" />

                <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {INCLUDES.map((it, i) =>
                  <li key={i} className="flex items-start gap-3 text-[14.5px] text-white/90">
                      <IconCheck size={18} className="text-whatsapp shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  )}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <WhatsAppButton size="lg">Reservar mi lugar</WhatsAppButton>
                  <span className="text-white/55 text-sm">Respuesta en menos de 1 hora.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Section 5 — Trust bar ---------- */
function TrustBar() {
  const stats = [
  { icon: <IconCalendar size={20} />, k: "37", label: "Proyectos al mes" },
  { icon: <IconUsers size={20} />, k: "+300K", label: "Seguidores TikTok" },
  { icon: <IconBadge size={20} />, k: "Verificado", label: "Instagram oficial" },
  { icon: <IconShield size={20} />, k: "JIGJ851004T29", label: "RFC registrado" }];

  return (
    <section className="bg-ink text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-x divide-white/10 md:divide-y-0 border border-white/10 rounded-[4px] overflow-hidden">
          {stats.map((s, i) =>
          <Reveal key={i} delay={i * 100}>
              <div className="p-7 md:p-9 flex flex-col gap-4 h-full">
                <span className="text-white/55">{s.icon}</span>
                <div className="font-display text-[28px] md:text-[34px] leading-none tracking-tight">
                  {s.k}
                </div>
                <div className="text-[12px] tracking-[0.22em] uppercase text-white/55">
                  {s.label}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- Footer ---------- */
function Footer() {
  const [shown, setShown] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {if (e.isIntersecting) {setShown(true);io.disconnect();}},
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <footer id="contacto" ref={ref} className="bg-ink py-12 md:py-16 px-4 md:px-8">
      <div
        className="liquid-glass max-w-[1440px] mx-auto rounded-3xl text-white border border-white/10 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1000ms ease 400ms, transform 1000ms ease 400ms"
        }}>
        
        {/* Top CTA */}
        <div className="px-8 md:px-14 pt-14 md:pt-20 pb-12 md:pb-16 border-b border-white/10">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h3 className="font-display font-light text-[clamp(34px,5vw,68px)] leading-[1.02] tracking-[-0.022em]">
                ¿Empezamos <span className="italic">tu cocina</span> esta semana?
              </h3>
              <p className="mt-4 text-white/65 max-w-xl">
                Mándanos las medidas por WhatsApp. Te decimos costo, tiempos y siguiente paso en menos de una hora.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <WhatsAppButton size="lg">Escribir por WhatsApp</WhatsAppButton>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="px-8 md:px-14 py-12 md:py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src="assets/logo.png" alt="El Cocinator" className="h-11 w-11 rounded-full object-cover ring-1 ring-white/15" />
              <div>
                <div className="font-display text-[20px] tracking-tight">El Cocinator</div>
                <div className="text-[10px] tracking-[0.28em] uppercase text-white/55 mt-0.5">Diseño de Cocinas 3D</div>
              </div>
            </div>
            <p className="mt-6 text-white/65 max-w-sm leading-relaxed">
              Diseño profesional de cocinas en 3D. Tu carpintero fabrica sin improvisar.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[0.28em] uppercase text-white/45 mb-5">Servicio</div>
            <ul className="space-y-3 text-[14.5px] text-white/85">
              <li><a href="#proceso" className="hover:text-white transition">Proceso</a></li>
              <li><a href="#precio" className="hover:text-white transition">Precios</a></li>
              <li><a href="#" className="hover:text-white transition">Términos</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href={WA_LINK} target="_blank" rel="noopener" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] tracking-[0.28em] uppercase text-white/45 mb-5">Legal</div>
            <ul className="space-y-3 text-[14.5px] text-white/85">
              <li className="flex items-center gap-2"><IconShield size={15} className="text-white/55" /> RFC <span className="font-mono text-white/95">JIGJ851004T29</span></li>
              <li className="flex items-center gap-2"><IconBadge size={15} className="text-white/55" /> Registro IMPI</li>
              <li><a href="#" className="hover:text-white transition">Política de privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-8 md:px-14 py-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-sm">
          <div className="text-white/55">© 2026 El Cocinator · Diseño de Cocinas 3D</div>
          <div className="flex items-center gap-2">
            {[
            { icon: <IconInstagram size={18} />, href: "https://www.instagram.com/elcocinator", label: "Instagram" },
            { icon: <IconTiktok size={18} />, href: "https://www.tiktok.com/@elcocinator", label: "TikTok" },
            { icon: <IconFacebook size={18} />, href: "https://www.facebook.com/share/1DWHuqK5KE/", label: "Facebook" },
            { icon: <IconYoutube size={18} />, href: "https://youtube.com/@elcocinator", label: "YouTube" },
            { icon: <IconWhatsapp size={18} />, href: WA_LINK, label: "WhatsApp" }].
            map((s, i) =>
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/15 hover:border-white/40 hover:bg-white/5 transition">
              
                {s.icon}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>);

}

/* ---------- Floating WhatsApp ---------- */
function FloatingWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsappDark text-white flex items-center justify-center shadow-xl wa-pulse">
      
      <IconWhatsapp size={26} />
    </a>);

}

/* ---------- App ---------- */
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Renders />
        <Steps />
        <Pricing />
        <TrustBar />
      </main>
      <Footer />
      <FloatingWA />
    </>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);