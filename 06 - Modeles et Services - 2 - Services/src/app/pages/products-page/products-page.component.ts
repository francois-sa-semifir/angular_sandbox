import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'
import Film from '../../models/film.model';
import Album from '../../models/album.model';
import { FilmService } from '../../services/film.service';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})

export class ProductsPageComponent implements OnInit{

  films: Film[] = []

  albums: Album[] = []

  constructor(
    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;
    });

    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }
}
