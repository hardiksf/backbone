
//extend() returns js constructor function
const Song = Backbone.Model.extend({
    //initialize is automatically called by bb when object(Song) is instantiated
    initialize: function(){
        console.log(`A new song has been created`)
    }
}); 

const song = new Song();