import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsPageComponent } from '../products-page/products-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import Film from '../../models/film.model';
import Album from '../../models/album.model';
import { FilmService } from '../../services/film.service';
import { AlbumService } from '../../services/album.service';


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductsPageComponent,
    ProductDetailsComponent
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {

  product!: Film | Album;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

  /**
   * Permet de souscrire à un film spécifique
   * @param id L'id du film
   */
  private subscribeFilm(id: number): void {
    // On souscrit à un film et 
    this.filmService.getFilm(id).subscribe({
      // Et on affecte le résultat à notre variable produit
      next: (film) => this.product = film,
      error: (err) => console.error('Error loading film:', err)
    });
  }

  /**
   * Permet de souscrire à un album spécifique
   * @param id L'id de l'album
   */
  private subscribeAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe({
      next: (album) => this.product = album,
      error: (err) => console.error('Error loading album:', err)
    });
  }

  /**
   * Permet d'appeller la bonne souscription en fonction du type de produit
   * @param type Le type de l'objet
   * @param id id de l'objet
   */
  private setSuscribe(type: string | null, id: string | null): void {

    if (type === 'films' && id) {
      this.subscribeFilm(+id);
    } else if (type === 'albums' && id) {
      this.subscribeAlbum(+id);
    } else {
      this.router.navigate(['/not-found']);
    }
  }

  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.setSuscribe(type, id);
  }
}