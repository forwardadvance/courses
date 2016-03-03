var MarioWorld = function() {
  var mario = {
    name: "Mario",
    description:"Small and jumpy. Likes princesses.",
    height: 10,
    weight:3,
    speed:12
  }
  var bowser = {
    name: "Bowser",
    description:"Big and green, Hates princesses.",
    height: 16,
    weight: 6,
    speed: 4,
    boost: 0
  }
  this.characters = [mario, bowser]
  this.boss_battle = function(character1, character2) {
    if (mario.speed > bowser.speed + bowser.boost) {
      alert("Mario has escaped")
    } else {
      alert("Bowser has stomped all over Mario")
    }
  }
}

var MarioPlayerSelectComponent = ng.core
  .Component({
    selector: "player-select",
    events: ['select'],
    template:
    `
      <select (input)="handleSelect($event)">
        <option *ngFor="#character of characters; var i=index" [value]='i'>
          {{character.name}}
        </option>
      </select>
    `
  })
  .Class({
    constructor: [
      MarioWorld,
      function(marioWorld) {
        this.select = new ng.core.EventEmitter()
        this.characters = marioWorld.characters;
        this.handleSelect = function(evt) {
          console.log(evt)
          this.select.emit({
            id: evt.target.value,
            character: this.characters[evt.target.value]
          })
        }
      }
    ]
  });


var MarioComponent = ng.core
  .Component({
    selector: "mario",
    directives: [MarioPlayerSelectComponent],
    template:`

      <h1>Mario World</h1>
      <player-select on-select='player1=$event.character'></player-select>{{player1?.name}}
      <player-select on-select='player2=$event.character'></player-select>{{player2?.name}}
      <button (click)="winner = fight()">
    `
  })
  .Class({
    constructor: [
      MarioWorld,
      function(marioWorld) {
        this.characters = marioWorld.characters;
        this.fight = marioWorld.boss_battle
      }
    ]
  });


var AppComponent = ng.core
  .Component({
    selector: "app",
    directives: [MarioComponent],
    template:
    `
      <mario></mario>
    `
  })
  .Class({
    constructor: function() {
    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [MarioWorld])
});
