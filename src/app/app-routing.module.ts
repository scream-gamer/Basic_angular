import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import{HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'empdetail',component:EmpdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FlexLayoutModule,HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
