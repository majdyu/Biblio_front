export interface ITeacher {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    idNumber?: string;
    phoneNumber?: string;
}

export class Teacher implements ITeacher {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public idNumber?: string,
        public  phoneNumber?: string
    ) { }
}