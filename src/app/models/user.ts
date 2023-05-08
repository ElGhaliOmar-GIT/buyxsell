import { CodePromo } from "./codePromo";


export class User {
    id: number;
    firstName: string;
    lastName: string;
    photo: string;
    phoneNumber: number;
    username: string;
    password: string;
    isActive: boolean;
    accountStatus: AccountStatus;
    promoCode: CodePromo[];
  }

  export enum AccountStatus {
    Online = 'Online',
    Away = 'Away',
    Offline = 'Offline'
  }
