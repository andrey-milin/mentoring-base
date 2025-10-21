import { Directive, ElementRef, inject } from "@angular/core";

@Directive({
  selector: '[red]',
  standalone: true,
})
export class RedDirective {
  private readonly elementRef = inject(ElementRef);

  constructor() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}