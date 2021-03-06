'use strict';

import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import getNodeEnv from '../helpers/getNodeEnv.js';

const $ = loadPlugins();
let webpackConfig;

if (getNodeEnv() === 'development') {
  webpackConfig = Object.create(require('../../webpack.config.dev'));
}
else {
  webpackConfig = Object.create(require('../../webpack.config'));
}

const js = () => {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path));
};

export default js;
