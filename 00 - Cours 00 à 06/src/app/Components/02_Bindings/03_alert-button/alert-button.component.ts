import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  standalone: true,
  imports: [],
  templateUrl: './alert-button.component.html',
  styleUrl: './alert-button.component.css'
})
export class AlertButtonComponent {
  // Ajout de la méthode 'onClick()' dans la classe
  onClick() {
    alert("TU AS TOUT CASSÉ !");
  }
}
