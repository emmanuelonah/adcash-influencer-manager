import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { EditorWidget } from '.';

export default {
  title: 'Components/EditorWidget',
  component: EditorWidget,
} as Meta<typeof EditorWidget>;

export const Primary: StoryFn<typeof EditorWidget> = () => (
  <EditorWidget>Editor Widget</EditorWidget>
);
