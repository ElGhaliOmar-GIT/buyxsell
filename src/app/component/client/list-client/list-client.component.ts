import {Component, OnInit} from '@angular/core';
import {Client} from "../../../models/client";
import {ClientService} from "../../../services/client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getAllClients().subscribe(clients => {
      this.clients = clients;
    });
  }

  deleteUser(clientId: number): void {
    this.clientService.deleteClient(clientId).subscribe(() => {
      this.getClients();
    });
  }

  updateClient(idClient: number) {
    this.router.navigate(['/edit-client', idClient]);
  }
}
