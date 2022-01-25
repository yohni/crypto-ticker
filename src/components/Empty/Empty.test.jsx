import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Empty from '.';

describe('Render Empty', () => {
  it('Renders Empty', () => {
    const { getByText } = render(<Empty />);

    expect(getByText('No asset found!')).toBeInTheDocument();
  });
});
