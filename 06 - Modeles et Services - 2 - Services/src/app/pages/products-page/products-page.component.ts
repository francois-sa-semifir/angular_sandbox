// Import du OnInit
import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'
// Import de nos modèles de données
import Film from '../../models/film.model';
import Album from '../../models/album.model';
// Import de nos services
import { FilmService } from '../../services/film.service';
import { AlbumService } from '../../services/album.service';

@Component({
    selector: 'app-products-page',
    imports: [ProductListComponent],
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.css'
})
// Implémentation du OnInit
export class ProductsPageComponent implements OnInit{

  // Déclaration de la liste des films
  // On ajoute un attribu films, qui contiendra un tableau d'objets de type Film
  films: Film[] = []

  // Déclaration de la liste des albums
  // La même qu'au dessus mais pour les albums
  albums: Album[] = []

  // Dans le constructeur, on ajout nos dépendences
  // Ici, ce sera nos services
  constructor(
    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

  // Dans le ngOnInit, on va créer notre souscription
  // ngOninit est un hook qui est appelé lorsque le composant est créé
  // Il est appelé une fois, et c'est là où on va créer notre souscription
  ngOnInit(): void {
    // On récupère les films : on utilise la méthode getFilms() de notre service
    // On ajoute notre souscription, et on affecte le résultat à notre tableau films
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;
    });
    // On récupère les albums : On fait tout pareil !
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
}
