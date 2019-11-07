// Rollup plugins
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import { eslint } from 'rollup-plugin-eslint';
import svg from 'rollup-plugin-svg';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'astrosatui',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
        zxcvbn: 'zxcvbn'
      }
    },
    {
      file: pkg.main,
      format: 'cjs',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
        zxcvbn: 'zxcvbn'
      }
    },
    {
      file: pkg.module,
      format: 'es',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
        zxcvbn: 'zxcvbn'
      }
    }
  ],
  external: ['react', 'react-dom', 'prop-types', 'zxcvbn'],
  plugins: [
    external(),
    svg(),
    eslint({
      exclude: ['src/**/*.css', 'src/**/*.svg']
    }),
    postcss({
      modules: true
    }),
    babel({
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react'
      ],
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
};
