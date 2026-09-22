export const pagesMeta = {
  '/': {
    title: 'Soluciones Energéticas | Gestión y compra de CAEs',
    description:
      'Gestionamos y compramos Certificados de Ahorro Energético (CAE), bonos de carbono, huella hídrica e hidrógeno verde. Partner B2B para empresas de construcción y eficiencia energética.',
  },
  '/quienes-somos': {
    title: 'Quiénes somos | Soluciones Energéticas',
    description:
      'Equipo especializado en CAEs, mercado de eficiencia energética y soluciones climáticas para empresas técnicas y sus clientes.',
  },
  '/servicios': {
    title: 'Servicios | CAEs, bonos de carbono e hidrógeno verde',
    description:
      'Gestión integral de CAEs, compra de certificados, bonos de carbono, huella hídrica e hidrógeno verde para empresas y partners del sector.',
  },
  '/que-es-un-cae': {
    title: 'Qué es un CAE | Certificado de Ahorro Energético',
    description:
      'Guía sobre qué es un Certificado de Ahorro Energético (CAE), cómo se genera, quién puede beneficiarse y cómo monetizar el ahorro energético.',
  },
  '/valores': {
    title: 'Valores | Soluciones Energéticas',
    description:
      'Nuestro compromiso con la acción climática, la transparencia y la colaboración con empresas del sector de la construcción y la energía.',
  },
  '/contacto': {
    title: 'Contacto | Soluciones Energéticas',
    description:
      'Consulta sobre CAEs, bonos de carbono y soluciones energéticas. Escríbenos o llámanos.',
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
