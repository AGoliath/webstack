'use strict';
/**
 * controller that takes care of the user page
 */
angular.module(APP_NAME).controller("userlist", function ($scope, userService, $modal, $filter, gettext, gettextCatalog) {


    $scope.showUserDetails = function (userToShow) {
        $modal.open({
            // usually you´d want to create your own template for this, but here goes the quick and dirty modal dialog...
            template: "<div class='modal-dialog'><div class='modal-body'><h3>" + userToShow.name + "</h3><br /><pre>" + $filter("json")(userToShow) + "</pre></div></div>"
        });
    };


    $scope.deleteUser = function (userToDelete) {
        // this is the only place where translation support is a bit messy.
        // first we mark the string as a string to be translated...
        gettext("Do you really want to delete ||name||?");
        // then we get the actual translation and replace the name
        if (confirm(gettextCatalog.getString("Do you really want to delete ||name||?").split("||name||").join(userToDelete.name))) {
            userService.deleteUser(userToDelete);
        }
    };

    $scope.onAddUserClick = function () {
        userService.addUser($scope.newUsername, "details for user " + $scope.newUsername);
        $scope.newUsername = null;
    };

    $scope.updateList = function () {
        userService.query(function (r) {
            $scope.users = r;
        });
    };

    (function () {
        //We want the user list to populate as soon as the controller is loaded
        $scope.updateList();
        //let´s listen to any change events the userService gets aware of
        $scope.$on(userService.ON_CHANGE, $scope.updateList);
    })();

})