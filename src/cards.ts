export type Rank =
  | 'ace'
  | 'two'
  | 'three'
  | 'four'
  | 'five'
  | 'six'
  | 'seven'
  | 'eight'
  | 'nine'
  | 'ten'
  | 'jack'
  | 'queen'
  | 'king';

export type Points = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type Suit = 'club' | 'diamond' | 'heart' | 'spade' | undefined;

export type Card = {
  rank: Rank;
  points: Points;
  suit: Suit;
};

export class Cards {
  static Hearts: Card[] = [{ rank: 'two', suit: 'heart', points: 2 }];
  static Club: Card[] = [{ rank: 'two', suit: 'club', points: 2 }];
  static Diamond: Card[] = [{ rank: 'two', suit: 'diamond', points: 2 }];
  static Spade: Card[] = [{ rank: 'two', suit: 'spade', points: 2 }];
}
