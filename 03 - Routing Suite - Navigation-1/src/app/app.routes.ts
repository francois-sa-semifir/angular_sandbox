import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomePageComponent},
    { path: 'products', component: ProductsPageComponent},
    // On peut ajouter la route qui redirigera vers la page de détail du produit
    // On précise ':id' pour que l'URI contienne l'id du produit
    { path: 'products/:id', component: ProductPageComponent},
    { path: '**', component: NotFoundComponent}
];