import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
=======

import  { Hero } from './hero';
import { HEROES } from './mock-heroes';
>>>>>>> commit

@Injectable()
export class HeroService {

<<<<<<< HEAD
  private heroesUrl = 'api/heroes';  // URL to weh api
  private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data as Hero[])
                .catch(this.handleError);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
                .toPromise()
                .then(response => response.json().data as Hero)
                .catch(this.handleError);
    }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
=======
  getHeroes(): Hero[] {
    return HEROES;
>>>>>>> commit
  }
}
