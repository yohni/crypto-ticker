import * as React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api/client';
import { IAsset, IAssetResponse } from '../types/assets';

interface IHookAsset {
  assets: IAsset[];
  isLoading: boolean;
  isError: boolean;
}

function useAssets(): IHookAsset {
  const apiURL = process.env.REACT_APP_API_ASSET;
  const { data, error } = useSWR(apiURL, fetcher, {
    refreshInterval: 0,
  });

  return {
    assets: data ? (data as IAssetResponse)?.data : [],
    isLoading: !error && !data,
    isError: error || false,
  };
}

export default useAssets;
