import React from 'react';
import { SelectOptions } from './selectOptions';

export const Select = props => (
  <select
    className="select"
    value={props.counter}
    onChange={props.onSelectChange}
  >
    <SelectOptions />
  </select>
);
