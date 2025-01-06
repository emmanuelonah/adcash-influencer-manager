import styled from 'styled-components';

import { SecondaryButton } from 'components/button/index.component';

const ViewAccounts = styled(SecondaryButton)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;
`;

const ListItem = styled.li`
  padding: 0.5rem;
  margin-bottom: 0.3rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark200};
    border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export { ViewAccounts, ListItem, Link };
