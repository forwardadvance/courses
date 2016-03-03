var fnc = function() {
  this
  var inner_fnc = function() {
    this
  }
  inner_fnc();
}

fnc();

// a = {
//   b: fnc
// }
// a.b();




