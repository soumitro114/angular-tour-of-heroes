import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const heroes = [
    {id: 2, name: 'second name'},
    {id: 3, name: 'third name'},
    {id: 4, name: 'fourth name'},
    {id: 5, name: 'fifth name'},
    {id: 6, name: 'sixth name'},
    {id: 7, name: 'seventh name'},
    {id: 8, name: 'eighth name'},
    {id: 9, name: 'ninth name'},
    ];
    return {heroes}
  }
  genID(heroes: Hero[]): number
  {
    return heroes.length> 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
