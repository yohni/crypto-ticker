import * as React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api/client';
import { IAsset, IAssetResponse } from '../types/assets';

interface IHookAsset {
  assets: IAsset[];
  tags: string[];
  isLoading: boolean;
  isError: boolean;
}

function useAssets(): IHookAsset {
  const apiURL = process.env.REACT_APP_API_ASSET;
  const { data, error } = useSWR(apiURL, fetcher, {
    refreshInterval: 0,
  });

  const tags: string[] = React.useMemo(() => {
    const allTags: string[] = [];
    (data as IAssetResponse)?.data.forEach((item) => {
      allTags.push(...item.tags);
    });

    return [...Array.from(new Set(allTags))];
  }, [data]);

  return {
    assets: data ? (data as IAssetResponse)?.data : [],
    tags,
    isLoading: !error && !data,
    isError: error || false,
  };
}

export default useAssets;
