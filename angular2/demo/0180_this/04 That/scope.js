$(function() {

  var a = {
    b: function() {
      var that = this;
      $('a').click(function() {

        alert(that.c);
      });
    },
    c: "Hello"
  }
  a.b();

});

// var c = "Hello from the global";

// Initial state
// $(function() {

//   var a = {
//     b: function() {
//       $('a').click(function() {
//         alert(this.c);
//       });
//     },
//     c: "Hello"
//   }
//   a.b();

// });
