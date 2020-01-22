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
