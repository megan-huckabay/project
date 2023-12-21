// __tests__/Home.test.js

import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Components/Home';

test('renders the Home component without errors', () => {
  render(<Home />);

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

test('matches the snapshot for the home container', () => {
  const { container } = render(<Home />);
  const contentContainer = container.querySelector('.home-container');
  expect(contentContainer).toMatchSnapshot();
});

test('matches the snapshot for the home section', () => {
  const { container } = render(<Home />);
  const homeSection = container.querySelector('.home-section');
  expect(homeSection).toMatchSnapshot();
});

test('renders specific content in the Home component', () => {
  render(<Home />);
  const specificContent = screen.getByText(/virtual journey into the depths of my digital domain/i);
  expect(specificContent).toBeInTheDocument();
});

test('has a specific structure in the Home component', () => {
  const { container } = render(<Home />);
  const homeContainer = container.querySelector('.home-container');
  expect(homeContainer).toBeInTheDocument();

  const homeSection = container.querySelector('.home-section');
  expect(homeSection).toBeInTheDocument();
  expect(homeSection.children.length).toBeGreaterThan(0);

});

test('applies specific CSS classes in the Home component', () => {
  const { container } = render(<Home />);
  const homeContainer = container.querySelector('.home-container');
  expect(homeContainer).toHaveClass('home-page');

  const homeSection = container.querySelector('.home-section');
  expect(homeSection).toHaveClass('home-section');

});

test('renders specific HTML elements in the Home component', () => {
  const { container } = render(<Home />);
  const headingElement = container.querySelector('h1');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement.textContent).toBe('Hello there!');
});
