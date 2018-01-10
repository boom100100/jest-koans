describe("matchers", function () {

    describe("The 'toEqual' matcher", function () {

        it("works for simple literals and variables", function () {
            var a = 12;
            expect(a).toEqual(12);
        });

        it("should work for objects", function () {
            var foo = {
                a: 12,
                b: 34
            };
            var bar = {
                a: 12,
                b: 34
            };
            expect(foo).toEqual(bar);
        });

        it("compares using common sense equality", function () {
            var expectedValue = 2;
            var actualValue = 1 + 1;

            expect(actualValue).toEqual(expectedValue);
        });
    });

    describe("The 'toBe' matcher", function () {

        it("has a positive case", function () {
            //Use 'toBe' to expect that true is true
        });

        it("and can have a negative case", function () {
            ///Use 'toBe' to expect that false is not true
        });


        it("compares with ===", function () {
            var a = 12;
            var b = a;

            expect(a).toBe(b);
            //expect(a===b).toBe(?);
            //Add assertion to expect that a is not null
        });

    });

    it("The 'toMatch' matcher is for regular expressions", function () {
        var message = "foo bar baz";

        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };

        //Add assertion to expect that a.foo is defined
        //Add assertion to expect that a.bar is not defined

    });

    it("The `toBeUndefined` matcher compares against `undefined`", function () {
        var a = {
            foo: "foo"
        };

        //Add assertion to expect that a.foo is defined using toBeUndefined
        //Add assertion to expect that a.bar is not defined using toBeUndefined
    });

    it("The 'toBeNull' matcher compares against null", function () {
        var a = null;
        var foo = "foo";

        //Add assertion to expect that a is null
        //Add assertion to expect that foo is not null
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", function () {
        var a = false;
        var b = "false";
        var c = undefined;
        var foo = "foo";

        //Use 'toBeTruthy' to check all values
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", function () {
        var a = false;
        var b = "true";
        var c = undefined;
        var foo = "foo";

        //Use 'toBeFalsy' to check all values
    });

    it("The 'toContain' matcher is for finding an item in an Array", function () {
        var a = ["foo", "bar", "baz"];

        //Add assertion to expect that a contains "bar"
        //Add assertion to expect that a does not contain "quux"
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926,
            e = 2.78;

        //Add assertion to expect that e is less than pi
        //Add assertion to expect that pi is not less than e
    });

    it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926,
            e = 2.78;

        //Add assertion to expect that pi is greater than e
        //Add assertion to expect that e is not greater than pi
    });

    it("The 'toBeCloseTo' matcher is for precision math comparison", function () {
        var pi = 3.1415926,
            a = 3.13,
            e = 2.78;

        //Add assertion that "pi" variable is close to "a" within one decimal point
        //Add assertion that "pi" variable is not close to "a" within two decimal points
        //Figure out what happens when you assert "pi" with "e" using toBeCloseTo with second argument 0
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", function () {
        var foo = function () {
            return 1 + 2;
        };
        var bar = function () {
            return a + 1;
        };

        //Add assertion to expect that foo is not throwing exception
        //Add assertion to expect that bar is throwing exception
    });

    it("The 'toThrow' matcher is for testing a specific thrown exception", function () {
        var foo = function () {
            throw new TypeError("foo bar baz");
        };

        //Add assertion to expect that foo is throwing exception with message "foo bar baz"
        //Add assertion to expect that foo is throwing exception with message matching pattern /bar/
        //Add assertion to expect that foo is throwing exception of specific Type
    });

});


