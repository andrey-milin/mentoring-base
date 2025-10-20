import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'LimitTitlePipe',
  standalone: true,
})
export class LimitTitlePipe implements PipeTransform {
  transform(title: string) {
      return title.length <= 20 ? title : title.slice(0,17) + '...';
    }
  }