export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: "Elaboración" | "Prensado & Desuerado" | "Lavado & Sanidad" | "Automatización" | "Calderería & Suministros";
  image: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  options: string[];
  highlight?: boolean;
}
export const PRODUCT_CATEGORIES = [
  { id: "Elaboración", label: "Elaboración" },
  { id: "Prensado & Desuerado", label: "Prensado & Desuerado" },
  { id: "Lavado & Sanidad", label: "Lavado & Sanidad" },
  { id: "Automatización", label: "Automatización" },
  { id: "Calderería & Suministros", label: "Calderería & Suministros" },
];

export const PRODUCTS: Product[] = [
  {
    id: "cubas-elaboracion",
    name: "Cubas de Elaboración (Holandesa y Doblecero)",
    tagline: "El núcleo higiénico para el cuajado, corte y calentamiento de precisión",
    category: "Elaboración",
    image: "/images/cuba-elaboracion.jpg",
    badge: "Alta Precisión",
    highlight: true,
    shortDescription:
      "Cubas circulares y cerradas 'doblecero' diseñadas en acero AISI 304/316L para cuajado térmico, corte mecánico por liras y agitación homogénea con mínima rotura del grano.",
    fullDescription:
      "Nuestras cubas de elaboración representan la cúspide de la calderería sanitaria aplicada a queserías artesanales e industriales. Disponibles en configuración abierta tipo holandesa o totalmente cerrada vertical/horizontal doblecero. Cuentan con doble pared calorifugada con aislamiento de lana de roca, camisa perimetral de intercambio térmico para agua caliente, vapor o agua helada, y circuito CIP de autolimpieza. Las liras de corte helicoidal y palas de agitación están diseñadas para maximizar el rendimiento quesero y evitar mermas por polvo de cuajada.",
    specs: [
      { label: "Capacidades estándar", value: "300 L hasta 5.000 L (a medida)" },
      { label: "Material de construcción", value: "Acero Inoxidable AISI 304 / AISI 316L" },
      { label: "Acabado superficial", value: "Pulido sanitario espejo Ra < 0,6 µm" },
      { label: "Sistema de calentamiento", value: "Doble camisa de vapor o agua caliente (hasta 3 bar)" },
      { label: "Velocidad de agitación", value: "Variador electrónico 0-45 RPM con inversión de giro" },
      { label: "Control", value: "Panel táctil PLC programable con curvas de temperatura" },
    ],
    features: [
      "Liras de corte cruzado con hilo de acero inoxidable de alta tensión.",
      "Válvula de fondo sanitaria sin zonas muertas tipo mariposa o neumática.",
      "Fondo cónico o inclinado para vaciado gravitacional o por bomba lobular 100% completo.",
      "Boca de hombre de inspección con visor estanco y luminaria LED sanitaria.",
      "Sistema de inclinación neumática para descarga optimizada de cuajada.",
    ],
    options: [
      "Sonda de pH y conductividad en línea.",
      "Bomba de recirculación de cuajada integrada.",
      "Registrador digital de datos para trazabilidad APPCC.",
      "Chasis sobre patas regulables o ruedas sanitarias orientables.",
    ],
  },
  {
    id: "arcon-desuerado",
    name: "Arcón Desuerador y Preprensado",
    tagline: "Drenaje óptimo del lactosuero y preprensado homogéneo sin bolsas de aire",
    category: "Prensado & Desuerado",
    image: "/images/arcon-desuerado.jpg",
    badge: "Eficiencia Quesera",
    highlight: true,
    shortDescription:
      "Equipo esencial para el drenaje controlado de suero y preprensado de la cuajada mediante chapa microperforada desmontable y placas de prensado neumático.",
    fullDescription:
      "El arcón desuerador ARDI permite canalizar la masa de cuajada proveniente de la cuba, distribuir el grano de forma regular y uniforme, y someterlo a un preprensado sumergido o drenado antes del moldeo. Su estructura robusta de acero inoxidable macizo incorpora un falso fondo de chapa perforada de fácil extracción para limpieza profunda, tajadera frontal de guillotina para corte y extracción en tacos, y un puente de cilindros neumáticos para compactación uniforme de la pasta.",
    specs: [
      { label: "Dimensiones", value: "Longitudes de 1.500 mm a 4.000 mm personalizables" },
      { label: "Material", value: "Acero Inox AISI 304 decapado y pasivado" },
      { label: "Falso fondo", value: "Chapa con microperforación cónica sanitaria de 1,2 mm" },
      { label: "Cilindros de prensado", value: "De 2 a 6 pistones neumáticos independientes" },
      { label: "Descarga de suero", value: "Válvula inferior DN-65 con tamiz colector" },
      { label: "Presión máxima", value: "6 bar de aire comprimido filtrado" },
    ],
    features: [
      "Tajadera guillotina frontal con apertura gradual y cierre hermético.",
      "Reglas de corte longitudinal y transversal para bloques exactos de masa.",
      "Placas de preprensado con microperforación extraíbles sin herramientas.",
      "Recipiente de suero con fondo inclinado y salida directa a depósito de almacenamiento.",
    ],
    options: [
      "Sistema de corte semiautomático motorizado para porcionado de cuajada.",
      "Colector de aspiración al vacío para desuerado ultrarrápido.",
      "Tolva orientable para recepción directa de cuba de cuajar.",
    ],
  },
  {
    id: "prensas-quesos",
    name: "Prensas de Queso Neumáticas y Continuas",
    tagline: "Presión homogénea, control milimétrico y ajuste individualizado por columna",
    category: "Prensado & Desuerado",
    image: "/images/prensa-quesos.jpg",
    badge: "Robusta y Precisa",
    highlight: true,
    shortDescription:
      "Prensas verticales u horizontales con pistones neumáticos de acero inoxidable independientes, reguladores individuales de presión y bandejas de recogida de suero.",
    fullDescription:
      "Diseñadas para garantizar una corteza perfecta y una evacuación gradual del suero sin cerrar poros prematuramente. Cada columna de prensado cuenta con su propio manómetro y manorreductor de precisión, lo que permite trabajar simultáneamente con diferentes tipos o tamaños de molde (desde quesos de 500 g hasta formatos de 12 kg). La estructura en perfil tubular cerrado de acero inoxidable evita cualquier retención de humedad o bacterias.",
    specs: [
      { label: "Configuración", value: "Vertical (de 1 a 10 columnas) u Horizontal continua" },
      { label: "Capacidad de moldes", value: "Desde 10 hasta 120 moldes simultáneos" },
      { label: "Pistones", value: "Cilindros neumáticos AISI 304 de doble efecto" },
      { label: "Presión de apriete", value: "Regulable de 0,5 a 6 kg/cm² independiente por columna" },
      { label: "Recogida de suero", value: "Bandejas integradas canalizadas con rebosadero" },
      { label: "Seguridad", value: "Válvulas antirretorno y pulsador de parada de emergencia" },
    ],
    features: [
      "Platos de prensado autocentrantes compatibles con moldes de diversas formas y alturas.",
      "Bandejas basculantes o fijas de acero inoxidable pulido.",
      "Columnas telescópicas con cremallera o pasadores rápidos de ajuste en altura.",
      "Tratamiento de superficies resistente a salmueras y ácidos lácticos.",
    ],
    options: [
      "Control PLC con recetas programables de prensado escalonado en 4 fases automáticas.",
      "Prensas continuas con cinta transportadora de entrada/salida para alta producción.",
      "Sensores de proximidad para fin de carrera y detección de desalineado.",
    ],
  },
  {
    id: "tunel-lavado-moldes",
    name: "Túnel de Lavado de Moldes Manual y Semiautomático",
    tagline: "Higiene biológica rigurosa, recirculación de agua y bajo consumo energético",
    category: "Lavado & Sanidad",
    image: "/images/tunel-lavado.jpg",
    badge: "Higiene Total",
    highlight: true,
    shortDescription:
      "Instalación compacta para el lavado, desinfección y aclarado intensivo de moldes, tapas y bandejas queseras con boquillas de proyección multidireccionales.",
    fullDescription:
      "El túnel de lavado ARDI SL responde a los requerimientos más estrictos de seguridad alimentaria. Configurado en una o dos etapas (lavado con detergente alcalino a 55-65°C y aclarado final con agua de red desinfectada). Dispone de bomba centrífuga de alta presión en acero inoxidable, depósito con resistencias eléctricas blindadas o intercambiador de vapor, filtración continua de impurezas y rampa de boquillas rotativas de alta cobertura.",
    specs: [
      { label: "Capacidad de producción", value: "80 a 350 moldes/hora según modelo" },
      { label: "Zonas de lavado", value: "Fase 1: Lavado químico / Fase 2: Aclarado final" },
      { label: "Bomba impulsión", value: "Centrífuga sanitaria AISI 316L (3 kW a 5,5 kW)" },
      { label: "Calefacción de agua", value: "Resistencias eléctricas o serpentín de vapor" },
      { label: "Filtración", value: "Cesta de tamizado extraíble de acero perforado de fácil vaciado" },
      { label: "Dimensiones", value: "Diseño compacto optimizado para salas de quesería reducidas" },
    ],
    features: [
      "Boquillas de pulverización de ángulo plano y cono hueco desmontables.",
      "Sistema de avance por empujador manual continuo o cinta motorizada con variador.",
      "Campana superior con amortiguadores de gas para acceso total y limpieza rápida.",
      "Aislamiento térmico en depósito de detergente para máximo ahorro de electricidad.",
    ],
    options: [
      "Módulo de soplado y secado con ventilador centrífugo y cuchilla de aire.",
      "Bomba dosificadora automática de detergente y desinfectante por conductividad.",
      "Condensador de vahos para eliminar la humedad en la sala de trabajo.",
    ],
  },
  {
    id: "distribuidor-leche",
    name: "Distribuidor de Leche y Colector Sanitario",
    tagline: "Gestión automatizada de flujos lácteos, llenado de cubas y trasiego sin turbulencias",
    category: "Automatización",
    image: "/images/distribuidor-leche.jpg",
    badge: "AISI 316L",
    highlight: true,
    shortDescription:
      "Conjunto de valvulería higiénica, tubería curvada sin soldaduras rugosas, colector de distribución y bomba sanitaria para trasvase controlado y llenado de cubas.",
    fullDescription:
      "Diseñado a medida para la distribución centralizada de leche cruda o pasteurizada hacia cubas, pasteurizadores o depósitos pulmón. Fabricado íntegramente en tubería de acero inoxidable pulido AISI 316L con conexiones sanitarias DIN 11851 o Tri-Clamp. Integra válvulas de mariposa manuales o neumáticas de asiento simple/doble antigoteo, mirillas de flujo iluminadas y cuadro de control con selectores luminosos.",
    specs: [
      { label: "Material de contacto", value: "Acero Inoxidable AISI 316L calidad farmacéutica/alimentaria" },
      { label: "Conexiones estándar", value: "DIN 11851, SMS o Tri-Clamp según preferencia" },
      { label: "Caudal de trasiego", value: "De 2.000 L/h hasta 25.000 L/h" },
      { label: "Bombas compatibles", value: "Centrífugas sanitarias autoaspirantes o lobulares de desplazamiento positivo" },
      { label: "Válvulas", value: "Asiento inclinado, mariposa higiénica o mixproof a prueba de mezclas" },
      { label: "Instrumentación", value: "Caudalímetro electromagnético de alta precisión y manómetros sanitarios" },
    ],
    features: [
      "Curvado en frío y soldaduras orbitales con purga de argón interior libre de costuras.",
      "Diseño CIP 100% autodrenante sin retenciones de fluido ni esquinas vivas.",
      "Panel de maniobra con sinóptico de flujo visual para evitar errores de trasvase.",
      "Montaje en bastidor modular móvil o fijación mural perimetral.",
    ],
    options: [
      "Integración de filtro de leche en línea de malla doble con cambio rápido.",
      "Automatización de llenado con dosificación por litros preconfigurada en pantalla.",
      "Válvulas con cabezal de control inteligente ASI o IO-Link con feedback de posición.",
    ],
  },
  {
    id: "instalacion-automatizada",
    name: "Instalación Automatizada Integral de Quesería",
    tagline: "Proyectos llave en mano: desde recepción de leche hasta curación y limpieza CIP",
    category: "Automatización",
    image: "/images/instalacion-automatizada.jpg",
    badge: "Llave en Mano",
    highlight: true,
    shortDescription:
      "Ingeniería completa, diseño CAD 3D, fabricación de maquinaria, montaje in situ, puesta en marcha y programación SCADA/PLC para plantas queseras modernas.",
    fullDescription:
      "ARDI SL acomete proyectos integrales de plantas queseras adaptadas a queserías de ovino, caprino y vacuno. Coordinamos todas las fases del proyecto: dimensionamiento de salas, circuito de fluidos fríos y calientes, línea de pasterización continua a placas con desgasificador y recuperador térmico de hasta el 90%, cubas automatizadas, desuerado, trenes de prensado, salmueras dinámicas y central de limpieza CIP en circuito cerrado con recuperación de soluciones.",
    specs: [
      { label: "Alcance", value: "Ingeniería, fabricación, tubería de proceso, montaje, puesta en marcha" },
      { label: "Automatización", value: "PLC Siemens / Schneider con pantalla táctil HMI y registro SCADA" },
      { label: "Pasterización", value: "Pasterizador de placas de 500 a 10.000 L/h con registro gráfico oficial" },
      { label: "Sistema CIP", value: "Central CIP automatizada de 2, 3 o 4 depósitos (sosa, ácido, agua, desinfectante)" },
      { label: "Eficiencia energética", value: "Recuperación de calor >90% e intercambiadores de alta eficiencia" },
      { label: "Normativa", value: "Marcado CE completo, directiva 2006/42/CE y directivas de seguridad láctea" },
    ],
    features: [
      "Optimización de flujos y distribución espacial en salas blancas.",
      "Trazabilidad de lotes con registro digital de temperaturas, tiempos y recetas.",
      "Comunicación remota por VPN para teleasistencia técnica y soporte inmediato.",
      "Manuales técnicos de operación en español, fichas de componentes y esquemas eléctricos completos.",
    ],
    options: [
      "Módulo de salado por inmersión con control de temperatura y recirculación de salmuera.",
      "Línea de transporte mecanizado para moldes y volteadores automáticos.",
      "Sistemas de envasado al vacío y etiquetado industrial coordinados.",
    ],
  },
  {
    id: "caldereria-metalica",
    name: "Calderería y Carpintería Metálica Industrial",
    tagline: "Fabricación a medida en acero inoxidable, aluminio y acero al carbono",
    category: "Calderería & Suministros",
    image: "/images/carpinteria-metalica.jpg",
    badge: "Taller Propio",
    highlight: false,
    shortDescription:
      "Estructuras, pasarelas higiénicas antideslizantes, depósitos singulares, tolvas, mesas de desuerado y carpintería técnica según planos del cliente.",
    fullDescription:
      "Con más de tres décadas de experiencia en nuestro taller de Oiartzun, nuestro equipo de caldereros y soldadores homologados ejecuta trabajos a medida con los mayores requerimientos mecánicos y estéticos. Fabricamos tolvas dosificadoras, mesas de trabajo con desagüe perimetral, plataformas elevadas para cubas, barandillas sanitarias, bastidores mecánicos y cerramientos industriales.",
    specs: [
      { label: "Materiales", value: "AISI 304, AISI 316L, AISI 316Ti, Aluminio, Acero al carbono" },
      { label: "Tecnología de soldadura", value: "TIG, MIG/MAG, soldadura por resistencia y arco sumergido" },
      { label: "Corte y conformado", value: "Plegado CNC, cizallado, curvado de tubo y perfiles" },
      { label: "Tratamientos finales", value: "Decapado por inmersión, pasivado ecológico, chorreado con microesferas de vidrio" },
      { label: "Formatos", value: "Desde piezas unitarias prototipo hasta series y estructuras complejas" },
    ],
    features: [
      "Diseño y desarrollo asistido por ordenador (SolidWorks / Inventor 3D).",
      "Control dimensional estricto y ensayos no destructivos de soldadura.",
      "Adaptación milimétrica a las cotas reales de las instalaciones del cliente.",
    ],
    options: [
      "Acabado satinado mate, pulido brillo espejo o electropulido.",
      "Certificados de materiales 3.1 según EN 10204.",
    ],
  },
  {
    id: "suministros-industriales",
    name: "Suministros y Valvulería Sanitaria Alimentaria",
    tagline: "Componentes certificados, racorería DIN/Clamp y bombas sanitarias",
    category: "Calderería & Suministros",
    image: "/images/suministros-inox.jpg",
    badge: "Stock Inmediato",
    highlight: false,
    shortDescription:
      "Suministro rápido de valvulería de mariposa, clapetas, racores, juntas alimentarias EPDM/FKM, mangueras técnicas y repuestos originales para la industria.",
    fullDescription:
      "Mantenemos un stock estratégico de recambios, elementos de conducción de fluidos y suministros para la industria agroalimentaria y quesera. Asesoramos técnicamente a los departamentos de mantenimiento para la selección idónea de elastómeros, materiales de cierre y bombas de reposición.",
    specs: [
      { label: "Racorería disponible", value: "DIN 11851, Clamp ISO 2852, SMS, RJT, IDF" },
      { label: "Juntas de estanqueidad", value: "EPDM, NBR, FKM (Viton), PTFE certificados FDA y CE 1935/2004" },
      { label: "Válvulas", value: "Mariposa, bola sanitaria, diafragma, retención, seguridad resorte" },
      { label: "Bombas", value: "Centrífugas sanitarias, de rotor helicoidal y lobulares" },
      { label: "Instrumentación", value: "Termómetros bimetálicos, manómetros con separador de membrana" },
    ],
    features: [
      "Entrega rápida y envíos directos a taller o fábrica.",
      "Asesoramiento técnico directo por especialistas en fluidos alimentarios.",
      "Garantía de compatibilidad higiénica total con las normativas europeas.",
    ],
    options: [
      "Montaje previo de mangueras técnicas crimpadas con certificado de presión.",
      "Mantenimiento y kits de recambios periódicos.",
    ],
  },
];
