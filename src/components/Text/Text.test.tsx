import { render, screen } from '@testing-library/react';
import { Text } from '.';

describe('Text', () => {
  it('should have a custom class', () => {
    render(<Text className="testClass">Text</Text>);
    expect(screen.getByText(/Text/)).toHaveClass('testClass');
  });

  it('should display h1 when type is page', () => {
    render(<Text type="page">Text</Text>);
    expect(
      screen.getByRole('heading', { level: 1, name: /Text/ })
    ).toBeInTheDocument();
  });

  it('should display h2 when type is section', () => {
    render(<Text type="section">Text</Text>);
    expect(
      screen.getByRole('heading', { level: 2, name: /Text/ })
    ).toBeInTheDocument();
  });

  it('should display h3 when type is subsection', () => {
    render(<Text type="subsection">Text</Text>);
    expect(
      screen.getByRole('heading', { level: 3, name: /Text/ })
    ).toBeInTheDocument();
  });

  it('should display paragraph when type is paragraph', () => {
    render(<Text type="paragraph">Text</Text>);
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  it('should display paragraph when type is caption', () => {
    render(<Text type="caption">Text</Text>);
    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });
});
