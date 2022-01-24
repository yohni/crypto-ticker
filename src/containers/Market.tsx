import * as React from 'react';
import { useMemo } from 'react';
import TableItem from '../components/Table/TableItem';
import useAssets from '../hooks/useAssets';
import useTicker from '../hooks/useTicker';
import { marketCap } from '../utils/assets.util';

// export interface IAppProps {}

const Market = (): React.ReactElement => {
  const { assets, isLoading, isError } = useAssets();
  const { assetTickers, isError: tickerError } = useTicker();

  const dataset = useMemo(() => {
    const tickerObject: Record<string, any> = assetTickers.reduce(
      (obj, item) => ({
        ...obj,
        [item.symbol.replace('USDT', '')]: item,
      }),
      {}
    );
    return assets
      .map((item) => ({
        ...item,
        ticker: tickerObject[item.assetCode],
      }))
      .filter((item) => item.ticker)
      .sort(
        (a, b) =>
          marketCap(b.ticker?.lastPrice, b.ticker?.count) -
          marketCap(a.ticker?.lastPrice, a.ticker?.count)
      );
  }, [assetTickers, assets]);

  return (
    <div>
      <div className="container">
        <h5 className="font-bold">Markets</h5>
      </div>
      <div>
        {dataset.map((item) => (
          <TableItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Market;
