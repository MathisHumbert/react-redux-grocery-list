import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const List = () => {
  const { list } = useSelector((state) => state.reducer);
  console.log(list);

  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map((item) => {
          return (
            <article key={item.id} className="grocery-item">
              <p>{item.name}</p>
              <div className="btn-container">
                <button className="edit-btn" type="button">
                  <FaEdit />
                </button>
                <button className="delete-btn" type="button">
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default List;
