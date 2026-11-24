import { Component, OnInit } from '@angular/core';
import { Deck } from '../../../model/deck.model';

export const testDecks: Deck[] = [
  {
    id: "1",
    name: "Mandarin Chinese",
    description: "Common Chinese words and phrases for daily conversations.",
    cardCount: 48,
    creationDate: new Date("2025-01-12"),
  }
];


@Component({
  imports: [],
  selector: 'app-deck-list',
  styleUrl: './deck-list.scss',
  templateUrl: './deck-list.html',
})
export class DeckList implements OnInit{

  decks: Deck[] = testDecks;

  ngOnInit(): void {
  }

}
