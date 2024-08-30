// import { Component } from '@angular/core';
// import { HorlogeComponent } from '../horloge/horloge.component'

// @Component({
//   selector: 'app-clock-menu',
//   standalone: true,
//   imports: [HorlogeComponent],
//   templateUrl: './clock-menu.component.html',
//   styleUrl: './clock-menu.component.css'
// })
// export class ClockMenuComponent {
//   fuseaux: string[] = [
//     'Europe/Paris',
//     'Europe/London',
//     'Europe/Helsinki',
//     'America/Los_Angeles',
//     'America/Montreal',
//   ];
//   setTime(nosFuturesDatas: string): string {
//     const date = new Date().toLocaleString('fr-FR', { timeZone: nosFuturesDatas });
//     const time = date.split(' ')[1];

//     setInterval(() => {
//       this.setTime(nosFuturesDatas);
//     }, 1000);
//     return time;
//   }

// }

import { Component, OnInit } from '@angular/core';
import { HorlogeComponent } from '../horloge/horloge.component'

@Component({
  selector: 'app-clock-menu',
  standalone: true,
  imports: [HorlogeComponent],
  templateUrl: './clock-menu.component.html',
  styleUrls: ['./clock-menu.component.css']
})
export class ClockMenuComponent implements OnInit {
  fuseaux: string[] = [
    'Europe/Paris',
    'Europe/London',
    'Europe/Helsinki',
    'America/Los_Angeles',
    'America/Montreal',
  ];

  horloges: { fuseau: string, time: string }[] = [];

  ngOnInit() {
    this.fuseaux.forEach(fuseau => {
      this.horloges.push({
        fuseau: fuseau,
        time: this.setTime(fuseau)
      });

      setInterval(() => {
        this.updateTime(fuseau);
      }, 1000);
    });
  }

  setTime(fuseau: string): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone: fuseau });
    return date.split(' ')[1];
  }

  updateTime(fuseau: string) {
    const index = this.horloges.findIndex(horloge => horloge.fuseau === fuseau);
    if (index !== -1) {
      this.horloges[index].time = this.setTime(fuseau);
    }
  }
}
