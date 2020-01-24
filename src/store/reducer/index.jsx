import * as actionTypes from '../action/actionTypes';

const initialState = {
  loading: false,
  dogs: [],
  images: [],
  breed: '',
  counter: 0
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DOGS_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_DOGS_SUCCESS:
      return { ...state, loading: false, dogs: action.dogs };
    case actionTypes.FETCH_DOGS_FAIL:
      return { ...state, loading: false };
    case actionTypes.FETCH_IMAGES_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_IMAGES_SUCCESS:
      return { ...state, loading: false, images: action.images };
    case actionTypes.FETCH_IMAGES_FAIL:
      return { ...state, loading: false };
    case actionTypes.SET_BREED_START:
      return { ...state, breed: '' };
    case actionTypes.SET_BREED_SUCCESS:
      return { ...state, breed: action.breed, counter: 0 };
    case actionTypes.SET_BREED_FAIL:
      return { ...state, breed: '' };
    case actionTypes.SET_COUNTER:
      return { ...state, counter: action.counter };
    default:
      return state;
  }
};

export default rootReducer;
