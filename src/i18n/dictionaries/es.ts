export const es = {
  common: {
    viewFullCatalog: "Ver Catálogo Completo",
    contact: "Contacto",
    aboutUs: "Quiénes Somos",
    productCatalog: "Catálogo de Productos",
    home: "Inicio",
    sendMessage: "Enviar Mensaje",
  },
  company: {
    tagline: "Calderería y Maquinaria en Acero Inoxidable para Queserías y Sector Industrial",
    slogan: "Innovación higiénica, robustez artesanal y precisión en acero inoxidable",
    description: "Con más de 30 años de trayectoria en Oiartzun (Gipuzkoa), en ARDI SL diseñamos, fabricamos y ponemos en marcha maquinaria de alta gama en acero inoxidable AISI 304 y AISI 316L para queserías, cooperativas lácteas e industria agroalimentaria. Aportamos soluciones técnicas a medida con calderería de alta precisión y cumplimiento riguroso de la normativa higiénica europea.",
    stats: {
      expLabel: "Años de experiencia",
      expSub: "Fabricando en Oiartzun",
      equipLabel: "Equipos instalados",
      equipSub: "En España, Francia y Europa",
      steelLabel: "Acero Inoxidable",
      steelSub: "AISI 304 y 316L certificado",
      normLabel: "Normativa Europea",
      normSub: "Directiva 2006/42/CE"
    },
    pillars: [
      {
        title: "Calderería Sanitaria de Precisión",
        description: "Soldadura TIG y orbital purgada con gas argón. Tratamientos de pulido mecánico y pasivado que garantizan rugosidades Ra < 0,6 µm, eliminando recovecos y garantizando la máxima esterilidad biológica."
      },
      {
        title: "Ingeniería 3D y Personalización",
        description: "Cada obrador y sala de desuerado es único. Modelamos cada equipo en CAD 3D adaptándonos a las cotas, techos, accesos y caudales específicos de la explotación del cliente."
      },
      {
        title: "Materiales Nobles Certificados",
        description: "Solo empleamos aceros inoxidables de procedencia comunitaria con certificado de colada 3.1 según EN 10204. Juntas y componentes aprobados por la FDA para contacto directo con alimentos."
      },
      {
        title: "Montaje y Puesta en Marcha In Situ",
        description: "No dejamos una máquina en un palet a la puerta. Nuestros técnicos viajan a sus instalaciones para conexionar fluidos, validar los ciclos térmicos y formar a su personal de quesería."
      }
    ],
    processSteps: [
      {
        title: "Asesoramiento y Toma de Datos",
        description: "Estudiamos su tipo de leche (oveja, vaca, cabra), tipo de queso (pasta prensada, pasta blanda, curados) y capacidad diaria."
      },
      {
        title: "Diseño CAD 3D y Oferta Técnica",
        description: "Presentamos plano de implantación 3D detallando cotas, consumos energéticos, conexiones neumáticas y presupuesto desglosado."
      },
      {
        title: "Fabricación en Taller Propio",
        description: "Corte, conformado, soldadura especializada y acabado superficial en nuestras instalaciones de Oiartzun."
      },
      {
        title: "Entrega, Montaje y Formación",
        description: "Conexión integral, pruebas hidrostáticas en vacío y con producto, y entrega de documentación y marcado CE oficial."
      }
    ]
  },
  productCategories: {
    elaboracion: "Elaboración",
    prensadoDesuerado: "Prensado & Desuerado",
    lavadoSanidad: "Lavado & Sanidad",
    automatizacion: "Automatización",
    caldereriaSuministros: "Calderería & Suministros",
  },
  products: [
    {
      id: "cubas-elaboracion",
      name: "Cubas de Elaboración (Holandesa y Doblecero)",
      tagline: "El núcleo higiénico para el cuajado, corte y calentamiento de precisión",
      badge: "Alta Precisión",
      shortDescription: "Cubas circulares y cerradas 'doblecero' diseñadas en acero AISI 304/316L para cuajado térmico, corte mecánico por liras y agitación homogénea con mínima rotura del grano.",
      fullDescription: "Nuestras cubas de elaboración representan la cúspide de la calderería sanitaria aplicada a queserías artesanales e industriales. Disponibles en configuración abierta tipo holandesa o totalmente cerrada vertical/horizontal doblecero. Cuentan con doble pared calorifugada con aislamiento de lana de roca, camisa perimetral de intercambio térmico para agua caliente, vapor o agua helada, y circuito CIP de autolimpieza. Las liras de corte helicoidal y palas de agitación están diseñadas para maximizar el rendimiento quesero y evitar mermas por polvo de cuajada.",
      specs: [
        { label: "Capacidades estándar", value: "300 L hasta 5.000 L (a medida)" },
        { label: "Material de construcción", value: "Acero Inoxidable AISI 304 / AISI 316L" },
        { label: "Acabado superficial", value: "Pulido sanitario espejo Ra < 0,6 µm" },
        { label: "Sistema de calentamiento", value: "Doble camisa de vapor o agua caliente (hasta 3 bar)" },
        { label: "Velocidad de agitación", value: "Variador electrónico 0-45 RPM con inversión de giro" },
        { label: "Control", value: "Panel táctil PLC programable con curvas de temperatura" }
      ],
      features: [
        "Liras de corte cruzado con hilo de acero inoxidable de alta tensión.",
        "Válvula de fondo sanitaria sin zonas muertas tipo mariposa o neumática.",
        "Fondo cónico o inclinado para vaciado gravitacional o por bomba lobular 100% completo.",
        "Boca de hombre de inspección con visor estanco y luminaria LED sanitaria.",
        "Sistema de inclinación neumática para descarga optimizada de cuajada."
      ],
      options: [
        "Sonda de pH y conductividad en línea.",
        "Bomba de recirculación de cuajada integrada.",
        "Registrador digital de datos para trazabilidad APPCC.",
        "Chasis sobre patas regulables o ruedas sanitarias orientables."
      ]
    },
    {
      id: "arcon-desuerado",
      name: "Arcón Desuerador y Preprensado",
      tagline: "Drenaje óptimo del lactosuero y preprensado homogéneo sin bolsas de aire",
      badge: "Eficiencia Quesera",
      shortDescription: "Equipo esencial para el drenaje controlado de suero y preprensado de la cuajada mediante chapa microperforada desmontable y placas de prensado neumático.",
      fullDescription: "El arcón desuerador ARDI permite canalizar la masa de cuajada proveniente de la cuba, distribuir el grano de forma regular y uniforme, y someterlo a un preprensado sumergido o drenado antes del moldeo. Su estructura robusta de acero inoxidable macizo incorpora un falso fondo de chapa perforada de fácil extracción para limpieza profunda, tajadera frontal de guillotina para corte y extracción en tacos, y un puente de cilindros neumáticos para compactación uniforme de la pasta.",
      specs: [
        { label: "Dimensiones", value: "Longitudes de 1.500 mm a 4.000 mm personalizables" },
        { label: "Material", value: "Acero Inox AISI 304 decapado y pasivado" },
        { label: "Falso fondo", value: "Chapa con microperforación cónica sanitaria de 1,2 mm" },
        { label: "Cilindros de prensado", value: "De 2 a 6 pistones neumáticos independientes" },
        { label: "Descarga de suero", value: "Válvula inferior DN-65 con tamiz colector" },
        { label: "Presión máxima", value: "6 bar de aire comprimido filtrado" }
      ],
      features: [
        "Tajadera guillotina frontal con apertura gradual y cierre hermético.",
        "Reglas de corte longitudinal y transversal para bloques exactos de masa.",
        "Placas de preprensado con microperforación extraíbles sin herramientas.",
        "Recipiente de suero con fondo inclinado y salida directa a depósito de almacenamiento."
      ],
      options: [
        "Sistema de corte semiautomático motorizado para porcionado de cuajada.",
        "Colector de aspiración al vacío para desuerado ultrarrápido.",
        "Tolva orientable para recepción directa de cuba de cuajar."
      ]
    },
    {
      id: "prensas-quesos",
      name: "Prensas de Queso Neumáticas y Continuas",
      tagline: "Presión homogénea, control milimétrico y ajuste individualizado por columna",
      badge: "Robusta y Precisa",
      shortDescription: "Prensas verticales u horizontales con pistones neumáticos de acero inoxidable independientes, reguladores individuales de presión y bandejas de recogida de suero.",
      fullDescription: "Diseñadas para garantizar una corteza perfecta y una evacuación gradual del suero sin cerrar poros prematuramente. Cada columna de prensado cuenta con su propio manómetro y manorreductor de precisión, lo que permite trabajar simultáneamente con diferentes tipos o tamaños de molde (desde quesos de 500 g hasta formatos de 12 kg). La estructura en perfil tubular cerrado de acero inoxidable evita cualquier retención de humedad o bacterias.",
      specs: [
        { label: "Configuración", value: "Vertical (de 1 a 10 columnas) u Horizontal continua" },
        { label: "Capacidad de moldes", value: "Desde 10 hasta 120 moldes simultáneos" },
        { label: "Pistones", value: "Cilindros neumáticos AISI 304 de doble efecto" },
        { label: "Presión de apriete", value: "Regulable de 0,5 a 6 kg/cm² independiente por columna" },
        { label: "Recogida de suero", value: "Bandejas integradas canalizadas con rebosadero" },
        { label: "Seguridad", value: "Válvulas antirretorno y pulsador de parada de emergencia" }
      ],
      features: [
        "Platos de prensado autocentrantes compatibles con moldes de diversas formas y alturas.",
        "Bandejas basculantes o fijas de acero inoxidable pulido.",
        "Columnas telescópicas con cremallera o pasadores rápidos de ajuste en altura.",
        "Tratamiento de superficies resistente a salmueras y ácidos lácticos."
      ],
      options: [
        "Control PLC con recetas programables de prensado escalonado en 4 fases automáticas.",
        "Prensas continuas con cinta transportadora de entrada/salida para alta producción.",
        "Sensores de proximidad para fin de carrera y detección de desalineado."
      ]
    },
    {
      id: "tunel-lavado-moldes",
      name: "Túnel de Lavado de Moldes Manual y Semiautomático",
      tagline: "Higiene biológica rigurosa, recirculación de agua y bajo consumo energético",
      badge: "Higiene Total",
      shortDescription: "Instalación compacta para el lavado, desinfección y aclarado intensivo de moldes, tapas y bandejas queseras con boquillas de proyección multidireccionales.",
      fullDescription: "El túnel de lavado ARDI SL responde a los requerimientos más estrictos de seguridad alimentaria. Configurado en una o dos etapas (lavado con detergente alcalino a 55-65°C y aclarado final con agua de red desinfectada). Dispone de bomba centrífuga de alta presión en acero inoxidable, depósito con resistencias eléctricas blindadas o intercambiador de vapor, filtración continua de impurezas y rampa de boquillas rotativas de alta cobertura.",
      specs: [
        { label: "Capacidad de producción", value: "80 a 350 moldes/hora según modelo" },
        { label: "Zonas de lavado", value: "Fase 1: Lavado químico / Fase 2: Aclarado final" },
        { label: "Bomba impulsión", value: "Centrífuga sanitaria AISI 316L (3 kW a 5,5 kW)" },
        { label: "Calefacción de agua", value: "Resistencias eléctricas o serpentín de vapor" },
        { label: "Filtración", value: "Cesta de tamizado extraíble de acero perforado de fácil vaciado" },
        { label: "Dimensiones", value: "Diseño compacto optimizado para salas de quesería reducidas" }
      ],
      features: [
        "Boquillas de pulverización de ángulo plano y cono hueco desmontables.",
        "Sistema de avance por empujador manual continuo o cinta motorizada con variador.",
        "Campana superior con amortiguadores de gas para acceso total y limpieza rápida.",
        "Aislamiento térmico en depósito de detergente para máximo ahorro de electricidad."
      ],
      options: [
        "Módulo de soplado y secado con ventilador centrífugo y cuchilla de aire.",
        "Bomba dosificadora automática de detergente y desinfectante por conductividad.",
        "Condensador de vahos para eliminar la humedad en la sala de trabajo."
      ]
    },
    {
      id: "distribuidor-leche",
      name: "Distribuidor de Leche y Colector Sanitario",
      tagline: "Gestión automatizada de flujos lácteos, llenado de cubas y trasiego sin turbulencias",
      badge: "AISI 316L",
      shortDescription: "Conjunto de valvulería higiénica, tubería curvada sin soldaduras rugosas, colector de distribución y bomba sanitaria para trasvase controlado y llenado de cubas.",
      fullDescription: "Diseñado a medida para la distribución centralizada de leche cruda o pasteurizada hacia cubas, pasteurizadores o depósitos pulmón. Fabricado íntegramente en tubería de acero inoxidable pulido AISI 316L con conexiones sanitarias DIN 11851 o Tri-Clamp. Integra válvulas de mariposa manuales o neumáticas de asiento simple/doble antigoteo, mirillas de flujo iluminadas y cuadro de control con selectores luminosos.",
      specs: [
        { label: "Material de contacto", value: "Acero Inoxidable AISI 316L calidad farmacéutica/alimentaria" },
        { label: "Conexiones estándar", value: "DIN 11851, SMS o Tri-Clamp según preferencia" },
        { label: "Caudal de trasiego", value: "De 2.000 L/h hasta 25.000 L/h" },
        { label: "Bombas compatibles", value: "Centrífugas sanitarias autoaspirantes o lobulares de desplazamiento positivo" },
        { label: "Válvulas", value: "Asiento inclinado, mariposa higiénica o mixproof a prueba de mezclas" },
        { label: "Instrumentación", value: "Caudalímetro electromagnético de alta precisión y manómetros sanitarios" }
      ],
      features: [
        "Curvado en frío y soldaduras orbitales con purga de argón interior libre de costuras.",
        "Diseño CIP 100% autodrenante sin retenciones de fluido ni esquinas vivas.",
        "Panel de maniobra con sinóptico de flujo visual para evitar errores de trasvase.",
        "Montaje en bastidor modular móvil o fijación mural perimetral."
      ],
      options: [
        "Integración de filtro de leche en línea de malla doble con cambio rápido.",
        "Automatización de llenado con dosificación por litros preconfigurada en pantalla.",
        "Válvulas con cabezal de control inteligente ASI o IO-Link con feedback de posición."
      ]
    },
    {
      id: "instalacion-automatizada",
      name: "Instalación Automatizada Integral de Quesería",
      tagline: "Proyectos llave en mano: desde recepción de leche hasta curación y limpieza CIP",
      badge: "Llave en Mano",
      shortDescription: "Ingeniería completa, diseño CAD 3D, fabricación de maquinaria, montaje in situ, puesta en marcha y programación SCADA/PLC para plantas queseras modernas.",
      fullDescription: "ARDI SL acomete proyectos integrales de plantas queseras adaptadas a queserías de ovino, caprino y vacuno. Coordinamos todas las fases del proyecto: dimensionamiento de salas, circuito de fluidos fríos y calientes, línea de pasterización continua a placas con desgasificador y recuperador térmico de hasta el 90%, cubas automatizadas, desuerado, trenes de prensado, salmueras dinámicas y central de limpieza CIP en circuito cerrado con recuperación de soluciones.",
      specs: [
        { label: "Alcance", value: "Ingeniería, fabricación, tubería de proceso, montaje, puesta en marcha" },
        { label: "Automatización", value: "PLC Siemens / Schneider con pantalla táctil HMI y registro SCADA" },
        { label: "Pasterización", value: "Pasterizador de placas de 500 a 10.000 L/h con registro gráfico oficial" },
        { label: "Sistema CIP", value: "Central CIP automatizada de 2, 3 o 4 depósitos (sosa, ácido, agua, desinfectante)" },
        { label: "Eficiencia energética", value: "Recuperación de calor >90% e intercambiadores de alta eficiencia" },
        { label: "Normativa", value: "Marcado CE completo, directiva 2006/42/CE y directivas de seguridad láctea" }
      ],
      features: [
        "Optimización de flujos y distribución espacial en salas blancas.",
        "Trazabilidad de lotes con registro digital de temperaturas, tiempos y recetas.",
        "Comunicación remota por VPN para teleasistencia técnica y soporte inmediato.",
        "Manuales técnicos de operación en español, fichas de componentes y esquemas eléctricos completos."
      ],
      options: [
        "Módulo de salado por inmersión con control de temperatura y recirculación de salmuera.",
        "Línea de transporte mecanizado para moldes y volteadores automáticos.",
        "Sistemas de envasado al vacío y etiquetado industrial coordinados."
      ]
    },
    {
      id: "caldereria-metalica",
      name: "Calderería y Carpintería Metálica Industrial",
      tagline: "Fabricación a medida en acero inoxidable, aluminio y acero al carbono",
      badge: "Taller Propio",
      shortDescription: "Estructuras, pasarelas higiénicas antideslizantes, depósitos singulares, tolvas, mesas de desuerado y carpintería técnica según planos del cliente.",
      fullDescription: "Con más de tres décadas de experiencia en nuestro taller de Oiartzun, nuestro equipo de caldereros y soldadores homologados ejecuta trabajos a medida con los mayores requerimientos mecánicos y estéticos. Fabricamos tolvas dosificadoras, mesas de trabajo con desagüe perimetral, plataformas elevadas para cubas, barandillas sanitarias, bastidores mecánicos y cerramientos industriales.",
      specs: [
        { label: "Materiales", value: "AISI 304, AISI 316L, AISI 316Ti, Aluminio, Acero al carbono" },
        { label: "Tecnología de soldadura", value: "TIG, MIG/MAG, soldadura por resistencia y arco sumergido" },
        { label: "Corte y conformado", value: "Plegado CNC, cizallado, curvado de tubo y perfiles" },
        { label: "Tratamientos finales", value: "Decapado por inmersión, pasivado ecológico, chorreado con microesferas de vidrio" },
        { label: "Formatos", value: "Desde piezas unitarias prototipo hasta series y estructuras complejas" }
      ],
      features: [
        "Diseño y desarrollo asistido por ordenador (SolidWorks / Inventor 3D).",
        "Control dimensional estricto y ensayos no destructivos de soldadura.",
        "Adaptación milimétrica a las cotas reales de las instalaciones del cliente."
      ],
      options: [
        "Acabado satinado mate, pulido brillo espejo o electropulido.",
        "Certificados de materiales 3.1 según EN 10204."
      ]
    },
    {
      id: "suministros-industriales",
      name: "Suministros y Valvulería Sanitaria Alimentaria",
      tagline: "Componentes certificados, racorería DIN/Clamp y bombas sanitarias",
      badge: "Stock Inmediato",
      shortDescription: "Suministro rápido de valvulería de mariposa, clapetas, racores, juntas alimentarias EPDM/FKM, mangueras técnicas y repuestos originales para la industria.",
      fullDescription: "Mantenemos un stock estratégico de recambios, elementos de conducción de fluidos y suministros para la industria agroalimentaria y quesera. Asesoramos técnicamente a los departamentos de mantenimiento para la selección idónea de elastómeros, materiales de cierre y bombas de reposición.",
      specs: [
        { label: "Racorería disponible", value: "DIN 11851, Clamp ISO 2852, SMS, RJT, IDF" },
        { label: "Juntas de estanqueidad", value: "EPDM, NBR, FKM (Viton), PTFE certificados FDA y CE 1935/2004" },
        { label: "Válvulas", value: "Mariposa, bola sanitaria, diafragma, retención, seguridad resorte" },
        { label: "Bombas", value: "Centrífugas sanitarias, de rotor helicoidal y lobulares" },
        { label: "Instrumentación", value: "Termómetros bimetálicos, manómetros con separador de membrana" }
      ],
      features: [
        "Entrega rápida y envíos directos a taller o fábrica.",
        "Asesoramiento técnico directo por especialistas en fluidos alimentarios.",
        "Garantía de compatibilidad higiénica total con las normativas europeas."
      ],
      options: [
        "Montaje previo de mangueras técnicas crimpadas con certificado de presión.",
        "Mantenimiento y kits de recambios periódicos."
      ]
    }
  ],
  components: {
    hero: {
      locationBadge: "Fabricantes en Oiartzun (Gipuzkoa)",
      sinceBadge: "Desde 1990",
      titleStart: "Maquinaria y Calderería en ",
      titleHighlight: "Acero Inoxidable",
      titleEnd: " para Queserías",
      descStart: "Especialistas en el diseño, fabricación a medida y montaje de cubas de cuajado, arcones desueradores, prensas y líneas automáticas. Calidad certificada en ",
      descHighlight: "AISI 304 y AISI 316L",
      descEnd: " para obradores artesanos y grandes plantas industriales.",
      exploreBtn: "Explorar Catálogo de Equipos",
      quoteBtn: "Solicitar Presupuesto",
      ceMark: "Marcado CE oficial",
      tigWeld: "Soldadura TIG sanitaria",
      onSite: "Montaje in situ en quesería",
      prodLines: "Líneas de Producción",
      inProd: "En fabricación",
      card1Title: "Cubas de Cuajar Holandesa",
      card1Sub: "300L - 5.000L",
      card1Desc: "Corte mecanizado por liras con variador e intercambio térmico con camisa.",
      card2Title: "Arcones y Prensas Neumáticas",
      card2Sub: "Presión digital",
      card2Desc: "Desuerado continuo con microperforación desmontable y prensado por columnas.",
      card3Title: "Líneas Llave en Mano",
      card3Sub: "Automatizadas",
      card3Desc: "Proyectos completos desde recepción y pasterización hasta limpieza CIP.",
      adviseBtn: "Pedir asesoramiento técnico directo"
    },
    about: {
      historyBadge: "Más de Tres Décadas de Trayectoria",
      titleStart: "Tradición en Calderería y Vanguardia en ",
      titleHighlight: "Maquinaria Sanitaria",
      desc1Start: "Fundada en 1990 en el ",
      desc1Highlight1: "Polígono Industrial Pagoaldea de Oiartzun (Gipuzkoa)",
      desc1Mid: ", en ",
      desc1Highlight2: "ARDI SL",
      desc1End: " nos hemos consolidado como referente en el diseño y fabricación integral de maquinaria en acero inoxidable para la industria láctea, quesera y alimentaria.",
      desc2: "Nuestro valor diferencial reside en el dominio exhaustivo de la calderería fina y la soldadura sanitaria TIG con purga de argón interior. No somos meros distribuidores: construimos cada cuba, cada arcón desuerador y cada línea de prensado a partir de chapa y perfiles de aceros nobles AISI 304 y 316L, dotando a cada equipo de robustez mecánica y acabados sanitarios impecables sin recovecos.",
      ceTitle: "Marcado CE Oficial",
      ceDesc: "Cumplimiento estricto de la directiva de máquinas 2006/42/CE.",
      steelTitle: "Acero AISI 316L",
      steelDesc: "Resistencia superior a cloruros, salmueras y ácidos de limpieza.",
      imgTitle: "Instalaciones Propias en Oiartzun",
      imgSub: "Pabellón 65, Polígono Pagoaldea",
      imgBadge: "Gipuzkoa",
      pillarsTitle: "Los Cuatro Pilares de Calidad ARDI",
      pillarsDesc: "Riguroso estándar de diseño mecánico y seguridad biológica en cada componente.",
      methodBadge: "Metodología de Trabajo",
      methodTitle: "De la Idea a la Primera Cuajada",
      methodDesc: "Un proceso riguroso y transparente paso a paso para asegurar el éxito de su inversión."
    },
    contact: {
      directAttention: "Atención Directa al Profesional",
      titleStart: "Contacte con Nuestro ",
      titleHighlight: "Equipo Técnico",
      desc: "Estamos en Oiartzun a su entera disposición. Consúltenos cualquier duda sobre dimensiones, capacidades, plazos de entrega o solicite presupuesto sin compromiso.",
      phonesTitle: "Teléfonos de Atención",
      emailTitle: "Correo Electrónico",
      hqTitle: "Sede y Taller Central",
      country: "España",
      hoursTitle: "Horario de Fabricación y Atención",
      mapsBtn: "Ver ubicación en Google Maps",
      successTitle: "¡Mensaje Recibido Correctamente!",
      successDesc1: "Muchas gracias, ",
      successDesc2: ". Hemos recibido su consulta sobre ",
      successDesc3: ". En un plazo máximo de 24 horas laborables un técnico comercial le responderá.",
      successBtn: "Enviar otra consulta",
      formTitle: "Formulario de Solicitud de Información",
      formMandatory: "* Campos obligatorios",
      lblName: "Nombre y Apellidos / Empresa *",
      phName: "Ej. Juan Pérez - Quesos del Valle",
      lblEmail: "Correo Electrónico *",
      phEmail: "contacto@ejemplo.com",
      lblPhone: "Teléfono de Contacto *",
      phPhone: "+34 600 000 000",
      lblSubject: "Asunto / Línea de Interés *",
      opt1: "Solicitar presupuesto de maquinaria",
      opt2: "Cubas de Elaboración (Holandesa / Doblecero)",
      opt3: "Arcón Desuerador y Preprensado",
      opt4: "Prensas de Quesos Neumáticas",
      opt5: "Túnel de Lavado de Moldes",
      opt6: "Distribuidor de Leche y Válvulas Inox",
      opt7: "Proyecto Llave en Mano de Quesería",
      opt8: "Calderería y Carpintería Metálica a Medida",
      opt9: "Suministros y Recambios Sanitarios",
      opt10: "Otro asunto técnico",
      lblMsg: "Mensaje / Requerimientos Técnicos *",
      phMsg: "Describa el equipo, volumen diario de leche, dimensiones disponibles o dudas técnicas...",
      privacyPrefix: "He leído y acepto la ",
      privacyLink: "política de privacidad y protección de datos",
      privacySuffix: " para la gestión y respuesta de mi solicitud comercial.",
      btnSubmitting: "Enviando mensaje...",
      btnSubmit: "Enviar Mensaje a ARDI SL",
      errName: "Por favor, indique su nombre o empresa.",
      errEmail: "Introduzca un correo electrónico válido.",
      errPhone: "Indique un teléfono para que podamos contactarle.",
      errMsg: "El mensaje debe contener al menos 10 caracteres explicativos.",
      errPrivacy: "Debe aceptar la política de privacidad para enviar la consulta.",
      msgSuccess: "¡Mensaje enviado con éxito! Nos pondremos en contacto con usted a la mayor brevedad.",
      copied: "copiado al portapapeles"
    },
    footer: {
      brandSub: "Maquinaria & Calderería Inox",
      brandDesc: "Desde 1990 fabricando maquinaria en acero inoxidable AISI 304/316L para queserías y la industria agroalimentaria. Ingeniería propia, solidez mecánica y compromiso sanitario.",
      ceMark: "Marcado CE según Directiva 2006/42/CE",
      navTitle: "Navegación",
      navHome: "Inicio",
      navCatalog: "Catálogo de Productos",
      navAbout: "Quiénes Somos",
      navMethod: "Metodología",
      navContact: "Contacto & Ubicación",
      linesTitle: "Líneas de Maquinaria",
      contactTitle: "Contacto Oiartzun",
      rights: "Todos los derechos reservados.",
      legalNotice: "Aviso Legal",
      privacyPolicy: "Política de Privacidad",
      cookiesPolicy: "Política de Cookies",
      location: "Oiartzun • Gipuzkoa (País Vasco)",
      backTop: "Volver arriba"
    },
    header: {
      barLoc: "Oiartzun (Gipuzkoa) • Fabricación propia en acero inox",
      barCe: "Marcado CE y Calidad Alimentaria AISI 304/316L",
      brandSub: "Maquinaria & Calderería Inox",
      btnQuote: "Solicitar presupuesto"
    },
    catalog: {
      titleStart: "Catálogo de ",
      titleHighlight: "Maquinaria Industrial",
      desc: "Equipos fabricados a medida en acero inoxidable AISI 304/316L, diseñados para maximizar el rendimiento y garantizar la máxima higiene en el sector lácteo.",
      filterLbl: "Filtrar catálogo:",
      filterAll: "Todos los Equipos",
      badgeCustom: "Fabricación a medida",
      btnView: "Ver Ficha Técnica",
      btnQuote: "Cotizar",
      ctaTitle: "¿No encuentra el equipo exacto para su línea de producción?",
      ctaDesc: "Nuestro departamento de ingeniería (Oficina Técnica) desarrolla soluciones personalizadas y realiza modificaciones sobre catálogo para adaptarnos 100% al espacio y capacidad de su quesería.",
      ctaBtn: "Consultar Fabricación a Medida"
    }
  }
};

export default es;
export type Dictionary = typeof es;
