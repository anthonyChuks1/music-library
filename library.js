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
       }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function (library) {
       console.log("\n");
       for (let playlist in library.playlists) {
              let count = 0;
              library.playlists[playlist].tracks.forEach(track => {
                     count = count + 1;
              });
              console.log(`${playlist}: ${library.playlists[playlist].name} - ${count} tracks`);
       }

};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function (library) {
       console.log("\n");
       for (let track in library.tracks) {
              console.log(`${track} : ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`);
       }
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function (playlistId, library) {
       console.log("\n");
       let countTracks = 0;
       library.playlists[playlistId].tracks.forEach(element => {


              countTracks = countTracks + 1;


       });

       console.log(`${playlistId}: ${library.playlists[playlistId].name} - ${countTracks} tracks`);

       library.playlists[playlistId].tracks.forEach(element => {
              let { id, name, artist, album } = library.tracks[element];
              console.log(`${id}: ${name} by ${artist} (${album})`);
       });

};


// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId, library) {
       console.log("\n");
       if (library.tracks[trackId] && library.playlists[playlistId]) {
              library.playlists[playlistId].tracks.push(trackId);
              console.log(`--Added ${trackId} to ${playlistId}--`);
              printPlaylist(playlistId, library);
       } else {

              console.log(`Cannot add ${trackId} to ${playlistId}...\nPlease use an already available track and playlist.`);
              if (!(library.tracks[trackId])) {
                     printPlaylist(playlistId, library);
              } else if (!(library.playlists[playlistId])) {
                     console.log(`Cannot display ${playlistId} Playlist.. It does not exist`);
              }
       }

};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function (name, artist, album) {

};


// adds a playlist to the library
const addPlaylist = function (name) {

};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

};

/**----------------------TEST---------------------------- */
printPlaylists(library);
printTracks(library);
printPlaylist('p01', library);
addTrackToPlaylist('t03', 'p01', library);
addTrackToPlaylist('t04', 'p01', library);
addTrackToPlaylist('t03', 'p03', library);
printPlaylist('p02', library);
addTrackToPlaylist('t02', 'p02', library);


