import { Link } from 'react-router-dom';
import style from './Landing.module.css';
import mundito from '../../../public/landing_world.png';

const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.spanContainer}>
        <h2 className={style.landing_title}>
          Bienvenidos a mi proyecto individual de countries... comenzamos??
        </h2>
        <Link to={'/home'}>
          <img src={mundito} alt="mundito hermoso" className={style.landing_img} />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
