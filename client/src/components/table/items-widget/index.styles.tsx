import styled, { css } from 'styled-components';

const stylesReset = css`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  background-image: none;
  display: block;
`;

const Table = styled.table`
  ${stylesReset}
  background-color: #171717;
  border-radius: 12px;
  width: 100%;
  min-height: calc(100vh - 200px);
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: solid 1px #1d1d1d;
`;

const Thead = styled.thead`
  ${stylesReset}
  background-color: #1f1f1f;
  border-radius: 12px;
  color: #797979;
  text-align: left;
  font-size: 0.75rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const TheadRow = styled.tr`
  ${stylesReset}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Th = styled.th`
  ${stylesReset}
  font-weight: lighter;
`;

const Tbody = styled.tbody`
  ${stylesReset}
`;

const TbodyRow = styled.tr`
  ${stylesReset}
  color: #E2E2E2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  padding: 1.2rem 1rem;

  &:hover {
    background-color: #1f1f1f;
    border-radius: 12px;
  }
`;

const Td = styled.td`
  ${stylesReset}
  font-weight: lighter;
  text-align: left;
`;

export { Table, Thead, Tbody, TheadRow, TbodyRow, Th, Td };
