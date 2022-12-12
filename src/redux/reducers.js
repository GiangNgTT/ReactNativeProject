import {combineReducers} from 'redux';

import getHotelReducer from './Hotels/reducers'

const rootReducer = combineReducers({
  getHotelReducer
});

export default rootReducer;
