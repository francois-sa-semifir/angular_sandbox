import { Component } from '@angular/core';
// Import du FormsModule pour utiliser un formulaire
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo',
    imports: [FormsModule],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css'
})

export class TodoComponent {
  // Liste des tâches
  tasks: { title: string, completed: boolean }[] = [
    { title: 'Apprendre les bases d\'Angular', completed: false },
    { title: 'Créer un exercice pratique', completed: false },
    { title: 'Présenter les types de bindings', completed: true }
  ];

  // Nouvelle tâche (pour le two-way binding)
  newTask: string = '';

  // Fonction pour ajouter une tâche
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = ''; // Réinitialise le champ
    }
  }

  // Fonction pour changer l'état de la tâche
  toggleTaskCompletion(task: { title: string, completed: boolean }) {
    task.completed = !task.completed;
  }
}
