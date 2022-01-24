import React from 'react';

interface ITagsItem {
  text: string;
  handleClick: (event: string) => void;
}

const TagItem = ({ text, handleClick }: ITagsItem): React.ReactElement => (
  <button
    type="button"
    className="btn btn-sm btn-outline btn-accent mr-2 snap-start"
    onClick={() => handleClick(text)}
  >
    {text}
  </button>
);

export default TagItem;
