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

export const setBreedFail = () => {
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
