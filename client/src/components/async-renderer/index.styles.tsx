import styled from 'styled-components';

export const NoData = styled.p`
  color: ${({ theme }) => theme.colors.ash400};
  font-weight: ${(props) => props.theme.typography.smallText.fontWeight};
  font-size: ${(props) => props.theme.typography.smallText.fontSize};
`;
