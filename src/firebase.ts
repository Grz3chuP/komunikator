// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { push, ref, set, onValue, get } from "firebase/database";
import {signal} from "@angular/core";
import {Messagestemplate} from "./models/messagestemplate";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN4I-s5Og--uHloqonE8doZ4UOMzIauXI",
  authDomain: "grecom-ab1c1.firebaseapp.com",
  databaseURL: "https://grecom-ab1c1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "grecom-ab1c1",
  storageBucket: "grecom-ab1c1.appspot.com",
  messagingSenderId: "176664469306",
  appId: "1:176664469306:web:27c279ebac159d46b8ba03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export function addMessageToDatabase(message: string) {
  const newMessageRef = push(ref(db, 'messages'));
  set(newMessageRef, {
    message: message,
    date: new Date().toISOString()
  });
}
export const messages = signal<Messagestemplate[]>([]);
export async function getMessagesFromDatabase() {
  try {
    const snapshot = await get(ref(db, 'messages'));
      const data = snapshot.val();
     for (const key in data) {
       console.log(data[key]);
        messages.update((value) => {
          if (!Array.isArray(value)) {
            // Initialize the value as an empty array if it's not already an array
            value = [];
          }
         return [...value, data[key]];
        });
      }

  } catch (error) {
console.error(error);

  }
}



onValue(ref(db, 'messages'), (snapshot) => {
  const data = snapshot.val();
  messages.set([]);
  try {
    for (const key in data) {
      console.log(data[key]);
      messages.update((value) => {
        if (!Array.isArray(value)) {
          // Initialize the value as an empty array if it's not already an array
          value = [];
        }

        return [...value, data[key]];
      });
    }

  } catch (error) {
    console.error(error);

  }
});

