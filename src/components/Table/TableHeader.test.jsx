import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableHeader from './TableHeader';

describe('Render TableHeader', () => {
  it('Renders TableHeader Component', () => {
    const { getByText } = render(<TableHeader />);

    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Price')).toBeInTheDocument();
    expect(getByText('24h Volume')).toBeInTheDocument();
    expect(getByText('Market Cap')).toBeInTheDocument();
  });
});
