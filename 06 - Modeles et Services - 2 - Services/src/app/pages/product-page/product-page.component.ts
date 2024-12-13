// Import du OnInit
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Avec le refacto on supprime l'import de `ProductsPageComponent`
import { ProductDetailsComponent } from './product-details/product-details.component';
// Import de nos modèles de données
import Film from '../../models/film.model';
import Album from '../../models/album.model';
// Import de nos services
import { FilmService } from '../../services/film.service';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductDetailsComponent
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {

  // Déclaration de la variable produit
  // On indique qu'il peut être de type Film ou Album
  product!: Film | Album;

  // Ajout des dépendences, ici, nos services ainsi que le router
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

// Ici, on déclare une méthode pour souscrire à un film

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

// On fait la même pour les albums

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

  // On créé un méthode pour définir à quel observable on souscrit.
  //Album ou film ?

  /**
   * Permet d'appeller la bonne souscription en fonction du type de produit
   * @param type Le type de l'objet
   * @param id id de l'objet
   */
  private setSuscribe(type: string | null, id: string | null): void {
    //   Si l'objet contient album, on souscrit à un album
    if (type === 'films' && id) {
        // En appellant la méthode qu'on a créé plus tôt
        // Le fait d'ajotuer '+' devant ID nous permet de le caster en number
        // En effet, par défaut c'est un string
      this.subscribeFilm(+id);
    } else if (type === 'albums' && id) {
        // On fait la même pour films
      this.subscribeAlbum(+id);
    } else {
        // Et on ajoute une redirection vers 404 si un param est manquant
      this.router.navigate(['/not-found']);
    }
  }

  ngOnInit(): void {
    // On récupère la partie 'type' de l'url
    const type = this.route.snapshot.paramMap.get('type');
    // On stock la partie 'ID' de l'url
    const id = this.route.snapshot.paramMap.get('id');
    // Et on appelle notre méthode en lui passant les infos
    this.setSuscribe(type, id);
  }
}