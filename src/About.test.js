// src/components/About.test.js
// Import necessary modules for testing
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './Components/About';

// Test 1: Renders About component
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

// Test 2: Checks if "Things I Enjoy in My Spare Time!" heading is present
test('renders "Things I Enjoy in My Spare Time!" heading', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  const headingElement = screen.getByText(/Things I Enjoy in My Spare Time!/i);
  expect(headingElement).toBeInTheDocument();
});

// Test 3: Checks if the component contains the text about pour painting
test('renders information about Pour Painting', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  const pourPaintingText = screen.getByText(/Pour painting has become a central passion/i);
  expect(pourPaintingText).toBeInTheDocument();
});
