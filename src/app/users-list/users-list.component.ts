import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { createUserI, User } from './user.interface';
import { UsersApiService } from '../users-api.service';
import { userCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';

@Component({
  selector: 'app-users-list',
  imports: [NgFor, userCardComponent, AsyncPipe, CreateUserFormComponent],
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersServise = inject(UsersService);

  constructor() {
    this.usersApiService
      .getUsers()
      .subscribe((response: User[]) => this.usersServise.setUsers(response));
  }

  deleteUser(id: number) {
    this.usersServise.deleteUser(id);
  }

  public createUser(formData: createUserI) {
    this.usersServise.createUser({
      id: new Date().getTime(),
      name: formData.name,
      address: {
        city: formData.address,
      },
      company: {
        name: formData.companyName,
      },
      email: formData.email,
      phone: formData.phone,
    });
  }
}
