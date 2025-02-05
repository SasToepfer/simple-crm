import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataBaseService } from '../../services/data-base.service';
import { IUser } from '../../interfaces/i-user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-address',
  standalone: true,
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatFormFieldModule],
  templateUrl: './change-address.component.html',
  styleUrl: './change-address.component.scss'
})
export class ChangeAddressComponent {
  user : IUser;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<ChangeAddressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: IUser }
  ) {
    this.user = data.user;
  }

  async saveUserAddress() {
    this.dialogRef.close(this.user);
  }


}
