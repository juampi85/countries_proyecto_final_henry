import style from './Activities.module.css';
import { deleteActivity } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
// import trash from '../../../public/delete.svg';

const Activities = ({ id, name, duration, difficulty, season, Countries }) => {
  const dispatch = useDispatch();

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
  
  const handleDeleteActivity = (id) => {
    console.log('Eliminar actividad con ID (desde ActivitiesContainer):', id);
    dispatch(deleteActivity(id));
    alert('Actividad eliminada con éxito!');
  };
  
  // const handleDelete = () => {
  //   console.log('Eliminar actividad con ID (funcion handledelete desde Activities):', id);
  //   onDelete(id);
  // };
  return (
    <>
      <div className={style.container}>
        <button className={style.delete} onClick={() => handleDeleteActivity(id)}>
          X
        </button>
        {/* <img src={trash} alt="delete img" className={style.delete} onClick={}/> */}
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
