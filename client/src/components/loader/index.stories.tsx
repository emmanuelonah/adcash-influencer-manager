import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Loader } from './index.component';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta<typeof Loader>;

export const AccessibleLoader: StoryFn<typeof Loader> = () => <Loader isLoading />;
