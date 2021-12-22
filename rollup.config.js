// Rollup plugins
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import includePaths from 'rollup-plugin-includepaths';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const plugins = [
  includePaths({ paths: ['src'] }),
  external({ includeDependencies: true }),
  eslint({
    exclude: ['src/**/*.css', 'src/**/*.svg'],
  }),
  postcss({
    modules: true,
  }),
  babel({
    babelHelpers: 'runtime', // NOTE: Maybe 'bundled' is the better option
    presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
    exclude: 'node_modules/**',
  }),
  resolve(),
  commonjs(),
  typescript({ tsconfig: './tsconfig.build.json' }),
];

const Index = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins,
};

export default Index;
