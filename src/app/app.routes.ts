import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
        path: 'login', 
        component: LoginComponent,
        canActivate: [AuthGuard] 
    },
    {path: "", component: DashboardComponent},
    {path: "user", component: UserComponent},
    {path: "user/:id", component: UserDetailComponent},
];
