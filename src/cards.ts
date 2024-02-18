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
  static HeartsTwo: Card = { rank: 'two', suit: 'heart', points: 2 };
  static HeartsThree: Card = { rank: 'three', suit: 'heart', points: 3 };
  static HeartsFour: Card = { rank: 'four', suit: 'heart', points: 4 };
  static HeartsFive: Card = { rank: 'five', suit: 'heart', points: 5 };
  static HeartsSix: Card = { rank: 'six', suit: 'heart', points: 6 };
  static HeartsSeven: Card = { rank: 'seven', suit: 'heart', points: 7 };
  static HeartsEight: Card = { rank: 'eight', suit: 'heart', points: 8 };
  static HeartsNine: Card = { rank: 'nine', suit: 'heart', points: 9 };
  static HeartsTen: Card = { rank: 'ten', suit: 'heart', points: 10 };
  static HeartsJack: Card = { rank: 'jack', suit: 'heart', points: 10 };
  static HeartsQueen: Card = { rank: 'queen', suit: 'heart', points: 10 };
  static HeartsKing: Card = { rank: 'king', suit: 'heart', points: 10 };
  static HeartsAce: Card = { rank: 'ace', suit: 'heart', points: 10 };

  static Hearts: Card[] = [
    this.HeartsTwo,
    this.HeartsThree,
    this.HeartsFour,
    this.HeartsFive,
    this.HeartsSix,
    this.HeartsSeven,
    this.HeartsEight,
    this.HeartsNine,
    this.HeartsTen,
    this.HeartsJack,
    this.HeartsQueen,
    this.HeartsKing,
    this.HeartsAce
  ];

  static ClubTwo: Card = { rank: 'two', suit: 'club', points: 2 };
  static ClubThree: Card = { rank: 'three', suit: 'club', points: 3 };
  static ClubFour: Card = { rank: 'four', suit: 'club', points: 4 };
  static ClubFive: Card = { rank: 'five', suit: 'club', points: 5 };
  static ClubSix: Card = { rank: 'six', suit: 'club', points: 6 };
  static ClubSeven: Card = { rank: 'seven', suit: 'club', points: 7 };
  static ClubEight: Card = { rank: 'eight', suit: 'club', points: 8 };
  static ClubNine: Card = { rank: 'nine', suit: 'club', points: 9 };
  static ClubTen: Card = { rank: 'ten', suit: 'club', points: 10 };
  static ClubJack: Card = { rank: 'jack', suit: 'club', points: 10 };
  static ClubQueen: Card = { rank: 'queen', suit: 'club', points: 10 };
  static ClubKing: Card = { rank: 'king', suit: 'club', points: 10 };
  static ClubAce: Card = { rank: 'ace', suit: 'club', points: 10 };

  static Club: Card[] = [
    this.ClubTwo,
    this.ClubThree,
    this.ClubFour,
    this.ClubFive,
    this.ClubSix,
    this.ClubSeven,
    this.ClubEight,
    this.ClubNine,
    this.ClubTen,
    this.ClubJack,
    this.ClubQueen,
    this.ClubKing,
    this.ClubAce
  ]

  static DiamondTwo: Card = { rank: 'two', suit: 'diamond', points: 2 };
  static DiamondThree: Card = { rank: 'three', suit: 'diamond', points: 3 };
  static DiamondFour: Card = { rank: 'four', suit: 'diamond', points: 4 };
  static DiamondFive: Card = { rank: 'five', suit: 'diamond', points: 5 };
  static DiamondSix: Card = { rank: 'six', suit: 'diamond', points: 6 };
  static DiamondSeven: Card = { rank: 'seven', suit: 'diamond', points: 7 };
  static DiamondEight: Card = { rank: 'eight', suit: 'diamond', points: 8 };
  static DiamondNine: Card = { rank: 'nine', suit: 'diamond', points: 9 };
  static DiamondTen: Card = { rank: 'ten', suit: 'diamond', points: 10 };
  static DiamondJack: Card = { rank: 'jack', suit: 'diamond', points: 10 };
  static DiamondQueen: Card = { rank: 'queen', suit: 'diamond', points: 10 };
  static DiamondKing: Card = { rank: 'king', suit: 'diamond', points: 10 };
  static DiamondAce: Card = { rank: 'ace', suit: 'diamond', points: 10 };

  static Diamond: Card[] = [
    this.DiamondTwo,
    this.DiamondThree,
    this.DiamondFour,
    this.DiamondFive,
    this.DiamondSix,
    this.DiamondSeven,
    this.DiamondEight,
    this.DiamondNine,
    this.DiamondTen,
    this.DiamondJack,
    this.DiamondQueen,
    this.DiamondKing,
    this.DiamondAce
  ];

  static SpadesTwo: Card = { rank: 'two', suit: 'spade', points: 2 };
  static SpadesThree: Card = { rank: 'three', suit: 'spade', points: 3 };
  static SpadesFour: Card = { rank: 'four', suit: 'spade', points: 4 };
  static SpadesFive: Card = { rank: 'five', suit: 'spade', points: 5 };
  static SpadesSix: Card = { rank: 'six', suit: 'spade', points: 6 };
  static SpadesSeven: Card = { rank: 'seven', suit: 'spade', points: 7 };
  static SpadesEight: Card = { rank: 'eight', suit: 'spade', points: 8 };
  static SpadesNine: Card = { rank: 'nine', suit: 'spade', points: 9 };
  static SpadesTen: Card = { rank: 'ten', suit: 'spade', points: 10 };
  static SpadesJack: Card = { rank: 'jack', suit: 'spade', points: 10 };
  static SpadesQueen: Card = { rank: 'queen', suit: 'spade', points: 10 };
  static SpadesKing: Card = { rank: 'king', suit: 'spade', points: 10 };
  static SpadesAce: Card = { rank: 'ace', suit: 'spade', points: 10 };

  static Spade: Card[] = [
    this.SpadesTwo,
    this.SpadesThree,
    this.SpadesFour,
    this.SpadesFive,
    this.SpadesSix,
    this.SpadesSeven,
    this.SpadesEight,
    this.SpadesNine,
    this.SpadesTen,
    this.SpadesJack,
    this.SpadesQueen,
    this.SpadesKing,
    this.SpadesAce
  ];
}
