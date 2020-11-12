import {Component} from '@angular/core';
import {Category} from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fruits = ['apple', 'kiwi', 'pear', 'strawberry'];
  advancedFruits: Category[] = [
    {name: 'fruit', items: [{id: 0, title: 'apple'}, {id: 1, title: 'kiwi'}, {id: 3, title: 'strawberry'}]},
    {name: 'vegetable', items: [{id: 4, title: 'bean'}, {id: 5, title: 'pumkins'}]}
  ];
}
