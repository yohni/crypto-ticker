import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '.';

describe('Render SearchBar', () => {
  it('Renders SearchBar component', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="Search" onChange={onChangeMock} />
    );

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
