// Inheritance

// * JavaScript has no classes, objects inherit from other objects
// * Classes give us constructor functions and inheritance
// * Constructor function
// * This is the object under construction

// * Prototypical Inheritance
// * Inherit from a plain JSON Object using prototype
// * Inherit from an object created by a constructor using prototype
// * __proto__ get and set
// * Object.getPrototypeOf(y),
// * super with this.__proto__

// * Object.create(parent)

// Composition
// * Composition and a decorator pattern

// var hamster = {
//   noise: "squeek"
// }

var hamtaro = {}

hamtaro.__proto__ = hamster
console.log(hamtaro);

// var mammal = {breathe:'air', breed: true}

var Hamster = function Hamster() {
  this.noise = "squeek";
}
Hamster.prototype = mammal;

hamtaro = new Hamster();

// console.log(hamtaro);


hamster = {}

var colourDecorator = function(obj, colour) {
  obj.colour = colour;
}

colourDecorator(hamster, 'green');

// console.log(hamster)

Hamster = {
  noise: "squeek"
}

var hammy = Object.create(Hamster)







// a = {b: 2}
// b = {}
// b.__proto__ = a

// X = function() {}
// X.prototype = a
// x = new X();
// console.log(x.b);

// X = function() {
//   this.__proto__ = a
// }
// x = new X();
// console.log(x.b);

// Object.getPrototypeOf(x)
// c = Object.create(a)






// console.log(b.b)


// var Food = function() {
//   this.eat = function() {}
// }

// var Cake = function() {
//   this.taste = 'lovely';
//   this.__proto__ = new Food();
// }

// var cake = new Cake();

// cake

// var cakes = {
//   flavour: 'tasty',
//   chips: {
//     chocolate: 12
//   },
//   eatMe: function() {

//   }
// };
// var a = 'chips'
// alert(cakes[a]['chocolate']);

// var fnc = function() {}

// fnc['abc'] = 456;
// alert(fnc.abc);
