import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {addMessageToDatabase, getMessagesFromDatabase, messages } from "../firebase";


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

  }


  sendMessage() {
    if (this.userText) {
      addMessageToDatabase(this.userText);
      this.scrollToTop();
      this.userText = '';
    }
  }


  ngAfterViewInit() {
    this.scrollToTop(); // Przewijanie do góry po inicjalizacji widoku
  }

  scrollToTop() {

    this.historyWindowWrapper.nativeElement.scrollTop = this.historyWindowWrapper.nativeElement.scrollHeight;
    console.log(this.historyWindowWrapper.nativeElement.scrollHeight);
  }
  protected readonly messages = messages;
}
