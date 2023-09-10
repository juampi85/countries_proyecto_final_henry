import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [countryDetail, setCountryDetail] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCountryDetail(data);
        } else {
          window.alert('No hay países con ese ID');
        }
      })
      .catch((err) => alert(`${err.response.data.error}`));
    console.log(countryDetail);
    return setCountryDetail({});
  }, [id]);

  //* Acá podría haber usado el TRY/CATCH
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3001/countries/${id}`
  //       );
  //       const data = response.data;
  //       if (data.name) {
  //         setCountryDetail(data);
  //       } else {
  //         window.alert('No hay países con ese ID');
  //       }
  //     } catch (error) {
  //       alert(`${error.response.data.error}`);
  //     }
  //   };

  //   fetchData();
  //   console.log(countryDetail);

  // }, [id]);

  const {
    name,
    flag_img,
    continent,
    capital,
    subregion,
    area,
    population,
    Activities,
  } = countryDetail;

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
      <div className={style.detail_container}>
        <span>
          <img src={flag_img} alt={`flag of ${name}`} className={style.flag} />
        </span>
        <span className={style.detail_text}>
          <p>
            <b>{name}</b> es un país que queda en el continente de{' '}
            <b>{spanishContinent}</b>. Su capital es <b>{capital}</b>. Su
            subregión es <b>{subregion}</b>. Tiene un área de <b>{area}</b>{' '}
            metros cuadrados y una población de <b>{population}</b> habitantes.
            Su ID es: <b>{id}</b>.
          </p>
        </span>
      </div>
      <div>
        <h2 className={style.asociated_activities}>Actividades asociadas:</h2>
        <div className={style.activities_container}>
          {Activities?.length > 0 ? (
            Activities?.map((activity) => {
              return (
                <div key={activity.id} className={style.activity_card}>
                  <h4>{activity.name}</h4>
                  <span className={style.activity_card_text}>
                    <p className={style.cards_text}>
                      Dificultad: <strong>{activity.difficulty}/5</strong>
                    </p>
                    <p className={style.cards_text}>
                      Duración: <strong>{activity.duration} hs</strong>
                    </p>
                    <p className={style.cards_text}>
                      Temporada:{' '}
                      <strong>
                        {activity.season === 'Summer'
                          ? 'Verano'
                          : activity.season === 'Winter'
                          ? 'Invierno'
                          : activity.season === 'Spring'
                          ? 'Primavera'
                          : 'Otoño'}
                      </strong>
                    </p>
                  </span>
                </div>
              );
            })
          ) : (
            <h4 className={style.no_activities}>Aún no existen actividades asociadas...</h4>
          )}
        </div>
      </div>
    </>
  );
}

export default Detail;