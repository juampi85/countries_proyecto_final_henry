import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [countryDetail, setCountryDetail] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCountryDetail(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((err) => alert(`${err.response.data.error}`));
    return setCountryDetail({});
  }, [id]);

  const { name, flag_img, continent, capital, subregion, area, population } = countryDetail;
  return (
    <div className={style.detailContainer}>
      <span>
        <img src={flag_img} alt={`flag of ${name}`} className={style.flag} />
      </span>
      <span>
        <p>
          <b>{name}</b> es un país que queda en el continente de{' '}
          <b>{continent}</b>. Su capital es <b>{capital}</b>. Su subregión es{' '}
          <b>{subregion}</b>. Tiene una área de <b>{area}</b> metros cuadrados y
          una población de <b>{population}</b> habitantes. Su ID es: <b>{id}</b>
          .
        </p>
      </span>
    </div>
  );
}

export default Detail;
