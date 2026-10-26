export const values = [
  {
    title: 'Acción climática',
    description:
      'Promovemos soluciones que reducen emisiones y mejoran la eficiencia energética con impacto medible y documentado.',
  },
  {
    title: 'Energía asequible',
    description:
      'Facilitamos que empresas, comunidades y ciudadanos recuperen parte de la inversión en ahorro energético mediante los CAEs.',
  },
  {
    title: 'Colaboración B2B',
    description:
      'Trabajamos como partner de constructoras, ingenierías e instaladores: no competimos con vosotros, reforzamos vuestra oferta.',
  },
  {
    title: 'Transparencia',
    description:
      'Procesos claros, documentación rigurosa y comunicación directa en cada fase: desde la idea hasta la monetización del ahorro.',
  },
] as const;

/** Beneficios del sistema CAE (para propietarios, empresas y partners) */
export const caeBenefits = [
  {
    title: 'Recupera tu inversión',
    description:
      'Cada mejora energética puede generar un retorno económico al vender el ahorro certificado en el mercado de CAEs.',
  },
  {
    title: 'Ahorro de energía y costes',
    description:
      'Optimizar equipos, aislamientos o instalaciones reduce el consumo sin renunciar al confort ni al rendimiento.',
  },
  {
    title: 'Mayor rentabilidad',
    description:
      'La eficiencia energética mejora la competitividad del negocio y aporta un argumento comercial diferencial a tus clientes.',
  },
  {
    title: 'Impacto medioambiental',
    description:
      'Contribuís a la descarbonización y a los objetivos nacionales de ahorro de energía final de forma verificable.',
  },
  {
    title: 'Flexibilidad normativa',
    description:
      'Los CAEs permiten que los sujetos obligados cumplan parte de sus obligaciones de ahorro mediante el mercado.',
  },
  {
    title: 'Valor añadido para partners',
    description:
      'Constructoras e instaladores pueden ofrecer la gestión de CAEs como servicio integral sin asumir la carga administrativa.',
  },
] as const;

/** Quién puede generar / beneficiarse de CAEs */
export const caeWhoCan = [
  'Agricultura, ganadería y sector primario',
  'Edificios residenciales, terciarios e industriales',
  'Transporte y movilidad (con las exclusiones legales aplicables)',
  'Hogares y comunidades de propietarios',
  'Sector servicios y comercio',
  'Industria y procesos productivos',
] as const;

/** Tipos de actuación */
export const caeActuationTypes = [
  {
    title: 'Actuaciones estándar',
    description:
      'Medidas ya clasificadas por la Administración en fichas técnicas que cuantifican el ahorro de forma homogénea (por ejemplo, mejora de envolvente, sustitución de equipos o iluminación eficiente).',
  },
  {
    title: 'Actuaciones singulares',
    description:
      'Proyectos más complejos o novedosos que no encajan de entrada en una ficha general, pero pueden certificarse con un estudio específico y, en algunos casos, estandarizarse después.',
  },
] as const;

/** Agentes del sistema CAE — explicación educativa */
export const caeAgents = [
  {
    title: 'Propietario del ahorro',
    description:
      'Quien realiza la actuación de eficiencia energética (empresa, comunidad, particular…) y puede ceder o vender el CAE a cambio de una contraprestación.',
  },
  {
    title: 'Sujeto obligado',
    description:
      'Empresa energética con obligaciones de ahorro que compra CAEs en el mercado para cumplir con el Fondo Nacional de Eficiencia Energética.',
  },
  {
    title: 'Sujeto delegado',
    description:
      'Intermediario acreditado que conecta a propietarios del ahorro con sujetos obligados y gestiona parte del proceso de mercado.',
  },
  {
    title: 'Instaladores y contratistas',
    description:
      'Ejecutan las obras y captan ahorros. Con un partner especializado pueden ofrecer la monetización del CAE sin desviarse de su negocio técnico.',
  },
  {
    title: 'Verificador',
    description:
      'Entidad reconocida que comprueba los ahorros obtenidos y que la documentación cumple los requisitos antes de la emisión del certificado.',
  },
  {
    title: 'Administración',
    description:
      'Revisa, valida y emite los CAEs a través de las comunidades autónomas y el sistema nacional; actúa ante irregularidades.',
  },
] as const;

