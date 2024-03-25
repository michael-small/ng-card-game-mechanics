import { Card, Rank } from "src/cards";

export function handHasCard(hand: (Card | undefined)[]): boolean {
    const cardsDefined = hand.map((card) => !!card);
    return cardsDefined.includes(true);
}

export function hasPair(hand: (Card | undefined)[]): boolean {
    const numbers = hand
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
  };

  export function isFlush(hand: (Card | undefined)[]): boolean {
    let suits: (Card['suit'] | undefined)[] = [];
    hand.forEach((card) =>
      suits.push(card?.suit ? card.suit : undefined)
    );
    const uniqueSuits = [...new Set(suits)].filter(
      (suit) => suit !== undefined
    );

    return (
        uniqueSuits.length === 1 &&
        hand.filter((card): card is Card => !!card).length === 5
    );
  }