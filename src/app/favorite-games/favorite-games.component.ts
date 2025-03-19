import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

export interface Games {
  id: string;
  title: string;
  rating: string;
}

@Component({
  selector: 'app-favorite-games',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './favorite-games.component.html',
  styleUrl: './favorite-games.component.css'
})
export class FavoriteGamesComponent {
  games = signal<Games[]>([
    { id: 'T1', title: 'Minecraft', rating: '5 Stars out of 5 Stars' },
    { id: 'T2', title: 'CS2', rating: '4 Stars out of 4 Stars' }
  ]);

  selectedGame = signal<Games | null>(null);

  selectGame(game: Games) {
    this.selectedGame.set(game);
    console.log(game);
  }
}
