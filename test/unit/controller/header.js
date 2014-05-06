'use strict';

describe('The header controller', function () {

    beforeEach(module(APP_NAME));
    var scope;
    var cont;
    var catalog;

    // we now create instances of our services and inject them into our controller
    beforeEach(inject(function ($controller, $rootScope, gettextCatalog) {
        scope = $rootScope.$new();
        //We could mock the service here, but we want to test it as well
        catalog = gettextCatalog;
        cont = $controller('header', {$scope: scope, gettextCatalog:catalog}) ;

    }));

    it('should exist', inject(function () {
        expect(cont).toBeDefined();
    }));

    it('should set de as default language', inject(function () {
        expect(catalog.currentLanguage).toEqual("de");
        expect(catalog.getString('Willkommen')).toEqual("Willkommen");
    }));

    it('should set en as optional language', inject(function () {
        catalog.currentLanguage = "en";
        expect(catalog.currentLanguage).toEqual("en");
        expect(catalog.getString('Willkommen')).toEqual("Welcome");
    }));

    it('should not have fr as optional language', inject(function () {
        catalog.currentLanguage = "fr";
        catalog.debug = true;
        expect(catalog.getString('Willkommen')).toEqual('[MISSING]: Willkommen');
    }));


});
