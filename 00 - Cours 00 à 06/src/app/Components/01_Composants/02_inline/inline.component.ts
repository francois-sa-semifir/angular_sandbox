import { Component } from '@angular/core';

@Component({
  selector: 'Coucou',
  standalone: true,
  imports: [],
  template: '<div> Hello, je suis une mauvaise pratique ! </div>',
  styles: [`
    div {
      color: red;
    }
  `]
})
export class InlineComponent {}
