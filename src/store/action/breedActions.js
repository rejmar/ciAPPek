import * as actionTypes from './actionTypes';

const setBreedStart = () => {
  return {
    type: actionTypes.SET_BREED_START
  };
};

const setBreedSuccess = breed => {
  return {
    type: actionTypes.SET_BREED_SUCCESS,
    breed: breed
  };
};

export const setBreedFail = () => {
  return {
    type: actionTypes.SET_BREED_FAIL
  };
};

export const setBreed = breed => {
  return dispatch => {
    dispatch(setBreedSuccess(breed));
  };
};
