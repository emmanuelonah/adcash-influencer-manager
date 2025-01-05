import React from 'react';

import { Loader } from './loader';
import { TableBody } from './body';
import { TableHeader } from './header';
import { Table as TableNode, TbodyRow, Th, Td } from './index.styles';

type TableSectionProps =
  | JSX.IntrinsicElements['thead']
  | JSX.IntrinsicElements['tbody']
  | JSX.IntrinsicElements['tfoot'];

type TableProps = {
  children: React.ReactElement<TableSectionProps> | React.ReactElement<TableSectionProps>[];
};

function Table(props: Readonly<TableProps>) {
  return <TableNode>{props.children}</TableNode>;
}

export default {
  Root: Table,
  Header: TableHeader,
  Body: TableBody,
  Tr: TbodyRow,
  Th,
  Td,
  Loader,
};
