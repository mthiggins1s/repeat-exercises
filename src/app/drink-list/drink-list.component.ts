import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

export interface Drinks {
  id: string;
  item: string;
  description?: string;
}

@Component({
  selector: 'app-drink-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './drink-list.component.html',
  styleUrl: './drink-list.component.css'
})
export class DrinkListComponent {
  drinks = signal<Drinks[]>([
    {id: 'D1', item: 'Coke', description: 'this is a coke'},
    {id: 'D2', item: 'Pepsi', description: 'this is a pepsi'}
  ]);

  selectedDrinks = signal<Drinks | null>(null);

  selectDrinks(drinks:Drinks){
    this.selectedDrinks.set(drinks);
    console.log(drinks);
  }
}
