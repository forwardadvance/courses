(function() {

  var privateMethod = function() {

  }

  var spaceCat = {
    speed: 10000,
    favourite_activity : 'eating asteroids',
    eyes: {
      front: "blue",
      rear: "magnificent"
    },
    doZooming: function() {
      console.log(this.speed);
      privateMethod();
    }
  }

  window.spaceCat = spaceCat;
})();

var currentEye = 'front';
alert(spaceCat.eyes[currentEye]);
