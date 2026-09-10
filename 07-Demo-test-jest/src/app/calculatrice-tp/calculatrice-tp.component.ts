import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-calculatrice-tp',
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

  // Vérification de l'intégrité de l'expression avant le calcul
  private checkIntegrity(): void {
    this.chekDotNumber();
    this.checkConsecutiveOperators();
    this.checkLeadingZero();
  }

  // Vérifie qu'il n'y a pas de double point dans un nombre
  private chekDotNumber(): void {
    if (this.input.includes('..')) {
      throw new Error('Nombre invalide');
    }
  }

  // Vérifie qu'il n'y a pas d'opérateurs consécutifs (++, --, **, //)
  private checkConsecutiveOperators(): void {
    const consecutiveOps = /[+\-*/]{2,}/;
    if (consecutiveOps.test(this.input)) {
      throw new Error('Opérateurs consécutifs');
    }
  }

  // Vérifie qu'un nombre ne commence pas par 0 (ex: 01+1)
  private checkLeadingZero(): void {
    const leadingZero = /(^|[+\-*/])0\d/;
    if (leadingZero.test(this.input)) {
      throw new Error('Nombre invalide : 0 en tête');
    }
  }
}
