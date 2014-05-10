'use strict';
/**
 * This file creates our app module and therefore must list all Angular modules we depend on
 * Therefore it MUST be the first file to be included after the core framework files.
 */
angular.module(APP_NAME, [
    'ngRoute',
    'ngResource',
    'ui.bootstrap',
    'gettext'
]);