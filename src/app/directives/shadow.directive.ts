import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[shadow]',
  standalone: true,
})
export class ShadowDirective {
  shadow: string = '';

  @HostBinding('style.box-shadow')
  get shadowUserCard(): string {
    return this.shadow;
  }
  @HostListener('mouseenter')
  enter(): void {
    this.shadow = '4px 4px 4px rgba(108, 109, 108, 0.5)';
  }

  @HostListener('mouseleave')
  leave(): void {
    this.shadow = '';
  }
}