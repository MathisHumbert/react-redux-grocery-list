import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import { useDispatch, useSelector } from 'react-redux';
import { handleInput } from './actions';

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.reducer);

  return (
    <section className="section-center">
      <form className="grocery-form">
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={value}
            onChange={(e) => dispatch(handleInput(e))}
            placeholder="e.g eggs"
          />
          <button className="submit-btn" type="btn">
            submit
          </button>
        </div>
      </form>
      <List />
    </section>
  );
}

export default App;
