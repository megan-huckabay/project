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

test('renders specific content in the Education component', () => {
  render(<Education />);
  const specificContent = screen.getByText(/JavaScript Libraries/i);
  expect(specificContent).toBeInTheDocument();
});

test('has a specific structure in the Education component', () => {
  const { container } = render(<Education />);
  const educationContainer = container.querySelector('.education-container');
  expect(educationContainer).toBeInTheDocument();

  const schoolSection = container.querySelector('.school-section');
  expect(schoolSection).toBeInTheDocument();
  expect(schoolSection.children.length).toBeGreaterThan(0);

});

test('applies specific CSS classes in the Education component', () => {
  const { container } = render(<Education />);
  const educationContainer = container.querySelector('.education-container');
  expect(educationContainer).toHaveClass('education-page');

  const schoolSection = container.querySelector('.school-section');
  expect(schoolSection).toHaveClass('school-section');

});

test('renders specific HTML elements in the Education component', () => {
  const { container } = render(<Education />);
  const headingElement = container.querySelector('h1');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement.textContent).toBe('Education');
});
