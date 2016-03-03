// <div *ngFor='var cheese of cheeses'>
// #cheese of cheeses
// var i = index

var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [],
    styles: [`
      li {
        clear:left;
        padding-top:20px;
      }
      img {
        float:left;
        width:100px;
      }
    `],
    template:
    `
      <ul>
        <li *ngFor="var cat of thundercats; var i = index">
          {{cat.name}} - {{cat.planet}} - {{i}}
          <img [src]="cat.image" />
        </li>
      </ul>

    `
  })
  .Class({
    constructor: function() {
      var vm = this;

      this.thundercats = [
        {
          name: "Cheetara",
          specialSkill: "speed",
          planet: "Thundera",
          image: "images/cheetara.jpg"
        },
        {
          name: "Lion-O",
          specialSkill: "Sword of Omens",
          planet: "Thundera",
          image: "images/lion-o.jpg"
        },
        {
          name: "Panthro",
          specialSkill: "Mechanical Engineering",
          planet: "Thundera",
          image: "images/panthro.jpg"
        },
        {
          name: "Jaga the Wise",
          specialSkill: "Wisdom",
          planet: "Thundera",
          image: "images/jaga.jpg"
        },
        {
          name: "Snarf",
          specialSkill: "Annoyance",
          planet: "Thundera",
          image: "images/snarf.jpg"
        },
        {
          name: "Robear Berbil",
          specialSkill: "Farming",
          planet: "Ro-Bear",
          image: "images/berbils.jpg"
        }
      ];

    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});




// this.thundercats = [
//   {
//     name: "Cheetara",
//     specialSkill: "speed",
//     planet: "Thundera",
//     image: "images/cheetara.jpg"
//   },
//   {
//     name: "Lion-O",
//     specialSkill: "Sword of Omens",
//     planet: "Thundera",
//     image: "images/lion-o.jpg"
//   },
//   {
//     name: "Panthro",
//     specialSkill: "Mechanical Engineering",
//     planet: "Thundera",
//     image: "images/panthro.jpg"
//   },
//   {
//     name: "Jaga the Wise",
//     specialSkill: "Wisdom",
//     planet: "Thundera",
//     image: "images/jaga.jpg"
//   },
//   {
//     name: "Snarf",
//     specialSkill: "Annoyance",
//     planet: "Thundera",
//     image: "images/snarf.jpg"
//   },
//   {
//     name: "Robear Berbil",
//     specialSkill: "Farming",
//     planet: "Ro-Bear",
//     image: "images/berbils.jpg"
//   }
// ];






// Initial State
// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     directives: [],
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

