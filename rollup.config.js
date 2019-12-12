// Rollup plugins
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import { eslint } from 'rollup-plugin-eslint';
import svg from 'rollup-plugin-svg';
import glob from 'glob';
import pkg from './package.json';

const plugins = [
  external({ includeDependencies: true }),
  svg(),
  eslint({
    exclude: ['src/**/*.css', 'src/**/*.svg']
  }),
  postcss({
    modules: true
  }),
  babel({
    presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
    exclude: 'node_modules/**'
  }),
  resolve(),
  commonjs()
];

export default [
  {
    input: Object.fromEntries(
      glob
        .sync('src/*/*.{component,hook}.js')
        .map(p => [p.match(/\/(.+?)\.(component|hook)\.js$/)[1], p])
    ),
    output: [
      {
        dir: 'dist',
        format: 'es'
      }
    ],
    plugins
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins
  }
];
