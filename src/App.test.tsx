import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the custom matchers
jest.mock('./App.css', () => ({})); // Мок для импорта CSS файлов
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
