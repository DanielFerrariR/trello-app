import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../src/components/Modal';
import { useState } from 'react';
import { Button } from '../components/Button';
import { ModalProps } from '../components/Modal/Modal';

const Template = ({ children }: ModalProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Click to open modal</Button>
      {isOpen && (
        <Modal onClickOutside={() => setIsOpen(false)}>{children}</Modal>
      )}
    </>
  );
};

const meta = {
  title: 'Components/Modal',
  component: Template,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Modal content',
  },
};
