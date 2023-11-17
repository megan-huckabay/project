// src/Navigation.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './Components/Navigation';
import { MemoryRouter } from 'react-router-dom';

test('renders Navigation component with links', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );

  const homeLinkElement = screen.getByText(/Home/i);
  const aboutLinkElement = screen.getByText(/About/i);
  const educationLinkElement = screen.getByText(/Education/i);
  const experienceLinkElement = screen.getByText(/Experience/i);

  expect(homeLinkElement).toBeInTheDocument();
  expect(aboutLinkElement).toBeInTheDocument();
  expect(educationLinkElement).toBeInTheDocument();
  expect(experienceLinkElement).toBeInTheDocument();
});
