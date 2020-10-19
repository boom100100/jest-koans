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

        const mock = jest.fn(foo.setBar, 123);
        mock.call(null);
        expect(mock).toHaveBeenCalled();
        //Add assertion that "setBar" method have been called

    });

    it("tracks all the arguments of its calls", function() {
        //mock 'setBar' method using 'jest.fn()'
        const mock = jest.fn(foo.setBar);
        mock(123);
        mock(456, 'another param');

        expect(mock).toHaveBeenCalledWith(123);
        expect(mock).toHaveBeenCalledWith(456, 'another param');
        expect(mock).toHaveBeenCalledTimes(2);
        //Add assertion that "setBar" method have been called with params
    });

    it("stops all execution on a function", function() {
        //mock 'setBar' method using 'jest.fn()'
        const mock = jest.fn(foo.setBar);
        mock(123);

        expect(foo.getBar()).toEqual(123);
        
        

        //What is the value of "bar" at this point? Write assertion on expected "bar" value
    });

    it("allows to change returned values", function() {
        //mock 'getBar' method using 'jest.fn()'
        const mock =  jest.fn(foo.getBar);
        mock.mockReturnValue(42);
        
        //set up return value
        const returnValue = mock();
        expect(returnValue).toBe(42);
        expect(foo.getBar()).toBe(123);
        
        jest.fn(foo.setBar(42))();
        expect(foo.getBar()).toBe(42);
    });

    it("allows to set up a fake implementation", function() {
        // mock 'getBar' method using 'jest.fn()'
        jest.fn(foo.setBar)(11);
        const mock = jest.fn(foo.getBar);

        // mock implementation to double the requested value
        mock.mockImplementation(() => foo.getBar() * 2)

        expect(mock()).toBe(22);
        expect(foo.getBar(11)).toBe(11);
    });

    it("allows to set up a fake implementation", function() {
        // mock 'getBar' method using 'jest.fn()'
        const mock = jest.fn(foo.getBar);
        
        // mock implementation to Throw an error
        mock.mockImplementation(() => {
            throw new Error('expected error')
        });
        
        expect(mock).toThrow('expected error');
        // expect(foo.getBar).toThrow('expected error');
    });

});
