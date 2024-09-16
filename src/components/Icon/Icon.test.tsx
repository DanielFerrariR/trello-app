import { render, screen } from '@testing-library/react';
import { Icon } from '.';
import { ReactComponent as AddIcon } from '../../assets/add.svg';

describe('Icon', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have a custom class', () => {
    render(<Icon icon={AddIcon} className="testClass" testId="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('testClass');
  });

  it('should display icon', () => {
    render(<Icon icon={AddIcon} className="testClass" />);
    expect(screen.getByText('add.svg')).toBeInTheDocument();
  });
});
