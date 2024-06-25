const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       },

       // prints a list of all playlists, in the form:
       // p01: Coding Music - 2 tracks
       // p02: Other Playlist - 1 tracks
       printPlaylists: function () {
              console.log("\n");
              for (let playlist in this.playlists) {
                     let count = 0;
                     this.playlists[playlist].tracks.forEach(track => {
                            count = count + 1;
                     });
                     console.log(`${playlist}: ${this.playlists[playlist].name} - ${count} tracks \n`);
              }

       },
       // prints a list of all tracks, using the following format:
       // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
       // t02: Model View Controller by James Dempsey (WWDC 2003)
       // t03: Four Thirty-Three by John Cage (Woodstock 1952)
       printTracks: function () {
              console.log("\n");
              for (let track in this.tracks) {
                     console.log(`${track} : ${this.tracks[track].name} by ${this.tracks[track].artist} (${this.tracks[track].album})`);
              }
              console.log('\n');
       },
       // prints a list of tracks for a given playlist, using the following format:
       // p01: Coding Music - 2 tracks
       // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
       // t02: Model View Controller by James Dempsey (WWDC 2003)
       printPlaylist: function (playlistId) {
              console.log("\n");
              let countTracks = 0;
              this.playlists[playlistId].tracks.forEach(element => {
                     countTracks = countTracks + 1;
              });

              console.log(`${playlistId}: ${this.playlists[playlistId].name} - ${countTracks} tracks`);

              this.playlists[playlistId].tracks.forEach(element => {
                     let { id, name, artist, album } = this.tracks[element];
                     console.log(`${id}: ${name} by ${artist} (${album})`);
              });
              console.log("\n");

       },
       // adds an existing track to an existing playlist
       addTrackToPlaylist: function (trackId, playlistId) {
              console.log("\n");
              if (this.tracks[trackId] && this.playlists[playlistId]) {
                     this.playlists[playlistId].tracks.push(trackId);
                     console.log(`--Added ${trackId} to ${playlistId}--`);
                     this.printPlaylist(playlistId);
              } else {

                     console.log(`Cannot add ${trackId} to ${playlistId}...\nPlease use an already available track and playlist.\n`);
                     if (!(this.playlists[playlistId])) {
                            console.log(`Cannot display ${playlistId} Playlist.. It does not exist \n`);
                     }
              }

       },


       // generates a unique id
       // (already implemented: use this for addTrack and addPlaylist)
       generateUid: function (){
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },


       // adds a track to the library
       addTrack: function (name, artist, album) {

              let trackId = this.generateUid();
              while (this.tracks[trackId] || this.playlists[trackId]) {
                     console.log(`${trackId} already exists. Generating new track ID...`, "\n");
                     trackId = this.generateUid();
              }
              /**Check if empty string */
              if (!name || !artist || !album) {
                     console.log(`Cannot add track. Please use complete information...`, "\n");
                     return;
              }

              this.tracks[trackId] = { id: trackId, name, artist, album };
              console.log(`Added track: ${trackId}`, this.tracks[trackId], "\n");

       },


       // adds a playlist to the library
       addPlaylist:function  (name){
              let playlistId = this.generateUid();
              while (this.tracks[playlistId] || this.playlists[playlistId]) {
                     console.log(`${playlistId} already exists. Generating new track ID...`);
                     playlistId = this.generateUid();
              }

              if (!name) {
                     console.log(`Please give the playlist a name...`);
                     return;
              }

              this.playlists[playlistId] = { id: playlistId, name, tracks: [] };
              console.log(`Added playlist : ${this.playlists[playlistId].name}`, this.playlists[playlistId], "\n");



       },
       // STRETCH:
       // given a query string string, prints a list of tracks
       // where the name, artist or album contains the query string (case insensitive)
       // tip: use "string".search("tri")
       // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
       printSearchResults : function (query) {
              let found = false;
              if (!query || !(query.trim())) {
                     console.log(`Nothing to search...`);
                     return;
              }
              console.log(`Searching ${query} in Tracks`);
              console.log(`Results: `);
              for (let track in this.tracks) {
                     let { name, artist, album } = this.tracks[track];
                     //console.log(`Testing Print search`, {name, artist, album});
                     if (name.toLowerCase().search(query.toLowerCase()) !== -1
                            || artist.toLowerCase().search(query.toLowerCase()) !== -1
                            || album.toLowerCase().search(query.toLowerCase()) !== -1) {
                            console.log(this.tracks[track]);
                            found = true;
                     }
              }
              if (!found) {
                     console.log(`No Search Result for "${query}"...`);
              }
       }
}

/**----------------------TEST---------------------------- */
library.printPlaylists();
library.printTracks();
library.printPlaylist('p01');
library.addTrackToPlaylist('t03', 'p01');
library.addTrackToPlaylist('t04', 'p01');
library.addTrackToPlaylist('t03', 'p03');
library.printPlaylist('p02');
library.addTrackToPlaylist('t02', 'p02');
library.addTrack('Afterimage', 'Space Sailors', 'Tapes, Vol.2')
library.addPlaylist('Oddling');
library.printTracks();
library.printPlaylists()

library.printSearchResults('sp',);
library.printSearchResults('');
library.printSearchResults(' ');
library.printSearchResults('     ');

