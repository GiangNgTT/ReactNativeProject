import {combineReducers} from 'redux';

import getBrandsReducer from './Brands/reducers';
import getHotelReducer from './Hotels/reducers'

const rootReducer = combineReducers({
  getBrandsReducer,
  getHotelReducer
});

export default rootReducer;
