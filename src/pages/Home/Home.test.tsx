import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should display board title', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { level: 2, name: /Simple Project Board/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /Simple Project Board/ })
    ).toBeInTheDocument();
  });
});
