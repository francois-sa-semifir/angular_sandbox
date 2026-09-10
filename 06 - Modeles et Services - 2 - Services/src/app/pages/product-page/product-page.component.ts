// Import de inject et resource — plus de OnInit
import { Component, inject, resource, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
// Import de nos modèles de données
import Film from '../../models/film.model';
import Album from '../../models/album.model';
// Import de nos services
import { FilmService } from '../../services/film.service';
import { AlbumService } from '../../services/album.service';
// Import de firstValueFrom pour convertir Observable → Promise
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-product-page',
    imports: [
        ProductDetailsComponent
    ],
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  // inject() remplace le constructeur DI
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);
  private albumService = inject(AlbumService);

  // On récupère les paramètres de la route
  private type = this.route.snapshot.paramMap.get('type');
  private id = this.route.snapshot.paramMap.get('id');

  // resource() pour charger le produit
  // Le loader détermine quel service appeler en fonction du type
  productResource = resource<Film | Album | null, void>({
    loader: async () => {
      if (this.type === 'films' && this.id) {
        return firstValueFrom(this.filmService.getFilm(+this.id));
      } else if (this.type === 'albums' && this.id) {
        return firstValueFrom(this.albumService.getAlbum(+this.id));
      } else {
        // Redirection vers 404 si un param est manquant
        this.router.navigate(['/not-found']);
        return null;
      }
    },
    defaultValue: null,
  });

  // Getter pour accéder au produit dans le template
  get product(): Film | Album | null {
    return this.productResource.value();
  }
}