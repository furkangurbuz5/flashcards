//TODO check if spaced repetition data is needed

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
