

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
          console.log('Respuesta del servidor: action.js', data.id);
          if(data.error){
            return dispatch({
              type: 'POST_CREATE_USER_FAILURE',
              payload: data.error, 
            });
          }
          
          return dispatch({
            type: 'POST_CREATE_USER_SUCCESS',
            payload: data,
          });
        })
        .catch((error) => {
          console.log('Error en la petición: action.js', error);
          
          
          return dispatch({
            type: 'POST_CREATE_USER_FAILURE',
            payload: error.message, // Puedes ajustar la información del error según tus necesidades
          });
        });
    } catch (error) {
      console.log('Error en el bloque try-catch principal: action.js', error);
      
      
      return dispatch({
        type: 'POST_CREATE_USER_FAILURE',
        payload: error.message, // Puedes ajustar la información del error según tus necesidades
      });
    }
  };
}
