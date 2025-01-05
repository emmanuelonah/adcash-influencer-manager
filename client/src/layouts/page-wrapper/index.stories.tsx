import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { PageWrapper } from './index.layout';

export default {
  title: 'Layouts/PageWrapper',
  component: PageWrapper,
} as Meta<typeof PageWrapper>;

export const Primary: StoryFn<typeof PageWrapper> = () => (
  <PageWrapper>
    <h1>Page Wrapper</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet quaerat doloribus
      consequatur voluptatibus! Est nemo, sequi, praesentium dolorem porro minus repellat rem non
      culpa quis, reiciendis inventore accusamus natus numquam.
    </p>
  </PageWrapper>
);
