/**
 * Created by shigeru on 15/12/18.
 */
(function(app) {
    app.AppComponent = ng.core
        .Component({
            //selector: 'my-app',
            //template: '<h1>My First Angular 2 App</h1>'
            selector: 'my-app',
            template: '<hero-form></hero-form>',
            directives: [app.HeroFormComponent]
        })
        .Class({
            constructor: function() {}
        });

    // var myHero =  new Hero(42, 'SkyDog',
    //    'Fetch any object at any distance', 'Leslie Rollover');
    // console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
})(window.app || (window.app = {}));
