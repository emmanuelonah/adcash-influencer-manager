import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SharedStyles = css`
  width: 100%;
  max-width: ${({ theme }) => theme.typography.pageWidth.desktopEndWidth};
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 1rem 2rem;
  height: 5rem;
  border-bottom: solid 0.0625rem ${({ theme }) => theme.colors.dark50};
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
  color: ${({ theme }) => theme.colors.ash400};
  font-size: ${({ theme }) => theme.typography.preText.fontSize};
  font-weight: lighter;
  text-align: center;
  padding: 1rem;
`;

const Logo = styled.img`
  height: 3.125rem;
`;

export { Header, LogoLink, Body, Footer, Logo };
