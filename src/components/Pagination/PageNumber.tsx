/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import React from 'react';

interface IPageNumber {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PageNumber: React.FC<IPageNumber> = ({
  children,
  active = false,
  disabled = false,
  onClick,
}: IPageNumber) => (
  <button
    type="button"
    className={classNames('btn btn-xs md:btn-sm', {
      'btn-active': active,
      'btn-disabled': disabled,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default PageNumber;
