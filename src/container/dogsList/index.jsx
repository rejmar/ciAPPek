import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from '../../component/label';
import * as actions from '../../store/action/dogActions';

export const DogsList = props => {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);

  useEffect(() => {
    dispatch(actions.getDogs());
  }, []);

  return (
    <div className="dogsList">
      <Label>Dogs:</Label>
      <ul>
        {Object.entries(dogs).map(dog =>
          dog[1].length > 0 ? (
            <li key={dog[0]}>
              {dog[0]}
              <ul>
                {dog[1].map(subbreed => (
                  <li key={`${dog[0] + '__' + subbreed}`}>{subbreed}</li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={dog[0]}>{dog[0]}</li>
          )
        )}
      </ul>
    </div>
  );
};
