import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddInfluencerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const AddInfluencer = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.success400};
  color: ${({ theme }) => theme.colors.success200};
  padding: 0.5rem 0.8rem;
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  margin: 1rem 0;
`;

export { AddInfluencer, AddInfluencerWrapper };
