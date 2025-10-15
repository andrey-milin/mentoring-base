import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './users-list/user.interface';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private snackBar = inject(MatSnackBar);

  private usersSubject$ = new BehaviorSubject<IUser[]>([]);
  users$ = this.usersSubject$.asObservable();

  setUsers(newUsers: IUser[]) {
    this.usersSubject$.next(newUsers);
  }

  editUser(editedUser: IUser) {
    const apdatedUsers = this.usersSubject$.value.map((user: IUser) =>
      user.id === editedUser.id ? editedUser : user
    );
    this.usersSubject$.next(apdatedUsers);
  }

  createUser(user: IUser) {
    const existingUser: IUser | undefined = this.usersSubject$.value.find(
      (currentElement: IUser) => currentElement.email === user.email
    );

    if (existingUser) {
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      this.snackBar.open('пользователь успешно добавлен', 'ок', {
        duration: 3000,
      });
    }
  }

  deleteUser(id: number) {
    const filterUser = this.usersSubject$.value.filter(
      (user: IUser) => user.id !== id
    );
    this.usersSubject$.next(filterUser);
  }
}
