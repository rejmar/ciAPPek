import React from 'react';
import { useSelector } from 'react-redux';
import { DogsList } from '../../../container/dogsList';
import Spinner from '../../../component/spinner';
import { Images } from '../../../component/images';

export const BottomContent = props => {
  const loading = useSelector(state => state.loading);
  const breed = useSelector(state => state.breed);
  const images = useSelector(state => state.images);
  const counter = useSelector(state => state.counter);

  return (
    <div className="content__dogs">
      <div className="content__list">
        <DogsList />
      </div>
      <div className="content__images">
        {loading ? (
          <Spinner />
        ) : (
          counter > 0 && <Images breed={breed} urls={images} />
        )}
      </div>
    </div>
  );
};
