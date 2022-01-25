import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tag from './Tag';

describe('Render Tag', () => {
  it('Renders Tag Component', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Tag>
        <Tag.Item handleClick={onClickMock} text="test" />
      </Tag>
    );
    expect(getByText('test')).toBeInTheDocument();
  });
});
