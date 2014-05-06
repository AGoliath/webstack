'use strict';
/**
 * A controller that implements a simple add function.
 * Note that this will be reinstanciated whenever the corresponding view is reloaded
 */
angular.module(APP_NAME).controller('add2', function($scope) {

    $scope.n1 = 0;
    $scope.n2 = 1;

    $scope.add = function(){
        return $scope.n1 + $scope.n2;
    }

});
