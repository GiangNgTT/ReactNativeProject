import {GetHotelTypes} from './actions';

const init = {
  data: [],
  loading: false,
  error: [],
};

const getHotelReducer = (state = init, action) => {
  console.log('ac: getHotelReducer -> action', action);
  switch (action.type) {
    case GetHotelTypes.GET_HOTEL:
      return {...state, loading: true};
    case GetHotelTypes.GET_HOTEL_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action?.response],
        loading: false,
      };
    case GetHotelTypes.GET_HOTEL_FAILURE:
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
};

export default getHotelReducer;
