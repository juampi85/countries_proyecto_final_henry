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

  //* Usando el TRY/CATCH
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

  //   // No es necesario retornar setCountryDetail en este punto.
  // }, [id]);


  const { name, flag_img, continent, capital, subregion, area, population, Activities} =
    countryDetail;
  return (
    <>
      <div className={style.detailContainer}>
        <span>
          <img src={flag_img} alt={`flag of ${name}`} className={style.flag} />
        </span>
        <span>
          <p>
            <b>{name}</b> es un país que queda en el continente de{' '}
            <b>{continent}</b>. Su capital es <b>{capital}</b>. Su subregión es{' '}
            <b>{subregion}</b>. Tiene un área de <b>{area}</b> metros cuadrados
            y una población de <b>{population}</b> habitantes. Su ID es:{' '}
            <b>{id}</b>.
          </p>
        </span>
      </div>
      <div>
        <h2>Actividades asociadas:</h2>
        {console.log(Activities)}
        <ul className={style.activities_list}>
          {/* {countryDetail[0].Activities.map((activity) => (
            <li key={activity.id}>{activity.name}</li>
          ))} */}

        </ul>
        {
        Activities?.length > 0 ?
          Activities?.map((activity) => {
            return (
              <div key={activity.id}>
                <h4>{activity.name}</h4>
              </div>
            );
          }) :
            <h4>Aún no existen actividades asociadas...</h4>
          }
      </div>
    </>
  );
}

export default Detail;
