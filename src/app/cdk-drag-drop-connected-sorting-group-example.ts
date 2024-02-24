import { Component, ElementRef, ViewChild, computed, effect, inject, signal, viewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Card, Cards, Rank, Suit } from 'src/cards';
import { SetHandService } from './set-hand.service';
import { MatButtonToggleGroup, MatButtonToggleModule } from '@angular/material/button-toggle'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-group-example.scss'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, MatButtonToggleModule, JsonPipe],
})
export class CdkDragDropConnectedSortingGroupExample {
  c1 = signal<Card | undefined>(undefined);
  c2 = signal<Card | undefined>(undefined);
  c3 = signal<Card | undefined>(undefined);
  c4 = signal<Card | undefined>(undefined);
  c5 = signal<Card | undefined>(undefined);

  @ViewChild('hearts')
  heartsElOld!: MatButtonToggleGroup;

  heartsEl = viewChild.required<MatButtonToggleGroup>('hearts');

  constructor() {
    effect(() => 
      console.log(this.heartsEl())
    )
  }

  log() {
    console.log(this.heartsEl().value)
    console.log(this.heartsElOld.value)
  }

  ranks: Rank[] = ['ace'
    , 'two'
    , 'three'
    , 'four'
    , 'five'
    , 'six'
    , 'seven'
    , 'eight'
    , 'nine'
    , 'ten'
    , 'jack'
    , 'queen'
    , 'king'
  ]

  suits: Suit[] = ['club', 'diamond', 'heart', 'spade']

  hand = computed(() => [
    this.c1(),
    this.c2(),
    this.c3(),
    this.c4(),
    this.c5(),
  ]);

  public setHandService = inject(SetHandService);

  drawPile = signal<Card[]>([]);

  handHasCard = computed(() => {
    const cardsDefined = this.hand().map((card) => !!card);
    return cardsDefined.includes(true);
  });

  addCard(card: 'c1' | 'c2' | 'c3' | 'c4' | 'c5') {
    switch (card) {
      case 'c1':
        this.c1.set(Cards.DiamondTwo);
        break;
      case 'c2':
        this.c2.set(Cards.HeartsThree);
        break;
      case 'c3':
        this.c3.set(Cards.SpadesFour);
        break;
      case 'c4':
        this.c4.set(Cards.ClubFive);
        break;
      case 'c5':
        this.c5.set(Cards.DiamondSix);
        break;
    }
  }

  isFlush = computed(() => {
    let suits: (Card['suit'] | undefined)[] = [];
    this.hand().forEach((card) =>
      suits.push(card?.suit ? card.suit : undefined)
    );
    const uniqueSuits = [...new Set(suits)].filter(
      (suit) => suit !== undefined
    );

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
