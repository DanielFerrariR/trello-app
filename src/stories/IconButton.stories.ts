import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../../src/components/IconButton';
import { fn } from '@storybook/test';
import { ReactComponent as AddIcon } from '../assets/add.svg';

const meta = {
  title: 'components/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: AddIcon,
    ariaLabel: 'Add',
    onClick: fn(),
  },
};
