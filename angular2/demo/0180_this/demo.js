//This
// This in the global scope
// This in a function
// This in an object (and out of it)
// This in a closure
// This with apply
// That

$(function() {
  var a = {
    b: function() {
      $('a').click(function() {
        alert(this.c);
        // alert(that.c);
      });
    },
    c: "Hello"
  }
  a.b();

});


Initial state:


// $(function() {
//   var a = {
//     b: function() {
//       $('a').click(function() {
//         alert(this.c);
//         // alert(that.c);
//       });
//     },
//     c: "Hello"
//   }
//   a.b();

// });
