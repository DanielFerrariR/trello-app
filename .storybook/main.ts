import type { StorybookConfig } from '@storybook/react-webpack5';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  async webpackFinal(config: any) {
    // Copying files to the build folder
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../src/theme/reset.css'),
            to: '',
          },
        ],
      })
    );

    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;
