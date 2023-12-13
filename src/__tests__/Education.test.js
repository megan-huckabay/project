import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from '../Components/Education';

test('renders the Education component and checks elements', () => {
  render(<Education />);
  
  // Test component rendering
  const educationTitle = screen.getByText(/Education/i);
  expect(educationTitle).toBeInTheDocument();

  // Test headings
  const h1Heading = screen.getByText(/Full-stack Software Development Program/i);
  expect(h1Heading).toBeInTheDocument();

  const h2Heading = screen.getByText(/GCA \(General Coding Assessment\)/i);
  expect(h2Heading).toBeInTheDocument();

  // Test paragraphs
const paragraphs = screen.getAllByText(/In these projects, I contributed significantly/i);
expect(paragraphs.length).toBe(1); // Adjust based on your content


  // Test image
  const image = screen.getByAltText(/cert1/i);
  expect(image).toBeInTheDocument();

});

test('matches snapshot', () => {
  const { container } = render(<Education />);
  expect(container).toMatchSnapshot();
});
