// __tests__/Home.test.js

import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Components/Home';

test('renders the Home component without errors', () => {
  render(<Home />);
  // If the component renders without throwing an error, the test will pass
});

test('renders the greeting text', () => {
  render(<Home />);
  const greetingText = screen.getByText(/Hello there!/i);
  expect(greetingText).toBeInTheDocument();
});

test('renders the strong tag in the greeting text', () => {
  render(<Home />);
  const strongTag = screen.getByText(/Hello there!/i).closest('strong');
  expect(strongTag).toBeInTheDocument();
});

test('matches the snapshot for the Home component', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});

test('matches the snapshot for the content container', () => {
  const { container } = render(<Home />);
  const contentContainer = container.querySelector('.content-container');
  expect(contentContainer).toMatchSnapshot();
});

test('matches the snapshot for the home section', () => {
  const { container } = render(<Home />);
  const homeSection = container.querySelector('.home-section');
  expect(homeSection).toMatchSnapshot();
});

// Add more tests as needed to cover specific elements or styles in the Home component
