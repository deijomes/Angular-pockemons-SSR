import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PockemAPIRespons } from '../interfaces/pockemon-api.response';
import { map, Observable, tap } from 'rxjs';
import { SimplePokemon } from '../interfaces/simplePockemon';
import { Pockemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PockemonServiceService {

  http = inject(HttpClient);

  loadPage(pagina: number): Observable<SimplePokemon[]> {

    if (pagina != 0) {
      pagina = (pagina - 1) * 20;
    }

    pagina = Math.max(0, pagina);

    return this.http.get<PockemAPIRespons>(`https://pokeapi.co/api/v2/pokemon?offset=${pagina}&limit=20`).
      pipe(
        map(resp => {

          const pokemons: SimplePokemon[] = resp.results.map((poke, index) => {

            const id = poke.url.split('/')[poke.url.split('/').length - 2];
            return {
              name: poke.name,
              id: id
            };
          });
          return pokemons;
        }),
        tap(console.log)



      );


  }

  public getPokemon(id: string) {
  return this.http.get<Pockemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

}
