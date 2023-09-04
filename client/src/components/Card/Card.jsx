import { Link } from 'react-router-dom';
import style from './Card.module.css';

// const Card = ({ id, name, continent, flag_img, population, activities }) => {
const Card = ({ id, name, continent, flag_img, population, Activities }) => {
  return (
    <>
      <Link to={`/countries/detail/${id}`}>
        <div className={style.container}>
          {/* <p>Este componente debe mostrar CADA PAÍS mapeado y, además, mostrar un LINK para poder acceder al DETALLE de dicho PAÍS</p> */}
          <h2>{name}</h2>
          <img
            src={flag_img}
            alt={`flag of the ${name} country`}
            className={style.flags}
          />
          <h3 className={style.continent}> {continent}</h3>
          <h5>Población: {population}</h5>
          {Activities.length > 0 ? (
            <div>
              <h4>Actividades:</h4>
              <ul className={style.activities_list}>
                {Activities.map((activity) => (
                  <li key={activity.id}>{activity.name}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Link>
    </>
  );
};

export default Card;