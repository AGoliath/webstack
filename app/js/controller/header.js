'use strict';
/**
 * Controller for the header, taking care of the language switch
 */
angular.module(APP_NAME).controller('header', function($scope, gettextCatalog) {
    /**
     * called onclick of a langugage flag
     */
    $scope.setLanguage = function(newLanguage){
        gettextCatalog.currentLanguage =  newLanguage;
        gettextCatalog.debug = true;

    };

    // we set the default language here to keep it all together, usually you would do this in a separate init.js
    gettextCatalog.currentLanguage = "de";
    gettextCatalog.debug = false;

});