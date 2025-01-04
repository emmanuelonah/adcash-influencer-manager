import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { colors } from './index';

type ColorsPropTypes = {
  color: string;
  label: string;
};

const Colors = ({ color, label }: ColorsPropTypes) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'grey',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        backgroundColor: color,
        borderRadius: '8px',
        width: '250px',
        height: '250px',
      }}
    ></div>
    <p style={{ marginTop: '10px', color: 'white' }}>{label}</p>
  </div>
);

const meta: Meta<typeof Colors> = {
  title: 'COLORS',
  component: Colors,
};

export default meta;

type Story = StoryObj<typeof Colors>;

export const Primary400: Story = {
  args: { color: colors.primary400, label: 'Primary400' },
};
export const White400: Story = { args: { color: colors.white400, label: 'White400' } };
export const Dark400: Story = { args: { color: colors.dark400, label: 'Dark400' } };

export const Success400: Story = {
  args: { color: colors.success400, label: 'Success400' },
};
export const Success300: Story = {
  args: { color: colors.success300, label: 'Success300' },
};
export const Success200: Story = {
  args: { color: colors.success200, label: 'Success200' },
};

export const Error400: Story = { args: { color: colors.error400, label: 'Error400' } };
export const Error300: Story = { args: { color: colors.error300, label: 'Error300' } };
export const Error200: Story = { args: { color: colors.error200, label: 'Error200' } };
