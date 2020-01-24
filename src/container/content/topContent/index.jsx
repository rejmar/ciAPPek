import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../../store/action';
import { Select } from '../../../component/select';

export const TopContent = () => {
  const breed = useSelector(state => state.breed);
  const counter = useSelector(state => state.counter);
  const locked = useSelector(state => state.lock);

  const dispatch = useDispatch();

  const changeSelectHandler = event => {
    const chosenCounter = event.target.value;

    dispatch(actions.setCounter(chosenCounter));
    breed && dispatch(actions.getImages(breed, chosenCounter));
  };

  return (
    <div className="content__top">
      I would like to see {'\u00A0'}
      <Select
        counter={counter}
        onSelectChange={changeSelectHandler}
        locked={locked}
      />
      {'\u00A0'} {counter === '1' ? 'dog' : 'dogs'}
    </div>
  );
};
