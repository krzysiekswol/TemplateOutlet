import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateRefComponent } from './learning/components/template-ref/template-ref.component';
import { MyChipsComponent } from './learning/components/my-chips/my-chips.component';
import { ChipComponent } from './learning/components/chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    MyChipsComponent,
    ChipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
