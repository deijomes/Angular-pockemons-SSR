import { Component, inject, OnInit, signal } from '@angular/core';
import { PockemonsListComponent } from "../../pockemons/components/pockemons-list/pockemons-list.component";
import { PockemonsListSkeletonComponent } from "./ui/pockemons-list-skeleton/pockemons-list-skeleton.component";
import { PockemonServiceService } from '../../pockemons/services/pockemon-service.service';
import { SimplePokemon } from '../../pockemons/interfaces/simplePockemon';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-pockemons',
  imports: [PockemonsListComponent, PockemonsListSkeletonComponent],
  templateUrl: './pockemons.component.html',
  styleUrl: './pockemons.component.css'
})
export class PockemonsComponent implements OnInit {


  private pockemonServiceS = inject(PockemonServiceService);

  public pockemon = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public currentPage = toSignal(
  this.route.queryParamMap.pipe(
    map(params => params.get('page') ?? '1'),
    map(page => isNaN(+page) ? 1 : +page),
    map(page => Math.max(1, page))
  )
);


  ngOnInit(): void {
   
    this.loadPage();

  }

  public loadPage(pagina = 0) {
    const pageLoad = this.currentPage()! + pagina;
    this.pockemonServiceS.loadPage(pageLoad).pipe(
      tap(() => {
        this.router.navigate([], {
          queryParams: { page: pageLoad }
          
        });
      })
    )
    .subscribe(
      (data) => {
        this.pockemon.set(data);
      }
    );
  }
}
