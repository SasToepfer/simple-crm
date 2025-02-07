import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IUser } from '../../interfaces/i-user';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-change-address',
  standalone: true,
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './change-address.component.html',
  styleUrl: './change-address.component.scss'
})
export class ChangeAddressComponent {
  user : IUser;
  loading = false;
  birthDate! : Date;

  constructor(
    public dialogRef: MatDialogRef<ChangeAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: IUser }
  ) {
    this.user = data.user;
    this.birthDate = this.user.birthDate ? new Date(this.user.birthDate) : new Date();
  }

  async saveUserAddress() {
    this.user.birthDate = this.birthDate ? this.birthDate.getTime() : 0;
    this.dialogRef.close(this.user);
  }
}
