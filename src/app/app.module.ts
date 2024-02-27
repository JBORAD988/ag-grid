import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridUseComponent } from './ag-grid-use/ag-grid-use.component';
import {AgGridAngular} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AgGridUseComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AgGridAngular,
       HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
