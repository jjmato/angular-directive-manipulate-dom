import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BoxComponent } from "./box/box.component";
import { CheckComponent } from "./check/check.component";
import { SelectedDirective } from "./selected.directive";
import { Checked2Directive } from './checked2.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BoxComponent,
    CheckComponent,
    SelectedDirective,
    Checked2Directive
  ],
  bootstrap: [AppComponent],
  entryComponents: [CheckComponent]
})
export class AppModule {}
