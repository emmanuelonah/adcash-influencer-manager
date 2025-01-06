import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { NotFound } from './index.view';

export default {
  title: 'Views/NotFound',
  component: NotFound,
} as Meta<typeof NotFound>;

export const Primary: StoryFn<typeof NotFound> = () => <NotFound />;
