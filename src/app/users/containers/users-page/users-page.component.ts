import { User } from "./../../models/user.interface";
import { Component, OnInit } from "@angular/core";
import { UsersService } from "./../../users.services";

@Component({
  selector: "app-users-page",
  templateUrl: "./users-page.component.html",
  styleUrls: ["./users-page.component.scss"],
})
export class UsersPageComponent implements OnInit {
  users: User[];
  showAddUserModal: boolean = false;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      (response) => {
        this.users = [...response];
      },
      (error) => {
        console.log("Error : ", error);
      }
    );
  }

  openAddUserModal() {
    this.showAddUserModal = true;
  }

  closeAddUserModal() {
    this.showAddUserModal = false;
  }

  onAddUser(user: User): void {
    this.showAddUserModal = false;
    this.usersService.addUser(user).subscribe(
      (response) => {
        this.getUsers();
      },
      (error) => {
        console.log("Error : ", error);
      }
    );
  }

  onDeleteUser(user: User): void {
    this.usersService.deleteUser(user.email).subscribe(
      (response) => {
        this.getUsers();
      },
      (error) => {
        this.getUsers();
        console.log("Error : ", error);
      }
    );
  }
}
