import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from './Pagination';

describe('Render Pagination component', () => {
  it('Render Pagination component', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Pagination>
        <Pagination.Prev onClick={onClickMock} />
        <Pagination.Item onClick={onClickMock}>1</Pagination.Item>
        <Pagination.Next onClick={onClickMock} />
      </Pagination>
    );

    expect(getByText('«')).toBeInTheDocument();
    expect(getByText('»')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });
});
