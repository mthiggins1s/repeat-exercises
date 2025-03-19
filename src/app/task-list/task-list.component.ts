import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';


// You must export the data here:
export interface Task {
  id: string;
  title: string;
  description?: string; // This is optional
}

@Component({
  selector: 'app-task-list',
  imports: [CommonModule], // Make sure to add CommonModule.
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  // tasks HAS to be called in the HTML because its a FUNCTION!!
  tasks = signal<Task[]>([
    { id: 'T1', title: 'Learn Angular Signals' },
    { id: 'T2', title: 'Build a Component Library' },
    { id: 'T3', title: 'Learn @for' }
  ]);
  selectedTask = signal<Task | null>(null);

  selectTask(task: Task) {
    this.selectedTask.set(task);
    console.log(task);
  }
}
