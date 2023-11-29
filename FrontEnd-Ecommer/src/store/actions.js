export function get() {
  return async function (dispatch) {
    await fetch("")
      .then((data) => data.json())
      .then((data) => dispatch({ type: 'GET', payload: data }));
  };
}