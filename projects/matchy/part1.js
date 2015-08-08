// Use this file to implement Part One of your project
//Object literal

var animal = {};
    animal = {
    species: "mammalia"}
console.log(animal.species);
animal["tagline"] = "what it do";
console.log(animal.tagline);

animal.noises = null
console.log(animal.noises);

var noiseArray = []
noiseArray[0] = 'roar';
noiseArray.push('boo');
noiseArray.unshift('hwoooooo');
noiseArray[noiseArray.length] = 'meow';
console.log(noiseArray.length);
console.log(noiseArray.length-1);
console.log(noiseArray);

var noises = 'noises';
console.log(animal[noises]);
animal[noises] = noiseArray;
console.log(animal);

var animals = [];

animals.push(animal);
console.log(animals);
var quackers = {species : 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'squeeze', 'growl']};
animals.unshift(quackers);
console.log(animals);

var friendly = {
    species : 'whales',
    tagline: 'hey',
    noises: ['aaa', 'bbb', 'ccc', 'ddd']};
console.log(animals.length);
    
// 3a Create a friendslist
var friends = [];













 
 




