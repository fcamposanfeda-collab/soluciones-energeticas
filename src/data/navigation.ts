export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Qué es un CAE', href: '/que-es-un-cae' },
  { label: 'Valores', href: '/valores' },
  { label: 'Contacto', href: '/contacto' },
];

export const footerNav: NavLink[] = [
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Qué es un CAE', href: '/que-es-un-cae' },
  { label: 'Valores', href: '/valores' },
  { label: 'Contacto', href: '/contacto' },
];

export const legalNav = [
  { label: 'Términos y condiciones', href: '/terminos-y-condiciones' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Política de cookies', href: '/politica-de-cookies' },
] as const;
