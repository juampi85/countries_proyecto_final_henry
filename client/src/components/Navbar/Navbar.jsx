import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import mundito from '../../../public/landing_world.png';
import landing from '../../../public/back_to_landing.svg';

const Navbar = () => {
  const linkedinURL = 'https://www.linkedin.com/in/juan-pablo-accinelli/';
  return (
    <div className={style.mainContainer}>
      <div className={style.logo}>
        <Link to="/home">
          <img src={mundito} className={style.mundito} alt="mundito" />
        </Link>
        <h6 className={style.juampi}>
          by{' '}
          <a href={linkedinURL} target="_blank" rel="noreferrer">
            Juan Pablo Accinelli
          </a>
        </h6>
      </div>
      <Link to="/create" className={style.activities}>
        Crear nueva actividad
      </Link>
      <Link to="/activities" className={style.activities}>
        Ver todas las actividades
      </Link>
      <Link to="/" className={style.activities}>
        <img
          src={landing}
          alt="back to landing icon"
          className={style.landing_img}
        />
      </Link>
    </div>
  );
};

export default Navbar;