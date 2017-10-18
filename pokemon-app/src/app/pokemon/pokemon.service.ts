import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

  results: any = {};

  constructor(private _http: Http) { }

  getPokemons() {
    const url = 'http://pokeapi.co/api/v2/pokemon/2/';
    return this._http.get(url)
    .map((res: Response) => res.json());
  }
}


