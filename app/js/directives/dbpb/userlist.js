'use strict';
/**
 * A simple custom directive to generate a user list
 *
 */
angular.module(APP_NAME).directive('dbpbList', function(userService) {
    return {
        templateUrl: "partials/directives/dbpb/userlist.html",
        scope: {
            // = does two-way binding, e.g. every change to items in the controller also happens to the object that is bound to the property
            items:"=",
          // Usually you want expression binding "&" for callbacks, but i want the syntax in the template to be nicer, so I use = here as well
         //   detailcallback:"&"
            detailcallback:"=",
            deletecallback:"="
        },
        controller: function($scope) {

            $scope.overItem = null;

            $scope.itemFilter = function(item){
                return true;
            };

            $scope.onMouseOverRow = function(item){
                $scope.overItem = item;
            };

            $scope.onMouseOutOfTable = function(){
                $scope.overItem = null;
            }

        },
        link: function (scope, elem, attrs) {
            scope.showDetailsButton = attrs.detailcallback !== undefined;
            scope.showDeleteButton = attrs.deletecallback !== undefined;
        }
    }
});
