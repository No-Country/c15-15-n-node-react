
const EcommerState = {
  init: null,
  registro: null,
  error: null
};

export default function reducer(state = EcommerState, { type, payload }) {
  switch (type) {

    case 'POST_CREATE_USER_SUCCESS':
      return {
        ...state,
        registro: payload,
      };
      
    case 'POST_CREATE_USER_FAILURE':
      return {
        ...state,
        registro: payload
      };
    case 'POST_CREATE_USER_FAILURE_CORS':
      return {
        ...state,
        registro: "Ya se registro, no se puede volver a registrar",
        error: payload
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