import React from 'react';
import { useSelector } from 'react-redux';
import { DogsList } from '../../container/dogsList';
import Spinner from '../../component/spinner';

const Content = () => {
  const loading = useSelector(state => state.loading);
  const breed = useSelector(state => state.breed);
  const image = useSelector(state => state.image);
  return (
    <div className="content">
      <div className="content__top">
        <button>-</button> 1 <button>+</button>
      </div>
      <div className="content__dogs">
        <div className="content__list">
          <DogsList />
        </div>
        <div className="content__images">
          {loading ? (
            <Spinner />
          ) : (
            <img className="content__images__image" alt={breed} src={image} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
