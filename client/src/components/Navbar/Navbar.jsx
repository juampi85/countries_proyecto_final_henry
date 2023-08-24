import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home">HOME</Link>
      <Link to="/create">FORM</Link>

    </div>
  );
};

export default Navbar;
