import {User} from "./user";
import {Delivery} from "./delivery";

export class Deliverer extends User {
  address: string;
  isAvailable: boolean;
  deliveries: Delivery[];
}
