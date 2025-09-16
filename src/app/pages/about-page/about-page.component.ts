import { Component, inject, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit {


  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About - Pockemons');
    this.meta.updateTag({ name: 'description', content: ' Este es mi About - Pockemons page' });
    this.meta.updateTag({ name: 'keywords', content: 'pockemons, about, page, angular, pro ' });
  }


}
