export const GetHotelTypes = {
  GET_HOTEL: 'GET_HOTEL',
  GET_HOTEL_SUCCESS: 'GET_HOTEL_SUCCESS',
  GET_HOTEL_FAILURE: 'GET_HOTEL_FAILURE',
};

const getHotel = () => {
  return {
    type: GetHotelTypes.GET_HOTEL,
  };
};

const getHotelSuccess = response => {
  return {
    type: GetHotelTypes.GET_HOTEL_SUCCESS,
    response,
  };
};

const getHotelFailure = error => {
  return {
    type: GetHotelTypes.GET_HOTEL_FAILURE,
    error,
  };
};

export default {
  getHotel,
  getHotelSuccess,
  getHotelFailure,
};
