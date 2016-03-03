
// (click)="onClick()">
// (keyup)="onChange($event)"
// (submit)

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <a on-click="handleClick($event)">Click</a>
      <br />
      <input on-input="value = $event.target.value" />
      {{value}}

      <form on-submit="submitted = true">
        <input />
        <button>submit</button>
        <button>submit</button>
        {{submitted}}
      </form>
    `
  })
  .Class({
    constructor: function() {
      this.handleClick = function(evt) {
        console.log('clicked');
      }
      this.handleInput = function(evt) {
        console.log(evt);
        this.value = evt.target.value;
      }
    }
  })


document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});







// Initial State

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {

//     }
//   })


// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });


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
