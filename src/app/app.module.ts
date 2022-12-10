import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomAccordianComponent } from './custom-accordian/custom-accordian/custom-accordian.component';
import { UiAccordianComponent } from './ui-accordian/ui-accordian.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomAccordianComponent,
    UiAccordianComponent
  ],
  imports: [
    BrowserModule,
    NgbAccordionModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
