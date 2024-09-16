import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../src/components/Icon';
import { ReactComponent as TextLongParagraphIcon } from '../assets/text--long-paragraph.svg';

const meta = {
  title: 'components/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: TextLongParagraphIcon,
  },
};
