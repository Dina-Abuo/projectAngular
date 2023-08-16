import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
  // @Input() highLightColor: string = "yellow";
  // alias name
  @Input('LightBox') highLightColor: string = "yellow";

  @Input() defaultColor: string = "darkblue";


  constructor(private elemtRef: ElementRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.elemtRef.nativeElement.style.borderColor = `${this.defaultColor}`
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemtRef.nativeElement.style.borderColor = `${this.highLightColor}`
  }

  @HostListener('mouseout') onMouseOut() {
    this.elemtRef.nativeElement.style.borderColor = `${this.defaultColor}`
  }


}
