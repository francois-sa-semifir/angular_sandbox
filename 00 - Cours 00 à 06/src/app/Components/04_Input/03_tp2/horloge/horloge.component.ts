import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horloge',
  standalone: true,
  imports: [],
  templateUrl: './horloge.component.html',
  styleUrl: './horloge.component.css'
})
export class HorlogeComponent {
  @Input()
  time: string = '00:00:00';
}
