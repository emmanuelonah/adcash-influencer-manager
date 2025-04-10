import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { InfluencerError } from 'InfluencerTypes';

import { InfluencerModel } from './index.model';
import { GET_INFLUENCERS_QUERY_KEY } from './useGetInfluencers.presenter';

const CREATE_INFLUENCER_QUERY_KEY = 'create_influencer';

function useCreatePresenter() {
  const queryClient = useQueryClient();

  const { error: mutationError, ...mutation } = useMutation({
    mutationKey: [CREATE_INFLUENCER_QUERY_KEY],
    mutationFn: InfluencerModel.createInfluencer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_INFLUENCERS_QUERY_KEY], exact: false });
    },
    retry: false,
  });

  const error = InfluencerModel.parseError(
    mutation.isError,
    mutationError as AxiosError<InfluencerError>
  );

  return { ...mutation, error };
}

export { CREATE_INFLUENCER_QUERY_KEY, useCreatePresenter };
