import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { IconLogo } from './icn-logo.svg';

export default {
  title: 'ASSETS/IconLogo',
  component: IconLogo,
} as Meta<typeof IconLogo>;

export const Primary: StoryFn<typeof IconLogo> = () => <IconLogo />;
