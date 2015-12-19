var path = require('path');

module.exports = {
  entry: './app/boot.js',
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      'angular2': __dirname + '/node_modules/angular2/bundles/angular2-all.umd.js',
      'polyfills': __dirname + '/node_modules/angular2/bundles/angular2-polyfills.js',
      'rxjs': __dirname + '/node_modules/rxjs/bundles/Rx.umd.js',
      'bootstrap': __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'
    }
  }
};