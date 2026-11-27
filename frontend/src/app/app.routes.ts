import { Routes } from '@angular/router';
import { DeckList } from './components/deck/deck-list/deck-list';
import { DeckDetail } from './components/deck/deck-detail/deck-detail';

export const routes: Routes = [
    {
        title: "Deck",
        path: "",
        redirectTo: "decks",
        pathMatch: "full"
    },
    {
        title: "Deck",
        path: "decks",
        component: DeckList
    },
    {
        title: "Details",
        path: "deck/:id",
        component: DeckDetail
    }
];
