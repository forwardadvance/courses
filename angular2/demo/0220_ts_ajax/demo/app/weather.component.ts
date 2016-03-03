import {Component} from 'angular2/core';
import {WeatherService} from './weather.service';

@Component({
    selector: 'weather',
    template: `
      <pre>{{weather | json}}</pre>
    `,
    directives: [],
    providers: [WeatherService]

})
export class WeatherComponent {
  constructor(weather: WeatherService) {
    var vm = this;
    weather.get()
      .subscribe(function(response) {
        vm.weather = response.json()
      })
  }
}
