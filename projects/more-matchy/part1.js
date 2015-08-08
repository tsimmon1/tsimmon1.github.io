//Use this file to implement Part One of your project
var cars = { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }


var animal;
function welcomeMessage (obj) { 
    return "Welcome," + obj.species;

}
console.log(welcomeMessage (cars));


function profileData (obj) {
   return " species,: " +   obj.species + " tagline " +   obj.tagline;
   
}
console.log(profileData (cars));