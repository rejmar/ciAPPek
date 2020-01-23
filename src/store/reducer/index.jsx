import * as actionTypes from '../action/actionTypes';

const initialState = {
  loading: false,
  dogs: [],
  image: '',
  breed: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DOGS_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_DOGS_SUCCESS:
      return { ...state, loading: false, dogs: action.dogs };
    case actionTypes.FETCH_DOGS_FAIL:
      return { ...state, loading: false };
    case actionTypes.FETCH_IMAGE_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_IMAGE_SUCCESS:
      return { ...state, loading: false, image: action.image };
    case actionTypes.FETCH_IMAGE_FAIL:
      return { ...state, loading: false };
    case actionTypes.SET_BREED_START:
      return { ...state, breed: '' };
    case actionTypes.SET_BREED_SUCCESS:
      return { ...state, breed: action.breed };
    case actionTypes.SET_BREED_FAIL:
      return { ...state, breed: '' };
    default:
      return state;
  }
};

export default rootReducer;
