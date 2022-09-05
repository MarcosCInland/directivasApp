import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(value: boolean) {
    value ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear()
  }

  constructor(private templateRef: TemplateRef<HTMLElement>, private viewContainer: ViewContainerRef) { }

}
