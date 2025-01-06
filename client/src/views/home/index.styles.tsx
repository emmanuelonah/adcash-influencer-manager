import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddInfluencerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const AddInfluencer = styled(Link)`
  text-decoration: none;
  background-color: #102319;
  color: #51b380;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  font-size: 0.7rem;
  margin: 1rem 0;
`;

export { AddInfluencer, AddInfluencerWrapper };
