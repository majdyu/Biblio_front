export interface IManagerUser {
    login?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    activated?: boolean
}

export class ManagerUser implements IManagerUser {
    constructor(
        public login?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public password?: string,
        public activated?: boolean

    ){}
}

