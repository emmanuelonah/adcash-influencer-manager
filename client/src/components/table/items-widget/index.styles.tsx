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
  overflow-y: scroll;
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
`;

const Table = styled.table`
  ${stylesReset}
  border-collapse: collapse;
  border-spacing: 0;
  background-color: ${({ theme }) => theme.colors.dark40};
  border-spacing: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  border: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
  table-layout: fixed;
`;

const Thead = styled.thead`
  ${stylesReset}
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
  padding: 1rem;
  text-align: left;
`;

const Tbody = styled.tbody`
  ${stylesReset}
  width: 100%;
`;

const TbodyRow = styled.tr`
  ${stylesReset}
  width: 100%;
  color: #e2e2e2;
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark200};
  }
`;

const Td = styled.td`
  ${stylesReset}
  padding: 1rem;
  font-weight: lighter;
  text-align: left;
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};
`;

export { TableContainer, Table, Thead, Tbody, TheadRow, TbodyRow, Th, Td };
