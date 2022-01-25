import classNames from 'classnames';
import React from 'react';

const TableHeader: React.FC = () => (
  <div className="container grid grid-cols-table-xs md:grid-cols-3 gap-x-2 py-2 text-neutral text-opacity-50 shadow-sm bg-slate-100">
    {/* col 1 */}
    <div className="flex text-xs md:text-base md:px-2">Name</div>
    {/* col 2 */}
    <div className="flex md:flex-row md:justify-around md:items-center">
      <div className={classNames('text-xs md:text-base')}>Price</div>
      <div className={classNames('text-xs md:hidden')}>/24h</div>
      <div className={classNames('text-xs hidden md:block md:text-base')}>
        24h Change
      </div>
    </div>
    {/* col 3 */}
    <div className="flex-1 text-right">
      <div className="hidden md:flex md:flex-row-reverse md:justify-around md:items-center">
        <div className="text-xs md:text-base">Market Cap</div>
        <div className="text-xs md:text-base">Volume</div>
      </div>
      <div className="md:hidden flex justify-end">
        <div className="text-xs md:text-base">Cap</div>
        <div className="text-xs md:text-base">/Vol</div>
      </div>
    </div>
  </div>
);

export default TableHeader;
