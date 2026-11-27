//TODO check if spaced repetition needs specific data per card, or if the card needs to hold this data. 

export interface Flashcard {
    id: string;
    name: string;
    front: CardDetail;
    back: CardDetail;
}

interface CardDetail{
    content: string;
    show: boolean;
}
