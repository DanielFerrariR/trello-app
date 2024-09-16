import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EditableText } from '.';

describe('EditableText', () => {
  const handleChangeText = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have a custom class', () => {
    render(
      <EditableText
        className="testClass"
        text="This an editable text"
        onChangeText={handleChangeText}
        testId="editableText"
      />
    );
    expect(screen.getByTestId('editableText')).toHaveClass('testClass');
  });

  it('should call onChangeText on textarea blur', async () => {
    render(
      <EditableText
        className="testClass"
        text="This an editable text"
        onChangeText={handleChangeText}
        testId="editableText"
      />
    );
    userEvent.click(screen.getByRole('paragraph'));
    userEvent.clear(screen.getByRole('textbox'));
    userEvent.type(screen.getByRole('textbox'), 'new text');
    fireEvent.blur(screen.getByRole('textbox'));

    await waitFor(() =>
      expect(handleChangeText).toHaveBeenCalledWith('new text')
    );
    expect(handleChangeText).toHaveBeenCalledTimes(1);
  });

  it('should revert to previous value if the new value is empty', async () => {
    render(
      <EditableText
        className="testClass"
        text="This an editable text"
        onChangeText={handleChangeText}
        testId="editableText"
      />
    );
    userEvent.click(screen.getByRole('paragraph'));
    userEvent.clear(screen.getByRole('textbox'));
    fireEvent.blur(screen.getByRole('textbox'));

    await waitFor(() =>
      expect(handleChangeText).toHaveBeenCalledWith('This an editable text')
    );
    expect(handleChangeText).toHaveBeenCalledTimes(1);
  });

  it('should enter key updates the value', async () => {
    render(
      <EditableText
        className="testClass"
        text="This an editable text"
        onChangeText={handleChangeText}
        testId="editableText"
      />
    );
    userEvent.click(screen.getByRole('paragraph'));
    userEvent.clear(screen.getByRole('textbox'));
    userEvent.type(screen.getByRole('textbox'), 'new text');
    userEvent.type(screen.getByRole('textbox'), '{enter}');

    await waitFor(() =>
      expect(handleChangeText).toHaveBeenCalledWith('new text')
    );
    expect(handleChangeText).toHaveBeenCalledTimes(1);
  });
});
