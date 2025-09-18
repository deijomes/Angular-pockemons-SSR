import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { ContacPageComponent } from './pages/contact-page/contac-page.component';
import { PockemonsComponent } from './pages/pockemons/pockemons.component';
import { PockemonComponent } from './pages/pockemon/pockemon.component';

export const routes: Routes = [
    {
        path: 'about', component: AboutPageComponent
    },
    {
        path: 'pockemon/:id', component: PockemonComponent
    },
    {
        path: 'pockemons', component: PockemonsComponent
    },
    {
        path: 'pricing', component: PricingPageComponent
    },
    {
        path: 'contact', component: ContacPageComponent
    },
    {
        path: '**', redirectTo: ()=> {
            return 'about';
        }
    }
];
