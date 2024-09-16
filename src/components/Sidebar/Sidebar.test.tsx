import { render, screen, waitFor } from '@testing-library/react';
import { Sidebar } from '.';
import userEvent from '@testing-library/user-event';

describe('Sidebar', () => {
  const handleToggle = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have a custom class', () => {
    render(
      <Sidebar className="testClass" testId="sidebar">
        Sidebar content
      </Sidebar>
    );
    expect(screen.getByTestId('sidebar')).toHaveClass('testClass');
  });

  it('should show sidebar content on open button click', async () => {
    render(<Sidebar>Sidebar content</Sidebar>);

    expect(screen.queryByText('Sidebar content')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /Open/ }));
    expect(await screen.findByText('Sidebar content')).toBeInTheDocument();
  });

  it('should hide sidebar content on close button click', async () => {
    render(<Sidebar>Sidebar content</Sidebar>);

    // Open Sidebar
    expect(screen.queryByText('Sidebar content')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /Open/ }));
    expect(await screen.findByText('Sidebar content')).toBeInTheDocument();

    // Close Sidebar
    userEvent.click(screen.getByRole('button', { name: /Close/ }));
    await waitFor(() =>
      expect(screen.queryByText('Sidebar content')).not.toBeInTheDocument()
    );
  });

  it('should sidebar starts opened if initialState is true', async () => {
    render(<Sidebar initialState={true}>Sidebar content</Sidebar>);
    expect(screen.getByText('Sidebar content')).toBeInTheDocument();
  });

  it('should onToggle returns the current sidebar open state value', async () => {
    render(<Sidebar onToggle={handleToggle}>Sidebar content</Sidebar>);
    userEvent.click(screen.getByRole('button', { name: /Open/ }));
    await waitFor(() => expect(handleToggle).toHaveBeenNthCalledWith(1, false));
    await waitFor(() => expect(handleToggle).toHaveBeenNthCalledWith(2, true));
    expect(handleToggle).toHaveBeenCalledTimes(2);
  });
});
