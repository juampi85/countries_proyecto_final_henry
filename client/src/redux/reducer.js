import {
  GET_COUNTRIES,
  GET_ACTIVITIES,
  DELETE_ACTIVITY,
} from './actions/actionTypes';

const initialState = {
  countries: [],
  activities: [],
  filteredActivities: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };

    case GET_ACTIVITIES:
      return { ...state, activities: payload };

    case DELETE_ACTIVITY: {
      return {
        ...state,
        activities: payload,
      };
    }

    default:
      return { ...state };
  }
};

export default rootReducer;
