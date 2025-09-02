import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.interface';

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

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }
}
