/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useCallback } from 'react';
import Empty from '../components/Empty';
import Pagination from '../components/Pagination/Pagination';
import SearchBar from '../components/SearchBar';
import TableHeader from '../components/Table/TableHeader';
import TableItem from '../components/Table/TableItem';
import Tag from '../components/Tag/Tag';
import useAssets from '../hooks/useAssets';
import useTicker from '../hooks/useTicker';
import { handleSearch, marketCapComparator } from '../utils/assets.util';

const Market: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [selectedTag, setSelectedTag] = React.useState('');
  const [keywords, setKeywords] = React.useState('');
  const PER_PAGE = 20;
  const { assets, tags } = useAssets();
  const { assetTickers } = useTicker();

  const includesKeywords = useCallback(
    (asset) =>
      handleSearch(asset.assetName, keywords) ||
      handleSearch(asset.assetCode, keywords),
    [keywords]
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
      .filter((item) => item.ticker)
      .filter((item) => (selectedTag ? item.tags.includes(selectedTag) : item))
      .filter(includesKeywords)
      .sort(marketCapComparator);
  }, [assetTickers, assets, selectedTag, includesKeywords]);

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
    setSelectedTag(e);
    setPage(0);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setKeywords(e.currentTarget.value);

  return (
    <div style={{ display: 'unset' }}>
      <div className="container mb-5">
        <div className="md:flex justify-between items-center">
          <h5 className="font-bold md:text-2xl mb-4">Markets</h5>
          <SearchBar placeholder="Search" onChange={handleChange} />
        </div>
        <Tag>
          <Tag.Item
            handleClick={() => handleTag('')}
            text="all"
            active={selectedTag === ''}
          />
          {tags.map((tag) => (
            <Tag.Item
              key={tag}
              active={tag === selectedTag}
              handleClick={() => handleTag(tag)}
              text={tag}
            />
          ))}
        </Tag>
      </div>
      <div>
        <TableHeader />
        {renderedData.length < 1 && <Empty />}
        {renderedData.map((item) => (
          <TableItem key={item.id} data={item} />
        ))}
      </div>
      {renderedData.length > 0 && (
        <div className="container flex justify-end my-5">
          <Pagination>
            <Pagination.Prev onClick={handlePrev} />
            {page >= 1 && (
              <Pagination.Item onClick={() => handlePage(0)}>1</Pagination.Item>
            )}

            {page > 1 && <Pagination.Item disabled>...</Pagination.Item>}

            <Pagination.Item active onClick={() => handlePage(page)}>
              {page + 1}
            </Pagination.Item>
            {Math.floor(dataset.length / 20) - 1 !== page &&
              Math.floor(dataset.length / 20) !== page && (
                <Pagination.Item disabled>...</Pagination.Item>
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
      )}
    </div>
  );
};

export default Market;
