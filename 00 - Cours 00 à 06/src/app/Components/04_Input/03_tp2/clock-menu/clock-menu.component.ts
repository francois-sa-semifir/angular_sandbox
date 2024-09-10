import { Component } from '@angular/core';
import { HorlogeComponent } from '../horloge/horloge.component'

@Component({
  selector: 'app-clock-menu',
  standalone: true,
  imports: [HorlogeComponent],
  templateUrl: './clock-menu.component.html',
  styleUrl: './clock-menu.component.css'
})
// Liste des timezones disponibles
// On pourra toujours en ajouter autant qu'on le souhaite sans avoir à modifier notre composant.
// NB : Dans un vrai projet, les datas ne sont pas codées en dur comme ça, mais sont récupérées via un service sur une API
export class ClockMenuComponent {
  fuseaux: string[] = [
    'Europe/Paris',
    'Europe/London',
    'Europe/Helsinki',
    'America/Los_Angeles',
    'America/Montreal',
  ];

  // /!\ Par soucis de clareté on déclare en paramètre de `setTime()` `nosFuturesDatas` pour 
  // Bien montrer comment génériser la fonction.
  // Nous passerons les données dans le HTML en remplaçant le paramètre de la fonction
    setTime(nosFuturesDatas: string): string {
    // Récupération de l'heure actuelle dans la timezone sélectionnée grâce à la méthode
    // .toLocaleString()
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    const date = new Date().toLocaleString('fr-FR', { timeZone: nosFuturesDatas });
    // Une fois traité par la ligne au dessus, l'objet date ressemble à ça :
    // 06/05/2022 14:00:00 
    // On utilise split pour séparer les différentes parties de la date avec le caractère 'espace' comme délimiteur.
    // On affiche ensuite que l'heure, ce qui correspond à l'index [1] du tableau ainsi généré.

    // la méthode `.split()` coupe une chaîne de caractères et pousse les parties dans un tableau
    // Elle peut prendre 2 paramètres : 
    // le premier sera le délimiteur qui découpera la chaîne en autant de morceaux qu'il sera présent (lui-même ne sera pas le tableau)
    // le second l'index que l'on souhaiterait récupérer
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split

    const time = date.split(' ')[1];

    // Partie supplémentaire qui permet de mettre à jour l'horloge à chaque seconde
    // C'est pas la meilleure manière de faire, mais ça reste OK.
    setInterval(() => {
      this.setTime(nosFuturesDatas);
    }, 1000);
    return time;
  }

}

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// --- AUTRE VERSION DU CODE QUI NE PROVOQUE PAS D'ERREUR DANS LA CONSOLE ---
// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

// import { Component, OnInit } from '@angular/core';
// import { HorlogeComponent } from '../horloge/horloge.component'

// @Component({
//   selector: 'app-clock-menu',
//   standalone: true,
//   imports: [HorlogeComponent],
//   templateUrl: './clock-menu.component.html',
//   styleUrls: ['./clock-menu.component.css']
// })
// export class ClockMenuComponent implements OnInit {
//   fuseaux: string[] = [
//     'Europe/Paris',
//     'Europe/London',
//     'Europe/Helsinki',
//     'America/Los_Angeles',
//     'America/Montreal',
//   ];

//   horloges: { fuseau: string, time: string }[] = [];

//   ngOnInit() {
//     this.fuseaux.forEach(fuseau => {
//       this.horloges.push({
//         fuseau: fuseau,
//         time: this.setTime(fuseau)
//       });

//       setInterval(() => {
//         this.updateTime(fuseau);
//       }, 1000);
//     });
//   }

//   setTime(fuseau: string): string {
//     const date = new Date().toLocaleString('fr-FR', { timeZone: fuseau });
//     return date.split(' ')[1];
//   }

//   updateTime(fuseau: string) {
//     const index = this.horloges.findIndex(horloge => horloge.fuseau === fuseau);
//     if (index !== -1) {
//       this.horloges[index].time = this.setTime(fuseau);
//     }
//   }
// }
