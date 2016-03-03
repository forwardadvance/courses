// <template [ngIf]="visible">
// <div *ngIf="visible">


var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <form>
        <select>
          <option value='visa' (click)="cardType='visa'">Visa</option>
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
    }
  })

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, [])
});

