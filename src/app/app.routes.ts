import { PathLocationStrategy } from '@angular/common';
import { Routes } from '@angular/router';
import { UsersListComponent } from "./users-list/users-list.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
       {
              path: 'user',
              component: UsersListComponent
       },
       {
              path: '',
              component: HomeComponent
       },
       {
              path: 'header',
              component: HeaderComponent
       }
];
