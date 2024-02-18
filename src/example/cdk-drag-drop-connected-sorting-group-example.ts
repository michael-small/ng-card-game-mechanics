import { Component, computed, signal } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Card, Points, Rank } from 'src/cards';

@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
})
export class CdkDragDropConnectedSortingGroupExample {
  c1 = signal<Card | undefined>(undefined);
  c2 = signal<Card | undefined>(undefined);
  c3 = signal<Card | undefined>(undefined);
  c4 = signal<Card | undefined>(undefined);
  c5 = signal<Card | undefined>(undefined);

  hand = computed(() => [
    this.c1(),
    this.c2(),
    this.c3(),
    this.c4(),
    this.c5(),
  ]);

  drawPile = signal<Card[]>([]);

  handHasCard = computed(() => {
    const cardsDefined = this.hand().map((card) => !!card);
    return cardsDefined.includes(true);
  });

  addCard(card: 'c1' | 'c2' | 'c3' | 'c4' | 'c5') {
    switch (card) {
      case 'c1':
        this.c1.set({ rank: 'two', points: 2, suit: 'diamond' });
        break;
      case 'c2':
        this.c2.set({ rank: 'three', points: 3, suit: 'heart' });
        break;
      case 'c3':
        this.c3.set({ rank: 'four', points: 4, suit: 'spade' });
        break;
      case 'c4':
        this.c4.set({ rank: 'five', points: 5, suit: 'club' });
        break;
      case 'c5':
        this.c5.set({ rank: 'six', points: 6, suit: 'diamond' });
        break;
    }
  }

  setFlush() {
    this.hand().forEach((card, i) => {
      switch (i) {
        case 0:
          this.c1.set({ rank: 'two', points: 2, suit: 'diamond' });
          break;
        case 1:
          this.c2.set({ rank: 'three', points: 3, suit: 'diamond' });
          break;
        case 2:
          this.c3.set({ rank: 'four', points: 4, suit: 'diamond' });
          break;
        case 3:
          this.c4.set({ rank: 'five', points: 5, suit: 'diamond' });
          break;
        case 4:
          this.c5.set({ rank: 'six', points: 6, suit: 'diamond' });
          break;
      }
    });
  }

  setPair() {
    this.hand().forEach((card, i) => {
      switch (i) {
        case 0:
          this.c1.set({ rank: 'two', points: 2, suit: 'diamond' });
          break;
        case 1:
          this.c2.set({ rank: 'two', points: 2, suit: 'club' });
          break;
      }
    });
  }

  isFlush = computed(() => {
    let suits: (Card['suit'] | undefined)[] = [];
    this.hand().forEach((card) =>
      suits.push(card?.suit ? card.suit : undefined)
    );
    const uniqueSuits = [...new Set(suits)].filter(
      (suit) => suit !== undefined
    );

    console.log();

    return (
      uniqueSuits.length === 1 &&
      this.hand().filter((card): card is Card => !!card).length === 5
    );
  });

  hasPair = computed(() => {
    const numbers = this.hand()
      .map((card) => card?.rank)
      .filter((num): num is Rank => num !== undefined);
    let duplicates: Rank[] = [];
    for (let i in numbers) {
      for (let j in numbers) {
        if (numbers[i] === numbers[j] && i !== j) {
          // Check if the found duplicate is already in the duplicates numbers
          if (!duplicates.includes(numbers[i])) {
            duplicates.push(numbers[i]);
            break; // To avoid adding the same duplicate multiple times
          }
        }
      }
    }
    return duplicates.length > 0;
  });

  drop(event: CdkDragDrop<Card[] | undefined>) {
    moveItemInArray(this.hand(), event.previousIndex, event.currentIndex);
  }
}
