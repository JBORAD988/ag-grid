import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgGridUseComponent} from "./ag-grid-use/ag-grid-use.component";

const routes: Routes = [
  {path:'grid', component: AgGridUseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
