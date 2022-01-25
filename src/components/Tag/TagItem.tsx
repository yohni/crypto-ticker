import classNames from 'classnames';
import React from 'react';

interface ITagsItem {
  text: string;
  active?: boolean;
  handleClick: (event: string) => void;
}

const TagItem: React.FC<ITagsItem> = ({
  text,
  active = false,
  handleClick,
}: ITagsItem) => (
  <button
    type="button"
    className={classNames('btn btn-sm btn-warning mr-2 snap-start', {
      'btn-outline': !active,
    })}
    onClick={() => handleClick(text)}
  >
    {text}
  </button>
);

export default TagItem;
