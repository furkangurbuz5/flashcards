import { Flashcard } from "./flashcard.model";

export interface Deck {
    id: string;
    name: string;
    description: string;
    cardCount: number;
    creationDate: Date;
    cards: Flashcard[];
}