import { Directive, ElementRef, Renderer2, OnInit,} from '@angular/core';

@Directive({
  selector: '[appChecked2]'
})
export class Checked2Directive implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(){
    const div : HTMLDivElement = this.renderer.createElement('div');
    div.innerHTML='asdfasdfasdfasd';
    console.log('aaaaaaa', div);
    this.renderer.addClass(this.el.nativeElement, 'test');
    this.renderer.appendChild(this.el.nativeElement, div);
    console.log('aaaaaa', this.el.nativeElement);
  }
}