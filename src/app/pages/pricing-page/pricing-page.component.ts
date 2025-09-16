import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css'
})
export class PricingPageComponent  implements OnInit {

   private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('pricing - Pockemons');
    this.meta.updateTag({ name: 'description', content: ' Este es mi pricing - Pockemons page' });
    this.meta.updateTag({ name: 'keywords', content: 'pockemons, pricing, page, angular, pro ' });
  }


}
