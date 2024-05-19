const path = require('node:path');

const {
  NxAppWebpackPlugin,
} = require('@nx/webpack/src/plugins/nx-webpack-plugin/nx-app-webpack-plugin');

/**
In the v17 version of the fix a context-variable with the root path was available.
It may be possible to get that value some other way, but for now this works
**/
const workspaceRoot = path.join(__dirname, '../..');

module.exports = {
  output: {
    path: path.join(__dirname, '../../dist/server/api'),
    devtoolModuleFilenameTemplate: (info) => {
      // ref: https://webpack.js.org/configuration/output/#outputdevtoolmodulefilenametemplate
      const rel = path.relative(workspaceRoot, info.absoluteResourcePath);
      return `webpack:///./${rel}`;
    },
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      generatePackageJson: true,
      outputHashing: 'none',
      sourceMap: true, // Added source map to output (will not work without this)
    }),
  ],
};
