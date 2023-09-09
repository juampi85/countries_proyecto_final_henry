import style from './Activities.module.css';
const Activities = ({ name, duration, difficulty, season, Countries }) => {
  const seasonName =
    season === 'Winter'
      ? 'Invierno'
      : season === 'Autumn'
      ? 'Otoño'
      : season === 'Spring'
      ? 'Primavera'
      : season === 'Summer'
      ? 'Verano'
      : '';
  return (
    <>
      <div className={style.container}>
        <h3>{name}</h3>
        <p className={style.countries_details}>
          Duración: <b>{duration}</b> hrs
        </p>
        <p className={style.countries_details}>
          Nivel de dificultad: <b>{difficulty}</b>
        </p>
        <p className={style.countries_details}>
          Temporada: <b>{seasonName}</b>
        </p>
        <div className={style.countries}>
          <h4>Países asociados:</h4>
          <div className={style.countries_container}>
            {Countries.map((country) => (
              <p key={country.id} className={style.countries}>
                *{country.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
