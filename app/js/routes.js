'use strict';
/**
 * This file defines all public URIs available to the user
 *
 */
angular.module(APP_NAME).config( function($routeProvider) {

    //Login-Page
    $routeProvider.when('/willkommen', {templateUrl: 'partials/start.html' });
    $routeProvider.when('/start', {redirectTo: '/willkommen'});

    //Nav items
    $routeProvider.when('/add',  {templateUrl: 'partials/add.html'  });
    $routeProvider.when('/add2',  {templateUrl: 'partials/add2.html'  });
    $routeProvider.when('/add3',  {templateUrl: 'partials/add3.html'  });
    $routeProvider.when('/add4',  {templateUrl: 'partials/add4.html'  });
    $routeProvider.when('/add5',  {templateUrl: 'partials/add5.html'  });




    // 404 - forwards to the login page
    $routeProvider.otherwise({redirectTo: '/willkommen'});

});

/**
 * After we defined our route, we create a simple interceptor that logs every route change
 */
angular.module(APP_NAME).run (function($location,$rootScope){
        $rootScope.$on('$routeChangeSuccess', function() {
            console.log("Now routing to: "+$location.path());
        });
});