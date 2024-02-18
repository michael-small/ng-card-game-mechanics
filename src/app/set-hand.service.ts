import { Injectable, Signal, WritableSignal } from '@angular/core';
import { Card, Cards } from 'src/cards';

@Injectable({
  providedIn: 'root'
})
export class SetHandService {

  setFlush(
    hand: Signal<(Card | undefined)[]>,
    c1: WritableSignal<Card | undefined>,
    c2: WritableSignal<Card | undefined>,
    c3: WritableSignal<Card | undefined>,
    c4: WritableSignal<Card | undefined>,
    c5: WritableSignal<Card | undefined>) {
    hand().forEach((card, i) => {
      switch (i) {
        case 0:
          c1.set(Cards.DiamondTwo);
          break;
        case 1:
          c2.set(Cards.DiamondThree);
          break;
        case 2:
          c3.set(Cards.DiamondFour);
          break;
        case 3:
          c4.set(Cards.DiamondFive);
          break;
        case 4:
          c5.set(Cards.DiamondSix);
          break;
      }
    });
  }

  setPair(
    hand: Signal<(Card | undefined)[]>,
    c1: WritableSignal<Card | undefined>,
    c2: WritableSignal<Card | undefined>) {
    hand().forEach((card, i) => {
      switch (i) {
        case 0:
          c1.set(Cards.DiamondTwo);
          break;
        case 1:
          c2.set(Cards.ClubTwo);
          break;
      }
    });
  }

  constructor() { }
}
