// __tests__/Experience.test.js

import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import Experience from '../Components/Experience';

test('renders the Experience component and checks styles', () => {
  const { container } = render(<Experience />);

  // Take a snapshot of the whole component
  expect(container).toMatchSnapshot();

  // You can also take individual snapshots for each section
  const foodContainer = container.querySelector('.food-container');
  expect(foodContainer).toMatchSnapshot();

  const nurseContainer = container.querySelector('.nurse-container');
  expect(nurseContainer).toMatchSnapshot();

  const retailContainer = container.querySelector('.retail-container');
  expect(retailContainer).toMatchSnapshot();

  const youthContainer = container.querySelector('.youth-container');
  expect(youthContainer).toMatchSnapshot();
});
