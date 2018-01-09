describe("A spec (with setup and tear-down)", function () {
    var foo = 0;

    beforeEach(function () {
        foo += 1;
    });

    afterEach(function () {
        foo = 0;
    });

    it("setups data for tests", function () {
        //Fix assertion
        //expect(foo).toEqual(?);
    });

    it("have tear-down code to cleanup after tests", function () {
        //Fix assertion
        //expect(foo).toEqual(?);
    });
});


