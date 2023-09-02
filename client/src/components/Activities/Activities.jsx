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
        <h1>{name}</h1>
        <p>
          <b>{duration}</b> hrs
        </p>
        <p>
          Nivel de dificultad: <b>{difficulty}</b>
        </p>
        {seasonName && <p>{seasonName}</p>}
        <div>
          <h4>Países:</h4>
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
