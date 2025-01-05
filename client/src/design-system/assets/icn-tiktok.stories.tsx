import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { IconTiktok } from './icn-tiktok.svg';

export default {
  title: 'ASSETS/IconTiktok',
  component: IconTiktok,
} as Meta<typeof IconTiktok>;

export const Primary: StoryFn<typeof IconTiktok> = () => <IconTiktok />;
