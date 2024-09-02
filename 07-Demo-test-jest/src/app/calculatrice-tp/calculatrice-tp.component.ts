import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculatrice-tp',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './calculatrice-tp.component.html',
  styleUrl: './calculatrice-tp.component.css'
})
export class CalculatriceTPComponent {

  input: string = '';

  numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  operators: string[] = ['+', '-', '*', '/'];

  /**
   * Permet de calculer le résultat
   * @param input v de caractère à calculer
   * @returns résultat du calcul
   */
  public calculate(): number {
    this.checkIntegrity();
    this.input = eval(this.input).toString();
    return parseFloat(this.input);
  }

  /**
   * Efface la chaîne de caractères
   */
  public clear(): void {
    this.input = '';
  }

  /**
   * Permet d'ajouter un caractère à l'input
   * @param input chaîne de caractères à ajouter
   */
  public add(input: string): void {
    this.input += input;
  }

  private checkIntegrity(): void {
    this.chekDotNumber();
  }

  private chekDotNumber(): void {
    if (this.input.includes('..')) {
      throw new Error('Nombre invalide');
    } else {
      this.input = this.input;
    }
  }
}
