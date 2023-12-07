

export function PostCreateUser(payload) {
  return function (dispatch) {
    try {
      fetch('https://api-ecommer.cyclic.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Respuesta del servidor: action.js', data);
          return dispatch({
            type: 'POST_CREATE_USER',
            payload: data,
          });
        })
        .catch((error) => {
          console.log('Error en la petición: action.js', error);
        });
      console.log('Payload enviado al servidor: action.js', payload);
    } catch (error) {
      console.log('Error en el bloque try-catch principal: action.js', error);
    }
  };
}
