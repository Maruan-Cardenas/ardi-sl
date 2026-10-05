import { Dictionary } from "./es";

export const fr: Dictionary = {
  common: {
    viewFullCatalog: "Voir le catalogue complet",
    contact: "Contact",
    aboutUs: "Qui sommes-nous",
    productCatalog: "Catalogue de produits",
    home: "Accueil",
    sendMessage: "Envoyer un message",
  },
  company: {
    tagline: "Chaudronnerie et machines en acier inoxydable pour fromageries et secteur industriel",
    slogan: "Innovation hygiénique, robustesse artisanale et précision en acier inoxydable",
    description: "Avec plus de 30 ans d'expérience à Oiartzun (Gipuzkoa), ARDI SL conçoit, fabrique et met en service des machines haut de gamme en acier inoxydable AISI 304 et AISI 316L pour les fromageries, les coopératives laitières et l'industrie agroalimentaire. Nous fournissons des solutions techniques sur mesure avec une chaudronnerie de haute précision et un respect strict des normes d'hygiène européennes.",
    stats: {
      expLabel: "Années d'expérience",
      expSub: "Fabrication à Oiartzun",
      equipLabel: "Équipements installés",
      equipSub: "En Espagne, en France et en Europe",
      steelLabel: "Acier Inoxydable",
      steelSub: "AISI 304 et 316L certifié",
      normLabel: "Norme Européenne",
      normSub: "Directive 2006/42/CE"
    },
    pillars: [
      {
        title: "Chaudronnerie Sanitaire de Précision",
        description: "Soudure TIG et orbitale purgée au gaz argon. Traitements de polissage mécanique et de passivation garantissant des rugosités Ra < 0,6 µm, éliminant les recoins et garantissant une stérilité biologique maximale."
      },
      {
        title: "Ingénierie 3D et Personnalisation",
        description: "Chaque atelier et salle d'égouttage est unique. Nous modélisons chaque équipement en CAO 3D en nous adaptant aux dimensions, plafonds, accès et débits spécifiques de l'exploitation du client."
      },
      {
        title: "Matériaux Nobles Certifiés",
        description: "Nous n'utilisons que des aciers inoxydables d'origine communautaire avec certificat de coulée 3.1 selon EN 10204. Joints et composants approuvés par la FDA pour le contact direct avec les aliments."
      },
      {
        title: "Montage et Mise en Service Sur Site",
        description: "Nous ne laissons pas une machine sur une palette à la porte. Nos techniciens se déplacent dans vos installations pour raccorder les fluides, valider les cycles thermiques et former le personnel de votre fromagerie."
      }
    ],
    processSteps: [
      {
        title: "Conseil et Collecte de Données",
        description: "Nous étudions votre type de lait (brebis, vache, chèvre), type de fromage (pâte pressée, pâte molle, affinés) et capacité quotidienne."
      },
      {
        title: "Conception CAO 3D et Offre Technique",
        description: "Nous présentons un plan d'implantation 3D détaillant les cotes, les consommations énergétiques, les raccordements pneumatiques et un devis détaillé."
      },
      {
        title: "Fabrication dans Notre Propre Atelier",
        description: "Découpe, formage, soudure spécialisée et finition de surface dans nos installations d'Oiartzun."
      },
      {
        title: "Livraison, Montage et Formation",
        description: "Raccordement complet, tests hydrostatiques à vide et avec produit, remise de la documentation et marquage CE officiel."
      }
    ]
  },
  productCategories: {
    elaboracion: "Élaboration",
    prensadoDesuerado: "Pressage et Égouttage",
    lavadoSanidad: "Lavage et Assainissement",
    automatizacion: "Automatisation",
    caldereriaSuministros: "Chaudronnerie et Fournitures",
  },
  products: [
    {
      id: "cubas-elaboracion",
      name: "Cuves d'Élaboration (Hollandaise et Double O)",
      tagline: "Le noyau hygiénique pour le caillage, la coupe et le chauffage de précision",
      badge: "Haute Précision",
      shortDescription: "Cuves circulaires et fermées 'double O' conçues en acier AISI 304/316L pour le caillage thermique, la coupe mécanique par tranche-caillé et l'agitation homogène avec un minimum de bris de grain.",
      fullDescription: "Nos cuves d'élaboration représentent le summum de la chaudronnerie sanitaire appliquée aux fromageries artisanales et industrielles. Disponibles en configuration ouverte de type hollandaise ou totalement fermée verticale/horizontale double O. Elles disposent d'une double paroi calorifugée avec isolation en laine de roche, d'une chemise périmétrique d'échange thermique pour l'eau chaude, la vapeur ou l'eau glacée, et d'un circuit CIP autonettoyant. Les tranche-caillés à coupe hélicoïdale et les pales d'agitation sont conçus pour maximiser le rendement fromager et éviter les pertes dues à la poussière de caillé.",
      specs: [
        { label: "Capacités standards", value: "300 L jusqu'à 5.000 L (sur mesure)" },
        { label: "Matériau de construction", value: "Acier Inoxydable AISI 304 / AISI 316L" },
        { label: "Finition de surface", value: "Polissage sanitaire miroir Ra < 0,6 µm" },
        { label: "Système de chauffage", value: "Double enveloppe vapeur ou eau chaude (jusqu'à 3 bar)" },
        { label: "Vitesse d'agitation", value: "Variateur électronique 0-45 tr/min avec inversion de rotation" },
        { label: "Contrôle", value: "Écran tactile automate programmable avec courbes de température" }
      ],
      features: [
        "Tranche-caillés à coupe croisée avec fil en acier inoxydable à haute tension.",
        "Vanne de fond sanitaire sans zones mortes type papillon ou pneumatique.",
        "Fond conique ou incliné pour vidange par gravité ou par pompe à lobes 100% complète.",
        "Trou d'homme d'inspection avec regard étanche et luminaire LED sanitaire.",
        "Système d'inclinaison pneumatique pour déchargement optimisé du caillé."
      ],
      options: [
        "Sonde de pH et conductivité en ligne.",
        "Pompe de recirculation de caillé intégrée.",
        "Enregistreur de données numérique pour traçabilité HACCP.",
        "Châssis sur pieds réglables ou roulettes sanitaires orientables."
      ]
    },
    {
      id: "arcon-desuerado",
      name: "Bac d'Égouttage et de Pré-pressage",
      tagline: "Drainage optimal du lactosérum et pré-pressage homogène sans poches d'air",
      badge: "Efficacité Fromagère",
      shortDescription: "Équipement essentiel pour le drainage contrôlé du lactosérum et le pré-pressage du caillé au moyen de tôles microperforées amovibles et de plaques de pressage pneumatique.",
      fullDescription: "Le bac d'égouttage ARDI permet de canaliser la masse de caillé provenant de la cuve, de répartir le grain de manière régulière et uniforme, et de le soumettre à un pré-pressage immergé ou drainé avant le moulage. Sa structure robuste en acier inoxydable massif intègre un faux fond en tôle perforée facilement extractible pour un nettoyage en profondeur, une guillotine frontale pour la coupe et l'extraction en blocs, et un pont de cylindres pneumatiques pour le compactage uniforme de la pâte.",
      specs: [
        { label: "Dimensions", value: "Longueurs de 1.500 mm à 4.000 mm personnalisables" },
        { label: "Matériau", value: "Acier Inox AISI 304 décapé et passivé" },
        { label: "Faux fond", value: "Tôle avec microperforation conique sanitaire de 1,2 mm" },
        { label: "Cylindres de pressage", value: "De 2 à 6 pistons pneumatiques indépendants" },
        { label: "Évacuation du lactosérum", value: "Vanne inférieure DN-65 avec tamis collecteur" },
        { label: "Pression maximale", value: "6 bar d'air comprimé filtré" }
      ],
      features: [
        "Guillotine frontale avec ouverture progressive et fermeture hermétique.",
        "Règles de coupe longitudinale et transversale pour blocs de masse exacts.",
        "Plaques de pré-pressage à microperforation extractibles sans outils.",
        "Récipient de lactosérum à fond incliné et sortie directe vers cuve de stockage."
      ],
      options: [
        "Système de coupe semi-automatique motorisé pour le portionnement du caillé.",
        "Collecteur d'aspiration sous vide pour un égouttage ultra-rapide.",
        "Trémie orientable pour réception directe de la cuve à cailler."
      ]
    },
    {
      id: "prensas-quesos",
      name: "Presses à Fromage Pneumatiques et Continues",
      tagline: "Pression homogène, contrôle millimétrique et réglage individualisé par colonne",
      badge: "Robuste et Précise",
      shortDescription: "Presses verticales ou horizontales avec pistons pneumatiques en acier inoxydable indépendants, régulateurs de pression individuels et bacs de récupération de lactosérum.",
      fullDescription: "Conçues pour garantir une croûte parfaite et une évacuation progressive du lactosérum sans fermer prématurément les pores. Chaque colonne de pressage dispose de son propre manomètre et détendeur de précision, ce qui permet de travailler simultanément avec différents types ou tailles de moules (des fromages de 500 g aux formats de 12 kg). La structure en profil tubulaire fermé en acier inoxydable empêche toute rétention d'humidité ou de bactéries.",
      specs: [
        { label: "Configuration", value: "Verticale (de 1 à 10 colonnes) ou Horizontale continue" },
        { label: "Capacité de moules", value: "De 10 à 120 moules simultanés" },
        { label: "Pistons", value: "Cylindres pneumatiques AISI 304 à double effet" },
        { label: "Pression de serrage", value: "Réglable de 0,5 à 6 kg/cm² indépendamment par colonne" },
        { label: "Récupération de lactosérum", value: "Bacs intégrés canalisés avec trop-plein" },
        { label: "Sécurité", value: "Clapets anti-retour et bouton d'arrêt d'urgence" }
      ],
      features: [
        "Plateaux de pressage autocentreurs compatibles avec des moules de formes et hauteurs variées.",
        "Bacs basculants ou fixes en acier inoxydable poli.",
        "Colonnes télescopiques à crémaillère ou goupilles rapides pour réglage en hauteur.",
        "Traitement de surface résistant aux saumures et acides lactiques."
      ],
      options: [
        "Contrôle PLC avec recettes programmables de pressage étagé en 4 phases automatiques.",
        "Presses continues avec tapis roulant d'entrée/sortie pour haute production.",
        "Capteurs de proximité de fin de course et de détection de désalignement."
      ]
    },
    {
      id: "tunel-lavado-moldes",
      name: "Tunnel de Lavage de Moules Manuel et Semi-Automatique",
      tagline: "Hygiène biologique rigoureuse, recirculation de l'eau et faible consommation d'énergie",
      badge: "Hygiène Totale",
      shortDescription: "Installation compacte pour le lavage, la désinfection et le rinçage intensif de moules, couvercles et plateaux fromagers avec buses de projection multidirectionnelles.",
      fullDescription: "Le tunnel de lavage ARDI SL répond aux exigences les plus strictes en matière de sécurité alimentaire. Configuré en une ou deux étapes (lavage avec détergent alcalin à 55-65°C et rinçage final avec de l'eau de réseau désinfectée). Il dispose d'une pompe centrifuge haute pression en acier inoxydable, d'une cuve avec résistances électriques blindées ou échangeur de vapeur, d'une filtration continue des impuretés et d'une rampe de buses rotatives à haute couverture.",
      specs: [
        { label: "Capacité de production", value: "80 à 350 moules/heure selon le modèle" },
        { label: "Zones de lavage", value: "Phase 1: Lavage chimique / Phase 2: Rinçage final" },
        { label: "Pompe de refoulement", value: "Centrifuge sanitaire AISI 316L (3 kW à 5,5 kW)" },
        { label: "Chauffage de l'eau", value: "Résistances électriques ou serpentin de vapeur" },
        { label: "Filtration", value: "Panier de tamisage extractible en acier perforé facile à vider" },
        { label: "Dimensions", value: "Conception compacte optimisée pour les petites salles de fromagerie" }
      ],
      features: [
        "Buses de pulvérisation à angle plat et cône creux démontables.",
        "Système d'avancement par pousseur manuel continu ou tapis motorisé avec variateur.",
        "Cloche supérieure avec amortisseurs à gaz pour un accès total et un nettoyage rapide.",
        "Isolation thermique dans la cuve de détergent pour une économie d'électricité maximale."
      ],
      options: [
        "Module de soufflage et de séchage avec ventilateur centrifuge et lame d'air.",
        "Pompe doseuse automatique de détergent et désinfectant par conductivité.",
        "Condenseur de vapeurs pour éliminer l'humidité dans la salle de travail."
      ]
    },
    {
      id: "distribuidor-leche",
      name: "Distributeur de Lait et Collecteur Sanitaire",
      tagline: "Gestion automatisée des flux laitiers, remplissage de cuves et transfert sans turbulences",
      badge: "AISI 316L",
      shortDescription: "Ensemble de vannes hygiéniques, de tuyauterie cintrée sans soudures rugueuses, d'un collecteur de distribution et d'une pompe sanitaire pour le transfert contrôlé et le remplissage des cuves.",
      fullDescription: "Conçu sur mesure pour la distribution centralisée de lait cru ou pasteurisé vers les cuves, pasteurisateurs ou cuves tampons. Fabriqué entièrement en tuyauterie d'acier inoxydable poli AISI 316L avec raccords sanitaires DIN 11851 ou Tri-Clamp. Intègre des vannes papillon manuelles ou pneumatiques à simple/double siège anti-goutte, des regards de flux éclairés et un panneau de commande avec sélecteurs lumineux.",
      specs: [
        { label: "Matériau de contact", value: "Acier Inoxydable AISI 316L qualité pharmaceutique/alimentaire" },
        { label: "Raccords standards", value: "DIN 11851, SMS ou Tri-Clamp selon préférence" },
        { label: "Débit de transfert", value: "De 2.000 L/h à 25.000 L/h" },
        { label: "Pompes compatibles", value: "Centrifuges sanitaires auto-amorçantes ou à lobes à déplacement positif" },
        { label: "Vannes", value: "Siège incliné, papillon hygiénique ou mixproof anti-mélange" },
        { label: "Instrumentation", value: "Débitmètre électromagnétique haute précision et manomètres sanitaires" }
      ],
      features: [
        "Cintrage à froid et soudures orbitales avec purge d'argon intérieur sans coutures.",
        "Conception CIP 100% autodrainante sans rétentions de fluide ni angles vifs.",
        "Panneau de manœuvre avec synoptique de flux visuel pour éviter les erreurs de transfert.",
        "Montage sur châssis modulaire mobile ou fixation murale périmétrique."
      ],
      options: [
        "Intégration d'un filtre à lait en ligne à double maille avec changement rapide.",
        "Automatisation du remplissage avec dosage par litres préconfiguré sur écran.",
        "Vannes avec tête de commande intelligente ASI ou IO-Link avec retour de position."
      ]
    },
    {
      id: "instalacion-automatizada",
      name: "Installation Automatisée Intégrale de Fromagerie",
      tagline: "Projets clés en main: de la réception du lait à l'affinage et nettoyage CIP",
      badge: "Clés en Main",
      shortDescription: "Ingénierie complète, conception CAO 3D, fabrication de machines, montage sur site, mise en service et programmation SCADA/PLC pour usines fromagères modernes.",
      fullDescription: "ARDI SL réalise des projets intégraux d'usines fromagères adaptées aux fromageries ovines, caprines et bovines. Nous coordonnons toutes les phases du projet: dimensionnement des salles, circuit des fluides froids et chauds, ligne de pasteurisation continue à plaques avec dégazeur et récupérateur thermique jusqu'à 90%, cuves automatisées, égouttage, trains de pressage, saumures dynamiques et centrale de nettoyage CIP en circuit fermé avec récupération des solutions.",
      specs: [
        { label: "Portée", value: "Ingénierie, fabrication, tuyauterie de processus, montage, mise en service" },
        { label: "Automatisation", value: "PLC Siemens / Schneider avec écran tactile HMI et enregistrement SCADA" },
        { label: "Pasteurisation", value: "Pasteurisateur à plaques de 500 à 10.000 L/h avec enregistrement graphique officiel" },
        { label: "Système CIP", value: "Centrale CIP automatisée de 2, 3 ou 4 cuves (soude, acide, eau, désinfectant)" },
        { label: "Efficacité énergétique", value: "Récupération de chaleur >90% et échangeurs à haut rendement" },
        { label: "Norme", value: "Marquage CE complet, directive 2006/42/CE et directives de sécurité laitière" }
      ],
      features: [
        "Optimisation des flux et de la distribution spatiale dans les salles blanches.",
        "Traçabilité des lots avec enregistrement numérique des températures, des temps et des recettes.",
        "Communication à distance par VPN pour téléassistance technique et support immédiat.",
        "Manuels techniques d'exploitation en espagnol, fiches de composants et schémas électriques complets."
      ],
      options: [
        "Module de salage par immersion avec contrôle de la température et recirculation de la saumure.",
        "Ligne de transport mécanisé pour moules et retourneurs automatiques.",
        "Systèmes d'emballage sous vide et d'étiquetage industriel coordonnés."
      ]
    },
    {
      id: "caldereria-metalica",
      name: "Chaudronnerie et Menuiserie Métallique Industrielle",
      tagline: "Fabrication sur mesure en acier inoxydable, aluminium et acier au carbone",
      badge: "Atelier Propre",
      shortDescription: "Structures, passerelles hygiéniques antidérapantes, cuves singulières, trémies, tables d'égouttage et menuiserie technique selon les plans du client.",
      fullDescription: "Avec plus de trois décennies d'expérience dans notre atelier d'Oiartzun, notre équipe de chaudronniers et soudeurs homologués exécute des travaux sur mesure avec les plus grandes exigences mécaniques et esthétiques. Nous fabriquons des trémies de dosage, des tables de travail avec drainage périmétrique, des plateformes surélevées pour cuves, des garde-corps sanitaires, des châssis mécaniques et des clôtures industrielles.",
      specs: [
        { label: "Matériaux", value: "AISI 304, AISI 316L, AISI 316Ti, Aluminium, Acier au carbone" },
        { label: "Technologie de soudage", value: "TIG, MIG/MAG, soudage par résistance et arc submergé" },
        { label: "Découpe et formage", value: "Pliage CNC, cisaillage, cintrage de tubes et de profilés" },
        { label: "Traitements finaux", value: "Décapage par immersion, passivation écologique, sablage aux microbilles de verre" },
        { label: "Formats", value: "De la pièce unitaire prototype aux séries et structures complexes" }
      ],
      features: [
        "Conception et développement assistés par ordinateur (SolidWorks / Inventor 3D).",
        "Contrôle dimensionnel strict et essais non destructifs de soudure.",
        "Adaptation millimétrique aux cotes réelles des installations du client."
      ],
      options: [
        "Finition satinée mate, polissage miroir brillant ou électropolissage.",
        "Certificats de matériaux 3.1 selon EN 10204."
      ]
    },
    {
      id: "suministros-industriales",
      name: "Fournitures et Vannes Sanitaires Alimentaires",
      tagline: "Composants certifiés, raccords DIN/Clamp et pompes sanitaires",
      badge: "Stock Immédiat",
      shortDescription: "Fourniture rapide de vannes papillon, clapets, raccords, joints alimentaires EPDM/FKM, tuyaux techniques et pièces de rechange d'origine pour l'industrie.",
      fullDescription: "Nous maintenons un stock stratégique de pièces de rechange, d'éléments de conduction de fluides et de fournitures pour l'industrie agroalimentaire et fromagère. Nous conseillons techniquement les départements de maintenance pour la sélection idéale des élastomères, des matériaux d'étanchéité et des pompes de remplacement.",
      specs: [
        { label: "Raccords disponibles", value: "DIN 11851, Clamp ISO 2852, SMS, RJT, IDF" },
        { label: "Joints d'étanchéité", value: "EPDM, NBR, FKM (Viton), PTFE certifiés FDA et CE 1935/2004" },
        { label: "Vannes", value: "Papillon, à bille sanitaire, à membrane, clapet anti-retour, soupape de sécurité à ressort" },
        { label: "Pompes", value: "Centrifuges sanitaires, à rotor hélicoïdal et à lobes" },
        { label: "Instrumentation", value: "Thermomètres bimétalliques, manomètres à séparateur à membrane" }
      ],
      features: [
        "Livraison rapide et expéditions directes à l'atelier ou à l'usine.",
        "Conseil technique direct par des spécialistes en fluides alimentaires.",
        "Garantie de compatibilité hygiénique totale avec les réglementations européennes."
      ],
      options: [
        "Montage préalable de tuyaux techniques sertis avec certificat de pression.",
        "Maintenance et kits de pièces de rechange périodiques."
      ]
    }
  ],
  components: {
    hero: {
      locationBadge: "Fabricants à Oiartzun (Gipuzkoa)",
      sinceBadge: "Depuis 1990",
      titleStart: "Machines et Chaudronnerie en ",
      titleHighlight: "Acier Inoxydable",
      titleEnd: " pour Fromageries",
      descStart: "Spécialistes dans la conception, la fabrication sur mesure et le montage de cuves de caillage, bacs d'égouttage, presses et lignes automatiques. Qualité certifiée en ",
      descHighlight: "AISI 304 et AISI 316L",
      descEnd: " pour ateliers artisanaux et grandes usines industrielles.",
      exploreBtn: "Explorer le Catalogue d'Équipements",
      quoteBtn: "Demander un Devis",
      ceMark: "Marquage CE officiel",
      tigWeld: "Soudure TIG sanitaire",
      onSite: "Montage sur site en fromagerie",
      prodLines: "Lignes de Production",
      inProd: "En fabrication",
      card1Title: "Cuves à Cailler Hollandaise",
      card1Sub: "300L - 5.000L",
      card1Desc: "Coupe mécanisée par tranche-caillés avec variateur et échange thermique avec chemise.",
      card2Title: "Bacs et Presses Pneumatiques",
      card2Sub: "Pression numérique",
      card2Desc: "Égouttage continu avec microperforation amovible et pressage par colonnes.",
      card3Title: "Lignes Clés en Main",
      card3Sub: "Automatisées",
      card3Desc: "Projets complets de la réception et pasteurisation jusqu'au nettoyage CIP.",
      adviseBtn: "Demander des conseils techniques directs"
    },
    about: {
      historyBadge: "Plus de Trois Décennies d'Expérience",
      titleStart: "Tradition en Chaudronnerie et Avant-garde en ",
      titleHighlight: "Machines Sanitaires",
      desc1Start: "Fondée en 1990 dans le ",
      desc1Highlight1: "Zone Industrielle Pagoaldea d'Oiartzun (Gipuzkoa)",
      desc1Mid: ", chez ",
      desc1Highlight2: "ARDI SL",
      desc1End: " nous nous sommes consolidés comme une référence dans la conception et la fabrication intégrale de machines en acier inoxydable pour l'industrie laitière, fromagère et agroalimentaire.",
      desc2: "Notre valeur ajoutée réside dans la maîtrise exhaustive de la chaudronnerie fine et de la soudure sanitaire TIG avec purge d'argon intérieur. Nous ne sommes pas de simples distributeurs : nous construisons chaque cuve, chaque bac d'égouttage et chaque ligne de pressage à partir de tôles et profilés en aciers nobles AISI 304 et 316L, dotant chaque équipement d'une robustesse mécanique et de finitions sanitaires impeccables sans recoins.",
      ceTitle: "Marquage CE Officiel",
      ceDesc: "Respect strict de la directive machines 2006/42/CE.",
      steelTitle: "Acier AISI 316L",
      steelDesc: "Résistance supérieure aux chlorures, saumures et acides de nettoyage.",
      imgTitle: "Installations Propres à Oiartzun",
      imgSub: "Pavillon 65, Zone Industrielle Pagoaldea",
      imgBadge: "Gipuzkoa",
      pillarsTitle: "Les Quatre Piliers de Qualité ARDI",
      pillarsDesc: "Norme rigoureuse de conception mécanique et de sécurité biologique dans chaque composant.",
      methodBadge: "Méthodologie de Travail",
      methodTitle: "De l'Idée au Premier Caillage",
      methodDesc: "Un processus rigoureux et transparent étape par étape pour assurer le succès de votre investissement."
    },
    contact: {
      directAttention: "Attention Directe aux Professionnels",
      titleStart: "Contactez Notre ",
      titleHighlight: "Équipe Technique",
      desc: "Nous sommes à Oiartzun à votre entière disposition. Consultez-nous pour toute question sur les dimensions, capacités, délais de livraison ou demandez un devis sans engagement.",
      phonesTitle: "Téléphones d'Assistance",
      emailTitle: "Courrier Électronique",
      hqTitle: "Siège et Atelier Central",
      country: "Espagne",
      hoursTitle: "Horaires de Fabrication et d'Assistance",
      mapsBtn: "Voir l'emplacement sur Google Maps",
      successTitle: "Message Reçu Correctement !",
      successDesc1: "Merci beaucoup, ",
      successDesc2: ". Nous avons reçu votre demande concernant ",
      successDesc3: ". Dans un délai maximum de 24 heures ouvrables, un technico-commercial vous répondra.",
      successBtn: "Envoyer une autre demande",
      formTitle: "Formulaire de Demande d'Information",
      formMandatory: "* Champs obligatoires",
      lblName: "Nom et Prénoms / Entreprise *",
      phName: "Ex. Jean Dupont - Fromages de la Vallée",
      lblEmail: "Courrier Électronique *",
      phEmail: "contact@exemple.com",
      lblPhone: "Téléphone de Contact *",
      phPhone: "+33 6 00 00 00 00",
      lblSubject: "Sujet / Ligne d'Intérêt *",
      opt1: "Demander un devis de machines",
      opt2: "Cuves d'Élaboration (Hollandaise / Double O)",
      opt3: "Bac d'Égouttage et Pré-pressage",
      opt4: "Presses à Fromages Pneumatiques",
      opt5: "Tunnel de Lavage de Moules",
      opt6: "Distributeur de Lait et Vannes Inox",
      opt7: "Projet Clés en Main de Fromagerie",
      opt8: "Chaudronnerie et Menuiserie Métallique sur Mesure",
      opt9: "Fournitures et Pièces de Rechange Sanitaires",
      opt10: "Autre sujet technique",
      lblMsg: "Message / Exigences Techniques *",
      phMsg: "Décrivez l'équipement, le volume quotidien de lait, les dimensions disponibles ou vos doutes techniques...",
      privacyPrefix: "J'ai lu et j'accepte la ",
      privacyLink: "politique de confidentialité et de protection des données",
      privacySuffix: " pour la gestion et la réponse à ma demande commerciale.",
      btnSubmitting: "Envoi du message...",
      btnSubmit: "Envoyer le Message à ARDI SL",
      errName: "Veuillez indiquer votre nom ou votre entreprise.",
      errEmail: "Veuillez saisir une adresse e-mail valide.",
      errPhone: "Veuillez indiquer un téléphone pour que nous puissions vous contacter.",
      errMsg: "Le message doit contenir au moins 10 caractères explicatifs.",
      errPrivacy: "Vous devez accepter la politique de confidentialité pour envoyer la demande.",
      msgSuccess: "Message envoyé avec succès ! Nous vous contacterons dans les plus brefs délais.",
      copied: "copié dans le presse-papiers"
    },
    footer: {
      brandSub: "Machines & Chaudronnerie Inox",
      brandDesc: "Depuis 1990, nous fabriquons des machines en acier inoxydable AISI 304/316L pour les fromageries et l'industrie agroalimentaire. Ingénierie propre, solidité mécanique et engagement sanitaire.",
      ceMark: "Marquage CE selon la Directive 2006/42/CE",
      navTitle: "Navigation",
      navHome: "Accueil",
      navCatalog: "Catalogue de Produits",
      navAbout: "Qui Sommes-Nous",
      navMethod: "Méthodologie",
      navContact: "Contact & Emplacement",
      linesTitle: "Lignes de Machines",
      contactTitle: "Contact Oiartzun",
      rights: "Tous droits réservés.",
      legalNotice: "Mentions Légales",
      privacyPolicy: "Politique de Confidentialité",
      cookiesPolicy: "Politique de Cookies",
      location: "Oiartzun • Gipuzkoa (Pays Basque)",
      backTop: "Retour en haut"
    },
    header: {
      barLoc: "Oiartzun (Gipuzkoa) • Fabrication propre en acier inox",
      barCe: "Marquage CE et Qualité Alimentaire AISI 304/316L",
      brandSub: "Machines & Chaudronnerie Inox",
      btnQuote: "Demander un devis"
    },
    catalog: {
      titleStart: "Catalogue de ",
      titleHighlight: "Machines Industrielles",
      desc: "Équipements fabriqués sur mesure en acier inoxydable AISI 304/316L, conçus pour maximiser le rendement et garantir une hygiène maximale dans le secteur laitier.",
      filterLbl: "Filtrer le catalogue :",
      filterAll: "Tous les Équipements",
      badgeCustom: "Fabrication sur mesure",
      btnView: "Voir Fiche Technique",
      btnQuote: "Obtenir un Devis",
      ctaTitle: "Vous ne trouvez pas l'équipement exact pour votre ligne de production ?",
      ctaDesc: "Notre département d'ingénierie (Bureau Technique) développe des solutions personnalisées et effectue des modifications sur catalogue pour s'adapter à 100% à l'espace et à la capacité de votre fromagerie.",
      ctaBtn: "Consulter pour Fabrication sur Mesure"
    }
  }
};

export default fr;
