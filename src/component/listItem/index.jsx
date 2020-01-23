import React, { useState, useEffect, useRef } from 'react';
import { Tooltip } from '../tooltip';
import Spinner from '../spinner';

const ListItem = props => {
  const [clicked, setClicked] = useState('nonclicked');

  const handleClick = event => {
    props.onItemClick(event, props.breed);
    setClicked('clicked');
  };

  const handleClickOutside = () => {
    setClicked('nonclicked');
  };

  const useOutsideClicker = ref => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setClicked('nonclicked');
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  };

  const wrapperRef = useRef(null);
  useOutsideClicker(wrapperRef);

  return (
    <li
      onClick={handleClick}
      key={props.item}
      onBlur={handleClickOutside}
      ref={wrapperRef}
    >
      <Tooltip
        breed={props.item}
        image={props.image}
        state={clicked}
        loading={props.loading}
      >
        {props.item}
      </Tooltip>
      {props.children}
    </li>
  );
};

export default ListItem;
