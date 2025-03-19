import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../task-list/task-list.component';

export interface Book {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-favorite-books',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './favorite-books.component.html',
  styleUrl: './favorite-books.component.css'
})
export class FavoriteBooksComponent {
  books =  signal<Book[]>([
    { id: 'T1', title: 'Hunger Games', description: 'Im Hungry' },
    { id: '2', title: 'Harry Potter', description: 'This guy should shave'}
  ]);
  selectedBook = signal<Book | null>(null);

  selectBook(book: Book) {
    this.selectedBook.set(book);
    console.log(book);
  }
}