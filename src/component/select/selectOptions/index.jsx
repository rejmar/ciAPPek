import React from 'react';

export const SelectOptions = () =>
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
    <option key={i} value={i}>
      {i}
    </option>
  ));
