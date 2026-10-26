export const pagesMeta = {
  '/': {
    title: 'Soluciones Energéticas | Monetizamos tu ahorro energético (CAEs)',
    description:
      'Gestionamos y compramos Certificados de Ahorro Energético (CAE). Partner de constructoras, instaladores e ingenierías. Bonos de carbono, huella hídrica e hidrógeno verde.',
  },
  '/quienes-somos': {
    title: 'Quiénes somos | Soluciones Energéticas',
    description:
      'Partner B2B especializado en CAEs y soluciones climáticas. Ayudamos a empresas técnicas a ofrecer monetización del ahorro sin la carga administrativa.',
  },
  '/servicios': {
    title: 'Servicios | Gestión y compra de CAEs',
    description:
      'Valoración, verificación, tramitación y compra de CAEs. También bonos de carbono, huella hídrica e hidrógeno verde para empresas y partners.',
  },
  '/que-es-un-cae': {
    title: 'Qué es un CAE | Guía del Certificado de Ahorro Energético',
    description:
      'Qué es un CAE (1 CAE = 1 kWh), quién puede obtenerlo, actuaciones estándar y singulares, agentes del sistema, beneficios, proceso y preguntas frecuentes.',
  },
  '/valores': {
    title: 'Valores | Soluciones Energéticas',
    description:
      'Acción climática, energía asequible, colaboración B2B y transparencia en la gestión de CAEs y soluciones energéticas.',
  },
  '/contacto': {
    title: 'Contacto | Consulta tu actuación CAE',
    description:
      'Cuéntanos tu proyecto de eficiencia energética. Valoramos si genera CAEs y te acompañamos hasta la monetización del ahorro.',
  },
  '/terminos-y-condiciones': {
    title: 'Términos y condiciones | Soluciones Energéticas',
    description: 'Términos y condiciones de uso del sitio web.',
  },
  '/politica-de-privacidad': {
    title: 'Política de privacidad | Soluciones Energéticas',
    description: 'Política de privacidad y protección de datos.',
  },
  '/politica-de-cookies': {
    title: 'Política de cookies | Soluciones Energéticas',
    description: 'Política de cookies del sitio web.',
  },
} as const;

export type PagePath = keyof typeof pagesMeta;

export function getPageMeta(path: string) {
  const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  return pagesMeta[normalized as PagePath] ?? pagesMeta['/'];
}
