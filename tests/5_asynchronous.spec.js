describe("Asynchronous specs", function () {

    var number;

    beforeEach(function () {
        number = 42;
    });

    it("has to know when to finish", function (done) {
        expect.hasAssertions();

        waitAWhile()
            .then(increaseNumber)
            .then(function () {
                expect(number).toBe(43);
            });

        done(); // move to proper place
    });

    it("waits for returned promise to resolve", function () {
        // add a single word to make this test pass

        expect.hasAssertions();

        waitAWhile()
            .then(function () {
                expect(number).toBe(42);
            });
    });

    it("can resolve with value", function () {
        expect.assertions(1);

        expect(waitAWhile().then(increaseNumber))
        // .doSomething
            .toBe(43);
    });

    function increaseNumber() {
        return ++number;
    }

    function waitAWhile() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(number);
            }, 1);
        });
    }


});
