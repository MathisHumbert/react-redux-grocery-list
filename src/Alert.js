import { useSelector } from 'react-redux';

const Alert = () => {
  const { alert } = useSelector((state) => state.reducer);

  return <p className={`alert alert-${alert.type}`}>{alert.msg}</p>;
};

export default Alert;
