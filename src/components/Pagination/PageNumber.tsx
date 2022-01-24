/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import React from 'react';

interface IPageNumber {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const PageNumber = ({
  children,
  active = false,
  disabled = false,
  onClick,
}: IPageNumber): React.ReactElement => (
  <button
    type="button"
    className={classNames('btn btn-xs', {
      'btn-active': active,
      'btn-disabled': disabled,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default PageNumber;
