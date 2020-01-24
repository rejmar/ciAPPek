import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as dogActions from './dogActions';

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

export const getImages = (breed, counter) => {
  return dispatch => {
    dispatch(fetchImagesStart());
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/${counter}`)
      .then(response => {
        dispatch(fetchImagesSuccess(response.data.message));
      })
      .catch(error => {
        dispatch(dogActions.setBreedFail());
        dispatch(fetchImagesFail());
      });
  };
};
