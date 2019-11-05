// Rollup plugins
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { eslint } from 'rollup-plugin-eslint';
import svg from 'rollup-plugin-svg';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.browser, format: 'umd', name: 'astrosatui' },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  external: ['react', 'react-dom', 'prop-types', 'zxcvbn'],
  plugins: [
    resolve(),
    svg(),
    eslint({
      exclude: ['src/**/*.css', 'src/**/*.svg']
    }),
    postcss({
      modules: true
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
