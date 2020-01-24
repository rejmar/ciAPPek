import axios from 'axios';
import * as actionTypes from './actionTypes';

const fetchDogsStart = () => {
  return {
    type: actionTypes.FETCH_DOGS_START
  };
};

const fetchDogsSuccess = dogs => {
  return {
    type: actionTypes.FETCH_DOGS_SUCCESS,
    dogs: dogs
  };
};

const fetchDogsFail = () => {
  return {
    type: actionTypes.FETCH_DOGS_FAIL
  };
};

const fetchImagesStart = () => {
  return {
    type: actionTypes.FETCH_IMAGES_START
  };
};

const fetchImagesSuccess = images => {
  return {
    type: actionTypes.FETCH_IMAGES_SUCCESS,
    images: images
  };
};
const fetchImagesFail = () => {
  return {
    type: actionTypes.FETCH_IMAGES_FAIL
  };
};

const setBreedStart = () => {
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

const setBreedFail = () => {
  return {
    type: actionTypes.SET_BREED_FAIL
  };
};

export const setCounter = counter => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_COUNTER,
      counter: counter
    });
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

export const setBreed = breed => {
  return dispatch => {
    dispatch(setBreedSuccess(breed));
  };
};

export const getImages = (breed, counter) => {
  return dispatch => {
    dispatch(fetchImagesStart());
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/${counter}`)
      .then(response => {
        dispatch(fetchImagesSuccess(response.data.message));
      })
      .catch(error => {
        dispatch(setBreedFail());
        dispatch(fetchImagesFail());
      });
  };
};
