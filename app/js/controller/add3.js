'use strict';
/**
 * A controller that implements a simple add function.
 * This one does not use it´s local scope but the root scope instead to store it´s data
 */
angular.module(APP_NAME).controller('add3', function($scope,$rootScope) {

    /**
     * We need a little intialisation method in case you launch this view for the first time.
     * Usually you would do this in a separate init.js in a module(APP_NAME).run() block, but i want it here to demonstrate
     * how to call an init method
     */

    (function(){
        $rootScope.n1 = $rootScope.n1 == undefined ? 1:$rootScope.n1;
        $rootScope.n2 = $rootScope.n2 == undefined ? 3:$rootScope.n2;
    })();


    $scope.add = function(){
        return $rootScope.n1 + $rootScope.n2;
    }

});
