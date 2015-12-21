/**
 * Created by shigeru on 15/12/18.
 */
require('./hero');
require('./hero-form.component');
require('./app.component.js');
(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));
