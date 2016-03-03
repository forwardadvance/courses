import {Component} from 'angular2/core';
import {CatsService} from './cats.service';

@Component({
    selector: 'cat-list',
    template: `
      <ul>
        <li *ngFor="#cat of cats">
          {{cat.name}}
        </li>
      </ul>
    `,
    directives: [],
    providers: [CatsService]

})

export class CatListComponent {
    constructor(cats: CatsService) {
        this.cats = cats.get();
    }
}
