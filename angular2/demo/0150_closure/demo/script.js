// Closure
// Lambda
// assigned to variable
// variables have function level scope
// variables are global without var




// (function() {
//   var a = 16;
//   var innerFnc = function() {
//     alert(a);
//   }
//   window.returnedFnc = innerFnc;
// })();



// returnedFnc();



var myFnc = function() {
  var a = 16;
  var innerFnc = function() {
    alert(a++);
  }
  return innerFnc;
}

returnedFnc = myFnc();
returnedFnc2 = myFnc();

returnedFnc()
returnedFnc()
returnedFnc2()
returnedFnc()



























// var outer = function() {
//   var a = 12;
//   var inner = function() {
//     alert(a);
//   }
//   return inner;
// }

// var fnc = outer();
// fnc();
