import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

const titleAboutCompany = (title: string) => {
    return title
}
const resultAboutCompany = titleAboutCompany('О компании');

const menuItems = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда',]

const upperCaseMenuItems = menuItems.map(
    (item) => {
        return item.toUpperCase();
    }
)

console.log(upperCaseMenuItems)

@Component({
    selector: 'app-header-component',
    standalone: true,
    imports: [RouterLink, RouterOutlet, NgIf, NgFor],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

export class HeaderComponent {
    title = 'mentoring-first-project';
    readonly headertItem1 = 'Главная';
    readonly aboutCompany = resultAboutCompany;
    readonly headertItem3 = 'Каталог';
    readonly isShowCatalog = true;
    menuItems = upperCaseMenuItems;
    isUpperCase = true;

    changeMenuText() {
        this.menuItems = upperCaseMenuItems.map(
            item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
        )
        this.isUpperCase = !this.isUpperCase;
    }
}
