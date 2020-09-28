import React, { useEffect } from 'react';
import themes from '../src/themes';
import { ThemeProvider } from '../src/containers/theme-provider.component';
import { CssBaseline } from '@material-ui/core';

export const decorators = [
  (Story, context) => {
    useEffect(() => {
      console.log(context.globals.theme);
    }, [context.globals.theme]);

    return (
      <ThemeProvider defaultTheme={context.globals.theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    );
  }
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light', left: '☀️' },
        { value: 'dark', title: 'Dark', left: '🌒' }
      ]
    }
  }
};

export const parameters = {
  backgrounds: {
    disable: true
  }
};
