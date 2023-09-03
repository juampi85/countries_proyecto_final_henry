import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
  return (
    <div className={style.landing}>
      <Link to={'/home'}> Home </Link>
      <h1>Esta es la vista de la LANDING PAGE</h1>
    </div>
  );
};

export default Landing;
