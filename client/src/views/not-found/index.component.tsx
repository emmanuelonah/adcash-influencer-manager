import { ROUTES } from 'routes';

import { Wrapper, Heading, Content, StyledLink } from './index.styles';

export function NotFound() {
  return (
    <Wrapper>
      <title>404 | This page could not found</title>
      <Heading>404</Heading>
      <Content>
        This page could not be found.{' '}
        <StyledLink to={ROUTES.home} replace>
          Go home
        </StyledLink>
      </Content>
    </Wrapper>
  );
}
