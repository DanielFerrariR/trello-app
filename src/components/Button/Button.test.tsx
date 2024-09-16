import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';
import { ReactComponent as AddIcon } from '../../assets/add.svg';

describe('Button', () => {
  const handleClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have a custom class', async () => {
    render(
      <Button className="testClass" onClick={handleClick}>
        OK
      </Button>
    );
    expect(screen.getByRole('button', { name: /OK/ })).toHaveClass('testClass');
  });

  it('should call onClick callback', async () => {
    render(
      <Button className="testClass" onClick={handleClick}>
        OK
      </Button>
    );
    userEvent.click(screen.getByRole('button', { name: /OK/ }));
    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toBeCalledTimes(1);
  });

  it('should display icon before text', async () => {
    render(
      <Button startIcon={AddIcon} className="testClass" onClick={handleClick}>
        OK
      </Button>
    );
    expect(
      screen.getByRole('button', { name: 'add.svg OK' })
    ).toBeInTheDocument();
  });
});
