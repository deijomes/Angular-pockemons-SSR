import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contac-page',
  imports: [],
  templateUrl: './contac-page.component.html',
  styleUrl: './contac-page.component.css'
})
export class ContacPageComponent  implements OnInit {

   private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('contact - Pockemons');
    this.meta.updateTag({ name: 'description', content: ' Este es mi contact - Pockemons page' });
    this.meta.updateTag({ name: 'keywords', content: 'pockemons, contact, page, angular, pro ' });
  }


}
