import { useCallback, useState } from 'react';

import { composeClassNames as cx } from 'utils';
import { Tiktok, Instagram } from 'InfluencerTypes';

type ArgType = {
  tiktokHandles: Tiktok[];
  instagramHandles: Instagram[];
};

export function useValidation({ tiktokHandles, instagramHandles }: ArgType) {
  const [invalidInstagramsInputIndex, setInvalidInstagramsInputIndex] = useState<number[]>([]);
  const [invalidTiktoksInputIndex, setInvalidTiktoksInputIndex] = useState<number[]>([]);

  const nameValidationClassName = useCallback((value: string) => {
    const size = value.length;

    return cx(size > 50 && 'invalid', size > 0 && size < 51 && 'valid');
  }, []);

  const instagramValidationClassName = useCallback(
    (index: number) => cx(invalidInstagramsInputIndex.includes(index) && 'invalid'),
    [invalidInstagramsInputIndex]
  );

  const tiktokValidationClassName = useCallback(
    (index: number) => cx(invalidTiktoksInputIndex.includes(index) && 'invalid'),
    [invalidTiktoksInputIndex]
  );

  const isDuplicateHandle = useCallback(
    (handle: Instagram | Tiktok, index: number) => {
      const handles = handle.type === 'tiktok' ? tiktokHandles : instagramHandles;
      const foundIndex = handles.findIndex(
        ({ type, userName }, i) =>
          type === handle.type && userName === handle.userName && i !== index
      );

      return foundIndex >= 0;
    },
    [instagramHandles, tiktokHandles]
  );

  const updateInvalidSocialHandleIndexes = useCallback(
    (
      index: number,
      isInvalid: boolean,
      setter: (value: React.SetStateAction<number[]>) => void
    ) => {
      setter((prev) => {
        const newArray = [...prev];

        if (isInvalid) return [...new Set([...newArray, index])];

        const indexToRemove = newArray.indexOf(index);

        newArray.splice(indexToRemove, 1);

        return newArray;
      });
    },
    []
  );

  const validateInstagramInput = useCallback(
    (index: number, handle: Instagram) => {
      const isInvalid = isDuplicateHandle(handle, index);
      updateInvalidSocialHandleIndexes(index, isInvalid, setInvalidInstagramsInputIndex);
    },
    [isDuplicateHandle, updateInvalidSocialHandleIndexes]
  );

  const validateTiktokInput = useCallback(
    (index: number, handle: Tiktok) => {
      const isInvalid = isDuplicateHandle(handle, index);
      updateInvalidSocialHandleIndexes(index, isInvalid, setInvalidTiktoksInputIndex);
    },
    [isDuplicateHandle, updateInvalidSocialHandleIndexes]
  );

  const isSubmitDisabled =
    !!invalidInstagramsInputIndex.length || !!invalidTiktoksInputIndex.length;

  return {
    isSubmitDisabled,
    nameValidationClassName,
    instagramValidationClassName,
    tiktokValidationClassName,
    validateInstagramInput,
    validateTiktokInput,
  };
}
