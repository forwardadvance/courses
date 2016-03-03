// Template Variables:

// <form #f="ngForm" on-submit="submit(f)">
//   <input type="text" ngControl="username" />
//   <button>Submit</button>
// </form>

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [ng.common.FORM_DIRECTIVES],
    template:
    `
      <form #f="ngForm" on-submit="onSubmit(f)">
        <input type="text" ngControl="username" />
        <button>Submit</button>
      </form>
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      vm.onSubmit = function(form) {
        form
      }
      // this.username = new ng.common.Control('username')
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
