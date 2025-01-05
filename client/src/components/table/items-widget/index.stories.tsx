import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import Table from './index';

export default {
  title: 'Components/Table',
  component: Table.Root,
} as Meta<typeof Table.Root>;

export const Items: StoryFn<typeof Table> = () => (
  <Table.Root>
    <Table.Header>
      <Table.Th>Header 1</Table.Th>
      <Table.Th>Header 2</Table.Th>
      <Table.Th>Header 3</Table.Th>
      <Table.Th>Header 4</Table.Th>
      <Table.Th>Header 5</Table.Th>
    </Table.Header>
    <Table.Body>
      <Table.Tr>
        <Table.Td>Row 1, Cell 1</Table.Td>
        <Table.Td>Row 1, Cell 2</Table.Td>
        <Table.Td>Row 1, Cell 3</Table.Td>
        <Table.Td>Row 1, Cell 4</Table.Td>
        <Table.Td>Row 1, Cell 5</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Row 2, Cell 1</Table.Td>
        <Table.Td>Row 2, Cell 2</Table.Td>
        <Table.Td>Row 2, Cell 3</Table.Td>
        <Table.Td>Row 2, Cell 4</Table.Td>
        <Table.Td>Row 2, Cell 5</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Row 3, Cell 1</Table.Td>
        <Table.Td>Row 3, Cell 2</Table.Td>
        <Table.Td>Row 3, Cell 3</Table.Td>
        <Table.Td>Row 3, Cell 4</Table.Td>
        <Table.Td>Row 3, Cell 5</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Row 4, Cell 1</Table.Td>
        <Table.Td>Row 4, Cell 2</Table.Td>
        <Table.Td>Row 4, Cell 3</Table.Td>
        <Table.Td>Row 4, Cell 4</Table.Td>
        <Table.Td>Row 4, Cell 5</Table.Td>
      </Table.Tr>
    </Table.Body>
  </Table.Root>
);

export const Loader: StoryFn<typeof Table.Loader> = () => <Table.Loader />;
