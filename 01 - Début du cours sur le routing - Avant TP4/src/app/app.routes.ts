import { Routes } from '@angular/router';
// Import des composants pour le routing
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';

export const routes: Routes = [
    // On indique que tous les chemins 'vides' seront renvoyés vers l'URI '/home'
    { path:'', redirectTo: 'home', pathMatch: 'full'},
    // On indique que l'URI '/home' correspond au composant HomePageComponent
    // Il doit être importé au préalable (plus haut)
    { path:'home', component: HomePageComponent },
    // Idem pour l'URI '/products'
    { path: 'products', component: ProductsPageComponent},
    // Puis, que TOUTES LES AUTRES URI qui ne sont pas trouvées...
    // ...on les redirige vers le composant NotFoundComponent
    { path: '**', component: NotFoundComponent}
];