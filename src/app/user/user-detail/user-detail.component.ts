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
  readonly dialog = inject(MatDialog);

  constructor(private route: ActivatedRoute, private userDatabase: DataBaseService) {}

  ngOnInit():void {
    this.route.paramMap.subscribe(async (paramMap) => {
      const id = paramMap.get("id");
      if (typeof id === "string") {
        this.userId = id;
        try {
          this.userData = await this.userDatabase.getSingleDoc(this.userId) ?? {} as IUser;
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    });
  }

  editUserDetail() {
    const dialog = this.dialog.open(ChangeUserinfoComponent, {
      data: { user: { ...this.userData } } // Kopie des Objekts übergeben
    });
  
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.userData = result; // Daten in der UserDetailComponent aktualisieren
        this.userDatabase.updateUser(this.userId, result); // Änderungen in Firebase speichern
      }
    });
  }

  editUserAddress() {
    const dialog = this.dialog.open(ChangeAddressComponent, {
      data: { user: { ...this.userData } } // Kopie des Objekts übergeben
    });
  
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.userData = result; // Daten in der UserDetailComponent aktualisieren
        this.userDatabase.updateUser(this.userId, result); // Änderungen in Firebase speichern
      }
    });
  }
}
