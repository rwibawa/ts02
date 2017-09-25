import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
  private heroesUrl = 'api/heroes';

  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    const url = `${this.heroesUrl}/?name=${term}`;
    return this.http.get(url).map(response => response.json().data as Hero[]);
  }

}
