import { Component } from '@angular/core';
import { UserCardsComponent } from "../user-cards/user-cards.component";

@Component({
    selector: 'app-hidder',
    standalone: true,
    imports: [UserCardsComponent],
    templateUrl: './hidder.component.html',
    styleUrl: './hidder.component.css'
})
export class HidderComponent {
  hidden: boolean = true;

  toggle() {
    this.hidden = !this.hidden;
  }
}
