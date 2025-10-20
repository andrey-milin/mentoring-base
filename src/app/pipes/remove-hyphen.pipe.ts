import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'RemoveHyphenPipe',
  standalone: true,
})
export class RemoveHyphenPipe implements PipeTransform {
  transform(phone: string): string {
   return phone.replace(/-/g, "");
  }

}