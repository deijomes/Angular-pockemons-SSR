import { Component, computed, effect, inject, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces/simplePockemon';
import { RouterLink } from '@angular/router';
import { PockemonServiceService } from '../../services/pockemon-service.service';


@Component({
  selector: 'app-pockemons-card',
  imports: [RouterLink],
  templateUrl: './pockemons-card.component.html',
  styleUrl: './pockemons-card.component.css'
})
export class PockemonsCardComponent {

  

  public pockemon = input.required<SimplePokemon>();
  
    public readonly pokemonImage = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        this.pockemon().id
      }.png`
  );

  /*logEffect = effect(() => {
    console.log('pockemon cambió a: ', this.pockemon());
  });*/

}
