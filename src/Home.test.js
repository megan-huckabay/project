// src/components/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Components/Home';

test('renders Home component', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/Welcome to My Portfolio/i);
  expect(headingElement).toBeInTheDocument();
  // Add more specific tests for the Home component
});
