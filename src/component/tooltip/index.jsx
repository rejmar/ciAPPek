import React from 'react';
import Spinner from '../spinner';

export const Tooltip = props => (
  <div className="tooltip">
    {props.children}
    <span className={`${props.state} tooltip__image`}>
      {props.loading ? (
        <Spinner />
      ) : (
        <img alt={props.breed} src={props.image} />
      )}
    </span>
  </div>
);
