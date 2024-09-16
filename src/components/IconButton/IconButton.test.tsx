import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconButton } from '.';
import { ReactComponent as AddIcon } from '../../assets/add.svg';

describe('IconButton', () => {
  const handleClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have a custom class', () => {
    render(
      <IconButton
        icon={AddIcon}
        ariaLabel="Add"
        className="testClass"
        onClick={handleClick}
      />
    );
    expect(screen.getByRole('button', { name: /Add/ })).toHaveClass(
      'testClass'
    );
  });

  it('should call onClick callback', async () => {
    render(
      <IconButton
        icon={AddIcon}
        ariaLabel="Add"
        className="testClass"
        onClick={handleClick}
      />
    );
    userEvent.click(screen.getByRole('button', { name: /Add/ }));
    await waitFor(() => expect(handleClick).toHaveBeenCalled());
    expect(handleClick).toBeCalledTimes(1);
  });

  it('should display icon', () => {
    render(
      <IconButton
        icon={AddIcon}
        ariaLabel="Add"
        className="testClass"
        onClick={handleClick}
      />
    );
    expect(screen.getByText('add.svg')).toBeInTheDocument();
  });
});
