describe("Player", function () {

    var player;
    var song;

    beforeEach(function () {
        player = new Player();
        song = new Song();
    });

    beforeEach(function () {
        expect.extend({});
    });

    it("should be able to play a Song", function () {
        player.play(song);

        expect(player.currentlyPlayingSong).toEqual(song);
        //Write custom matcher to assert like this: expect(player).toBePlaying(song)
        expect(player).toBePlaying(song);
    });

    describe("when song has been paused", function () {
        beforeEach(function () {
            player.play(song);
            player.pause();
        });

        it("should indicate that the song is currently paused", function () {
            expect(player.isPlaying).toBeFalsy();

            // Use custom matcher assertion to assert that song is not playing
        });

    });


});
