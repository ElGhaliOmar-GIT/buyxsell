import {Component, OnInit} from '@angular/core';
import {Deliverer} from "../../../models/deliverer";
import {DelivererService} from "../../../services/deliverer.service";

@Component({
  selector: 'app-list-deliverer',
  templateUrl: './list-deliverer.component.html',
  styleUrls: ['./list-deliverer.component.scss']
})
export class ListDelivererComponent implements OnInit {

  deliverers: Deliverer[] = [];

  constructor(private delivererService: DelivererService) { }

  ngOnInit(): void {
    this.getDeliverers();
  }

  getDeliverers(): void {
    this.delivererService.getAllDeliverers().subscribe(deliverers => {
      this.deliverers = deliverers;
    });
  }

  deleteDeliverer(delivererId: number): void {
    this.delivererService.deleteDeliverer(delivererId).subscribe(() => {
      this.getDeliverers();
    });
  }
}
