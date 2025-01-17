import { useState, useCallback } from 'react';

import managers from 'models/influencer/managers.json';

import { useCreatePresenter } from 'models';
import { Manager, Tiktok, Instagram, InfluencerRequest } from 'InfluencerTypes';

import { useValidation } from './useValidation';

const DEFAULT_MANAGER: Manager = { id: '', imgUrl: '', firstName: '', lastName: '', email: '' };
const DEFAULT_TIKTOK: Tiktok[] = [{ type: 'tiktok', userName: '' }];
const DEFAULT_INSTAGRAM: Instagram[] = [{ type: 'instagram', userName: '' }];

export function useForm() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [manager, setManager] = useState<Manager>(DEFAULT_MANAGER);
  const [tiktokHandles, setTiktokHandles] = useState<Tiktok[]>(DEFAULT_TIKTOK);
  const [instagramHandles, setInstagramHandles] = useState<Instagram[]>(DEFAULT_INSTAGRAM);
  const { isPending, isSuccess, isError, error, mutate } = useCreatePresenter();

  const {
    isSubmitDisabled,
    nameValidationClassName,
    instagramValidationClassName,
    tiktokValidationClassName,
    validateInstagramInput,
    validateTiktokInput,
  } = useValidation({ tiktokHandles, instagramHandles });

  const onChangeFirstName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }, []);

  const onChangeLastName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }, []);

  const onChangeManager = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedManager = managers.find((manager) => manager.id === event.target.value);

    if (selectedManager) setManager(selectedManager);
  }, []);

  const addTiktokInput = useCallback(() => {
    setTiktokHandles((prev) => [...prev, { type: 'tiktok', userName: '' }]);
  }, []);

  const addInstagramInput = useCallback(() => {
    setInstagramHandles((prev) => [...prev, { type: 'instagram', userName: '' }]);
  }, []);

  const onChangeTiktokHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      setTiktokHandles((prev) => {
        const newHandles = [...prev];
        newHandles[index].type = 'tiktok';
        newHandles[index].userName = event.target.value;

        validateTiktokInput(index, newHandles[index]);

        return newHandles;
      });
    },
    [validateTiktokInput]
  );

  const onChangeInstagramHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
      setInstagramHandles((prev) => {
        const newHandles = [...prev];
        newHandles[index].type = 'instagram';
        newHandles[index].userName = event.target.value;

        validateInstagramInput(index, newHandles[index]);

        return newHandles;
      });
    },
    [validateInstagramInput]
  );

  const onRemoveTiktokHandle = useCallback((index: number) => {
    setTiktokHandles((prev) => {
      const newHandles = [...prev];
      newHandles.splice(index, 1);
      return newHandles;
    });
  }, []);

  const onRemoveInstagramHandle = useCallback((index: number) => {
    setInstagramHandles((prev) => {
      const newHandles = [...prev];
      newHandles.splice(index, 1);
      return newHandles;
    });
  }, []);

  const resetForm = useCallback(() => {
    setFirstName('');
    setLastName('');
    setManager(DEFAULT_MANAGER);
    setTiktokHandles(DEFAULT_TIKTOK);
    setInstagramHandles(DEFAULT_INSTAGRAM);
  }, []);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data: InfluencerRequest = {
        firstName,
        lastName,
        manager,
        socialMediaHandles: [...tiktokHandles, ...instagramHandles],
      };

      mutate(data);
      resetForm();
    },
    [firstName, instagramHandles, lastName, manager, mutate, resetForm, tiktokHandles]
  );

  return {
    firstName,
    lastName,
    manager,
    tiktokHandles,
    instagramHandles,
    onChangeFirstName,
    onChangeLastName,
    onChangeManager,
    addTiktokInput,
    addInstagramInput,
    onChangeTiktokHandle,
    onChangeInstagramHandle,
    onRemoveTiktokHandle,
    onRemoveInstagramHandle,
    onSubmit,
    isPending,
    isSuccess,
    isError,
    error,
    isSubmitDisabled,
    nameValidationClassName,
    instagramValidationClassName,
    tiktokValidationClassName,
  };
}
