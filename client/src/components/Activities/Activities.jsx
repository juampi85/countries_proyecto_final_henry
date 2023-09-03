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
        <p>
          Duración: <b>{duration}</b> hrs
        </p>
        <p>
          Nivel de dificultad: <b>{difficulty}</b>
        </p>
        <p>
          Temporada: <b>{seasonName}</b>
        </p>
        <div className={style.countries}>
          <h4>Países asociados:</h4>
          <ul>
            {Countries.map((country) => (
              <li key={country.id}>{country.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Activities;
