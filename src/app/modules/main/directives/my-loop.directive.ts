import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appMyLoopOf]",
})
export class MyLoopDirective implements OnChanges {
  @Input() appMyLoopOf: Array<any>;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    for (let item of this.appMyLoopOf) {
      this.container.createEmbeddedView(this.template, {
        $implicit: item,
        index: this.appMyLoopOf.indexOf(item),
      });
    }
  }
}
