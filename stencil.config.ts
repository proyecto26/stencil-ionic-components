import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'my-components',
  globalStyle: 'src/global/global.scss',
  globalScript: 'src/global/global.ts',
  commonjs: {
    namedExports: {}
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  preamble: 'My Web Components - MIT License',
  plugins: [
    sass(),
    nodePolyfills()
  ]
};
