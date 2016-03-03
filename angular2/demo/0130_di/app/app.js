


var CheeseService = function() {
  this.get = function() {
    return ['Manchego', 'Camberzola', 'Stinky Bishop'];
  }
}

var CheeseComponent = ng.core
  .Component({
    selector: "cat",
    template:
    `
      <div *ngFor="#cheese of cheeses">
        {{cheese}}
      </div>
    `
  })
  .Class({
    constructor: [CheeseService, function(cheese) {
      // console.log(service)
      this.cheeses = cheese.get();
    }]
  });


var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [CheeseComponent],
    template:
    `
      <div>app: {{content}}</div>
      <cat></cat>
      <dog></dog>
    `
  })
  .Class({
    constructor: function() {
    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [CheeseService])
});

