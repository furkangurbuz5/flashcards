import { Service } from '@angular/core';
import { Deck } from '../model/deck.model';
import { Observable, of } from 'rxjs';

@Service()
export class DeckService {
  //TODO remove primitive obsession
  public getDeckById(id: string): Observable<Deck> {
    return of({
      id: '1',
      name: 'Mandarin Chinese',
      description: 'Common Chinese words and phrases for daily conversations.',
      cardCount: 48,
      creationDate: new Date('2025-01-12'),
      cards: [],
    });
  }

  public getDecks(): Observable<Deck[]> {
    return of([
      {
        id: '1',
        name: 'Mandarin Chinese',
        description: 'Common Chinese words and phrases for daily conversations.',
        cardCount: 48,
        creationDate: new Date('2025-01-12'),
        cards: [],
      },
    ]);
  }
}
