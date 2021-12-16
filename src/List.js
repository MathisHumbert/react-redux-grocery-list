import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const List = () => {
  const data = useSelector((state) => state.reducer);
  console.log(data);
  return <h2>list component</h2>;
};

export default List;
