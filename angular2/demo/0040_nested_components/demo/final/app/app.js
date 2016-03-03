// directives: [LikeButtonComponent],

var CatComponent = ng.core
  .Component({
    selector: "cat",
    template:
    `
      Tiddles the Cat
    `
  })
  .Class({
    constructor: function() {

    }
  })


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <cat></cat>
      <cat></cat>
      <cat></cat>
      <cat></cat>
    `,
    directives: [CatComponent]
  })
  .Class({
    constructor: function() {

    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});










// Initial State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     // events: ["liked"],
//     template:
//     `
//       <a (click)="handleClick()">
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       // vm.liked = new ng.core.EventEmitter();
//       vm.handleClick = function() {
//         console.log('clicked');
//       //   vm.liked.next();
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like></like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       // this.handleLike = function() {
//       //   this.message = "Thanks for liking us"
//       // }
//     }
//   })
//
// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });



// Final State
// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     events: ["liked"],
//     template:
//     `
//       <a (click)="handleClick()">
//         Like?
//       </a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.liked = new ng.core.EventEmitter();
//       vm.handleClick = function() {
//         console.log('clicked');
//         vm.liked.next();
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [LikeButtonComponent],
//     template:
//     `
//       <like on-liked="handleLike()">Hello</like>
//       {{message}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       // this.handleLike = function() {
//       //   this.message = "Thanks for liking us"
//       // }
//     }
//   })



// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });
