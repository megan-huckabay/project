import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import About from '../Components/About';

test('renders the About component and checks styles', () => {
  const { getByText, getAllByAltText, getByTestId } = render(<About />);
  
  const aboutTitle = getByText(/About Me/i);
  expect(aboutTitle).toBeInTheDocument();

  const images = getAllByAltText(/picture/i);
  console.log('Number of images:', images.length);

  expect(images).toHaveLength(3);

  const dreamContainer = getByTestId('dream-container');
  expect(dreamContainer).toBeInTheDocument();

  const funContainer = getByTestId('fun-container');
  expect(funContainer).toBeInTheDocument();

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

test('renders specific text content', () => {
  const { getByText } = render(<About />);

  const aboutText = getByText(/dedicated individual/i);
  expect(aboutText).toBeInTheDocument();

  const pourPaintingText = getByText(/The Art of Pour Painting!/i);
  expect(pourPaintingText).toBeInTheDocument();

});

test('renders images with specific alt attributes', () => {
  const { getAllByAltText } = render(<About />);

  const altAttributes = ['picture1', 'prettyPicture', 'kisses', 'picture2'];

  altAttributes.forEach((altText) => {
    const image = getAllByAltText(new RegExp(altText, 'i'));
    expect(image).toHaveLength(1);
  });
});

test('applies specific CSS classes', () => {
  const { container } = render(<About />);

  const aboutContainer = container.querySelector('.about-container');
  expect(aboutContainer).toHaveClass('about-page');

  const funContainer = container.querySelector('.fun-container');
  expect(funContainer).toHaveAttribute('data-testid', 'fun-container');

});

test('has a specific structure', () => {
  const { container } = render(<About />);

  const aboutSection = container.querySelector('.about-section');
  expect(aboutSection).toBeInTheDocument();
  expect(aboutSection.children.length).toBeGreaterThan(0);

  const pictureSection = container.querySelector('.picture-section');
  expect(pictureSection).toBeInTheDocument();
  expect(pictureSection.children.length).toBe(4); 

});
