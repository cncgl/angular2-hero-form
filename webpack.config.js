var path = require('path');

module.exports = {
  entry: {
    'vendor': './app/vendor.js',
    'boot': './app/boot.js'
  },
  output: {
    path: 'build',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.html']
    //modulesDirectories: ['node_modules'],
    //alias: {
    //  'angular2': __dirname + '/node_modules/angular2/bundles/angular2-all.umd.js',
    //  'polyfills': __dirname + '/node_modules/angular2/bundles/angular2-polyfills.js',
    //  'rxjs': __dirname + '/node_modules/rxjs/bundles/Rx.umd.js',
    //  'bootstrap': __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'
    //}
  }
};