import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // Just ensure the app mounts — the default CRA "learn react" test
  // was a template leftover that doesn't apply to this project.
  expect(document.querySelector('nav')).toBeTruthy();
});
