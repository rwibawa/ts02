import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private heroesUrl = 'api/heroes'; // url to web api

  constructor(private http: Http) { }

  handleError(error: any): any {
    console.error('An error occurred', error); // for demo purpose only
    return Promise.reject(error.message || error);
  }

  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES); // get HEROES from './mock-heroes.ts'
    return this.http.get(this.heroesUrl).toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    // return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);

  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers}).toPromise()
            .then(() => hero)
            .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http.post(
        this.heroesUrl,
        JSON.stringify({name: name}),
        {headers: this.headers}
      ).toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers}).toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
