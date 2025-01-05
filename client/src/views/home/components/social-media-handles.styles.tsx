import styled from 'styled-components';

const ViewAccounts = styled.button`
  border: none;
  background-color: #102319;
  color: #51b380;
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;
`;

const ListItem = styled.li`
  padding: 0.5rem;
  margin-bottom: 0.3rem;

  &:hover {
    background-color: #1f1f1f;
    border-radius: 12px;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export { ViewAccounts, ListItem, Link };
