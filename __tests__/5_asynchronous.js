describe("Asynchronous specs", function() {

    var value;

        beforeEach(function() {
            setTimeout(function() {
                value = 0;
            }, 1);
        });

        //Fix test by making possible to execute test with async call in "before each"
        it("should support async execution of test preparation and expectations", function() {
            value++;

            expect(value).toBeGreaterThan(0);
        });

});
