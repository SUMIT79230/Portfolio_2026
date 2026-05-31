import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the contact section', () => {
  render(<App />);

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  expect(screen.queryByLabelText(/subject/i)).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /backend & db/i })).toBeInTheDocument();
});
