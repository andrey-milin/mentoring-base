import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ICreateEditUser, IUser } from '../user.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteHypnenPipe } from "../../pipes/delete-hypnen.pipe";

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  imports: [MatDialogModule, MatCardModule, MatButtonModule, MatDividerModule, DeleteHypnenPipe],
})
export class userCardComponent {
  @Input()
  user!: IUser;

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<ICreateEditUser>();

  @Output()
  createUser = new EventEmitter<ICreateEditUser>();

  readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  openDialogEditUser(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });
    dialogRef.afterClosed().subscribe((editResult: IUser) => {
      if (editResult) {
        this.editUser.emit(editResult);
        this.snackBar.open('пользователь успешно отредактирован', 'ок', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('редактривание отменено', 'ок', {
          duration: 3000,
        });
      }
    });
  }

  openDialogDeleteUser(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: { user: this.user },
    });
    dialogRef.afterClosed().subscribe((userId: number) => {
      if (userId) {
        this.deleteUser.emit(userId);
        this.snackBar.open('пользователь успешно удален', 'ок', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('удаление отменено', 'ок', {
          duration: 3000,
        });
      }
    });
  }
}
