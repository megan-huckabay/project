// __tests__/Navigation.test.js

import 'jest-styled-components';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navigation from '../Components/Navigation';

test('renders the Navigation component and checks styles', () => {
  const { getByText, container } = render(
    <Router>
      <Navigation />
    </Router>
  );

  // Test component rendering
  const homeLink = getByText(/Home/i);
  const aboutLink = getByText(/About/i);
  const educationLink = getByText(/Education/i);
  const experienceLink = getByText(/Experience/i);
  const contactLink = getByText(/Contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(educationLink).toBeInTheDocument();
  expect(experienceLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();

  // Test styles
  expect(container).toMatchSnapshot();
});
