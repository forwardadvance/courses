// Template Variables:
// ng.common.FORM_DIRECTIVES
// <input [value]='catName' (input)="onInput($event)" />
// <input [(ngModel)]='catName' />
// <form #f="ngForm" on-submit="submit(f)">
//   <input type="text" ngControl="username" />
//   <button>Submit</button>
// </form>

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [],
    template:
    `
      {{catName}}
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      vm.catName = "Dave";
      vm.onInput = function(evt) {
        this.catName = evt.target.value;
      }
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});


// Initial state
// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [ng.common.FORM_DIRECTIVES],
//     template:
//     `

//       {{catName}}
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.catName = "Dave"
//       vm.onInput = function(evt) {
//         this.catName = evt.target.value;
//       }
//     }
//   });

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });
