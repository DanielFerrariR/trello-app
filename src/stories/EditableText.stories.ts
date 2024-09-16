import type { Meta, StoryObj } from '@storybook/react';
import { EditableText } from '../../src/components/EditableText';
import { fn } from '@storybook/test';

const meta = {
  title: 'components/EditableText',
  component: EditableText,
} satisfies Meta<typeof EditableText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is an editable text',
    onChangeText: fn(),
  },
};
