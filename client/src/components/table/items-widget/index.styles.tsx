import styled, { css } from 'styled-components';

const stylesReset = css`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  background-image: none;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  height: calc(100vh - 25rem);
  min-height: calc(100vh - 25rem);
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
`;

const Table = styled.table`
  ${stylesReset}
  border-collapse: collapse;
  border-spacing: 0;
  background-color: ${({ theme }) => theme.colors.dark40};
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  border: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
  table-layout: fixed;
  min-height: calc(100vh - 25rem);
`;

const Thead = styled.thead`
  ${stylesReset}
  display: table;
  width: 100%;
  color: ${({ theme }) => theme.colors.ash400};
  text-align: left;
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  margin-bottom: 2rem;
`;

const TheadRow = styled.tr`
  ${stylesReset}
  height: 1.5rem;
`;

const Th = styled.th`
  ${stylesReset}
  font-weight: lighter;
  padding: 0.5rem;
  text-align: left;

  &:last-child {
    text-align: right;
  }
`;

const Tbody = styled.tbody`
  ${stylesReset}
  display: table;
  width: 100%;
`;

const TbodyRow = styled.tr`
  ${stylesReset}
  width: 100%;
  table-layout: fixed;
  color: #e2e2e2;
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};
  height: 1.5rem;
  padding: 1rem 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark200};
  }
`;

const Td = styled.td`
  ${stylesReset}
  padding: 0.5rem;
  font-weight: lighter;
  text-align: left;
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};

  &:last-child {
    text-align: right;
  }
`;

export { TableContainer, Table, Thead, Tbody, TheadRow, TbodyRow, Th, Td };
