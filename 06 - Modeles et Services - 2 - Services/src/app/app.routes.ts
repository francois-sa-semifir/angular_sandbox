import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const routes: Routes = [
    { path:'', redirectTo: 'home', pathMatch: 'full'},
    { path:'home', component: HomePageComponent },
    { path: 'products', component: ProductsPageComponent},
    // On va juste ajouter une route vers les types
    { path: 'products/:type', component: ProductPageComponent},
    // Puis une route vers le type ET l'ID :
    { path: 'products/:type/:id', component: ProductPageComponent},
    { path: '**', component: NotFoundComponent}
];