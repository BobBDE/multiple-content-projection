import {Directive, TemplateRef} from '@angular/core';
import {AdvancedItemViewContext} from '../classes';


@Directive({
  selector: '[appAdvancedContainerItem]'
})
export class AdvancedContainerItemDirective {

  /**
   * The template ref is optional but it tells the IDE that this is a structural directive
   * and it tells the implicit object type
   */
  constructor(private templateRef: TemplateRef<AdvancedItemViewContext>) {}
}
