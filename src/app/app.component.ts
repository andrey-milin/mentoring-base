import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';


const titleAboutCompany = (title: string) => {
  return title
}
const resultAboutCompany = titleAboutCompany('О компании');

const newPages = [5, 4, 3, 2, 1]
newPages.forEach(
  (number) => {
    console.log(number);
  }
)
const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда',]

const upperCaseMenuItems = menuItems.map(
  (item) => {
    return item.toUpperCase();
  }
)

console.log(upperCaseMenuItems)



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  readonly headertItem1 = 'Главная';
  readonly aboutCompany = resultAboutCompany;
  readonly headertItem3 = 'Каталог';
  readonly isShowCatalog = true;
  readonly newPages = newPages;
  menuItems = upperCaseMenuItems;
  isShowBanner = true;
  isUpperCase = true;



  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase;
  }




}

