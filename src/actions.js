export const HANDLE_INPUT = 'HANDLE_INPUT';

export const handleInput = (e) => {
  console.log(e.target.value);
  return (dispatch) =>
    dispatch({ type: HANDLE_INPUT, payload: e.target.value });
};
