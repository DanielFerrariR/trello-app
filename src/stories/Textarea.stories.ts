import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../src/components/Textarea';

const meta = {
  title: 'components/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
