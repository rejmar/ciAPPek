import React from 'react';

export const Images = props =>
  props.urls.map(imageURL => (
    <img className="content__images__image" alt={props.breed} src={imageURL} />
  ));
