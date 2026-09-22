export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  icon: 'cae' | 'carbon' | 'water' | 'hydrogen';
};

export const services: Service[] = [
  {
    id: 'cae',
    title: 'Certificados de Ahorro Energético (CAE)',
    shortTitle: 'CAEs',
    description:
      'Gestionamos la tramitación, verificación y compra de CAEs derivados de actuaciones de eficiencia energética en edificios e instalaciones.',
    href: '/servicios#cae',
    icon: 'cae',
  },
  {
    id: 'carbon',
    title: 'Bonos de carbono',
    shortTitle: 'Bonos de carbono',
    description:
      'Asesoramiento y gestión en proyectos de reducción de emisiones con valoración y comercialización de bonos de carbono.',
    href: '/servicios#bonos-carbono',
    icon: 'carbon',
  },
  {
    id: 'water',
    title: 'Huella hídrica',
    shortTitle: 'Huella hídrica',
    description:
      'Medición, reducción y compensación de la huella hídrica en procesos industriales y proyectos de construcción.',
    href: '/servicios#huella-hidrica',
    icon: 'water',
  },
  {
    id: 'hydrogen',
    title: 'Hidrógeno verde',
    shortTitle: 'Hidrógeno verde',
    description:
      'Consultoría y acompañamiento en proyectos vinculados al hidrógeno verde y la transición energética.',
    href: '/servicios#hidrogeno-verde',
    icon: 'hydrogen',
  },
];

export const partnerPitch =
  'Si tus clientes te solicitan información sobre CAEs y no dispones del tiempo o los recursos para gestionarlo, nosotros te ayudamos. Te permitimos centrarte en lo que realmente aporta valor a tu negocio: la calidad de tu servicio técnico en obra, sin distracciones administrativas.';
