import React from 'react';
import { dark } from '../src/themes';
import { ThemeProvider } from '../src/containers/theme-provider.component';

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'dark',
        value: dark.palette.background.default
      },
      {
        name: 'light',
        value: dark.palette.grey[200]
      }
    ]
  }
};
