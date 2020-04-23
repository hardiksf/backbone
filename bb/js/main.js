
//extend() returns js constructor function
const Song = Backbone.Model.extend({
    defaults: {
        publisher: "unknown publisher"
    },
    //initialize is automatically called by bb when object(Song) is instantiated
    initialize: function () {
        console.log(`A new song has been created`)
    },
    validate: attribute => {
        if (!attribute.title)
            return "Title is required";
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

const thirdSong = new Song();

//isValid()
console.log(`isValid()`, thirdSong.isValid()); //false

//validationError
console.log(`validationError`, thirdSong.validationError); //validationError Title is required

const Animal = Backbone.Model.extend({
    walk: () => {
        return "Animal walks..";
    }
});

//Inheritance, extend()
const Dog = Animal.extend();

const dog = new Dog();
console.log(dog.walk())

const Cat = Animal.extend({
    walk: () => {
        const walkFromAnimal = Animal.prototype.walk.apply(this);
        const catWalks = "Cat walks..";
        return { walkFromAnimal, catWalks };
    }
});
const cat = new Cat();
console.log(cat.walk())

// Create a Backbone model for a Vehicle. A Vehicle is uniquely identified via one of its attributes called “registrationNumber”, which cannot be null or undefined.
const Vehicle = Backbone.Model.extend({


    // Vehicles can be retrieved from the server at “/api/vehicles”.
    urlRoot: "/api/vehicles",

    validate: attribute => {
        if (!attribute.registrationNumber)
            return `registrationNumber is required`;
    },

    // A Vehicle should have a method called start(), which logs a message in the console: “Vehicle started.”
    start: () => {
        return `Vehicle started`;
    }
});
const car = new Vehicle();
console.log(`is car valid`, car.isValid());
console.log(`car.start()`, car.start({
    start: () => {
        return `Car with registration number ${this.registrationNumber} started`;
    }
}));

// Derive a Backbone model from the Vehicle and call it Car.
const Car = Vehicle.extend();
const myCar = new Car({
    registrationNumber: "XLI887",
    color: "Blue"
});
console.log(`is myCar valid`, myCar.isValid());
console.log(`myCar.start():`, myCar.start());

// Collections

// Creating Collection
const Songs = Backbone.Collection.extend({
    mode: Song
});

// instantiating Collection
// const songs = new Songs();

const songs = new Songs([
    new Song({
        title: "song's Title",
        artist: "Artist Name",
        publishedYear: 2000
    }),
    new Song({
        title: "Another song's Title",
        artist: "Another Artist Name",
        publishedYear: 2002
    })
]);

songs.add(new Song({
    title: "Yet Another song's Title",
    artist: "Yet Another Artist Name",
    publishedYear: 2005
}));

console.log(`songs:`, songs);
console.log(`first model in songs collection:`, songs.at(0));
console.log(`get collection by cid - bb created cid for`, songs.get(`c8`));

// Remove a Collection
songs.remove(songs.get(`c8`));
console.log(`songs after removing by cid`, songs);

songs.remove(songs.at(0));
console.log(`songs after removing at index`, songs);
