import { Component, input } from '@angular/core';
import { PockemonsCardComponent } from "../pockemons-card/pockemons-card.component";
import { SimplePokemon } from '../../interfaces/simplePockemon';

@Component({
  selector: 'app-pockemons-list',
  imports: [PockemonsCardComponent],
  templateUrl: './pockemons-list.component.html',
  styleUrl: './pockemons-list.component.css'
})
export class PockemonsListComponent {

  public pockemons = input.required<SimplePokemon[]>();

}
