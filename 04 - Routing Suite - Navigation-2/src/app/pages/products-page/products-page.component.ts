import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

  films: any[] = [
    {
      id: 1,
      nom: "La cité de la peur",
      real: "Alain Berbérian",
      synopsis: "Odile Deray, attachée de presse, vient au Festival de Cannes pour présenter le film `Red is Dead'. Malheureusement, celui-ci est d'une telle faiblesse que personne ne souhaite en faire l'écho. Cependant, lorsque les projectionnistes du long-métrage en question meurent chacun leur tour dans d'étranges circonstances, `Red is dead' bénéficie d'une incroyable publicité. Serge Karamazov est alors chargé de protéger le nouveau projectionniste du film.",
      annee: 1994,
      img: "https://fr.web.img2.acsta.net/pictures/19/05/03/14/30/1132544.jpg",
      details: ""
    },
    {
      id: 2,
      nom: "Le parrain",
      real: "Francis Ford Coppola",
      synopsis: "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain' de cette famille, marie sa fille à un bookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse. Sonny, un de ses fils, y est quant à lui favorable. Afin de traiter avec Sonny, Sollozzo tente de faire tuer Don Vito, mais celui-ci en réchappe.",
      annee: 1972,
      img: "",
      details: ""
    },
    {
      id: 3,
      nom: "Fight Club",
      real: "David Fincher",
      synopsis: "Pourvu d'une situation des plus enviable, un jeune homme à bout de nerfs retrouve un équilibre relatif en compagnie de Marla, rencontrée dans un groupe d'entraide. Il fait également la connaissance de Tyler Durden, personnage enthousiaste et charismatique. Ensemble, ils fondent le Fight Club, où ils organisent des combats clandestins et violents, destinés à évacuer l'énergie négative de chacun.",
      annee: 1999,
      img: "",
      details: ""
    }
  ]

  albums: any[] = [
    {
      id: 4,
      nom: "The Dark Side of the Moon",
      artiste: "Pink Floyd",
      annee: 1973,
      img: "",
      details: ""
    },
    {
      id: 5,
      nom: "Space Oddity",
      artiste: "David Bowie",
      annee: 1969,
      img: "",
      details: ""
    }
  ]
}
