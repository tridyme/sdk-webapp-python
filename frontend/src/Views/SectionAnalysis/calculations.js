const calculations = {
  // OUTPUTS
  outputs: (inputs) => {
    return {
      ...inputs,
      A: {
        ...inputs.A,
        value: calculations.A(inputs),
      },
      Ixx: {
        ...inputs.Ixx,
        value: calculations.Ixx(inputs),
      },
    };
  }, // NE PAS OUBLIER LA VIRGULE
  // CALCULATION FUNCTIONS
  A: (inputs) => {
    const {
      b: { value: b },
      h: { value: h },
    } = inputs;
    return b * h;
  }, // NE PAS OUBLIER LA VIRGULE

  Ixx: (inputs) => {
    const {
      b: { value: b },
      h: { value: h },
    } = inputs;
    return (b * h ** 3) / 12;
  }, // NE PAS OUBLIER LA VIRGULE
};

export default calculations;
