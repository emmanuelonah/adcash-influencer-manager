import React from 'react';

import { designTokens } from 'design-system';

import { Header, HeaderContent, Body, Footer } from './index.styles';

type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper(props: Readonly<PageWrapperProps>) {
  return (
    <>
      <Header>
        <HeaderContent>
          <designTokens.assets.IconLogo />
        </HeaderContent>
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
