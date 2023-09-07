import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_ACTIVITIES,
  FILTER_COUNTRIES_BY_ACTIVITIES,
} from './actions/actionTypes';

const initialState = {
  countries: [],
  activities: [],
  filteredActivities: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };

    case GET_COUNTRY_BY_NAME:
      return { ...state, countries: payload };

    case GET_ACTIVITIES:
      return { ...state, activities: payload };
    
    case FILTER_COUNTRIES_BY_ACTIVITIES:
      return { ...state, filteredActivities: payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
