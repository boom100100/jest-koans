describe("A suite", function () {

    var foo = 1;

    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });

    describe("is just a function", function () {
        var a;

        it("and so is a spec", function () {
            a = false;

            expect(a).toBe(false);
        });
    });

    it("can have more than one expectation", function () {
        var bar = 2;

        expect(bar).toEqual(2);
        expect(true).toEqual(true);
    });

    describe("can have nested describe", function () {
        var bar;

        beforeEach(function () {
            bar = 1;
        });

        it("can reference both scopes as needed", function () {
            expect(foo).toEqual(bar);
        });
    });

});
