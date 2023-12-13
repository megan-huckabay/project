// __tests__/App.test.js

import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
  const { getByText } = render(<App />);
  const welcomeText = getByText(/Welcome to my Portfolio/i);
  expect(welcomeText).toBeInTheDocument();
});

test('styles are applied correctly', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
