import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-simple-container',
  templateUrl: './simple-container.component.html',
  styleUrls: ['./simple-container.component.scss']
})
export class SimpleContainerComponent implements OnInit {

  // list of item to loop through
  @Input() items: string[];

  // get the template reference of content
  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
