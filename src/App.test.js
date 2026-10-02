import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio', () => {
  render(<App />);
  const nameElements = screen.getAllByText('Keshav Gupta');
  expect(nameElements.length).toBeGreaterThan(0);
});
