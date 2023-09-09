import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import mundito from '../../../public/mundito.png';

const Navbar = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.logo}>
        <Link to="/home">
          <img src={mundito} className={style.mundito} alt="mundito" />
        </Link>
        <h6 className={style.juampi}>by Juan Pablo Accinelli</h6>
      </div>
      <Link to="/create" className={style.activities}>
        Crear nueva actividad
      </Link>
      <Link to="/activities" className={style.activities}>
        Ver todas las actividades
      </Link>
    </div>
  );
};

export default Navbar;
