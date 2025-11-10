import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TextTransformDirective } from '../directives/textTransform.directive';
import { YellowDirective } from '../directives/yellow.directive';
import { MatDialog, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { UserService } from '../user.service';

const titleAboutCompany = (title: string) => {
  return title;
};
const resultAboutCompany = titleAboutCompany('О компании');

const menuItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseMenuItems = menuItems.map((item) => {
  return item.toLowerCase();
});

console.log(upperCaseMenuItems);

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, DatePipe, TextTransformDirective, YellowDirective, MatDialogModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private dialog = inject(MatDialog);
  public readonly userServise = inject(UserService);
  title = 'mentoring-first-project';
  readonly headertItem1 = 'Главная';
  readonly aboutCompany = resultAboutCompany;
  readonly headertItem3 = 'Каталог';
  readonly isShowCatalog = true;
  menuItems = upperCaseMenuItems;
  isUpperCase = true;
  readonly currentDate: Date = new Date();

  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase(),
    );
    this.isUpperCase = !this.isUpperCase;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '400px',
      height:'200px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result === 'admin') {
        this.userServise.loginAsAdmin();
      } else if (result === 'user') {
        this.userServise.loginAsUser();
      } else return undefined;
    });
  }

  public logout() {
    if (confirm('вы точно хотите выйти?')) {
      return this.userServise.logout();
    }
    else return false; 
  }
}
