describe("A spec (with setup and tear-down)", function () {
    var foo = 0;

    beforeEach(function () {
        foo += 1;
    });

    it("setups data for tests", function () {
        //Fix assertion
        expect(foo).toEqual(1);
    });

    it("have tear-down code to cleanup after tests", function () {
        //add afterEach method to cleanup
        expect(foo).toEqual(0);
    });
});


