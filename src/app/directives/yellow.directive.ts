import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[yellow]',
  standalone: true,
})

export class YellowDirective {
  color = '';

  @HostBinding('style.backgroundColor')
  get backgroundColorGetter(): string {
    return this.color;
  }

  @HostListener('mouseenter')
  enter(): void {
    this.color = '#f0ba4e';
  }

  @HostListener('mouseleave')
  leave(): void {
    this.color = '';
  }
}
