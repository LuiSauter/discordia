import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react clone discord', () => {
  render(<App />);
  const linkElement = screen.getByTitle(/Discordia/i);
  expect(linkElement).toBeInTheDocument();
});
