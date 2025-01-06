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
  background-color: #171717;
  border-radius: 5px;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  height: calc(100vh - 400px);
  margin: 0 auto;
  padding: 0.5rem;
  border: solid 1px #1d1d1d;
`;

const Thead = styled.thead`
  ${stylesReset}
  color: #797979;
  text-align: left;
  font-size: 0.75rem;
  margin-bottom: 2rem;
`;

const TheadRow = styled.tr`
  ${stylesReset}
  height: 24px;
`;

const Th = styled.th`
  ${stylesReset}
  font-weight: lighter;
  padding: 8px;
  text-align: left;
`;

const Tbody = styled.tbody`
  ${stylesReset}
`;

const TbodyRow = styled.tr`
  ${stylesReset}
  color: #E2E2E2;
  font-size: 0.8rem;
  height: 24px;

  &:hover {
    background-color: #1f1f1f;
    border-radius: 5px;
  }
`;

const Td = styled.td`
  ${stylesReset}
  padding: 8px;
  font-weight: lighter;
  text-align: left;
`;

export { Table, Thead, Tbody, TheadRow, TbodyRow, Th, Td };
