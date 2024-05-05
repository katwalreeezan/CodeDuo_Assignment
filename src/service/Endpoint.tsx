type IEndpoint = {
  GET_SPELL: string;
  INDIVIDUAL_SPELL_BY_NAME:(name:string)=> string

  ADD_STUDENT: string;
  UPDATE_STUDENT: (id: number) => string;
  DELETE_STUDENT: (id: number) => string;
};

const Endpoint: IEndpoint = {
  GET_SPELL: "spells",
  INDIVIDUAL_SPELL_BY_NAME:(name)=> `spells/${name}`,

  ADD_STUDENT: "crud",
  UPDATE_STUDENT: (id) => `crud/${id}`,
  DELETE_STUDENT: (id) => `crud/${id}`,
};

export default Endpoint;
