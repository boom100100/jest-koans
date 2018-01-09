describe("expect.objectContaining", function() {

    var foo;

    beforeEach(function() {
        foo = {
            a: 1,
            b: 2,
            c: 3,
            bar: "baz"
        };
    });

    it("matches objects with the expect key/value pairs", function() {
        var result = {
            a: 1,
            b: 2,
            c: 3,
            bar: "fizz"
        };

        //change to single assertion (use expect.objectContaining)
        expect(foo.a).toEqual(1);
        expect(foo.b).toEqual(2);
        expect(foo.c).toEqual(3);
    });

});
