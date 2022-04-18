export interface IEtudiant {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    idNumber?: string;

}

export class Etudiant implements IEtudiant {
    constructor(
        public id?: number,
        public  firstName?: string,
        public   lastName?: string,
        public  email?: string,
        public  idNumber?: string,
    ) {}
}