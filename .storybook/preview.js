import React from 'react';
import { ThemeProvider } from '../src/containers/theme-provider.component';

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];
