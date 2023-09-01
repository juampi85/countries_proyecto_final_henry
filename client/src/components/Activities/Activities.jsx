import style from './Activities.module.css';

const Activities = ({name, Countries}) => {
  return (
    <div className={style.container}>
      <h2>{name}</h2>
      {Countries.length > 0 ? (
        <div>
          <h4>Países:</h4>
          <ul>
            {Countries.map((country) => (
              <li key={country.id}>{country.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Activities;
