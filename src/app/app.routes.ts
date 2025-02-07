import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { DrachenstubeComponent } from './drachenstube/drachenstube.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'user/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
    { path: 'food', component: DrachenstubeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
];
