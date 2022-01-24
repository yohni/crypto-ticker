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

const TableItem = ({ data }: Props): React.ReactElement => {
  const percentage = parseFloat(data?.ticker?.priceChangePercent);
  return (
    <div className="container grid grid-cols-table-xs gap-x-2 py-2">
      {/* col 1 */}
      <div className="flex items-center">
        <div
          className="w-8 h-8 md:w-24 md:h-24 bg-purple-600 rounded-full flex-shrink-0"
          style={{ backgroundImage: `url(${data?.logoUrl})` }}
        />
        <div className="ml-2 flex-1">
          <h6 className="text-base truncate-1">{data.assetCode}</h6>
          <span className="text-xs truncate-1">{data.assetName}</span>
        </div>
      </div>
      {/* col 2 */}
      <div>
        <div
          className={classNames('text-base', {
            'text-success': percentage > 0,
            'text-error': percentage < 0,
          })}
        >
          {currencyFormatter.format(data?.ticker?.lastPrice) || '-'}
        </div>
        <div
          className={classNames('text-xs', {
            // 'text-success': percentage > 0,
            // 'text-error': percentage < 0,
          })}
        >
          {`${percentage.toFixed(2)}%`}
        </div>
      </div>
      {/* col 3 */}
      <div className="flex-1 text-right">
        <div>
          {currencyFormatter.format(
            marketCap(data?.ticker?.lastPrice, data?.ticker?.quoteVolume)
          ) || '-'}
        </div>
        <div className="text-xs">
          {numberFormater.format(data?.ticker?.volume)}
        </div>
      </div>
    </div>
  );
};

export default TableItem;
