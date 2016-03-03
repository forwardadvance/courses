// <template [ngIf]="visible">
// <div *ngIf="visible">


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <form>
        <select (input)="selectCard($event)" [value]="cardType">
          <option value='visa'>Visa</option>
          <option value='mastercard'>Mastercard</option>
        </select>
        {{cardType}}
        <div>
          <label>Start Date:</label><input type='date' />
        </div>
        <div>
          <label>End Date:</label><input type='date' />
        </div>
        <div>
          <label>CVC:</label><input type='number' />
        </div>
        <button>Purchase the Cheese</button>
      </form>

    `,
  })
  .Class({
    constructor: function() {
      this.visible = true;
      this.cardType = 'mastercard';
      this.selectCard = function(evt) {
        this.cardType = evt.target.value;
      }

    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});
