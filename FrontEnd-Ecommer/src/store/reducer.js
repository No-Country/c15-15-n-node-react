const initialState = {
  init: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {

    case 'GET':
      return {
        ...state,
        init: payload
      };

    default:
      return state;
  }

}
