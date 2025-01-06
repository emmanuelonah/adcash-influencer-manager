import React from 'react';

import { renderWithOptions, screen } from 'utils';

import Table from '..';

describe('Table component', () => {
  it('renders table with header and body', () => {
    renderWithOptions(
      <Table.Root>
        <Table.Header>
          <Table.Th>Header 1</Table.Th>
          <Table.Th>Header 2</Table.Th>
        </Table.Header>
        <Table.Body>
          <Table.Tr>
            <Table.Td>Data 1</Table.Td>
            <Table.Td>Data 2</Table.Td>
          </Table.Tr>
        </Table.Body>
      </Table.Root>
    );

    expect(screen.getByText('Header 1')).toBeInTheDocument();
    expect(screen.getByText('Header 2')).toBeInTheDocument();
    expect(screen.getByText('Data 1')).toBeInTheDocument();
    expect(screen.getByText('Data 2')).toBeInTheDocument();
  });
});
