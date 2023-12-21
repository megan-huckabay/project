// __tests__/Experience.test.js

import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import Experience from '../Components/Experience';

test('renders the Experience component and checks styles', () => {
  const { container } = render(<Experience />);

  expect(container).toMatchSnapshot();

  const foodContainer = container.querySelector('.food-container');
  expect(foodContainer).toMatchSnapshot();

  const nurseContainer = container.querySelector('.nurse-container');
  expect(nurseContainer).toMatchSnapshot();

  const retailContainer = container.querySelector('.retail-container');
  expect(retailContainer).toMatchSnapshot();

  const youthContainer = container.querySelector('.youth-container');
  expect(youthContainer).toMatchSnapshot();
});

test('renders specific content in the Experience component', () => {
  const { getByText } = render(<Experience />);
  const foodSection = getByText(/Little Caesars Arroyo Grande, CA. 2010-2011/i);
  expect(foodSection).toBeInTheDocument();

  const nurseSection = getByText(/Private Clients\/Family in Pismo Beach, CA. | Porterville, CA. | Tipton, CA./i);
  expect(nurseSection).toBeInTheDocument();

});

test('has a specific structure in the Experience component', () => {
  const { container } = render(<Experience />);
  const experienceContainer = container.querySelector('.experience-container');
  expect(experienceContainer).toBeInTheDocument();

  const foodContainer = container.querySelector('.food-container');
  expect(foodContainer).toBeInTheDocument();
  expect(foodContainer.children.length).toBeGreaterThan(0);

});

test('applies specific CSS classes in the Experience component', () => {
  const { container } = render(<Experience />);
  const experienceContainer = container.querySelector('.experience-container');
  expect(experienceContainer).toHaveClass('experience-page');

  const foodContainer = container.querySelector('.food-container');
  expect(foodContainer).toHaveClass('food-container');

});
