import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  const { flag_img, name, continent, capital, population } = countryDetail;
  return (
    <div>
      <span>
        <img src={flag_img} alt={`flag of ${name}`} />
      </span>
      <span>
        <p>
          {name} es un país que queda en el continente de {continent}. Su
          capital es {capital}. Tiene una población de {population} habitantes.
        </p>
      </span>
    </div>
  );
}

export default Detail;
