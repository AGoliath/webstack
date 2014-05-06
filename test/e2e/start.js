describe('The Application', function () {

    //in a real app you would split that into two it clauses
    it('should allow to navigate to the add page and add correctly', function() {
        browser.get('http://127.0.0.1:18181/');
        var el = element(by.id("add"));
        el.click();
        element(by.model("n1")).sendKeys("4");
        element(by.model("n2")).sendKeys("41");
        expect(element(by.id("result")).getText()).toBe("45");
    });

});