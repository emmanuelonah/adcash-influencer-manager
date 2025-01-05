import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { InfluencerError, InfluencerQueryParams } from 'InfluencerTypes';

import { InfluencerModel } from './index.model';

const GET_INFLUENCERS_QUERY_KEY = 'get_influencers';

function useGetInfluencersPresenter() {
  const [queryString, setQueryString] = useState<string>('');

  const query = useQuery({
    queryKey: [GET_INFLUENCERS_QUERY_KEY, queryString],
    queryFn: () => InfluencerModel.getInfluencers(queryString),
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const onFilter = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = new URLSearchParams(formData as InfluencerQueryParams).toString();
    setQueryString(query);
  }, []);

  const data = query.data || [];
  const error = InfluencerModel.parseError(
    query.isError,
    query.error as AxiosError<InfluencerError>
  );

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    hasData: !!data.length,
    data,
    error,
    onFilter,
  };
}

export { GET_INFLUENCERS_QUERY_KEY, useGetInfluencersPresenter };
