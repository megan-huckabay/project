import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../Components/Contact';

test('renders the Contact component and checks links', () => {
  render(<Contact />);
  
  // Test component rendering
  const contactTitle = screen.getByText(/Contact Information/i);
  expect(contactTitle).toBeInTheDocument();

  // Test email links
  const mainEmailLink = screen.getByRole('link', { name: /techchick2023@gmail.com/i });
  expect(mainEmailLink).toHaveAttribute('href', 'mailto:techchick2023@gmail.com');

  const alternativeEmailLink = screen.getByRole('link', { name: /huckabay90@gmail.com/i });
  expect(alternativeEmailLink).toHaveAttribute('href', 'mailto:huckabay90@gmail.com');

  // Test GitHub link
  const githubLink = screen.getByRole('link', { name: /GitHub/i });
  expect(githubLink).toHaveAttribute('href', 'https://github.com/meggers1990');

  // Test LinkedIn link
  const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
  expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/megan-huckabay');

  // Test Resume link
  const resumeLink = screen.getByRole('link', { name: /Click for Resume/i });
  expect(resumeLink).toHaveAttribute('href', 'https://docs.google.com/document/d/1d84juiC488FZ55L0Wioiz5BCJ5KyngAjabOw17EoqIc/edit?usp=sharing');
});

test('matches snapshot', () => {
  const { container } = render(<Contact />);
  expect(container).toMatchSnapshot();
});
