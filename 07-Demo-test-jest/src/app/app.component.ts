import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { CalculatriceTPComponent } from './calculatrice-tp/calculatrice-tp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CalculatriceComponent,
    CalculatriceTPComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '07-Demo-test-jest';
}
