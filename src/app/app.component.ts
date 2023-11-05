import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {
  addMessageToDatabase,
  getMessagesFromDatabase,
  messages, selectedUser,
  updateMessagesFromDatabase,
  usersList
} from "../firebase";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'komunikator';
  userText = '';
  @ViewChild('historyWindowWrapper', { static: false }) historyWindowWrapper!: ElementRef;
  constructor() {
updateMessagesFromDatabase(selectedUser()).then(() => {
  setTimeout(() => {
    this.scrollToTop();
  }, 100);
});
  }


  sendMessage() {
    if (this.userText) {
      addMessageToDatabase(this.userText, selectedUser());
      this.scrollToTop();
      this.userText = '';
    }
  }


  ngAfterViewInit() {
    this.scrollToTop(); // Przewijanie do góry po inicjalizacji widoku
  }

  scrollToTop() {
setTimeout(() => {
  this.historyWindowWrapper.nativeElement.scrollTop = this.historyWindowWrapper.nativeElement.scrollHeight;
  console.log(this.historyWindowWrapper.nativeElement.scrollHeight);
}, 100);
  }
  protected readonly messages = messages;
  showUsersWindow = true;

  showUsers() {
    this.showUsersWindow = !this.showUsersWindow;
    usersList.set([]);
  }

  protected readonly selectedUser = selectedUser;
}
