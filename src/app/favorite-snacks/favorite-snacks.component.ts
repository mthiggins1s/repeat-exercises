import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

export interface Snacks {
  id: string;
  item: string;
  description :string;
}

@Component({
  selector: 'app-favorite-snacks',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './favorite-snacks.component.html',
  styleUrl: './favorite-snacks.component.css'
})
export class FavoriteSnacksComponent {
  snacks = signal<Snacks[]>([
    { id: 'S1', item: 'Doritos', description: 'I love doritos' },
    { id: 'S2', item: 'Fritos', description: 'I love fritos' },
    { id: 'S3', item: 'Funyuns', description: 'I love funyuns' }
  ]);

  selectedSnacks = signal<Snacks | null>(null);

  selectSnacks(snack: Snacks) {
    this.selectedSnacks.set(snack);
    console.log(snack);
  }
}
