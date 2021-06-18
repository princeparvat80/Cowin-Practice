import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectByDistrictComponent } from './select-by-district/select-by-district.component';


import { PincodeComponent } from './pincode/pincode.component';

const routes: Routes = [
  {component:PincodeComponent, path:'pincode'},
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
