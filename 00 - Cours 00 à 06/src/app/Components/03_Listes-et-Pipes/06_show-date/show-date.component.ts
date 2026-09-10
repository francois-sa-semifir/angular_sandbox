import { Component } from '@angular/core';
// Import du pipe DatePipe pour formater les dates dans le template
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-show-date',
    imports: [DatePipe],
    templateUrl: './show-date.component.html',
    styleUrl: './show-date.component.css'
})
export class ShowDateComponent {
  today: Date = new Date();
}
