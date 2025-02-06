import { Component, Inject } from '@angular/core';
import { IUser } from '../../interfaces/i-user';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-change-note',
  standalone: true,
  imports: [FormsModule ,MatDialogModule, MatInputModule, MatFormFieldModule],
  templateUrl: './change-note.component.html',
  styleUrl: './change-note.component.scss'
})
export class ChangeNoteComponent {
  user: IUser;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<ChangeNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: IUser }
  ) {
    this.user = data.user;
  }

  async saveUserNote() {
    this.dialogRef.close(this.user);
  }

}
