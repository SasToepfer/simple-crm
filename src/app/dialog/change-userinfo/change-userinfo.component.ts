import { Component, Inject } from '@angular/core';
import { IUser } from '../../interfaces/i-user';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-change-userinfo',
  standalone: true,
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatFormFieldModule],
  templateUrl: './change-userinfo.component.html',
  styleUrl: './change-userinfo.component.scss'
})
export class ChangeUserinfoComponent {
  user : IUser;
    loading = false;
  
    constructor(
      public dialogRef: MatDialogRef<ChangeUserinfoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { user: IUser }
    ) {
      this.user = data.user;
    }
  
    async saveUserInfo() {
      this.dialogRef.close(this.user);
    }
}
