import React from 'react';
import type { Preview } from '@storybook/react';
import ThemeProvider from '../src/theme/ThemeProvider';

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <div>
          <div id="root">
            <ThemeProvider>
              <Story />
            </ThemeProvider>
          </div>
          <div id="modals" />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
