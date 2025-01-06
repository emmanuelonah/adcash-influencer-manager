import styled from 'styled-components';

import { LinkButton } from 'components/button/index.component';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.dark500};
  z-index: ${(props) => props.theme.typography.zIndexes.modal};
  padding: 1rem;
`;

const Header = styled.div`
  padding: 1rem;
  height: 5rem;
  border-bottom: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
  width: 100%;

  & h1 {
    text-align: center;
    font-weight: ${({ theme }) => theme.typography.title3.fontWeight};
    font-size: ${({ theme }) => theme.typography.title3.fontSize};
  }
`;

const Body = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.typography.pageWidth.desktopEndWidth};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CancelButton = styled(LinkButton)`
  color: ${({ theme }) => theme.colors.ash400};
`;

export { Header, Body, Container, CancelButton };
