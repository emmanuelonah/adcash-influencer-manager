import React from 'react';

import { fn } from '@storybook/test';
import { StoryFn, Meta } from '@storybook/react';

import { Tooltip } from 'components';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;

export const Primary: StoryFn<typeof Tooltip> = () => (
  <Tooltip open onClose={fn()}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Tooltip>
);
