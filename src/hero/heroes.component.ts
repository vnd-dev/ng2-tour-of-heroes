import {Component} from "@angular/core";
import {Hero} from "./hero";

@Component({
    selector: 'heroes-comp',
    templateUrl: './heroes.component.html'
})
export class HeroesComponent{
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    }
}