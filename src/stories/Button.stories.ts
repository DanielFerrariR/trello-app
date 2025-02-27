import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src/components/Button';
import { fn } from '@storybook/test';

const meta = {
  title: 'components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
  },
};
