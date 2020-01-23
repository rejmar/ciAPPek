import React from 'react';
import { DogsList } from '../../container/dogsList';

const Content = () => {
  const unClickHandler = () => {
    // console.log('dasdsa');
    return 'nonclicked';
  };
  return (
    <div className="content" onClick={unClickHandler}>
      <DogsList />
    </div>
  );
};

export default Content;
