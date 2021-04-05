import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./../api.service";
import { User } from "./models/user.interface";

@Injectable()
export class UsersService {
  constructor(private apiService: ApiService) {}

  getUsers(): Observable<User[]> {
    return this.apiService.get("/users");
  }

  addUser(user: User): Observable<any> {
    return this.apiService.post("/users", user);
  }

  deleteUser(email: string): Observable<any> {
    return this.apiService.delete(`/users/${email}`);
  }
}
