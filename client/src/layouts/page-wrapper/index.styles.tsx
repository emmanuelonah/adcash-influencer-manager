import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SharedStyles = css`
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 1rem;
  height: 5rem;
  border-bottom: solid 1px #1d1d1d;
  display: flex;
  align-items: center;
`;

const LogoLink = styled(NavLink)`
  ${SharedStyles}
  display:inline-block;
  text-decoration: none;
`;

const Body = styled.main`
  ${SharedStyles}
  padding: 1rem 2rem;
`;

const Footer = styled.footer`
  ${SharedStyles}
  color: #797979;
  font-size: 0.75rem;
  font-weight: lighter;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  padding: 1rem;
`;

const Logo = styled.img`
  height: 50px;
`;

export { Header, LogoLink, Body, Footer, Logo };
