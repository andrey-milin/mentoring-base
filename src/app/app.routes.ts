import { PathLocationStrategy } from '@angular/common';
import { Routes } from '@angular/router';
import { UsersListComponent } from "./users-list/UsersListComponent";
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
       {
              path: 'user',
              component: UsersListComponent
       },
       {
              path: '',
              component: HomeComponent
       }
];
