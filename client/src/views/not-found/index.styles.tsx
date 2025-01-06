import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
`;

const Heading = styled.h1`
  display: inline-block;
  margin: 0rem 1.25rem 0rem 0rem;
  padding-right: 1.25rem;
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  font-weight: ${({ theme }) => theme.typography.subtitle.fontWeight};
  vertical-align: top;
  border-right: 0.0625rem solid rgba(255, 255, 255, 0.3);
`;

const Content = styled.p`
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};
  font-weight: ${({ theme }) => theme.typography.bodyText.fontWeight};
  line-height: ${({ theme }) => theme.typography.lineHeight.sm};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary400};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export { Wrapper, Heading, Content, StyledLink };
