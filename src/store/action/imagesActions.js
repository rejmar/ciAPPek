import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as breedActions from './breedActions';

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
export const fetchImagesFail = () => {
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
        dispatch(breedActions.setBreedFail());
        dispatch(fetchImagesFail());
      });
  };
};
