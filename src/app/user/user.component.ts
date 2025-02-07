import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../dialog/add-user/add-user.component';
import {MatCardModule} from '@angular/material/card';
import { DataBaseService } from '../services/data-base.service';
import { IUser } from '../interfaces/i-user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule,MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  readonly dialog = inject(MatDialog);
  users:IUser[] = [];

  constructor(private userDatabase: DataBaseService) {}

  ngOnInit(): void {
    this.userDatabase.users$.subscribe((userList) => {
      this.users = userList;
    });
  }
  
  openDialog() {
    this.dialog.open(AddUserComponent);
  }

  deleteUser(id: string) {
    this.userDatabase.deleteUser(id)
    
  }
}
