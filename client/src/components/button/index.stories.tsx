import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { PrimaryButton, SecondaryButton, DangerButton, LinkButton } from './index.component';

export default {
  title: 'Components/Button',
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

export const Primary: StoryFn<typeof PrimaryButton> = () => (
  <PrimaryButton type="button">Primary Button</PrimaryButton>
);

export const Secondary: StoryFn<typeof SecondaryButton> = () => (
  <SecondaryButton type="button">Secondary Button</SecondaryButton>
);

export const Danger: StoryFn<typeof DangerButton> = () => (
  <DangerButton type="button">Danger Button</DangerButton>
);

export const Link: StoryFn<typeof LinkButton> = () => (
  <LinkButton type="button">Link Button</LinkButton>
);
