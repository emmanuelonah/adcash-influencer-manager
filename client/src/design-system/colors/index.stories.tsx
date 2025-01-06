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

export const Primary400: Story = { args: { color: colors.primary400, label: 'Primary400' } };

export const White400: Story = { args: { color: colors.white400, label: 'White400' } };
export const White300: Story = { args: { color: colors.white300, label: 'White300' } };

export const Dark500: Story = { args: { color: colors.dark500, label: 'Dark500' } };
export const Dark400: Story = { args: { color: colors.dark400, label: 'Dark400' } };
export const Dark300: Story = { args: { color: colors.dark300, label: 'Dark300' } };
export const Dark200: Story = { args: { color: colors.dark200, label: 'Dark200' } };
export const Dark100: Story = { args: { color: colors.dark100, label: 'Dark100' } };
export const Dark50: Story = { args: { color: colors.dark50, label: 'Dark50' } };
export const Dark40: Story = { args: { color: colors.dark40, label: 'Dark40' } };

export const Ash400: Story = { args: { color: colors.ash400, label: 'Ash400' } };

export const Success600: Story = { args: { color: colors.success600, label: 'Success600' } };
export const Success500: Story = { args: { color: colors.success500, label: 'Success500' } };
export const Success400: Story = { args: { color: colors.success400, label: 'Success400' } };
export const Success300: Story = { args: { color: colors.success300, label: 'Success300' } };
export const Success200: Story = { args: { color: colors.success200, label: 'Success200' } };
export const Success100: Story = { args: { color: colors.success100, label: 'Success100' } };

export const Error500: Story = { args: { color: colors.error500, label: 'Error500' } };
export const Error400: Story = { args: { color: colors.error400, label: 'Error400' } };
export const Error300: Story = { args: { color: colors.error300, label: 'Error300' } };
export const Error200: Story = { args: { color: colors.error200, label: 'Error200' } };
export const Error100: Story = { args: { color: colors.error100, label: 'Error100' } };
export const Error50: Story = { args: { color: colors.error50, label: 'Error50' } };
