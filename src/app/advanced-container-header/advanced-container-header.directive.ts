import {Directive, TemplateRef} from '@angular/core';
import {ViewContext} from '../classes';

@Directive({
  selector: '[appAdvancedContainerHeader]'
})
export class AdvancedContainerHeaderDirective {

  /**
   * The template ref is optional but it tells the IDE that this is a structural directive
   * and it tells the implicit object type
   */
  constructor(private templateRef: TemplateRef<ViewContext<string>>) {
  }
}
