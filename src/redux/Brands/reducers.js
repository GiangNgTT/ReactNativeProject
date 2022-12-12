import {GetBrandsTypes} from './actions';

const init = {
  data: [],
  loading: false,
  error: [],
};

const getBrandsReducer = (state = init, action) => {
  console.log('ac: getBrandsReducer -> action', action);
  switch (action.type) {
    case GetBrandsTypes.GET_BRANDS:
      return {...state, loading: true};
    case GetBrandsTypes.GET_BRANDS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action?.response],
        loading: false,
      };
    case GetBrandsTypes.GET_BRANDS_FAILURE:
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
};

export default getBrandsReducer;
