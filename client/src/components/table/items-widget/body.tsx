import React from 'react';

import { Tbody } from './index.styles';

type TrProps = JSX.IntrinsicElements['tr'];

type TableHeaderProps = {
  children: React.ReactElement<TrProps> | React.ReactElement<TrProps>[];
};

export function TableBody(props: Readonly<TableHeaderProps>) {
  return <Tbody>{props.children}</Tbody>;
}
