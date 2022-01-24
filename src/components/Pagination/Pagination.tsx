import React from 'react';
import NextButton from './NextButton';
import PageNumber from './PageNumber';
import PrevButton from './PrevButton';

interface IPagination {
  children: React.ReactNode;
}

const Pagination = ({ children }: IPagination): React.ReactElement => (
  <div className="btn-group">{children}</div>
);

Pagination.Prev = PrevButton;
Pagination.Next = NextButton;
Pagination.Item = PageNumber;

export default Pagination;
