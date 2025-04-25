import { Routes } from '@angular/router';
import { UsersInfoComponent } from './users-info/users-info.component';
import { ModifyComponent } from './modify/modify.component';


export const routes: Routes = [{ path: 'info', component: UsersInfoComponent },
{ path: 'add', component: ModifyComponent },
{ path: 'edit/:id', component: ModifyComponent },
{ path: '', redirectTo: 'info', pathMatch: 'full' }];
