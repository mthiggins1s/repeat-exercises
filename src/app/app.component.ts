import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from "./task-list/task-list.component";
import { FavoriteBooksComponent } from "./favorite-books/favorite-books.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { FavoriteGamesComponent } from "./favorite-games/favorite-games.component";
import { DrinkListComponent } from "./drink-list/drink-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListComponent, FavoriteBooksComponent, ShoppingCartComponent, FavoriteGamesComponent, DrinkListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'repeat-exercises';
}
