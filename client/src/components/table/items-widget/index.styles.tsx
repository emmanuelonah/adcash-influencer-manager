import styled, { css } from 'styled-components';

const stylesReset = css`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  background-image: none;
`;

const Table = styled.table`
  ${stylesReset}
  border-collapse: collapse;
  border-spacing: 0;
  background-color: ${({ theme }) => theme.colors.dark40};
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  height: calc(100vh - 25rem);
  margin: 0 auto;
  padding: 0.5rem;
  border: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
`;

const Thead = styled.thead`
  ${stylesReset}
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
`;

const Tbody = styled.tbody`
  ${stylesReset}
`;

const TbodyRow = styled.tr`
  ${stylesReset}
  color: #E2E2E2;
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};
  height: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark200};
    border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  }
`;

const Td = styled.td`
  ${stylesReset}
  padding: 0.5rem;
  font-weight: lighter;
  text-align: left;
`;

export { Table, Thead, Tbody, TheadRow, TbodyRow, Th, Td };
