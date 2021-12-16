import React from 'react';
import List from './List';
import Alert from './Alert';
import { useDispatch, useSelector } from 'react-redux';
import { handleInput, handleSubmit, resetAlert } from './actions';

function App() {
  const dispatch = useDispatch();
  const { value, list, alert, isEditing } = useSelector(
    (state) => state.reducer
  );

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(resetAlert());
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [list, dispatch]);

  return (
    <section className="section-center">
      <form
        className="grocery-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(handleSubmit());
        }}
      >
        {alert.type && <Alert alert={alert} />}
        <h3>react-redux grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={value}
            onChange={(e) => dispatch(handleInput(e))}
            placeholder="e.g eggs"
          />
          <button className="submit-btn" type="btn">
            {isEditing ? 'editing' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && <List />}
    </section>
  );
}

export default App;
