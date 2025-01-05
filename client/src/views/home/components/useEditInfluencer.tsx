import { useCallback } from 'react';

import { Manager } from 'InfluencerTypes';
import managers from 'models/influencer/managers.json';

import { useUpdatePresenter } from 'models';

export function useEditInfluencer() {
  const { mutate, ...rest } = useUpdatePresenter();

  const onSubmit = useCallback(
    (influencerId: string) => {
      return (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const selectedValue = formData.get('manager');
        const manager = managers.find((manager) => manager.id === selectedValue) as Manager;

        mutate({ influencerId, manager });
        event.currentTarget.reset();
      };
    },
    [mutate]
  );

  return {
    ...rest,
    onSubmit,
  };
}
