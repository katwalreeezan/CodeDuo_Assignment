type IEndpoint = {
  GET_SPELL: string;
  GET_STUDENT_BY_ID: (id: number) => string;
  ADD_STUDENT: string;
  UPDATE_STUDENT: (id: number) => string;
  DELETE_STUDENT: (id: number) => string;
};

const Endpoint: IEndpoint = {
  GET_SPELL: "spell",
  GET_STUDENT_BY_ID: (id: number) => `crud/${id}`,
  ADD_STUDENT: "crud",
  UPDATE_STUDENT: (id) => `crud/${id}`,
  DELETE_STUDENT: (id) => `crud/${id}`,
};

export default Endpoint;
