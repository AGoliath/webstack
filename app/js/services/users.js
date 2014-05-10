'use strict';
/**
 * A simple REST consumer for our user service
 */
angular.module(APP_NAME).factory("userService", function ($resource, $rootScope) {
    var userService = {};

    var User = $resource('http://www.server.ac/rest/users/:id', {'id': "@id"});

    // We need to broadcast the event on the rootscope, so we reach all child scopes (check the docs on $broadcast in contrast to $emit)
    userService.ON_CHANGE = "userService.dataChanged";
    var triggerChangeEvent = function () {
        $rootScope.$broadcast(userService.ON_CHANGE);
    };

    userService.query = function (callback) {
        User.query(callback);
    }

    userService.get = function (id, callback) {
        return User.get({'id': id}, callback);
    }

    userService.addUser = function (newName, newDetails) {
        var newuser = new User();
        newuser.name = newName;
        newuser.details = newDetails;
        newuser.$save().then(triggerChangeEvent);
    }

    userService.deleteUser = function (userToDelete) {
        userToDelete.$delete().then(triggerChangeEvent);
    }

    return userService;

})
