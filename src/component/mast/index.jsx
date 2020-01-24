import React from 'react';
import Logo from '../../assets/dog.png';

export const Mast = () => (
  <div className="mast">
    <img onClick={() => window.location.reload()} src={Logo} alt="dog logo" />
  </div>
);
