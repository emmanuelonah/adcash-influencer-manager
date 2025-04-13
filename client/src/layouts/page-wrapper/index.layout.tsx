import React from 'react';

import { ROUTES } from 'routes';
import { FeatureFinder } from 'components';
import { designTokens } from 'design-system';

import { Header, Body, Footer, LogoLink } from './index.styles';

type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper(props: Readonly<PageWrapperProps>) {
  return (
    <>
      <Header>
        <LogoLink to={ROUTES.home}>
          <designTokens.assets.IconLogo />
        </LogoLink>
        <FeatureFinder />
      </Header>
      <Body id="main" tabIndex={-1}>
        {props.children}
      </Body>
      <Footer>
        <p>Where Influencers Thrive and Brands Shine.</p>
      </Footer>
    </>
  );
}