/** Proceso típico de gestión con SER */
export const caeProcess = [
  {
    step: '01',
    title: 'Valoramos tu actuación',
    description:
      'Analizamos si el proyecto (ejecutado o previsto) puede generar CAEs y si encaja como estándar o singular.',
  },
  {
    step: '02',
    title: 'Documentamos y verificamos',
    description:
      'Preparamos la justificación técnica, coordinamos la verificación acreditada y cuidamos que todo cumpla la normativa.',
  },
  {
    step: '03',
    title: 'Registramos el ahorro',
    description:
      'Gestionamos los trámites administrativos hasta la emisión o preinscripción del certificado según el caso.',
  },
  {
    step: '04',
    title: 'Monetizamos el CAE',
    description:
      'Negociamos y tramitamos la compra/venta del ahorro para que recuperes parte de la inversión de forma ágil y transparente.',
  },
] as const;

/** Por qué gestionar CAEs con SER (sin pretender ser sujeto obligado tipo Moeve) */
export const whyUs = [
  {
    title: 'Partner, no competencia',
    description:
      'Trabajamos con constructoras, ingenierías e instaladores para que ofrezcáis CAEs a vuestros clientes sin cargar con la burocracia.',
  },
  {
    title: 'De principio a fin',
    description:
      'Os acompañamos desde la idea del proyecto hasta la certificación y la monetización del ahorro.',
  },
  {
    title: 'Experiencia en eficiencia energética',
    description:
      'Conocemos el marco normativo de los CAEs y los requisitos de verificación para reducir riesgos y sorpresas.',
  },
  {
    title: 'Comunicación clara',
    description:
      'Os explicamos en cada fase qué falta, qué plazos hay y qué retorno económico es razonable esperar.',
  },
] as const;

export const caeFaq = [
  {
    question: '¿Qué es un CAE?',
    answer:
      'Un Certificado de Ahorro Energético (CAE) es un documento electrónico que acredita un ahorro de consumo de energía final anual conseguido gracias a una actuación de eficiencia energética. En el sistema español, 1 CAE equivale a 1 kWh de ahorro energético final anual, y puede comprarse y venderse en el mercado.',
  },
  {
    question: '¿Quién puede generar CAEs?',
    answer:
      'Prácticamente todos los sectores: primario, industria, edificación, servicios, hogares y transporte (con las exclusiones legales aplicables). También particulares y comunidades de propietarios, siempre que la actuación cumpla los requisitos técnicos y administrativos.',
  },
  {
    question: '¿Cómo sé si mi proyecto es estándar o singular?',
    answer:
      'Si la medida está recogida en una ficha oficial con metodología de cálculo, suele tratarse de una actuación estándar. Si el proyecto es atípico, de gran escala o no encaja en fichas existentes, puede abordarse como singular. Os ayudamos a clasificarlo en la primera valoración.',
  },
  {
    question: '¿Solo con inversiones nuevas se obtienen CAEs?',
    answer:
      'No necesariamente. También pueden generar ahorro justificable ciertas acciones de mantenimiento o mejora operativa, siempre que existan datos demostrables (consumos, mediciones, fotografías antes/después, etc.). Lo crítico es la trazabilidad de la evidencia.',
  },
  {
    question: '¿Los CAEs son compatibles con subvenciones?',
    answer:
      'En general sí, salvo ayudas cuyo origen sea el Fondo Nacional de Eficiencia Energética. Cada convocatoria indica la procedencia de los fondos; en caso de duda (por ejemplo ayudas IDAE), estudiamos qué opción resulta más beneficiosa.',
  },
  {
    question: '¿Cómo ayudáis a empresas de construcción e instaladores?',
    answer:
      'Asumimos la gestión administrativa, la coordinación con verificación y la compraventa del CAE. Vosotros os centrás en la obra; vuestros clientes reciben un servicio integral y un posible retorno económico del ahorro.',
  },
  {
    question: '¿Cuándo conviene contactarnos?',
    answer:
      'Cuanto antes mejor: idealmente antes de ejecutar la actuación, para planificar mediciones y documentación. También podemos valorar proyectos ya ejecutados si se conserva la evidencia necesaria.',
  },
] as const;
