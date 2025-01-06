import React from 'react';

import { Table as StyledTable } from './index.styles';

type TableSectionProps =
  | JSX.IntrinsicElements['thead']
  | JSX.IntrinsicElements['tbody']
  | JSX.IntrinsicElements['tfoot'];

type TableProps = {
  children: React.ReactElement<TableSectionProps> | React.ReactElement<TableSectionProps>[];
};

export function Table(props: Readonly<TableProps>) {
  return <StyledTable>{props.children}</StyledTable>;
}
