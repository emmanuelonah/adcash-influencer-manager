import styled from 'styled-components';

import { LinkButton } from 'components/button/index.component';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 8888;
  padding: 1rem;
`;

const Header = styled.div`
  padding: 1rem;
  height: 5rem;
  border-bottom: solid 1px #1d1d1d;
  width: 100%;

  & h1 {
    text-align: center;
    font-weight: ${(props) => props.theme.typography.title3.fontWeight};
    font-size: ${(props) => props.theme.typography.title3.fontSize};
  }
`;

const Body = styled.div`
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CancelButton = styled(LinkButton)`
  color: #797979;
`;

export { Header, Body, Container, CancelButton };
