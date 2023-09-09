import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.spanContainer}>
        <h1 className={style.landing_title}>Bienvenidos a mi proyecto individual de countries! :)</h1>
        <Link to={'/home'}> Home </Link>
      </div>
    </div>
  );
};

export default Landing;
