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
    directives: [ng.common.FORM_DIRECTIVES],
    template:
    `
      <!--
      <input [value]="test" (input)="test=$event.target.value" />
      <input [(ngModel)]="test" />
      -->

      <form #f="ngForm" on-submit="onSubmit(f)">
        <input type="text" ngControl="username" />
        <button>Submit</button>
      </form>

      {{test}}
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      vm.test = "Dave"
      vm.onInput = function(evt) {
        this.catName = evt.target.value;
      }
      vm.onSubmit = function(f) {
        console.log(f);
      }
      // this.username = new ng.common.Control('username')
    }
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
