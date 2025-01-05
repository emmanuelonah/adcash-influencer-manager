import React from 'react';

import { fn } from '@storybook/test';
import { StoryFn, Meta } from '@storybook/react';

import { FilterWidget } from './index.component';

export default {
  title: 'Components/SelectManager',
  component: FilterWidget,
} as Meta<typeof FilterWidget>;

export const Primary: StoryFn<typeof FilterWidget> = () => <FilterWidget onFilter={fn()} />;
