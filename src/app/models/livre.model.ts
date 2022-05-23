export interface ILivre {
    id?: number;
    name?: string;
    author?: string;
    category?: string;
    theme?:string;
    isBorrowed?: boolean;
}

export class Livre {

    constructor(
        public id?: number,
        public name?: string,
        public author?: string,
        public category?: string,
        public theme?:string,
        public isBorrowed?: boolean
    ) { }
}