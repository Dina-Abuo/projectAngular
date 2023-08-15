import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Shadow]'
})
export class ShadowDirective {

  @Input() defaultTransparence: string = '1';
  @Input('Shadow') transparence: string = '1';
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.boxShadow = `0 .5rem ${this.defaultTransparence}rem rgba(0,0,0,.15)`
  }

  @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.style.boxShadow = `0 .5rem ${this.transparence}rem rgba(0,0,0,.15)`

  }

  @HostListener('mouseout') onMouseOut() {
    this.element.nativeElement.style.boxShadow = `0 .5rem ${this.defaultTransparence}rem rgba(0,0,0,.15)`
  }


}
