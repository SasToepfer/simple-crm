import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { DataBaseService } from '../../services/data-base.service';
import { IUser } from '../../interfaces/i-user';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ChangeAddressComponent } from '../../dialog/change-address/change-address.component';
import { ChangeUserinfoComponent } from '../../dialog/change-userinfo/change-userinfo.component';
import { ChangeNoteComponent } from '../../dialog/change-note/change-note.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [ MatCardModule, MatIconModule, MatMenuModule ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId:string = "";
  userData: IUser = {};
  birthDate!: any;
  readonly dialog = inject(MatDialog);

  constructor(private route: ActivatedRoute, private userDatabase: DataBaseService) {
  }

  ngOnInit():void {
    this.route.paramMap.subscribe(async (paramMap) => {
      const id = paramMap.get("id");
      if (typeof id === "string") {
        this.userId = id;
        try {
          this.userData = await this.userDatabase.getSingleDoc(this.userId) ?? {} as IUser;
          if (this.userData.birthDate) {
            this.birthDate = new Date(this.userData.birthDate);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    });
  }

  get formattedBirthDate(): string {
    return this.birthDate ? this.birthDate.toLocaleDateString('de-DE') : '';
  }
  

  editUserDetail(displayName: string) {
    const dialog = this.dialog.open(this.getComponentToDisplay(displayName), {
      data: { user: { ...this.userData } } // Kopie des Objekts übergeben
    });
  
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.userData = result; // Daten in der UserDetailComponent aktualisieren
        this.userDatabase.updateUser(this.userId, result); // Änderungen in Firebase speichern
      }
    });
  }

  // editUserAddress(component: Component) {
  //   const dialog = this.dialog.open(ChangeAddressComponent, {
  //     data: { user: { ...this.userData } } // Kopie des Objekts übergeben
  //   });
  
  //   dialog.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.userData = result; // Daten in der UserDetailComponent aktualisieren
  //       this.userDatabase.updateUser(this.userId, result); // Änderungen in Firebase speichern
  //     }
  //   });
  // }

  getComponentToDisplay(name: string):any {
    switch (name) {
      case "info": return ChangeUserinfoComponent;
      case "address": return ChangeAddressComponent;
      case "note": return ChangeNoteComponent;
      break;
      return ChangeUserinfoComponent;
    }
  }
}
