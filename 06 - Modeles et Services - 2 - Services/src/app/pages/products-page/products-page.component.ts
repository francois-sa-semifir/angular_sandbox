// Import du inject et resource — plus besoin de OnInit ni de constructor DI
import { Component, inject, resource } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'
// Import de nos modèles de données
import Film from '../../models/film.model';
import Album from '../../models/album.model';
// Import de nos services
import { FilmService } from '../../services/film.service';
import { AlbumService } from '../../services/album.service';
// Import de firstValueFrom pour convertir Observable → Promise
import { firstValueFrom } from 'rxjs';

@Component({
    selector: 'app-products-page',
    imports: [ProductListComponent],
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.css'
})
// Plus besoin d'implémenter OnInit : resource() gère le chargement automatiquement
export class ProductsPageComponent {

  // inject() remplace le constructeur DI
  // On injecte nos services directement dans les propriétés
  private filmService = inject(FilmService);
  private albumService = inject(AlbumService);

  // resource() remplace ngOnInit + .subscribe()
  // Le loader retourne une Promise (via firstValueFrom qui convertit l'Observable)
  // resource() gère automatiquement le cycle de vie : chargement, erreur, annulation
  filmsResource = resource<Film[], void>({
    loader: async () => firstValueFrom(this.filmService.getFilms()),
    defaultValue: [],
  });

  // Pareil pour les albums
  albumsResource = resource<Album[], void>({
    loader: async () => firstValueFrom(this.albumService.getAlbums()),
    defaultValue: [],
  });

  // Accès aux données via .value() — c'est un signal !
  // On expose des getters pour garder une API simple dans le template
  get films(): Film[] {
    return this.filmsResource.value();
  }

  get albums(): Album[] {
    return this.albumsResource.value();
  }
}
