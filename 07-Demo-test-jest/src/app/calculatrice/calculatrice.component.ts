import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-calculatrice',
    imports: [MatButtonModule],
    templateUrl: './calculatrice.component.html',
    styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {

  input: string = ''

  numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  operators: string[] = ['+', '-', '*', '/'];

  /**
   * Permet de calculer le résultat
   * @param input chaîne de caractère à calculer
   * @returns résultat du calcul
   */
  public calculate(): number {
    this.input = eval(this.input).toString();
    return parseFloat(this.input);
  }

  /**
   * Efface la chaîne de caractère
   */
  public clear(): void {
    this.input = ''
  }

  /**
   * Permet d'ajouter un caractère à l'input
   * @param input chaîne de caractère à ajouter
   */
  public add(input: string): void {
    this.input += input
  }
}
