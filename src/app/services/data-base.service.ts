import { inject, Injectable } from '@angular/core';
import { collection, Firestore, doc, addDoc } from '@angular/fire/firestore';
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  firestore: Firestore = inject(Firestore)

  constructor() { }

  getUsersRef(){
    return collection(this.firestore, 'Users');
  }

  getSingleDocRef(docId:string){
    return doc(collection(this.firestore, 'Users'), docId);
  }

  async addUserToDB(item: IUser) {
    await addDoc(this.getUsersRef(), item).catch(
      (err) => { console.error(err) }
    ).then(
      (docRef) => { console.log("Document written with ID: ", docRef?.id) }
    )
  }
}
