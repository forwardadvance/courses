var LikeButtonComponent = ng.core
  .Component({
    selector: "like",
    events: ["liked"],
    template:
    `
      <a (click)="handleClick()">
        Like?
      </a>
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      vm.liked = new ng.core.EventEmitter();
      vm.handleClick = function() {
        console.log('clicked');
        vm.liked.next();
      }
    }
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [LikeButtonComponent],
    template:
    `
      <like on-liked="handleLike()"></like>
      {{message}}
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      this.handleLike = function() {
        this.message = "Thanks for liking us"
      }
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
