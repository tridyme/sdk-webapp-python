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
    // Géométrie
    h: {
      id: 'h',
      name: 'h',
      label: 'h',
      description: 'Hauteur de la section',
      value: 0.7,
      unit: { value: 'm', label: 'm' },
    },
    b: {
      id: 'b',
      name: 'b',
      label: 'b',
      description: 'Largeur de la section',
      value: 0.5,
      unit: { value: 'm', label: 'm' },
    },
    A: {
      id: 'A',
      name: 'A',
      label: 'A',
      description: 'Surface du rectangle',
      value: 0.55,
      unit: { value: 'm2', label: 'm2' },
    },
    Ixx: {
      id: 'Ixx',
      name: 'Ixx',
      label: 'Ixx',
      description: 'Inertie du rectangle suivant X',
      value: 0.014,
      unit: { value: 'm4', label: 'm4' },
    },
  },
};

export default initialState;
