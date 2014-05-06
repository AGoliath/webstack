'use strict';
/**
 * A simple custom directive to show two inputs and the result, using the add service.
 *
 */
angular.module(APP_NAME).directive('dbpbAddForm', function() {

    return {
        restrict: 'CAEM',
        scope: {}, //This line creates a private scope for all instances. If we would omitt it, all instances would share the same scope
        templateUrl: "partials/directives/dbpb/addForm.html",
        controller: function($scope, addService) {

            $scope.n1 = 11;
            $scope.n2 = 22;

            $scope.addWithService = function(){
                return addService.addParameters($scope.n1,$scope.n2);
            }

            $scope.addLocal = function(){
                return $scope.n1+$scope.n2;
            }

            //This is the method that actually gets called by the template. it is initiated to the correct function at linktime
            $scope.add = null;

        },
        link: function (scope, elem, attrs) {
            if (attrs.useaddservice === "true") scope.add = scope.addWithService;
            else scope.add = scope.addLocal;
            console.log("added this directive to the DOM with useaddservice = "+attrs.useaddservice);
        }
    }
});