import { Component, inject, OnInit, signal } from '@angular/core';
import { PockemonServiceService } from '../../pockemons/services/pockemon-service.service';
import { PockemAPIRespons } from '../../pockemons/interfaces/pockemon-api.response';
import { Pockemon } from '../../pockemons/interfaces/pokemon';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pockemon',
  imports: [],
  templateUrl: './pockemon.component.html',
  styleUrl: './pockemon.component.css'
})
export class PockemonComponent implements OnInit {

  public pokemon = signal<Pockemon | null>(null);

  private route = inject(ActivatedRoute)

  private title = inject(Title)
  private meta = inject(Meta)


  private service = inject(PockemonServiceService)

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    this.service.getPokemon(id).pipe(
      tap(({ id, name }) => {

        const pageTitle = `#${id}-${name}`;

        this.title.setTitle(pageTitle)
        this.meta.updateTag({ name: 'og:title', content: pageTitle })
        this.meta.updateTag({ name: 'description', content: `pagina de pokemon ${name}` })
        this.meta.updateTag({ name: 'og:description', content: `pagina de pokemon ${name}` })
        this.meta.updateTag({
          name: 'og:image', content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id
       
      }.png`
        })

      })
    )
      .subscribe
      (this.pokemon.set,)

  }

}


