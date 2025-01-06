import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark300};
  border-radius: ${({ theme }) => theme.typography.borderRadius.sm};
  border: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
  width: 12.3125rem;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  font-weight: lighter;
  position: absolute;
  z-index: ${(props) => props.theme.typography.zIndexes.step1};
`;
