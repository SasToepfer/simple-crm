import { inject, Injectable } from '@angular/core';
import { collection, Firestore, doc, getDoc, addDoc, collectionData, updateDoc } from '@angular/fire/firestore';
import { IUser } from '../interfaces/i-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  firestore: Firestore = inject(Firestore)

  constructor() { }

  getUsers(): Observable<IUser[]> {
    return collectionData(this.getUsersRef(), { idField: 'id' }) as Observable<IUser[]>;
  }

  getUsersRef(){
    return collection(this.firestore, 'Users');
  }

  getSingleDocRef(docId:string){
    return doc(collection(this.firestore, 'Users'), docId);
  }

  async getSingleDoc(docId: string): Promise<IUser | null> {
    const docRef = doc(this.firestore, 'Users', docId);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return docSnap.data() as IUser; // Dokument existiert → Daten zurückgeben
    } else {
      console.log("No such document!");
      return null;
    }
  }

  async addUserToDB(item: IUser) {
    await addDoc(this.getUsersRef(), item).catch(
      (err) => { console.error(err) }
    ).then(
      (docRef) => { console.log("Document written with ID: ", docRef?.id) }
    )
  }

  async updateUser(userId: string, updatedData: Partial<IUser>): Promise<void> {
    const userDocRef = doc(this.firestore, 'Users', userId);
  
    try {
      await updateDoc(userDocRef, updatedData);
      console.log(`User ${userId} successfully updated.`);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }
}
