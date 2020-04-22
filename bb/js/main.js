
//extend() returns js constructor function
const Song = Backbone.Model.extend({
    defaults: {
        publisher: "unknown publisher"
    },
    //initialize is automatically called by bb when object(Song) is instantiated
    initialize: function () {
        console.log(`A new song has been created`)
    }
});

const song = new Song();

//Setting attributes
song.set("title", "Song's Title");
song.set({
    "artist": "Artist Name",
    "publishedYear": 2001,
    "publisher": "Publisher Name"
})
console.log(`song:`, song.toJSON());
//Set attributes when initializing model object
const anotherSong = new Song({
    title: "Another song's Title",
    artist: "Another Artist Name",
    publishedYear: 2002
});

console.log(`anotherSong's JSON representation:`, anotherSong.toJSON());

//get
console.log(`get method:`, anotherSong.get("title"));

//has
console.log(`has():`, anotherSong.has("title"));

//unset
anotherSong.unset("title");
console.log(`After un-setting title:`, anotherSong.toJSON());

//remove all attribute - clear()
anotherSong.clear();
console.log(`After clear():`, anotherSong.toJSON());
