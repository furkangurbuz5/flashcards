import { Component, inject, OnInit } from '@angular/core';
import { Deck } from '../../../model/deck.model';
import { RouterLink } from '@angular/router';
import { DeckService } from '../../../service/deck.service';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [RouterLink, AsyncPipe],
  selector: 'app-deck-list',
  styleUrl: './deck-list.scss',
  templateUrl: './deck-list.html',
})
export class DeckList implements OnInit {

  private deckService = inject(DeckService);

  decks$ = this.deckService.getDecks();

  ngOnInit(): void {
  }

}
