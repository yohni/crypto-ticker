import * as React from 'react';
import Pagination from '../components/Pagination/Pagination';
import TableItem from '../components/Table/TableItem';
import Tag from '../components/Tag/Tag';
import useAssets from '../hooks/useAssets';
import useTicker from '../hooks/useTicker';
import { handleSearch, marketCap } from '../utils/assets.util';

// export interface IAppProps {}

const Market = (): React.ReactElement => {
  const [page, setPage] = React.useState(0);
  const [fTag, setFTag] = React.useState('');
  const [keywords, setKeywords] = React.useState('');
  const PER_PAGE = 20;
  const { assets, isLoading, isError, tags } = useAssets();
  const { assetTickers, isError: tickerError } = useTicker();

  const handleFilter = React.useCallback(
    (obj: Record<string, any>, filterTag: string, keyword: string): boolean => {
      let filters = obj.ticker;
      if (filterTag) {
        filters = filters && obj.tags.includes(filterTag);
      }
      if (keyword) {
        filters =
          filters &&
          (handleSearch(obj.assetName, keyword) ||
            handleSearch(obj.assetCode, keyword));
      }
      return filters;
    },
    []
  );

  const dataset = React.useMemo(() => {
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
      .filter((item) => handleFilter(item, fTag, keywords))
      .sort((a, b) =>
        marketCap(parseFloat(b.ticker?.lastPrice), b.ticker?.count) >
        marketCap(parseFloat(a.ticker?.lastPrice), a.ticker?.count)
          ? 1
          : -1
      );
  }, [assetTickers, assets, fTag, keywords, handleFilter]);

  const renderedData = React.useMemo(
    () => dataset?.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE),
    [dataset, page]
  );

  const handleNext = (): void => {
    if ((page + 1) * PER_PAGE <= dataset.length)
      setPage((current) => current + 1);
  };
  const handlePrev = (): void => {
    if (page > 0) setPage((current) => current - 1);
  };
  const handlePage = (e: number): void => setPage(e);

  const handleTag = (e: string): void => {
    setFTag(e);
    setPage(0);
  };

  return (
    <div style={{ display: 'unset' }}>
      <div className="container">
        <h5 className="font-bold">Markets</h5>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setKeywords(e.target.value)}
          className="input input-bordered"
        />
        <Tag>
          <Tag.Item handleClick={() => handleTag('')} text="all" />
          {tags.map((tag) => (
            <Tag.Item key={tag} handleClick={() => handleTag(tag)} text={tag} />
          ))}
        </Tag>
      </div>
      <div>
        {renderedData.map((item) => (
          <TableItem key={item.id} data={item} />
        ))}
      </div>
      <div className="container flex justify-end my-5">
        <Pagination>
          <Pagination.Prev onClick={handlePrev} />
          {page >= 1 && (
            <Pagination.Item onClick={() => handlePage(0)}>1</Pagination.Item>
          )}

          {page > 1 && (
            <Pagination.Item disabled onClick={() => handlePage(0)}>
              ...
            </Pagination.Item>
          )}

          <Pagination.Item active onClick={() => handlePage(page)}>
            {page + 1}
          </Pagination.Item>
          {Math.floor(dataset.length / 20) - 1 !== page &&
            Math.floor(dataset.length / 20) !== page && (
              <Pagination.Item disabled onClick={() => handlePage(0)}>
                ...
              </Pagination.Item>
            )}
          {Math.floor(dataset.length / 20) !== page && (
            <Pagination.Item
              onClick={() => handlePage(Math.floor(dataset.length / 20))}
            >
              {Math.floor(dataset.length / 20) + 1}
            </Pagination.Item>
          )}
          <Pagination.Next onClick={handleNext} />
        </Pagination>
      </div>
    </div>
  );
};

export default Market;
