import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { PrimaryButton, SecondaryButton, DangerButton, LinkButton } from './index.component';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
} as Meta<typeof PrimaryButton>;

export const PrimaryBtn: StoryFn<typeof PrimaryButton> = () => (
  <PrimaryButton>Primary Button</PrimaryButton>
);

export const SecondaryBtn: StoryFn<typeof SecondaryButton> = () => (
  <SecondaryButton>Secondary Button</SecondaryButton>
);

export const DangerBtn: StoryFn<typeof DangerButton> = () => (
  <DangerButton>Danger Button</DangerButton>
);

export const LinkBtn: StoryFn<typeof LinkButton> = () => <LinkButton>Link Button</LinkButton>;
