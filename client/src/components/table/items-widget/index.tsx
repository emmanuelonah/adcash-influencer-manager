import React from 'react';

import { Table as StyledTable, TableContainer } from './index.styles';

type TableSectionProps =
  | JSX.IntrinsicElements['thead']
  | JSX.IntrinsicElements['tbody']
  | JSX.IntrinsicElements['tfoot'];

type TableProps = {
  children: React.ReactElement<TableSectionProps> | React.ReactElement<TableSectionProps>[];
};

export function Table(props: Readonly<TableProps>) {
  return (
    <TableContainer>
      <StyledTable>{props.children}</StyledTable>
    </TableContainer>
  );
}
