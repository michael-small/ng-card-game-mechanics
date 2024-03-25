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
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { handHasCard, hasPair, isFlush } from './hand-states';

@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-group-example.scss'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, MatButtonToggleModule, JsonPipe, UpperCasePipe],
})
export class CdkDragDropConnectedSortingGroupExample {
  c1 = signal<Card | undefined>(undefined);
  c2 = signal<Card | undefined>(undefined);
  c3 = signal<Card | undefined>(undefined);
  c4 = signal<Card | undefined>(undefined);
  c5 = signal<Card | undefined>(undefined);

  heartsEl = viewChild.required<MatButtonToggleGroup>('hearts');

  handHasCard = computed(() => handHasCard(this.hand()));
  isFlush = computed(() => isFlush(this.hand()));
  hasPair = computed(() => hasPair(this.hand()))

  constructor() {
    effect(() => 
      console.log(this.heartsEl())
    )
  }

  log(suit: Suit, rank: Rank) {
    console.log(this.heartsEl().value)
    const selectedCard = Cards.Hearts.find((card) => card.rank === rank && card.suit === 'heart')
    this.c1.set(selectedCard)
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

  drop(event: CdkDragDrop<Card[] | undefined>) {
    moveItemInArray(this.hand(), event.previousIndex, event.currentIndex);
  }
}
