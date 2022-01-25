import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from '.';

describe('Render Avatar', () => {
  it('Renders Avatar Component', () => {
    const { getByText } = render(<Avatar text="test" />);

    expect(getByText('t')).toBeInTheDocument();
  });
  it('Renders Avatar Component with no props', () => {
    const { getByText } = render(<Avatar />);

    expect(getByText('?')).toBeInTheDocument();
  });
});
