describe("Player", function () {

    var player;
    var song;

    beforeEach(function () {
        
        song = {
            title: "A string"
        };
        player = {
            currentlyPlayingSong: song,
            isPlaying: true,
            play: (song) => player.currentlyPlayingSong = song,
            pause: () => player.isPlaying = false,
         };
    });

    beforeEach(function () {
        expect.extend({
            toBePlaying(player, song) {
                
                if (player.currentlyPlayingSong === song) {
                    return {
                        pass: true,
                        message: `${song} is playing`,
                    };
                } else {
                    return {
                        pass: false,
                        message: `Expected ${song} to be playing`,
                    }
                }
            }, toBePaused(player){
                if (player.isPlaying === false) {
                    return {
                        pass: true,
                        message: `The song is not playing`,
                    };
                } else {
                    return {
                        pass: false,
                        message: `Expected the song to not be playing`,
                    }
                }
            }
        });
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
            expect(player).toBePaused();
        });

    });


});
