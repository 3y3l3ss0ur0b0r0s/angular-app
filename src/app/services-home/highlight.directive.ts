import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    //debugger;
    el.nativeElement.style.backgroundColor = 'purple';
    /*
    try {
      console.log(el);
      el.nativeElement.style.backgroundColor = 'purple';
      throw new Error('An error has occurred');
    } catch (e) {
      console.error(e);
    }
    */
  }
}
