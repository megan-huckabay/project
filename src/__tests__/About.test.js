import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import About from '../Components/About';

test('renders the About component and checks styles', () => {
  const { getByText, getAllByAltText, getByTestId } = render(<About />);
  
  // Test component rendering
  const aboutTitle = getByText(/About Me/i);
  expect(aboutTitle).toBeInTheDocument();

  // Log the actual number of images
  const images = getAllByAltText(/picture/i);
  console.log('Number of images:', images.length);

  // Test rendering of 3 images
  expect(images).toHaveLength(3);

  // Test rendering of dream container
  const dreamContainer = getByTestId('dream-container');
  expect(dreamContainer).toBeInTheDocument();

  // Test rendering of fun container
  const funContainer = getByTestId('fun-container');
  expect(funContainer).toBeInTheDocument();

  // Test rendering of h1 and h2 tags
  const h1Tag = getByText(/Things I Enjoy in My Spare Time!/i);
  expect(h1Tag).toBeInTheDocument();

  const h2Tags = [
    'The Art of Pour Painting!',
    'Extending a Helping Hand',
    "Embracing Nature's Beauty",
    'Learning How to Code!!',
  ];

  h2Tags.forEach((text) => {
    const h2Tag = getByText(text);
    expect(h2Tag).toBeInTheDocument();
  });
});

test('matches snapshot', () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});
