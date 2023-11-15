import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Navigation component with links', () => {
  render(<App />);
  const homeLinkElement = screen.getByText(/Home/i);
  const aboutLinkElement = screen.getByText(/About/i);
  const educationLinkElement = screen.getByText(/Education/i);
  const skillsLinkElement = screen.getByText(/Skills/i);
  const contactLinkElement = screen.getByText(/Contact/i);

  expect(homeLinkElement).toBeInTheDocument();
  expect(aboutLinkElement).toBeInTheDocument();
  expect(educationLinkElement).toBeInTheDocument();
  expect(skillsLinkElement).toBeInTheDocument();
  expect(contactLinkElement).toBeInTheDocument();
});
