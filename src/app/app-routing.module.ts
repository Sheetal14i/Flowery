import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { NotlogingComponent } from './notloging/notloging.component';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './login/login.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
  {path:'view',component:ViewComponent},
  {path:'insert',component:InsertComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent},
  {path:'login',component:LoginComponent},
  {path:'member',component:MemberComponent},
  {path:'notloging',component:NotlogingComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
