import { render, screen } from '@testing-library/react';
import { Textarea } from '.';

describe('Textarea', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have a custom class', () => {
    render(<Textarea className="testClass" />);
    expect(screen.getByRole('textbox')).toHaveClass('testClass');
  });
});
