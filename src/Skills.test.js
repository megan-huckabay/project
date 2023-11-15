// src/components/Skills.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Skills from './Components/PastExperience';

test('renders Skills component', () => {
  render(
    <MemoryRouter>
      <Skills />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/Skills/i);
  expect(headingElement).toBeInTheDocument();
  // Add more specific tests for the Skills component
});
