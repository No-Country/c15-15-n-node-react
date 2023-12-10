const EcommerState = {
  init: [],
  register: ".",
  error: null,
};

export default function reducer(state = EcommerState, { type, payload }) {
  switch (type) {

    case 'POST_CREATE_USER_SUCCESS':
      return {
        ...state,
        register: "Registro exitoso",
      };
      
    case 'POST_CREATE_USER_FAILURE':
      return {
        ...state,
        register: "Error en el registro",
        error: payload,
      };



    default:
      return state;
  }

}
    // case 'GET_POKEMON_DETAIL':
    //   return {
    //     ...state,
    //     detail: payload
    //   };  