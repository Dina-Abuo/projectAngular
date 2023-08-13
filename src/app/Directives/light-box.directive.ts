import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {
  // @Input() highLightColor: string = "yellow";
  // alias name
  @Input('LightBox') highLightColor: string = "yellow";

  @Input() defaultColor: string = "darkblue";


  constructor(private elemtRef: ElementRef) {
    this.elemtRef.nativeElement.style.border = `2px soild ${this.defaultColor}`
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemtRef.nativeElement.style.border = `2px soild ${this.highLightColor}`
  }

  @HostListener('mouseout') onMouseOut() {
    this.elemtRef.nativeElement.style.border = `2px soild ${this.defaultColor}`
  }


}
