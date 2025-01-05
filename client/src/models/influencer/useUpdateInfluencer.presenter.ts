import React, { useCallback } from 'react';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { InfluencerError, InfluencerRequest } from 'InfluencerTypes';

import { InfluencerModel } from './index.model';
import { GET_INFLUENCERS_QUERY_KEY } from './useGetInfluencers.presenter';

const UPDATE_MENU_QUERY_KEY = 'update_menu';

function useUpdatePresenter() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [UPDATE_MENU_QUERY_KEY],
    mutationFn: InfluencerModel.updateInfluencer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_INFLUENCERS_QUERY_KEY], exact: true });
    },
    retry: false,
  });

  const onSubmit = useCallback(
    (data: Partial<InfluencerRequest>) => {
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

export { UPDATE_MENU_QUERY_KEY, useUpdatePresenter };
