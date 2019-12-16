import {
  Component,
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  ComponentFactoryResolver
} from "@angular/core";

import { CheckComponent } from "./check/check.component";

// @Component({
//   template: `
//     They see me spinnin' they hatin'
//   `
// })
// export class CheckComponent {}

@Directive({
  selector: "[appSelected]"
})
export class SelectedDirective implements OnInit {
  constructor(
    private tpl: TemplateRef<void>,
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    console.log("asdfasdf", this.tpl.elementRef.nativeElement);
    this.container.createEmbeddedView(this.tpl);
    console.log(this.container.element.nativeElement);
    const cmpFactory = this.resolver.resolveComponentFactory(CheckComponent);
    this.container.createComponent(cmpFactory);
  }
}
