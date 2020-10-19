describe("A spec (with setup and tear-down)", function () {
    var foo = 0;

    beforeEach(function () {
        foo += 1;
    });
    
    const afterEach = () => {
        foo = 0;
    };

    it("setups data for tests", function () {
        expect(foo).toEqual(1);
    });

    it("have tear-down code to cleanup after tests", function () {
        afterEach();
        expect(foo).toEqual(0);
    });
});


