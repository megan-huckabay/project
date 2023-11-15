// src/components/Education.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Education from './Components/Education';

test('renders Education component', () => {
  render(
    <MemoryRouter>
      <Education />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/Education/i);
  expect(headingElement).toBeInTheDocument();
  // Add more specific tests for the Education component
});
