import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";

const newPages = [5, 4, 3, 2, 1]
newPages.forEach(
    (number) => {
        console.log(number);
    }
)

@Component ({
    selector:'app-home',
    standalone: true,
    imports: [NgIf, NgFor],
    templateUrl:'./home.component.html',
    styleUrl:'./home.component.scss',
})

export class HomeComponent{
    isShowBanner = true;
    readonly newPages = newPages;
}
