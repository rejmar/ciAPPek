import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Label } from '../../component/label';
import * as actions from '../../store/action';
import ListItem from '../../component/listItem';

export const DogsList = () => {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);
  const selectedBreed = useSelector(state => state.breed);

  const itemClickHandler = (event, breed) => {
    event.stopPropagation();
    dispatch(actions.setBreed(breed));
  };

  return (
    <div className="dogsList">
      <Label>Choose a dog:</Label>
      <ul className="dogsList__base">
        {Object.entries(dogs).map(dog =>
          dog[1].length > 0 ? (
            <ListItem
              item={dog[0]}
              breed={dog[0]}
              selectedBreed={selectedBreed}
              onItemClick={itemClickHandler}
            >
              <ul>
                {dog[1].map(subbreed => (
                  <ListItem
                    item={subbreed}
                    breed={dog[0]}
                    selectedBreed={selectedBreed}
                    onItemClick={itemClickHandler}
                  />
                ))}
              </ul>
            </ListItem>
          ) : (
            <ListItem
              item={dog[0]}
              breed={dog[0]}
              selectedBreed={selectedBreed}
              onItemClick={itemClickHandler}
            />
          )
        )}
      </ul>
    </div>
  );
};
