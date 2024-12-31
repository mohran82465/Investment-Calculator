import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UesrInputComponent } from "./uesr-input/uesr-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UesrInputComponent, InvestmentResultsComponent],
    imports:[FormsModule,BrowserModule],
    bootstrap:[AppComponent],
})
export class AppModule { }