import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { InfluencerError, Manager } from 'InfluencerTypes';

import { InfluencerModel } from './index.model';
import { GET_INFLUENCERS_QUERY_KEY } from './useGetInfluencers.presenter';

const UPDATE_MENU_QUERY_KEY = 'update_menu';

function useUpdatePresenter() {
  const queryClient = useQueryClient();

  const { error: mutationError, ...mutation } = useMutation({
    mutationKey: [UPDATE_MENU_QUERY_KEY],
    mutationFn: ({ influencerId, manager }: { influencerId: string; manager: Manager }) => {
      return InfluencerModel.updateInfluencer(influencerId, { manager });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_INFLUENCERS_QUERY_KEY] });
    },
    retry: false,
  });

  const error = InfluencerModel.parseError(
    mutation.isError,
    mutationError as AxiosError<InfluencerError>
  );

  return { ...mutation, error };
}

export { UPDATE_MENU_QUERY_KEY, useUpdatePresenter };
