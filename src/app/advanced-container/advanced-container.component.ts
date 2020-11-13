import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {AdvancedItem, AdvancedItemViewContext, Category, ViewContext} from '../classes';
import {AdvancedContainerItemDirective} from '../advanced-container-item/advanced-container-item.directive';
import {AdvancedContainerHeaderDirective} from '../advanced-container-header/advanced-container-header.directive';

@Component({
  selector: 'app-advanced-container',
  templateUrl: './advanced-container.component.html',
  styleUrls: ['./advanced-container.component.scss']
})
export class AdvancedContainerComponent implements OnInit {

  @Input() categories: Category[];

  // get the header template
  @ContentChild(AdvancedContainerHeaderDirective, {read: TemplateRef}) headerTemplate: TemplateRef<ViewContext<string>>;
  // get the item template
  @ContentChild(AdvancedContainerItemDirective, {read: TemplateRef}) itemTemplate: TemplateRef<AdvancedItemViewContext>;

  constructor() {
  }

  ngOnInit(): void {
  }

  // returns the context for a header
  getHeaderContext(category: Category): ViewContext<string> {
    return {$implicit: category.name};
  }

  // returns the context for an item
  getItemContext(item: AdvancedItem, first: boolean, last: boolean): AdvancedItemViewContext {
    return {$implicit: item, first, last};
  }
}
