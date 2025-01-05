import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  standalone: true,
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() appHighlight = ''
    
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('white');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

/* 
Code for debugging section:
export class HighlightDirective {
  constructor(el: ElementRef) {
    // Debugging with debugger statement
    debugger;
    el.nativeElement.style.backgroundColor = 'purple';
    // Debugging with console
    try {
      console.log(el);
      el.nativeElement.style.backgroundColor = 'purple';
      throw new Error('An error has occurred');
    } catch (e) {
      console.error(e);
    }
  }
}
*/
