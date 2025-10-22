import { Directive, ElementRef, HostBinding, HostListener, inject } from "@angular/core";

@Directive({
  selector: '[textTransform]',
  standalone: true,
})
export class TextTransformDirective {
  color: string = '';
  textTransform: string = 'lowercase';

  @HostBinding('style.backgroundColor')
  get backgroundColor(): string {
    return this.color;
  }

  @HostBinding('style.textTransform')
  get textTransformGetter(): string {
    return this.textTransform;
  }

  @HostListener('mouseenter')
  enter(): void {
    this.color = '#f0ba4e';
    this.textTransform = 'uppercase';
  }

  @HostListener('mouseleave')
  leave(): void {
    this.color = '';
    this.textTransform = 'lowercase'
  }
 
}