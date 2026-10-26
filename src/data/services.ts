export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  href: string;
  icon: 'cae' | 'carbon' | 'water' | 'hydrogen';
};

export const services: Service[] = [
  {
    id: 'cae',
    title: 'Certificados de Ahorro Energético (CAE)',
    shortTitle: 'CAEs',
    description:
      'Valoramos tu actuación, gestionamos verificación y trámites, y compramos el ahorro certificado para que recuperes parte de la inversión.',
    details: [
      'Estudio previo: ¿genera CAEs? ¿estándar o singular?',
      'Coordinación con verificador acreditado y documentación completa',
      'Tramitación administrativa hasta la emisión del certificado',
      'Compra / monetización del CAE con contraprestación clara',
      'Modelo partner para constructoras, instaladores e ingenierías',
    ],
    href: '/servicios#cae',
    icon: 'cae',
  },
  {
    id: 'carbon',
    title: 'Bonos de carbono',
    shortTitle: 'Bonos de carbono',
    description:
      'Asesoramiento y gestión en proyectos de reducción de emisiones con valoración y comercialización de bonos de carbono.',
    details: [
      'Análisis de elegibilidad del proyecto',
      'Acompañamiento en cuantificación y verificación de reducciones',
      'Orientación sobre vías de comercialización',
    ],
    href: '/servicios#bonos-carbono',
    icon: 'carbon',
  },
  {
    id: 'water',
    title: 'Huella hídrica',
    shortTitle: 'Huella hídrica',
    description:
      'Medición, reducción y compensación de la huella hídrica en procesos industriales y proyectos de construcción.',
    details: [
      'Diagnóstico de consumo y usos del agua',
      'Propuestas de reducción y eficiencia',
      'Opciones de compensación cuando proceda',
    ],
    href: '/servicios#huella-hidrica',
    icon: 'water',
  },
  {
    id: 'hydrogen',
    title: 'Hidrógeno verde',
    shortTitle: 'Hidrógeno verde',
    description:
      'Consultoría y acompañamiento en proyectos vinculados al hidrógeno verde y la transición energética.',
    details: [
      'Orientación estratégica sobre oportunidades del sector',
      'Apoyo en definición de alcance y partners técnicos',
      'Alineación con objetivos de descarbonización',
    ],
    href: '/servicios#hidrogeno-verde',
    icon: 'hydrogen',
  },
];

export const partnerPitch =
  'Si tus clientes te piden información sobre CAEs y no tienes tiempo ni equipo para gestionarlos, nosotros lo hacemos por ti. Tú te centras en la calidad técnica de la obra; nosotros en la documentación, la verificación y la monetización del ahorro.';

export const partnerBenefits = [
  'Ofreces un servicio integral sin ampliar tu plantilla administrativa',
  'Mejoras la experiencia y satisfacción de tus clientes',
  'Evitas errores de justificación que invaliden el ahorro',
  'Mantienes el foco en tu negocio: construir, instalar y rehabilitar',
] as const;
