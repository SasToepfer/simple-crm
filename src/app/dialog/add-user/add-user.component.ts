import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IUser } from '../../interfaces/i-user';
import { FormsModule } from '@angular/forms';
import { DataBaseService } from '../../services/data-base.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
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
  };
 birthDate! : Date;

 constructor(private userDatabase: DataBaseService){}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.userDatabase.addUserToDB(this.user);
    
  }
}
