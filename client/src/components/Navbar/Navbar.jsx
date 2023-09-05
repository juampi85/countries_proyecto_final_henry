import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import mundito from '../../../public/mundito.png';

const Navbar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/home">
        <img src={mundito} className={style.mundito} alt="mundito" />
      </Link>
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
