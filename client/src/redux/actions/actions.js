import axios from 'axios';
import {
  GET_COUNTRIES,
  GET_COUNTRY,
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

export const filterCountryByName = (name) => ({
  type: FILTER_COUNTRY_BY_NAME,
  payload: name,
});

export const filterCountryByContinent = (continent) => ({
  type: FILTER_COUNTRY_BY_CONTINENT,
  payload: continent,
});

export const filterCountryByActivity = (activity) => ({
  type: FILTER_COUNTRY_BY_ACTIVITY,
  payload: activity,
});

export const orderCountryByName = (name) => ({
  type: ORDER_COUNTRY_BY_NAME,
  payload: name,
});

export const orderCountryByPopulation = (population) => ({
  type: ORDER_COUNTRY_BY_POPULATION,
  payload: population,
});
