var test = "cats";

var myFunc = function() {
  alert(this.test);
}

// myFunc();

var myObj = {
  test:"cucumbers"
}

myFunc.apply(myObj,[]);














// Control the value of this
