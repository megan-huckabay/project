// src/components/Contact.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Components/Contact';

test('renders Contact component', () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/Contact/i);
  expect(headingElement).toBeInTheDocument();
  // Add more specific tests for the Contact component
});
