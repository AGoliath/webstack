"use strict";

describe('The addService', function () {

    beforeEach(module(APP_NAME));

    it('should exist', inject(function (addService) {
        expect(addService).toBeDefined();
        expect(addService.add).toBeDefined();
    }));

    it('should add correctly', inject(function (addService) {
        addService.x1 = 3;
        addService.x2 = 5;
        expect(addService.add()).toEqual(8);
        addService.x2 = 1;
        expect(addService.add()).toEqual(4);
        addService.x1 = 1;
        expect(addService.add()).toEqual(2);
    }));

});
