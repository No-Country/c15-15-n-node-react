export function PostCreateUser(payload) {
  return async function (dispatch) {
    try {
      const response = await fetch('https://api-ecommer.cyclic.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.error) {
        dispatch({
          type: 'POST_CREATE_USER_FAILURE',
          payload: data.error,
        });
      } else {
        dispatch({
          type: 'POST_CREATE_USER_SUCCESS',
          payload: data.message,
        });
      }
    } catch (error) {
      console.log('Error en la petición: action.js', error);

      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        dispatch({
          type: 'POST_CREATE_USER_FAILURE_CORS',
          payload: 'Error de CORS: No se pudo realizar la solicitud debido a restricciones de CORS.',
        });
      } else {
        dispatch({
          type: 'POST_CREATE_USER_FAILURE',
          payload: error,
        });
      }
    }
  };
}
