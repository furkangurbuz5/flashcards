import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from '../../../service/deck.service';
import { Observable } from 'rxjs';
import { Deck } from '../../../model/deck.model';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-deck-detail',
  styleUrl: './deck-detail.scss',
  templateUrl: './deck-detail.html',
})
export class DeckDetail implements OnInit {
  private deckService = inject(DeckService)

  protected id = input.required<string>();

  protected deck$ = new Observable<Deck>();

  ngOnInit(): void {
    this.deck$ = this.deckService.getDeckById(this.id());
  }
}
