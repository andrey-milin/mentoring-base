import { AsyncPipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ICreateEditUser, IUser } from './user.interface';
import { UsersApiService } from '../users-api.service';
import { userCardComponent } from './user-card/user-card.component';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserFormComponent } from './create-user-dialog/create-user-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-users-list',
  imports: [NgFor, userCardComponent, AsyncPipe, MatButtonModule, MatIcon],
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  readonly usersApiService = inject(UsersApiService);
  readonly usersServise = inject(UsersService);
  readonly dialog = inject(MatDialog);

  constructor() {
    this.usersApiService
      .getUsers()
      .subscribe((response: IUser[]) => this.usersServise.setUsers(response));
  }

  public deleteUser(id: number) {
    this.usersServise.deleteUser(id);
  }

  public editUser(user: IUser) {
    this.usersServise.editUser(user);
  }

  public createUser(formData: ICreateEditUser) {
    const newUser: IUser = {
      id: new Date().getTime(),
      name: formData.name,
      address: {
        city: formData.address.city,
      },
      company: {
        name: formData.company.name,
      },
      email: formData.email,
      website: formData.website,
      phone: formData.phone,
    };

    this.usersServise.createUser(newUser);
  }

  openDialogCreateUser(): void {
    const dialogRef = this.dialog.open(CreateUserFormComponent);
    dialogRef.afterClosed().subscribe((createResult: ICreateEditUser) => {
      if (createResult) {
        this.createUser(createResult);
      }
    });
  }
}
