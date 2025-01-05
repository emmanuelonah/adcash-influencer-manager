import styled, { css } from 'styled-components';

const sharedButtonStyles = css`
  border: none;
  background-color: transparent;
  font-size: 0.75rem;
  text-decoration: underline;
`;

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
  display: flex;
  align-items: center;
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

const EditButton = styled.button`
  ${sharedButtonStyles}
  color: ${({ theme }) => theme.colors.primary400};
`;

const CancelButton = styled.button`
  ${sharedButtonStyles}
  color: #797979;
`;

export { Header, Body, Container, EditButton, CancelButton };
