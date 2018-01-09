//Disable suite with failing test
describe("A disabled suite", function () {
    var foo;

    beforeEach(function () {
        foo = 2
    });

    it("has all specs disabled", function () {
        expect(foo).toEqual(1);
    });
});

//Disable failing spec
describe("Pending specs", function () {
    it("can be declared 'it.skip'", function () {
        expect(true).toBe(false);
    });

    it("can be declared with 'it' but without a function");

});

