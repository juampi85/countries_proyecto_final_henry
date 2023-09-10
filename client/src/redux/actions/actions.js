import axios from 'axios';
import {
  GET_COUNTRIES,
  // GET_COUNTRY,
  GET_ACTIVITIES,
  DELETE_ACTIVITY,
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

// export const getCountry = (id) => {
//   return async (dispatch) => {
//     const response = await axios.get(`http://localhost:3001/countries/${id}`);
//     const country = response.data;
//     dispatch({
//       type: GET_COUNTRY,
//       payload: country,
//     });
//   };
// };

export const getActivities = () => {
  return async (dispatch) => {
    try {
      let url = 'http://localhost:3001/activities';

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

export const deleteActivity = (id) => {
  console.log('desde el ACTION', id)
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`http://localhost:3001/activities/${id}`);
      dispatch ({
        type: DELETE_ACTIVITY,
        payload: data,
      })
    } catch (error) {
      return { error: error.message }
    }
  }
};