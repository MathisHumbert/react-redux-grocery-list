export const HANDLE_INPUT = 'HANDLE_INPUT';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const RESET_ALERT = 'RESET_ALERT';

export const handleInput = (e) => {
  return (dispatch) =>
    dispatch({ type: HANDLE_INPUT, payload: e.target.value });
};

export const handleSubmit = () => {
  return (dispatch) => dispatch({ type: HANDLE_SUBMIT });
};

export const removeItem = (id) => {
  return (dispatch) => dispatch({ type: REMOVE_ITEM, payload: id });
};

export const editItem = (value, id) => {
  console.log(value, id);
  return (dispatch) => dispatch({ type: EDIT_ITEM, payload: { value, id } });
};

export const clearItems = (id) => {
  return (dispatch) => dispatch({ type: CLEAR_ITEMS, payload: id });
};

export const resetAlert = () => {
  return (dispatch) => dispatch({ type: RESET_ALERT });
};
