import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { ContacPageComponent } from './pages/contact-page/contac-page.component';

export const routes: Routes = [
    {
        path: 'about', component: AboutPageComponent
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
