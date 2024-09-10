// Import du décorateur 'Component'
import { Component } from '@angular/core';
// Directive de routage qui détermine où les composants associés à une route seront affichés.
import { RouterOutlet } from '@angular/router';

import { PremierComposantComponent } from './Components/01_Composants/01_premier-composant/premier-composant.component';
import { InlineComponent } from './Components/01_Composants/02_inline/inline.component';
import { UserComponent } from './Components/02_Bindings/01_user/user.component';
import { CarteVisiteComponent } from './Components/02_Bindings/02_carte-visite/carte-visite.component';
import { AlertButtonComponent } from './Components/02_Bindings/03_alert-button/alert-button.component';
import { ListeComponent } from './Components/03_Listes-et-Pipes/01_liste/liste.component'
import { MagieComponent } from './Components/03_Listes-et-Pipes/02_magie/magie.component'
import { ListeFiltreComponent } from './Components/03_Listes-et-Pipes/03_liste-filtre/liste-filtre.component'
import { HidderComponent } from './Components/03_Listes-et-Pipes/04_tp1/hidder/hidder.component'
import { UserCardsComponent } from './Components/03_Listes-et-Pipes/04_tp1/user-cards/user-cards.component'
import { ShowDateComponent } from './Components/03_Listes-et-Pipes/05_show-date/show-date.component'
import { GenericAlertButtonComponent } from './Components/04_Input/01_generic-alert-button/generic-alert-button.component'
import { ButtonMenuComponent } from './Components/04_Input/02_button-menu/button-menu.component'
import { ClockMenuComponent } from './Components/04_Input/03_tp2/clock-menu/clock-menu.component'
import { ListeCoursesComponent } from './Components/05_Formulaires/01_liste-courses/liste-courses.component'
import { ReactiveListeCoursesComponent } from './Components/05_Formulaires/02_reactive-liste-courses/reactive-liste-courses.component'
import { ReactiveListeCoursesValidatorsComponent } from './Components/05_Formulaires/03_reactive-liste-courses-validators/reactive-liste-courses-validators.component'
import { FormbuilderListeCoursesComponent } from './Components/05_Formulaires/04_formbuilder-liste-courses/formbuilder-liste-courses.component'
import { UserFormComponent } from './Components/05_Formulaires/05_tp3/user-form/user-form.component'
import { UserFormArrayComponent } from './Components/05_Formulaires/06_user-form-array/user-form-array.component'
import { DataCoursesComponent } from './Components/06_Output/Output-Liste-Course/data-courses/data-courses.component'

// Appel du décorateur @Component.
// C'est lui qui nous permet de préciser que notre classe est un composant. 
@Component({
  // On lui indiquera le nom que l'on donnera au 'sélecteur'. 
  // Le sélecteur est le nom de la balise avec laquelle on doit appeler notre composant
  // Ici, ce serait <app-root></app-root>
  selector: 'app-root',
  // indique que le composant est autonome et n'a pas besoin d'être inclus dans un NgModule.
  standalone: true,
  // utilisé pour inclure les dépendances nécessaires à ce composant autonome,
  // permettant ainsi son fonctionnement correct.
  imports: [
    RouterOutlet,
    PremierComposantComponent,
    InlineComponent,
    UserComponent,
    CarteVisiteComponent,
    AlertButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreComponent,
    HidderComponent,
    UserCardsComponent,
    ShowDateComponent,
    GenericAlertButtonComponent,
    ButtonMenuComponent,
    ClockMenuComponent,
    ListeCoursesComponent,
    ReactiveListeCoursesComponent,
    ReactiveListeCoursesValidatorsComponent,
    FormbuilderListeCoursesComponent,
    UserFormComponent,
    UserFormArrayComponent,
    DataCoursesComponent,
  ],
  // Le templateUrl nous permet d'aller récupérer le fichier html correspondant
  templateUrl: './app.component.html',
  // StyleUrls nous permet de récupérer la feuille de style de notre composant
  // Il s'agit bien d'un tableau, ce qui implique que l'on puisse avoir plusieurs feuilles de style.
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-sandbox';
}
