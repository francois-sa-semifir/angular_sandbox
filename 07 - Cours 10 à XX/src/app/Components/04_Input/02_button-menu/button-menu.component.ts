import { Component } from '@angular/core';
import { GenericAlertButtonComponent } from '../01_generic-alert-button/generic-alert-button.component'

@Component({
  selector: 'app-button-menu',
  standalone: true,
  imports: [GenericAlertButtonComponent],
  templateUrl: './button-menu.component.html',
  styleUrl: './button-menu.component.css'
})
export class ButtonMenuComponent {
  buttons: any[] = [
    {
      buttonTitle: 'Marco',
      alertMessage: 'Polo !',
    },
    {
      buttonTitle: 'Toto',
      alertMessage: 'Tata !',
    }
  ];
}
