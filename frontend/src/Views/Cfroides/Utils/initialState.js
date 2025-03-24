const initialState = {
  data: {
    projet: {
      id: 'projet',
      name: 'projet',
      label: 'projet',
      value: 'NomDeLAffaire',
      description: 'Nom du projet',
      unit: { value: '', label: '' },
      standard: '',
      reference: '',
    },
    file: {
      id: 'file',
      name: 'file',
      label: 'file',
      value: '',
      description: 'Nom du fichier',
      unit: { value: '', label: '' },
      standard: '',
      reference: '',
    },
    version: {
      id: 'version',
      name: 'version',
      label: 'version',
      value: '0',
      description: 'Version du projet',
      unit: { value: '', label: '' },
      standard: '',
      reference: '',
    },
    responsable: {
      id: 'responsable',
      name: 'responsable',
      label: 'responsable',
      value: '0',
      description: 'Responsable du projet',
      unit: { value: '', label: '' },
      standard: '',
      reference: '',
    },
    classe: {
      id: 'classe',
      name: 'classe',
      label: 'classe',
      value: '',
      description: 'classe',
      unit: { value: '', label: '' },
      standard: '',
      reference: '',
    },
    length: {
      id: 'length',
      name: 'length',
      label: 'length',
      description: 'Longueur',
      value: 15,
      unit: { value: 'm', label: 'm' },
    },
    width: {
      id: 'width',
      name: 'width',
      label: 'width',
      description: 'Largeur',
      value: 8,
      unit: { value: 'm', label: 'm' },
    },
    height: {
      id: 'height',
      name: 'height',
      label: 'height',
      description: 'Hauteur',
      value: 3.5,
      unit: { value: 'm', label: 'm' },
    },
    interiortemp: {
      id: 'interiortemp',
      name: 'interiortemp',
      label: 'interiortemp',
      description: 'Température intérieure',
      value: 0,
      unit: { value: '°C', label: '°C' },
    },
    exteriortemp: {
      id: 'exteriortemp',
      name: 'exteriortemp',
      label: 'exteriortemp',
      description: 'Température extérieure',
      value: 32,
      unit: { value: '°C', label: '°C' },
    },
    ceilingtemp: {
      id: 'ceilingtemp',
      name: 'ceilingtemp',
      label: 'ceilingtemp',
      description: 'Température plafond',
      value: 16,
      unit: { value: '°C', label: '°C' },
    },
    floortemp: {
      id: 'floortemp',
      name: 'floortemp',
      label: 'floortemp',
      description: 'Température sol',
      value: 15,
      unit: { value: '°C', label: '°C' },
    },
    basetime: {
      id: 'basetime',
      name: 'basetime',
      label: 'basetime',
      description: 'Base de temps',
      value: 24,
      unit: { value: 'h', label: 'h' },
    },
    baseKM1: {
      id: 'baseKM1',
      name: 'baseKM1',
      label: 'baseKM1',
      description: 'U Mur 1',
      value: 0.4,
      unit: { value: 'W/m².K', label: 'W/m².K' },
    },
    baseKM2: {
      id: 'baseKM2',
      name: 'baseKM2',
      label: 'baseKM2',
      description: 'U Mur 2',
      value: 0.4,
      unit: { value: 'W/m².K', label: 'W/m².K' },
    },
    baseKM3: {
      id: 'baseKM3',
      name: 'baseKM3',
      label: 'baseKM3',
      description: 'U Mur 3',
      value: 0.4,
      unit: { value: 'W/m².K', label: 'W/m².K' },
    },
    baseKM4: {
      id: 'baseKM4',
      name: 'baseKM4',
      label: 'baseKM4',
      description: 'U Mur 4',
      value: 0.4,
      unit: { value: 'W/m².K', label: 'W/m².K' },
    },
    baseKPlafond: {
      id: 'baseKPlafond',
      name: 'baseKPlafond',
      label: 'baseKPlafond',
      description: 'U Plafond',
      value: 0.4,
      unit: { value: 'W/m².K', label: 'W/m².K' },
    },
    baseKSol: {
      id: 'baseKSol',
      name: 'baseKSol',
      label: 'baseKSol',
      description: 'U Sol',
      value: 0.4,
      unit: { value: 'W/m².K', label: 'W/m².K' },
    },
    QuBa: {
      id: 'QuBa',
      name: 'QuBa',
      label: 'QuBa',
      description: 'Quantité introduite par jour',
      value: 0,
      unit: { value: 'kg', label: 'kg' },
    },
    QuSt: {
      id: 'QuSt',
      name: 'QuSt',
      label: 'QuSt',
      description: 'Quantité stockée',
      value: 0,
      unit: { value: 'kg', label: 'kg' },
    },
    TINTR: {
      id: 'TINTR',
      name: 'TINTR',
      label: 'TINTR',
      description: "Température d'introduction",
      value: 0,
      unit: { value: '°C', label: '°C' },
    },
    TST: {
      id: 'TST',
      name: 'TST',
      label: 'TST',
      description: 'Température de stockage',
      value: 0,
      unit: { value: '°C', label: '°C' },
    },
    C1: {
      id: 'C1',
      name: 'C1',
      label: 'C1',
      description: 'Chaleur massique avant congélation',
      value: 0,
      unit: { value: 'kJ/kg.K', label: 'kJ/kg.K' },
    },
    CRESP: {
      id: 'CRESP',
      name: 'CRESP',
      label: 'CRESP',
      description: 'Chaleur de respiration',
      value: 0,
      unit: { value: 'kJ/kg', label: 'kJ/kg' },
    },
    CL: {
      id: 'CL',
      name: 'CL',
      label: 'CL',
      description: 'Chaleur latente de congélation',
      value: 0,
      unit: { value: 'kJ/kg', label: 'kJ/kg' },
    },
    C2: {
      id: 'C2',
      name: 'C2',
      label: 'C2',
      description: 'Chaleur massique après congélation',
      value: 0,
      unit: { value: 'kJ/kg.K', label: 'kJ/kg.K' },
    },
    TCongel: {
      id: 'TCongel',
      name: 'TCongel',
      label: 'TCongel',
      description: 'Point de congélation',
      value: 0,
      unit: { value: '°C', label: '°C' },
    },
    PECLAIRAGE: {
      id: 'PECLAIRAGE',
      name: 'PECLAIRAGE',
      label: 'PECLAIRAGE',
      description: "Puissance d'éclairage installée",
      value: 0,
      unit: { value: 'W/m²', label: 'W/m²' },
    },
    DECLAIRAGE: {
      id: 'DECLAIRAGE',
      name: 'DECLAIRAGE',
      label: 'DECLAIRAGE',
      description: "Durée d'éclairage",
      value: 0,
      unit: { value: 'h', label: 'h' },
    },
    TRA: {
      id: 'TRA',
      name: 'TRA',
      label: 'TRA',
      description: "Taux de renouvellement d'air",
      value: 0,
      unit: { value: 'vol/h', label: 'vol/h' },
    },
    NIND: {
      id: 'NIND',
      name: 'NIND',
      label: 'NIND',
      description: "Nombre d'individus",
      value: 0,
      unit: { value: '-', label: '-' },
    },
    TIND: {
      id: 'TIND',
      name: 'TIND',
      label: 'TIND',
      description: 'Temps de présence',
      value: 0,
      unit: { value: 'h', label: 'h' },
    },
    Hrint: {
      id: 'Hrint',
      name: 'Hrint',
      label: 'Hrint',
      description: 'Humidité relative intérieure',
      value: 0,
      unit: { value: '%', label: '%' },
    },
    Hrext: {
      id: 'Hrext',
      name: 'Hrext',
      label: 'Hrext',
      description: 'Humidité relative extérieure',
      value: 0,
      unit: { value: '%', label: '%' },
    },
    // Résultats ajoutés
    surfacearea: {
      id: 'surfacearea',
      name: 'surfacearea',
      label: 'surfacearea',
      description: 'Surface au sol',
      value: 120.0,
      unit: { value: 'm²', label: 'm²' },
    },
    wallarea: {
      id: 'wallarea',
      name: 'wallarea',
      label: 'wallarea',
      description: 'Surface des murs',
      value: 161.0,
      unit: { value: 'm²', label: 'm²' },
    },
    volume: {
      id: 'volume',
      name: 'volume',
      label: 'volume',
      description: 'Volume total',
      value: 420.0,
      unit: { value: 'm³', label: 'm³' },
    },
    Consommations: {
      id: 'Consommations',
      name: 'Consommations',
      label: 'Consommations',
      description: 'Consommation énergétique annuelle',
      value: 22061,
      unit: { value: 'kWh', label: 'kWh' },
    },
    Partition: {
      id: 'Partition',
      name: 'Partition',
      label: 'Partition',
      description: 'Répartition des charges thermiques',
      value: [100, 0, 0, 0, 0],
      unit: { value: '%', label: '%' },
    },
    Qparois: {
      id: 'Qparois',
      name: 'Qparois',
      label: 'Qparois',
      description: 'Apport thermique des parois',
      value: 217589.76,
      unit: { value: 'kJ', label: 'kJ' },
    },
    QDenrees: {
      id: 'QDenrees',
      name: 'QDenrees',
      label: 'QDenrees',
      description: 'Apport thermique des denrées',
      value: 0.0,
      unit: { value: 'kJ', label: 'kJ' },
    },
    Qeclairage: {
      id: 'Qeclairage',
      name: 'Qeclairage',
      label: 'Qeclairage',
      description: "Apport thermique de l'éclairage",
      value: 0.0,
      unit: { value: 'kJ', label: 'kJ' },
    },
    Qindividus: {
      id: 'Qindividus',
      name: 'Qindividus',
      label: 'Qindividus',
      description: 'Apport thermique des personnes',
      value: 0.0,
      unit: { value: 'kJ', label: 'kJ' },
    },
    QRa: {
      id: 'QRa',
      name: 'QRa',
      label: 'QRa',
      description: "Apport thermique du renouvellement d'air",
      value: 0.0,
      unit: { value: 'kJ', label: 'kJ' },
    },
  },

  ui: {
    projet: ['projet', 'responsable', 'version'],
    dimensions: ['length', 'width', 'height'],
    conditions: ['interiortemp', 'exteriortemp', 'ceilingtemp', 'floortemp'],
    fonctionnement: ['basetime'],
    parois: ['baseKM1', 'baseKPlafond', 'baseKSol'],
    denrees: [
      'QuBa',
      'QuSt',
      'TINTR',
      'TCongel',
      'TST',
      'C1',
      'C2',
      'CL',
      'CRESP',
    ],
    eclairage: ['PECLAIRAGE', 'DECLAIRAGE'],
    air: ['TRA'],
    personnel: ['NIND', 'TIND'],
    resultats: [
      'surfacearea',
      'wallarea',
      'volume',
      'Consommations',
      'Qparois',
      'QDenrees',
      'Qeclairage',
      'Qindividus',
      'QRa',
    ],
  },
};

export default initialState;
