import React from 'react';

const ListItem = props => {
  const handleClick = event => {
    props.onItemClick(event, props.breed);
  };

  return (
    <li onClick={handleClick} key={props.item}>
      <div
        className={`item ${
          props.selectedBreed === props.item ? 'item--selected' : ''
        }`}
      >
        {props.item}
      </div>
      {props.children}
    </li>
  );
};

export default ListItem;
