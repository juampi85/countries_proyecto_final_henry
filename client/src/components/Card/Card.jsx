import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ id, name, continent, flag_img, population, Activities }) => {
  const spanishContinent =
    continent === 'Europe'
      ? 'Europa'
      : continent === 'Asia'
      ? 'Asia'
      : continent === 'North America'
      ? 'Norte América'
      : continent === 'Africa'
      ? 'África'
      : continent === 'Oceania'
      ? 'Oceanía'
      : continent === 'Antarctica'
      ? 'Antártida'
      : continent === 'South America'
      ? 'Sudamérica'
      : '';
  return (
    <>
      <Link to={`/countries/detail/${id}`}>
        <div className={style.container}>
          {/* <p>Este componente debe mostrar CADA PAÍS mapeado y, además, mostrar un LINK para poder acceder al DETALLE de dicho PAÍS</p> */}
          <img
            src={flag_img}
            alt={`flag of the ${name} country`}
            className={style.flags}
          />
          <h2 className={style.name}>{name}</h2>
          <h3 className={style.continent}> {spanishContinent}</h3>
          <h5 className={style.population}>Población: {population}</h5>
          {Activities.length > 0 ? (
            <div>
              <h4>Actividades:</h4>
              <ul className={style.activities_list}>
                {Activities.map((activity) => (
                  <li key={activity.id} className={style.activities_list_item}>
                    {activity.name}
                  </li>
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
