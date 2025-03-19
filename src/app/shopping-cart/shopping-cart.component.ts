import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

export interface Cart {
  id: string;
  title: string;
}

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  carts = signal<Cart[]>([
    { id: '1', title: 'Apple' },
    { id: '2', title: 'Orange'}
  ]);

  selectedCart = signal<Cart | null>(null);

  selectCart(cart: Cart) {
    this.selectedCart.set(cart);
    console.log(cart);
  }
}
