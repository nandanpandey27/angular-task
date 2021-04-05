import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersPageComponent } from "./containers/users-page/users-page.component";
import { UsersService } from "./users.services";
import { AddUserModalComponent } from "./components/add-user-modal.component";

@NgModule({
  providers: [UsersService],
  declarations: [UsersPageComponent, AddUserModalComponent],
  imports: [CommonModule],
  exports: [UsersPageComponent],
})
export class UsersModule {}
