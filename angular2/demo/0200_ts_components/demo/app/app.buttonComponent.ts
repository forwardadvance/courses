import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
  selector: 'like-button',
  events: ['like'],
  template: `
    <button>Like!!</button>
  `
})
export class ButtonComponent {
  like: EventEmitter
  constructor() {
    this.like = new EventEmitter();
    this.like.emit();
  }
}
