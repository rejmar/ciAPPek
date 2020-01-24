import * as actionTypes from './actionTypes';

export const setCounter = counter => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_COUNTER,
      counter: counter
    });
  };
};

export const setLock = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_LOCK
    });
  };
};
