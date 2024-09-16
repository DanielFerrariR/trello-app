import { render, screen, waitFor } from '@testing-library/react';
import { Modal } from '.';
import { useState } from 'react';
import { Button } from '../Button';
import { ModalProps } from './Modal';
import userEvent from '@testing-library/user-event';

const TestComponent = ({ children, testId, onClickOutside }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = () => {
    if (onClickOutside) {
      onClickOutside();
      return;
    }
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Click to open modal</Button>
      {isOpen && (
        <Modal testId={testId} onClickOutside={handleClickOutside}>
          {children}
        </Modal>
      )}
    </>
  );
};

describe('Modal', () => {
  const handleClickOutside = jest.fn();

  beforeEach(() => {
    const divElement = document.createElement('div');
    divElement.id = 'modals';
    document.body.appendChild(divElement);
  });

  afterEach(() => {
    jest.clearAllMocks();
    // eslint-disable-next-line testing-library/no-node-access
    document.getElementById('modals')?.remove();
  });

  it('should display modal on button click', async () => {
    render(<TestComponent>Modal content</TestComponent>);
    userEvent.click(
      screen.getByRole('button', { name: /Click to open modal/ })
    );
    expect(await screen.findByText('Modal content')).toBeInTheDocument();
  });

  it('should close modal when clicking outside the modal', async () => {
    render(<TestComponent testId="overlay">Modal content</TestComponent>);

    // Open modal
    userEvent.click(
      screen.getByRole('button', { name: /Click to open modal/ })
    );
    expect(await screen.findByText('Modal content')).toBeInTheDocument();

    // Close the modal
    userEvent.click(screen.getByTestId('overlay'));
    await waitFor(() =>
      expect(screen.queryByText('Modal content')).not.toBeInTheDocument()
    );
  });

  it('should not close modal when clicking inside the modal', async () => {
    render(
      <TestComponent onClickOutside={handleClickOutside}>
        Modal content
      </TestComponent>
    );

    userEvent.click(
      screen.getByRole('button', { name: /Click to open modal/ })
    );
    userEvent.click(await screen.findByText('Modal content'));
    await waitFor(() => expect(handleClickOutside).not.toHaveBeenCalled());
  });

  it('should add inert flag to the main app div and remove it when the modal is unmounted', async () => {
    const divElement = document.createElement('div');
    divElement.id = 'root';

    const { unmount } = render(
      <TestComponent onClickOutside={handleClickOutside}>
        Modal content
      </TestComponent>,
      {
        container: document.body.appendChild(divElement),
      }
    );
    userEvent.click(
      screen.getByRole('button', { name: /Click to open modal/ })
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(document.getElementById('root')).toHaveAttribute('inert');
    unmount();
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.getElementById('root')).not.toHaveAttribute('inert');
    // eslint-disable-next-line testing-library/no-node-access
    document.getElementById('root')?.remove();
  });
});
