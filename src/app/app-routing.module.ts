import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectByDistrictComponent } from './select-by-district/select-by-district.component';

const routes: Routes = [
  {
    path: 'district',
    component: SelectByDistrictComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
