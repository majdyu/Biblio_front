import { Etudiant } from "./etudiant.model";
import { Livre } from "./livre.model";

export interface IEmprunt {
    id?: number;
    start?: any;
    end?: any;
    livre?: Livre;
    student?: Etudiant;

}

export class Emprunt implements IEmprunt {
    constructor(
        public id?: number,
        public start?: any,
        public end?: any,
        public livre?: Livre,
        public student?: Etudiant
    ) { }
}