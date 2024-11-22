import { Directive, ElementRef, HostListener, inject, Input, Renderer2   } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() highlightColor = 'yellow';

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  private defaultColor:string;

  constructor() { 
    this.defaultColor = this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(this.defaultColor);
  }


  private highlight(color:string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
