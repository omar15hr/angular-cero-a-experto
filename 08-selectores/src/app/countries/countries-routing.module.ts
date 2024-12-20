import { NgModule } from '@angular/core';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { RouterModule, Routes } from "@angular/router";




 const routers: Routes = [
  {
    path: '',
    children: [
      { path: 'selector', component: SelectorPageComponent },
      { path: '**', redirectTo: 'selector' },
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }