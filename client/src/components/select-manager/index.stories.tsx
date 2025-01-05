import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { SelectManager } from './index.component';

export default {
  title: 'Components/SelectManager',
  component: SelectManager,
} as Meta<typeof SelectManager>;

export const Primary: StoryFn<typeof SelectManager> = () => <SelectManager />;
