import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'DeleteHypnenPipe',
  standalone: true,
})
export class DeleteHypnenPipe implements PipeTransform {
  transform(phone: string): string {
    const deleteHypnen: string = phone.replace(/-/g, "");
    return deleteHypnen;
  }

}