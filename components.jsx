/* El Cocinator — UI atoms & icons */
const { motion, AnimatePresence, useScroll, useTransform } = window.Motion || window.framerMotion || {};

/* ---------- Inline SVG icons (lucide-style stroke icons, hand-tuned) ---------- */
const Icon = ({ children, size = 20, stroke = 1.6, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const IconCheck = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
const IconWhatsapp = (p) => (
  <Icon {...p} stroke={0}>
    <path
      fill="currentColor"
      d="M19.05 4.91A10 10 0 0 0 4.04 17.6L3 21l3.49-1A10 10 0 1 0 19.05 4.91Zm-7 15.36a8.32 8.32 0 0 1-4.24-1.16l-.3-.18-2.07.59.62-2.02-.2-.31a8.34 8.34 0 1 1 6.19 3.08Zm4.57-6.23c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13-.16.25-.65.81-.79.97-.15.17-.29.19-.54.06a6.84 6.84 0 0 1-2.01-1.24 7.55 7.55 0 0 1-1.39-1.73c-.15-.25 0-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48a.92.92 0 0 0-.67.31 2.81 2.81 0 0 0-.87 2.08c0 1.23.89 2.42 1.02 2.59.13.17 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"
    />
  </Icon>
);
const IconArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </Icon>
);
const IconStar = (p) => (
  <Icon {...p}>
    <path d="M12 2.5l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.4l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.95Z" />
  </Icon>
);
const IconShield = (p) => (
  <Icon {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
const IconBadge = (p) => (
  <Icon {...p}>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
const IconUsers = (p) => (
  <Icon {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);
const IconCalendar = (p) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Icon>
);
const IconArrowDown = (p) => (
  <Icon {...p}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </Icon>
);
const IconInstagram = (p) => (
  <Icon {...p}>
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </Icon>
);
const IconFacebook = (p) => (
  <Icon {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
  </Icon>
);
const IconYoutube = (p) => (
  <Icon {...p}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </Icon>
);
const IconTiktok = (p) => (
  <Icon {...p}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </Icon>
);

/* ---------- Reusable buttons ---------- */
const WA_LINK = "https://wa.me/524521652247";

const WhatsAppButton = ({ children, size = "lg", pulse = true, className = "" }) => {
  const sizes = {
    lg: "px-7 py-4 text-base",
    md: "px-5 py-3 text-sm",
    sm: "px-4 py-2 text-xs",
  };
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-3 rounded-full bg-whatsapp hover:bg-whatsappDark text-white font-medium transition-colors ${sizes[size]} ${pulse ? "wa-pulse" : ""} ${className}`}
    >
      <IconWhatsapp size={size === "lg" ? 22 : 18} />
      <span>{children}</span>
      <IconArrowRight size={size === "lg" ? 18 : 16} />
    </a>
  );
};

/* ---------- Reveal wrapper using IntersectionObserver (lightweight) ---------- */
const Reveal = ({ children, delay = 0, y = 24, className = "", as = "div" }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 900ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 900ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </Tag>
  );
};

Object.assign(window, {
  Icon,
  IconCheck, IconWhatsapp, IconArrowRight, IconStar, IconShield, IconBadge,
  IconUsers, IconCalendar, IconArrowDown,
  IconInstagram, IconFacebook, IconYoutube, IconTiktok,
  WhatsAppButton, Reveal, WA_LINK,
});
