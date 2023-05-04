import {User} from "./user";
import {Favorite} from "./favoriate";
import {Cart} from "./cart";
import {Forum} from "./forum";
import {Claim} from "./claim";

export class Client extends User {
  favorite: Favorite;
  cart: Cart;
  forums: Forum[];
  claims: Claim[];
// private offer:Offer; ?????????????????
}
