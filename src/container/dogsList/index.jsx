import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from '../../component/label';
import * as actions from '../../store/action/dogActions';
import ListItem from '../../component/listItem';

export const DogsList = props => {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);

  useEffect(() => {
    dispatch(actions.getDogs());
  }, []);

  const itemClickHandler = (event, breed) => {
    event.stopPropagation();
    dispatch(actions.getImage(breed));
  };

  return (
    <div className="dogsList">
      <Label>Dogs:</Label>
      <ul className="dogsList__base">
        {Object.entries(dogs).map(dog =>
          dog[1].length > 0 ? (
            <ListItem
              item={dog[0]}
              breed={dog[0]}
              onItemClick={itemClickHandler}
            >
              <ul>
                {dog[1].map(subbreed => (
                  <ListItem
                    item={subbreed}
                    breed={dog[0]}
                    onItemClick={itemClickHandler}
                  />
                ))}
              </ul>
            </ListItem>
          ) : (
            <ListItem
              item={dog[0]}
              breed={dog[0]}
              onItemClick={itemClickHandler}
            />
          )
        )}
      </ul>
    </div>
  );
};
