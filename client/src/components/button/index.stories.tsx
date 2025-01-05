import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { PrimaryButton, LinkButton } from './index.component';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

export const PrimaryBtn: StoryFn<typeof PrimaryButton> = () => (
  <PrimaryButton>Primary Button</PrimaryButton>
);

export const LinkBtn: StoryFn<typeof LinkButton> = () => <LinkButton>Link Button</LinkButton>;
