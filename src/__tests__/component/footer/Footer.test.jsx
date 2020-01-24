import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Footer } from '../../../component/footer';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Footer renders without crashing', () => {
  act(() => {
    ReactDOM.render(<Footer />, container);
  });

  const div = container.querySelector('.footer');
  expect(div).not.toBe(null);
  expect(container.querySelector('.link__free').title).toBe('Freepik');
  expect(container.querySelector('.link__flat').title).toBe('Flaticon');
});
