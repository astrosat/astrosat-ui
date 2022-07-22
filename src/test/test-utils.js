import React from 'react';

import { render as rtlRender } from '@testing-library/react';

import ThemeProvider from 'theme-provider/theme-provider.component';

/**
 * @param {React.ReactElement} ui
 * @param {(Omit<import('@testing-library/react').RenderOptions, 'queries'>
 *  & {
 *      state?: import('typings').RecursivePartial<import('react-redux').DefaultRootState>
 *    }
 * )} options
 */
const render = (ui, { state = {}, ...options } = {}) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme="dark">{children}</ThemeProvider>
  );
  const utils = rtlRender(ui, { wrapper: Wrapper, ...options });
  return { ...utils };
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { render };
