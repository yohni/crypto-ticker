import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '.';

describe('Navbar Component', () => {
  it('Renders Navbar Component', () => {
    const { getByText, container } = render(<Navbar />);
    const nav = document.createElement('nav');

    expect(getByText('Crytick')).toBeInTheDocument();
    expect(container.appendChild(nav));
  });
});
