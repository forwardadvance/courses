import {Component} from 'angular2/core';
import {ButtonComponent} from './app.buttonComponent';

@Component({
    selector: 'app',
    template: `
      <h1>Hello {{name}}</h1>
      <like-button></like-button>
    `,
    directives: [ButtonComponent]

})
export class AppComponent {
  name
  constructor() {
    this.name = "Mischievious Matt"
  }
}
