import axios from 'axios';
import {
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
  FILTER_COUNTRIES_BY_ACTIVITY,
} from './actionTypes';

export const getCountries = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/countries');
    const countries = response.data;
    dispatch({
      type: GET_COUNTRIES,
      payload: countries,
    });
  };
};

export const getCountry = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = response.data;
    dispatch({
      type: GET_COUNTRY,
      payload: country,
    });
  };
};

export const getActivities = (filterByName = '') => {
  return async (dispatch) => {
    try {
      let url = 'http://localhost:3001/activities';

      // Agregar el filtro si se proporciona un nombre
      if (filterByName) {
        url += `?name=${filterByName}`;
      }

      const response = await axios.get(url);
      const activities = response.data;

      dispatch({
        type: GET_ACTIVITIES,
        payload: activities,
      });
    } catch (error) {
      alert({ error: error.message });
    }
  };
};

export function getCountryByName(name) {
  return async function (dispatch) {
    try {
      let url = 'http://localhost:3001/countries';
      const response = await axios.get(`${url}?name=${name}`);
      const country = response.data;
      return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: country,
      });
    } catch (error) {
      alert({ error: 'error.message' });
    }
  };
}

// export const filterCountryByName = (name) => ({
//   type: FILTER_COUNTRY_BY_NAME,
//   payload: name,
// });

// export const filterCountryByContinent = (continent) => ({
//   type: FILTER_COUNTRY_BY_CONTINENT,
//   payload: continent,
// });

export const filterCountriesByActivity = (activity) => ({
  type: FILTER_COUNTRIES_BY_ACTIVITY,
  payload: activity,
});

// export const orderCountryByName = (name) => ({
//   type: ORDER_COUNTRY_BY_NAME,
//   payload: name,
// });

// export const orderCountryByPopulation = (population) => ({
//   type: ORDER_COUNTRY_BY_POPULATION,
//   payload: population,
// });
