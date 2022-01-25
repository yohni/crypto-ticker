import classNames from 'classnames';
import React from 'react';
import { BiSearch } from 'react-icons/bi';

interface ISearchBar {
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchBar: React.FC<ISearchBar> = ({
  placeholder,
  onChange,
  className,
}: ISearchBar) => (
  <div className="relative mb-5">
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className={classNames('input input-bordered w-full pl-9', className)}
    />
    <BiSearch
      size={24}
      className="absolute inset-y-0 my-auto text-neutral left-2"
    />
  </div>
);

export default SearchBar;
