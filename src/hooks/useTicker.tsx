import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api/client';
import { ITicker } from '../types/tickers';

interface ITickers {
  assetTickers: ITicker[];
  isError: boolean;
}

function useTicker(): ITickers {
  const apiURL = process.env.REACT_APP_API_TICK;
  const { data, error } = useSWR(apiURL, fetcher, { refreshInterval: 2000 });

  // regexp for getting USD
  const pattern = /^[A-Z]+USDT$/;

  const resp = (data as ITicker[])?.filter((item) => pattern.test(item.symbol));

  return {
    assetTickers: resp || [],
    isError: error || false,
  };
}

export default useTicker;
