import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export default class CounterPageComponent {
  counter = signal(10);
  squareCounter = computed( () => this.counter() * this.counter() );

  increaseBy(value: number) {
    this.counter.update( current => current + value );
  }
}