'use strict';

describe('The add2 controller', function () {

    beforeEach(module(APP_NAME));
    var scope;
    var cont;

    // Initialize a scope and create the controller to be tested
    // we need to store a reference to the scope so we can access it in our tests
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        cont = $controller('add2', {$scope: scope}) ;
    }));

    it('should exist', inject(function () {
        expect(cont).toBeDefined();
    }));

    it('should have it´s local variables initialised', inject(function () {
        expect(scope.n1).toBeDefined();
        expect(scope.n1).toEqual(0);
        expect(scope.n2).toBeDefined();
        expect(scope.n2).toEqual(1);
    }));

    it('should have an add function', inject(function () {
        expect(scope.add).toBeDefined();
    }));

    it('should add correctly', inject(function () {
        scope.n1 = 3;
        scope.n2 = 6;
        expect(scope.add()).toEqual(9);
    }));

});
