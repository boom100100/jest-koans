describe("object matching", function () {

    var foo;

    beforeEach(function () {
        foo = {
            a: 1,
            b: 2,
            c: 3,
            bar: "baz"
        };
    });

    it("matches objects with the expect key/value pairs", function () {
        //change to single assertion (use expect.objectContaining)
        expect(foo.a).toEqual(1);
        expect(foo.b).toEqual(2);
        expect(foo.c).toEqual(3);
        expect(foo.bar).toEqual(expect.any(String));
    });

    it("matches objects with the expect key/value pairs", function () {
        //change to single assertion (use toMatchObject)
        expect(foo.c).toEqual(3);
        expect(foo.bar).toEqual(expect.stringMatching(/ba/));
    });

    it("checks an array", function () {
        const arr = [1, 2, 3, 4, 5, 6]; // modify to pass expectations

        expect(arr).toEqual(expect.arrayContaining([3, 7, 9]));
        expect(arr).not.toEqual(expect.arrayContaining([1, 2, 4]));
    });

    it("checks properties", function () {
        const houseForSale = { // modify to pass expectations
            fireplace: true,
            pool: '20m',
            kitchen: {
                open: true
            }
        };

        expect(houseForSale).toHaveProperty('fireplace');
        expect(houseForSale).toHaveProperty('rooms', 4);

        expect(houseForSale).not.toHaveProperty('pool');

        expect(houseForSale).toHaveProperty('kitchen.area', 20);
        expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);

        expect(houseForSale).toHaveProperty('kitchen.amenities',
            ['oven', 'stove', 'washer']);
        expect(houseForSale).toHaveProperty(['kitchen', 'amenities'],
            ['oven', 'stove', 'washer']
        );
        expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');

        expect(houseForSale).not.toHaveProperty('kitchen.open');
        expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);
    });

});
