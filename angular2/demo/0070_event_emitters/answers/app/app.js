// events: ["select"],
// inputs: ["profile"],
// vm.select = new ng.core.EventEmitter();
// vm.select.next(vm.profile);



// var LikeButtonComponent = ng.core
//   .Component({
//     selector: "like",
//     events: ['like'],
//     template:
//     `
//       <a on-click="handleClick()">Like?</a>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.like = new ng.core.EventEmitter();
//       vm.value = {title:"hello"}
//       vm.handleClick = function() {
//         vm.like.next(vm.value);
//       }
//     }
//   })

var UserDisplayComponent = ng.core
  .Component({
    selector: "user",
    inputs: ['profile'],
    events: ['selected'],
    template:
    `
      <div>
        {{profile.name}}
        <a on-click="selectUser()">select</a>
      </div>
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      vm.selected = new ng.core.EventEmitter();
      vm.selectUser = function() {
        vm.selected.emit(vm.profile);
      }
    }
  })

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [UserDisplayComponent],
    template:
    `
      <user bind-profile="{name:'tom'}" on-selected="setSelectedUser($event)"></user>
      <user [profile]="{name:'dick'}" (selected)="setSelectedUser($event)"></user>
      <user [profile]="{name:'marigold'}" on-selected="setSelectedUser($event)"></user>

      <h1>Selected User</h1>
      <user [profile]="selectedUser"></user>
    `
  })
  .Class({
    constructor: function() {
      var vm = this;
      vm.selectedUser = {}
      vm.setSelectedUser = function(user) {
        vm.selectedUser = user;
      }
    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});









// initial state
// var UserDisplayComponent = ng.core
//   .Component({
//     selector: "user",
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [UserDisplayComponent],
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });











// Goal State
// var UserDisplayComponent = ng.core
//   .Component({
//     selector: "user",
//     template:
//     `
//       <div>
//         {{profile | json}}
//         <a (click)="onSelect()">
//           Select
//         </a>
//       </div>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.select = new ng.core.EventEmitter();
//       vm.onSelect = function() {
//         // console.log('selected', vm.profile);
//         vm.select.next(vm.profile);
//       }
//     }
//   })

// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [UserDisplayComponent],
//     template:
//     `
//       <user bind-profile="{name:'dave'}" on-select="setEditing($event)"></user>
//       <user bind-profile="{name:'martha'}" on-select="setEditing($event)"></user>
//       <p>
//         Currently Selected:
//         <user bind-profile="profile"></user>
//       </p>
//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       this.setEditing = function(profile) {
//         console.log(profile)
//         vm.profile = profile
//       }
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });
