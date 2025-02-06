import { inject, Injectable } from '@angular/core';
import { collection, Firestore, doc, getDoc, addDoc,deleteDoc, updateDoc, onSnapshot } from '@angular/fire/firestore';
import { IUser } from '../interfaces/i-user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  firestore: Firestore = inject(Firestore);

  private usersSubject = new BehaviorSubject<IUser[]>([]);
  users$ = this.usersSubject.asObservable(); // Observable für Komponenten

  constructor() {
    this.subUsersList();

  }
  subUsersList() {
    return onSnapshot(this.getUsersRef(), (snapshot) => {
      const updatedUsers: IUser[] = [];

      snapshot.forEach((doc) => {
        updatedUsers.push(this.setUserData(doc.data(), doc.id));
      });

      this.usersSubject.next(updatedUsers); // Nutzerliste updaten
    });
  }
  // subUsersList() {
  //   return onSnapshot(this.getUsersRef(), (snapshot) => {
  //     // console.log("Firestore liefert:", snapshot.docs.length, "Dokumente"); // Debug-Ausgabe
  
  //     const updatedUsers: IUser[] = [];
  
  //     snapshot.forEach((doc) => {
  //       updatedUsers.push(this.setUserData(doc.data(), doc.id));
  //     });
  
  //     this.userList = updatedUsers; // Liste ersetzen
  //     // console.log("Aktualisierte Nutzerliste:", this.userList);
  //   });
  // }
  // subUsersList() {
  //   return onSnapshot(this.getUsersRef(), (list) => {
  //     this.userList = [];
  //     list.forEach(element => {
  //       this.userList.push(this.setUserData(element.data(), element.id));

  //     })
  //   });
  // }

  setUserData(obj: any, id: string): IUser {
    return {
      firstName: obj.firstName || "",
      lastName: obj.lastName || "",
      birthDate: obj.birthDate || "",
      street: obj.street || "",
      zipCode: obj.zipCode || "",
      city: obj.city || "",
      eMail: obj.eMail || "",
      id: id || "",
      note: obj.note || "",
    }
  }

  getUsersRef() {
    return collection(this.firestore, 'Users');
  }

  getSingleDocRef(docId: string) {
    return doc(collection(this.firestore, 'Users'), docId);
  }

  async getSingleDoc(docId: string): Promise<IUser | null> {
    const docRef = doc(this.firestore, 'Users', docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as IUser;
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

  async deleteUser(userId:string) {
    await deleteDoc(this.getSingleDocRef(userId)).catch(
      (err) => (console.log(err))
    );
  }

  ngonDestroy() {
    // this.unsubUsers();
  }
}
