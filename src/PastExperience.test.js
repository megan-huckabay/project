// src/components/PastExperience.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PastExperience from './Components/PastExperience';

test('renders PastExperience component', () => {
  render(
    <MemoryRouter>
      <PastExperience />
    </MemoryRouter>
  );

  const headingElement = screen.getByRole('heading', { level: 1, name: /Experience/i });
  expect(headingElement).toBeInTheDocument();
  // Add more specific tests for the PastExperience component
});
