export interface ILivre {
    id?: number;
    name?: string;
    author?: string;
    category?: string;
    isBorrowed?: boolean;
}

export class Livre {

    constructor(
        public id?: number,
        public name?: string,
        public author?: string,
        public category?: string,
        public isBorrowed?: boolean
    ) { }
}