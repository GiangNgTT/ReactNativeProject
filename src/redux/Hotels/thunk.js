import {getHotelApi} from '../../api/hotel';

import getHotelsActions from '../Hotels/actions';

const getHotelsThunk = () => {
  return dispatch => {
    dispatch(getHotelsActions.getHotel());
    getHotelApi()
      .then(values => {
        dispatch(getHotelsActions.getHotelSuccess(values.data));
      })
      .catch(error => {
        dispatch(getHotelsActions.getHotelFailure(error));
      });
  };
};

export default getHotelsThunk;
