import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchDogsStart = () => {
  return {
    type: actionTypes.FETCH_DOGS_START
  };
};

export const fetchDogsSuccess = dogs => {
  return {
    type: actionTypes.FETCH_DOGS_SUCCESS,
    dogs: dogs
  };
};

export const fetchDogsFail = () => {
  return {
    type: actionTypes.FETCH_DOGS_FAIL
  };
};

export const fetchImageStart = () => {
  return {
    type: actionTypes.FETCH_IMAGE_START
  };
};

export const fetchImageSuccess = image => {
  return {
    type: actionTypes.FETCH_IMAGE_SUCCESS,
    image: image
  };
};
export const fetchImageFail = () => {
  return {
    type: actionTypes.FETCH_IMAGE_FAIL
  };
};

export const setBreedStart = () => {
  return {
    type: actionTypes.SET_BREED_START
  };
};

export const setBreedSuccess = breed => {
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

export const getDogs = () => {
  return dispatch => {
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        dispatch(fetchDogsSuccess(response.data.message));
      })
      .catch(error => {
        dispatch(fetchDogsFail());
      });
  };
};

export const getImage = breed => {
  return dispatch => {
    dispatch(fetchImageStart());
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => {
        dispatch(setBreedSuccess(breed));
        dispatch(fetchImageSuccess(response.data.message));
      })
      .catch(error => {
        dispatch(setBreedFail());
        dispatch(fetchImageFail());
      });
  };
};
