import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  };

  onSelect(hero: Hero): void {

    this.selectedHero = hero;
  }
}
