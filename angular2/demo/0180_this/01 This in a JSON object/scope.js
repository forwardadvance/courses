var a = "What is the value of this in the global scope?"

var car = {
  colour: "yellow",
  speed: 0,
  speedUp: function() {
    this.speed += 10;
    var that = this;
    var a = function() {
      that;
      this;
    }
    a();
  }
}

// What will the value of this when we do this?
car.speedUp();

// How about if we do this?
// var speedUp = car.speedUp;
// var speed = 0;
// speedUp();

// var bus = {
//   color: "red",
//   speed:0,
//   speedUp: car.speedUp
// }
// bus.speedUp();
