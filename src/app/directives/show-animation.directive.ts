import { Directive, ElementRef, Input, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowAnimation]',
  standalone: true
})
export class ShowAnimationDirective {

  @Input() appShowAnimation = true;

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  constructor() { 
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.5s ease-in-out');
  }

  ngOnChanges() {
    this.appShowAnimation ? this.showAnimation() : this.hideAnimation();
  }

  private showAnimation() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
  }

  private hideAnimation() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');

    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }, 1000);
  }
}
