import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { IconInstagram } from './icn-instagram.svg';

export default {
  title: 'ASSETS/IconInstagram',
  component: IconInstagram,
} as Meta<typeof IconInstagram>;

export const Primary: StoryFn<typeof IconInstagram> = () => <IconInstagram />;
