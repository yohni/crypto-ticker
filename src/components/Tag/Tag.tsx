import React from 'react';
import TagItem from './TagItem';

interface ITag {
  children: Array<React.ReactNode>;
}

const Tag = ({ children }: ITag): React.ReactElement => (
  <div className="flex overflow-x-scroll snap-proximity snap-x no-scrollbar">
    {children}
  </div>
);

Tag.Item = TagItem;

export default Tag;
