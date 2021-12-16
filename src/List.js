import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearItems, editItem } from './actions';

const List = () => {
  const { list } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map((item) => {
          return (
            <article key={item.id} className="grocery-item">
              <p>{item.name}</p>
              <div className="btn-container">
                <button
                  className="edit-btn"
                  type="button"
                  onClick={() => dispatch(editItem(item.name, item.id))}
                >
                  <FaEdit />
                </button>
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
        <button className="clear-btn" onClick={() => dispatch(clearItems())}>
          clear items
        </button>
      </div>
    </div>
  );
};

export default List;
