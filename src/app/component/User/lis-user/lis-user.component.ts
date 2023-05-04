import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lis-user',
  templateUrl: './lis-user.component.html',
  styleUrls: ['./lis-user.component.scss']
})
export class LisUserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.getUsers();
    });
  }

  updateUser(idUser: number) {
    this.router.navigate(['/edit-user', idUser]);
  }
}
