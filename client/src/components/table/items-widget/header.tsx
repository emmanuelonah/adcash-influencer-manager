import React from 'react';

import { Thead, TheadRow } from './index.styles';

type TrProps = JSX.IntrinsicElements['tr'];

type TableHeaderProps = {
  children: React.ReactElement<TrProps> | React.ReactElement<TrProps>[];
};

export function TableHeader(props: Readonly<TableHeaderProps>) {
  return (
    <Thead>
      <TheadRow>{props.children}</TheadRow>
    </Thead>
  );
}
