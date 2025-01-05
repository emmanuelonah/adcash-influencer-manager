import React, { useRef } from 'react';

import { useComposeRefs } from 'hooks';

import { useTooltip } from './useTooltip';
import { Container } from './index.styles';

type PrimitiveDivPropTypes = React.ComponentPropsWithoutRef<'div'>;
type TooltipElement = React.ElementRef<'div'>;

interface TooltipProps extends PrimitiveDivPropTypes {
  open: boolean;
  onClose(): void;
  children: React.ReactNode;
  excludedRefs?: React.RefObject<HTMLElement>[];
}

export const Tooltip = React.forwardRef<TooltipElement, TooltipProps>(function Tooltip(
  { open,excludedRefs, onClose, children },
  forwardedRef
) {
  const ref = useRef<HTMLDivElement>(null);

  useComposeRefs(forwardedRef, ref);
  useTooltip({ ref, open, onClose, excludedRefs });

  if (!open) return null;

  return <Container ref={ref}>{children}</Container>;
});
