import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SimpleContainerComponent} from './simple-container/simple-container.component';
import { AdvancedContainerComponent } from './advanced-container/advanced-container.component';
import { AdvancedContainerItemDirective } from './advanced-container-item/advanced-container-item.directive';
import { AdvancedContainerHeaderDirective } from './advanced-container-header/advanced-container-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleContainerComponent,
    AdvancedContainerComponent,
    AdvancedContainerItemDirective,
    AdvancedContainerHeaderDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
