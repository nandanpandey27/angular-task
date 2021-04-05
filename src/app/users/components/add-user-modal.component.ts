import { User } from "./../models/user.interface";
import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from "@angular/core";
import * as $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";

@Component({
  selector: "<app-add-user-modal></app-add-user-modal>",
  templateUrl: "./add-user-modal.component.html",
  styleUrls: [],
})
export class AddUserModalComponent implements OnChanges {
  @Input()
  showModal: boolean;

  @Output()
  hideModal: EventEmitter<any> = new EventEmitter();

  @Output()
  submitAddUser: EventEmitter<User> = new EventEmitter();

  fullName: string = "";
  email: string = "";

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.showModal.currentValue !== undefined ||
      changes.showModal.currentValue !== null
    ) {
      changes.showModal.currentValue && $("#myModal").modal("show");
      !changes.showModal.currentValue && $("#myModal").modal("hide");
    }
  }

  changeFullName(fullName: string) {
    this.fullName = fullName;
  }

  changeEmail(email: string) {
    this.email = email;
  }

  closeModal() {
    this.hideModal.emit(true);
  }

  attemptAddUser() {
    this.submitAddUser.emit({
      fullName: this.fullName,
      email: this.email,
    });
  }
}
