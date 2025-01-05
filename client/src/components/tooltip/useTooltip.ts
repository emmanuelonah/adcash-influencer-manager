import React, { useEffect, useCallback } from 'react';

type TooltipArgs = {
  open: boolean;
  onClose: () => void;
  ref: React.RefObject<HTMLDivElement>;
  excludedRefs?: React.RefObject<HTMLElement>[];
};

export function useTooltip({ open, ref, excludedRefs = [], onClose }: Readonly<TooltipArgs>) {
  const isClickOutside = useCallback(
    (event: MouseEvent | TouchEvent): boolean => {
      const target = event.target as Node;
      const isInsideTooltip = ref.current?.contains(target);
      const isExcluded = excludedRefs.some((excludedRef) => excludedRef.current?.contains(target));

      return !isInsideTooltip && !isExcluded;
    },
    [excludedRefs, ref]
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (open && isClickOutside(event)) onClose();
    },
    [open, isClickOutside, onClose]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [handleClickOutside]);
}
