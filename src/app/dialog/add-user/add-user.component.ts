import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IUser } from '../../interfaces/i-user';
import { FormsModule } from '@angular/forms';
import { DataBaseService } from '../../services/data-base.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatProgressBarModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  user : IUser = {
    firstName : "",
    lastName : "",
    birthDate : 0,
    street : "",
    zipCode : 0,
    city : "",
    eMail : "",
    id : "",
  };
 birthDate! : Date;
 loading = false;

 constructor(public dialogRef: MatDialogRef<AddUserComponent> ,private userDatabase: DataBaseService){}

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    await this.userDatabase.addUserToDB(this.user).then((result:any) => {
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
