describe("A mock", function() {

    var foo, bar = null;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };

    });

    it("tracks that the spy was called", function() {
        //mock 'setBar' method using 'jest.fn()'

        foo.setBar(123);

        //Add assertion that "setBar" method have been called
    });

    it("tracks all the arguments of its calls", function() {
        //mock 'setBar' method using 'jest.fn()'

        foo.setBar(123);
        foo.setBar(456, 'another param');

        //Add assertion that "setBar" method have been called with params
    });

    it("stops all execution on a function", function() {
        //mock 'setBar' method using 'jest.fn()'

        foo.setBar(123)

        //What is the value of "bar" at this point? Write assertion on expected "bar" value
    });

    it("allows to change returned values", function() {
        //mock 'getBar' method using 'jest.fn()'

        //set up return value

        expect(foo.getBar()).toBe(42);
    });

    it("allows to set up a fake implementation", function() {
        // mock 'getBar' method using 'jest.fn()'

        // mock implementation to double the requested value

        expect(foo.getBar(11)).toBe(22);
    });

    it("allows to set up a fake implementation", function() {
        // mock 'getBar' method using 'jest.fn()'

        // mock implementation to Throw an error

        expect(foo.getBar).toThrow('expected error');
    });

});
