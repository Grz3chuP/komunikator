import {AfterViewInit, Component} from '@angular/core';
import {selectedUser, updateMessagesFromDatabase, updateUsers, usersList} from "../../firebase";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit{
ngAfterViewInit() {
updateUsers()
}

  protected readonly usersList = usersList;

  changeUserRoom(name: string) {
    console.log('Change user room to: ' + name);
    selectedUser.set(name);
    updateMessagesFromDatabase(selectedUser());



  }
}
