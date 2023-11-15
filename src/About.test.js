// src/components/About.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './Components/About';

test('renders About component', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/About Me/i);
  expect(headingElement).toBeInTheDocument();
  // Add more specific tests for the About component
});
