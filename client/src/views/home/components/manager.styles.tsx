import styled from 'styled-components';

const ManagerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Img = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 50%;
  object-fit: cover;
  border: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
`;

export { ManagerWrapper, Img };
