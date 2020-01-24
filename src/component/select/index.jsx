import React from 'react';
import { SelectOptions } from './selectOptions';

export const Select = props => (
  <select
    className={`select ${props.locked ? 'disabled' : ''}`}
    value={props.counter}
    onChange={props.onSelectChange}
    disabled={props.locked}
  >
    <SelectOptions />
  </select>
);
