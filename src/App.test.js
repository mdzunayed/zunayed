import { render, screen } from '@testing-library/react';
import Navbar from '.src: /components/Navbar';

test('renders Navbar with correct links', () => {
  render(<Navbar />);
  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
});