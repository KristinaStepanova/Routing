import { Directive, ElementRef, Renderer2, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appBg]",
})
export class BgDirective {
  @Input() bgColor;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.element.nativeElement.style.background = "red";
  }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.bgColor);
  }
}
