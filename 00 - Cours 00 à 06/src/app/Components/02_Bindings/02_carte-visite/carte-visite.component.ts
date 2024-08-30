import { Component } from '@angular/core';
// à importer pour la 2eme partie de la démo
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  // à déclarer pour la 2eme partie de la démo
  imports: [FormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrl: './carte-visite.component.css'
})
export class CarteVisiteComponent {
  user: any = {
    name: "Leanne Graham",
    age: 25,
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
}
