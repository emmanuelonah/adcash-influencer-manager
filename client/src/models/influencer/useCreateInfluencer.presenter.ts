import React, { useCallback } from 'react';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { InfluencerError, InfluencerRequest } from 'InfluencerTypes';

import { InfluencerModel } from './index.model';
import { GET_INFLUENCERS_QUERY_KEY } from './useGetInfluencers.presenter';

const CREATE_MENU_QUERY_KEY = 'create_menu';

function useCreatePresenter() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [CREATE_MENU_QUERY_KEY],
    mutationFn: InfluencerModel.createInfluencer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_INFLUENCERS_QUERY_KEY], exact: true });
    },
    retry: false,
  });

  const onSubmit = useCallback(
    (data: InfluencerRequest) => {
      mutation.mutate(data);
      return (event: React.FormEvent<HTMLFormElement>) => {
        event.currentTarget.reset();
      };
    },
    [mutation]
  );

  const error = InfluencerModel.parseError(
    mutation.isError,
    mutation.error as AxiosError<InfluencerError>
  );

  return {
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error,
    onSubmit,
  };
}

export { CREATE_MENU_QUERY_KEY, useCreatePresenter };
