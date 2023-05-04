import { Blog } from "./blog";
import { Shop } from "./shop";
import {AccountStatus, User} from "./user";

export class Supplier extends User{
    /*id: number;
    firstName: string;
    lastName: string;
    photo: string;
    phoneNumber: number;
    email: string;
    username: string;
    password: string;
    isActive: boolean;
    accountStatus: AccountStatus;*/
    shops: Shop[];
    blogs: Blog[];
    requests: Request[];
  }
