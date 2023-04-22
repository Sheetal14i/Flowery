import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { NotlogingComponent } from './notloging/notloging.component';
import { MemberComponent } from './member/member.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    UpdateComponent,
    DeleteComponent,
    ViewComponent,
    LoginComponent,
    NotlogingComponent,
    MemberComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
