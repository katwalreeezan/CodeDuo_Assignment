type IEndpoint = {
  GET_SPELL: string;
  INDIVIDUAL_SPELL_BY_NAME: (name: string) => string;
};

const Endpoint: IEndpoint = {
  GET_SPELL: "spells",
  INDIVIDUAL_SPELL_BY_NAME: (name) => `spells/${name}`,
};

export default Endpoint;
