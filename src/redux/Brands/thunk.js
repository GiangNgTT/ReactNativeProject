import {getBrandApi} from '../../api/brand';

import getBrandsActions from './actions';

const getBrandsThunk = () => {
  return dispatch => {
    dispatch(getBrandsActions.getBrands());
    getBrandApi()
      .then(values => {
        dispatch(getBrandsActions.getBrandsSuccess(values.data));
      })
      .catch(error => {
        dispatch(getBrandsActions.getBrandsFailure(error));
      });
  };
};

export default getBrandsThunk;
