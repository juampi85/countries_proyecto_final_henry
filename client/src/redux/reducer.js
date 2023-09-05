import {
  GET_COUNTRIES,
  GET_ACTIVITIES,
  GET_COUNTRY_BY_NAME,
} from './actions/actionTypes';

const initialState = {
  countries: [],
  activities: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload }
    
    case GET_ACTIVITIES:
      return { ...state, activities: payload }
    
    case GET_COUNTRY_BY_NAME:
      return { ...state, countries: payload }


    default:
      return { ...state };
  }
};

export default rootReducer;
