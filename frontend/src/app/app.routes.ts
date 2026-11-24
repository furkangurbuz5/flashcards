import { Routes } from '@angular/router';
import { DeckList } from './components/deck/deck-list/deck-list';

export const routes: Routes = [
    {
        title: "Deck",
        path: "decks",
        component: DeckList
    }
];
