import classNames from 'classnames';
import React from 'react';
import {
  currencyFormatter,
  marketCap,
  numberFormater,
} from '../../utils/assets.util';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
};

const TableItem: React.FC<Props> = ({ data }: Props) => {
  const percentage = parseFloat(data?.ticker?.priceChangePercent);
  return (
    <div className="container grid grid-cols-table-xs md:grid-cols-3 gap-x-2 py-2 shadow-sm">
      {/* col 1 */}
      <div className="flex items-center">
        <div
          className="w-8 h-8 bg-purple-600 rounded-full flex-shrink-0"
          style={{ backgroundImage: `url(${data?.logoUrl})` }}
        />
        <div className="ml-2 md:ml-4 flex-1 md:flex md:items-baseline">
          <h6 className="text-base md:text-lg md:font-bold truncate-1 md:mr-2">
            {data.assetCode}
          </h6>
          <span className="text-xs md:text-base truncate-1">
            {data.assetName}
          </span>
        </div>
      </div>
      {/* col 2 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-around">
        <div
          className={classNames('text-base', {
            'text-success': percentage > 0,
            'text-error': percentage < 0,
          })}
        >
          {currencyFormatter.format(data?.ticker?.lastPrice) || '-'}
        </div>
        <div
          className={classNames('text-xs md:text-base', {
            // 'text-success': percentage > 0,
            // 'text-error': percentage < 0,
          })}
        >
          {`${percentage.toFixed(2)}%`}
        </div>
      </div>
      {/* col 3 */}
      <div className="flex-1 flex flex-col text-right md:flex-row-reverse md:justify-around md:items-center">
        <div className="text-base">
          {currencyFormatter.format(
            marketCap(parseFloat(data?.ticker?.lastPrice), data?.ticker?.count)
          ) || '-'}
        </div>
        <div className="text-xs md:text-base">
          {numberFormater.format(data?.ticker?.volume)}
        </div>
      </div>
    </div>
  );
};

export default TableItem;
