import { Table } from './items-widget';
import { EditorWidget } from './editor-widget';
import { FilterWidget } from './filter-widget';
import { Loader } from './items-widget/loader';
import { TableBody } from './items-widget/body';
import { TableHeader } from './items-widget/header';
import { TbodyRow, Th, Td } from './items-widget/index.styles';

export default {
  Root: Table,
  Header: TableHeader,
  Body: TableBody,
  Tr: TbodyRow,
  Th,
  Td,
  Loader,
  EditorWidget,
  FilterWidget,
};
