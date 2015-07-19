'use strict';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../../webpack.config.dev';
import log from '../logging/index';

const startDevServer = () => {
  let myDevConfig = Object.create(webpackConfig);
  myDevConfig.devtool = 'sourcemap';
  myDevConfig.debug = true;
  // Start a webpack-dev-server
  let compiler = webpack(myDevConfig);

  new WebpackDevServer(compiler, {
    publicPath: myDevConfig.output.publicPath,
    hot: true,
    quiet: true,
    noInfo: true,
    stats: {
      colors: true
    }
  }).listen(8081, 'localhost', function(err) {
      if (err) {
        log.info(err);
      }
      log.info('[webpack-dev-server]', 'http://localhost:8081/webpack-dev-server/index.html');
    });
};

export default startDevServer;
