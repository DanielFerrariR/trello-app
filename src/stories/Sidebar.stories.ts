import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../../src/components/Sidebar';

const meta = {
  title: 'components/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is the content',
  },
};
