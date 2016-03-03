

function CheeseService() {
  this.get = function() {
    return ['Manchego', 'Cambozola', 'Stinky Bishop'];
  }
}

var OtherCheeseService = ng.core.Class({
  constructor:[function OtherCheeseService() {
    this.get = function() {
      return ['Manchego', 'Cambozola', 'Stinky Bishop'];
    }
  }]
})

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
    constructor: [
      CheeseService,
      OtherCheeseService,
      function(cheese, otherCheese) {
        this.cheeses = otherCheese.get();
      }
    ]
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
  ng.platform.browser.bootstrap(AppComponent, [CheeseService, OtherCheeseService])
});
