// bind an expression
// bind an attribute on the class
// vm variable
// Live binding - setInterval, zones

// bind to a function on the class
// functions should not have side effects

var AppComponent = ng.core
  .Component({
    selector: "app",
    template:`
      {{catName}}
      <br />
      age: {{catAge}}
      alive: {{isAlive()}}
    `
  })
  .Class({
    constructor: function() {
      // var catName = "abc";
      var vm = this;
      vm.catName = "Molly";
      vm.catAge = 1;
      vm.isAlive = isAlive;
      setInterval(function() {
        vm.catAge++;
        console.log(this);
      }, 100);
    }
  });


function isAlive() {
  // vm.catName = "Dolly";
  return this.catAge < 15;
}

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});


