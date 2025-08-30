import { Component, EventEmitter, inject, Input, Output, } from "@angular/core";
import { User } from "../user.interface";
import { MatDialog } from "@angular/material/dialog";
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class userCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter<number>();

  readonly dialog = inject(MatDialog);

   openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {test: '123'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('МОДАЛКА ЗАКРЫЛАСЬ');
    });
}

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }
}
