import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navigation component with links', () => {
  render(<App />);

  // Get the navigation element
  const navigationElement = screen.getByRole('navigation');


  // Use getByText within the navigation element for links that are visible on the screen
  const navigationLinkElement = screen.getByText(/Navigation/i, { container: navigationElement });

  const homeLinkElement = screen.getByText(/Home/i, { container: navElement });
  const aboutLinkElement = screen.getByText(/About/i, { container: navElement });
  const educationLinkElement = screen.getByText(/Education/i, { container: navElement });
  const experienceLinkElement = screen.getByText(/PastExperience/i, { container: navElement });

  expect(navigationLinkElement).toBeInTheDocument();
  expect(homeLinkElement).toBeInTheDocument();
  expect(aboutLinkElement).toBeInTheDocument();
  expect(educationLinkElement).toBeInTheDocument();
  expect(experienceLinkElement).toBeInTheDocument();
});