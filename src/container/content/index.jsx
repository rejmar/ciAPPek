import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TopContent } from './topContent';
import { BottomContent } from './bottomContent';
import * as actions from '../../store/action/dogActions';

import UIfx from 'uifx';
import bark from '../../assets/woof.mp3';

const Content = () => {
  const breed = useSelector(state => state.breed);
  const dispatch = useDispatch();

  const woof = new UIfx(bark, {
    volume: 0.5
  });

  useEffect(() => {
    woof.play();
    dispatch(actions.getDogs());
  }, [breed]);

  return (
    <div className="content">
      <TopContent />
      <BottomContent />
    </div>
  );
};

export default Content;
